import { DimensionState } from "./dimension";

export function divineDimensionCommonMultiplier() {
  let mult = DC.D1;
  mult = mult.timesEffectsOf(DivinityUpgrade.divineL1U3, DivinityUpgrade.divineL1U6).times(
    DivinityMilestone.hadronEmpowerment.isReached ? 77 : 1);
  return mult;
}

class DivineDimensionState extends DimensionState {
  constructor(tier) {
    super(() => player.dimensions.divine, tier);
    const COST_MULTS = [null, 1e3, 1e6, 1e10, 1e15, 1e21, 1e28, 1e36, 1e45];
    this._costMultiplier = COST_MULTS[tier];
    const POWER_MULTS = [null, 7, 7, 7, 7, 7, 7, 7, 7];
    this._powerMultiplier = POWER_MULTS[tier];
    const BASE_COSTS = [null, 10, 1e3, 1e6, 1e10, 1e15, 1e21, 1e28, 1e36];
    this._baseCost = new Decimal(BASE_COSTS[tier]);
  }

  get cost() {
    return this.costScale.calculateCostDecimal(Decimal.floor(this.baseAmount));
  }

  get baseAmount() {
    return this.data.baseAmount;
  }

  set baseAmount(value) {
    this.data.baseAmount = value;
  }

  get isAvailableForPurchase() {
    return DivineDimensions.canBuy() && this.isAffordable;
  }

  get isAffordable() {
    return Currency.divineMatter.gte(this.cost);
  }

  get rateOfChange() {
    const tier = this.tier;
    if (tier === 8) {
      return DC.D0;
    }
    const toGain = DivineDimension(tier + 1).productionPerSecond;
    const current = Decimal.max(this.amount, 1);
    return toGain.times(10).dividedBy(current);
  }

  get productionPerSecond() {
    let production = this.amount;
    return production.times(this.multiplier);
  }

  get multiplier() {
    const tier = this.tier;
    let mult = GameCache.divineDimensionCommonMultiplier.value;
    mult = mult.times(Decimal.pow(this.powerMultiplier, Decimal.floor(this.baseAmount)));
    return mult;
  }

  get isProducing() {
    const tier = this.tier;
    return this.amount.gt(0);
  }

  get baseCost() {
    return this._baseCost;
  }

  get costMultiplier() {
    const costMult = this._costMultiplier;
    return costMult;
  }

  get powerMultiplier() {
    return new Decimal(this._powerMultiplier);
  }

  get purchases() {
    return this.data.baseAmount;
  }

  get costScale() {
    return new ExponentialCostScaling({
      baseCost: this.baseCost,
      baseIncrease: this.costMultiplier,
      costScale: 10,
      scalingCostThreshold: Number.MAX_VALUE
    });
  }

  resetAmount() {
    this.amount = new Decimal(this.baseAmount);
  }

  fullReset() {
    this.amount = DC.D0;
    this.bought = DC.D0;
    this.baseAmount = DC.D0;
  }

  // Only ever called from manual actions
  buySingle() {
    const dimension = DivineDimension(this.tier);
    if (!this.isAvailableForPurchase) return false;

    Currency.divineMatter.purchase(this.cost);
    this.amount = this.amount.plus(1);
    this.baseAmount = this.baseAmount.plus(1);

    return true;
  }

  buyMax() {
    const dimension = DivineDimension(this.tier);
    if (!this.isAvailableForPurchase) return false;

    const maxBought = dimension.costScale.getMaxBoughtDecimal(
      Decimal.floor(dimension.baseAmount), Currency.divineMatter.value, 1
    );
    if (maxBought === null) {
      return;
    }
    let buying = maxBought.quantity;
    const bulkLeft = Infinity;
    if (buying.gt(bulkLeft)) buying = new Decimal(bulkLeft);
    if (Currency.divineMatter.gte(Decimal.pow10(maxBought.logPrice))) {
      dimension.amount = dimension.amount.plus(buying).round();
      dimension.baseAmount = dimension.baseAmount.plus(buying).round();
      if (dimension.cost.lt(DC.E9E15)) Currency.divineMatter.purchase(Decimal.pow10(maxBought.logPrice));
    }
  }
}

/**
 * @function
 * @param {number} tier
 * @return {DivineDimensionState}
 */
export const DivineDimension = DivineDimensionState.createAccessor();

export const DivineDimensions = {
  /**
   * @type {DivineDimensionState[]}
   */
  all: DivineDimension.index.compact(),

  get HARDCAP() {
    return DC.NUMMAX.times(Decimal.pow(1.1, 0));
  },

  get energyPerSecond() {
    const divineEnergyMults = DC.D1.timesEffectOf(DivinityUpgrade.divineL1U7).times(
      DivinityMilestone.hadronEmpowerment.isReached ? 77 : 1);
    return Decimal.pow(100, Decimal.log10(DivineDimension(1).productionPerSecond).div(100).sub(1)).times(divineEnergyMults);
  },

  resetAmount() {
    Currency.divineMatter.reset();
    for (const dimension of DivineDimensions.all) {
      dimension.resetAmount();
    }
  },

  fullReset() {
    for (const dimension of DivineDimensions.all) {
      dimension.fullReset();
    }
  },

  canBuy() {
    return true;
  },

  canAutobuy() {
    return this.canBuy();
  },

  tick(realDiff) {
    if (!player.celestials.pelle.divinity.isProducingEnergy || DivinityUpgrade.divineL1U9.isBought) {
      for (let tier = 8; tier > 1; tier--) {
        DivineDimension(tier).produceDimensions(DivineDimension(tier - 1), realDiff / 10);
      }
      DivineDimension(1).produceCurrency(Currency.divineMatter, realDiff);
    }
    if (player.celestials.pelle.divinity.isProducingEnergy || DivinityUpgrade.divineL1U8.isBought) {
      player.celestials.pelle.divinity.divineEnergy = player.celestials.pelle.divinity.divineEnergy.add(
        this.energyPerSecond.times(realDiff).div(1000).div(player.celestials.pelle.divinity.isProducingEnergy ? 1 : 10));
    }
    player.celestials.pelle.divinity.divineMatter = player.celestials.pelle.divinity.divineMatter.min(this.HARDCAP);
  },

  // Called from "Max All" UI buttons and nowhere else
  buyMax() {
    // Try to buy single from the highest affordable new dimensions
    this.all.slice().reverse().forEach(dimension => {
      if (dimension.purchases.eq(0)) dimension.buySingle();
    });

    // Try to buy max from the lowest dimension (since lower dimensions have bigger multiplier per purchase)
    this.all.forEach(dimension => dimension.buyMax(false));
  },

  get conversionFormula1() {
    let logD = Decimal.log10(Decimal.log10(Currency.divineMatter.value.max(10)));
    return Decimal.pow(Decimal.pow(logD.add(1), 1.5), Decimal.pow(logD.add(1), 1.5));
  },

  get conversionFormula2() {
    let logD = Decimal.log10(Decimal.log10(Currency.divineMatter.value.max(10)));
    return logD.div(10).add(1).toNumber();
  },

  get conversionFormula3() {
    let logD = Decimal.log10(Decimal.log10(Currency.divineMatter.value.max(10)));
    return DC.D1.sub(Decimal.pow(0.8, logD)).toNumber();
  }
};

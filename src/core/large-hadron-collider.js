import { GameMechanicState } from "./game-mechanics";

class AcceleratorMilestoneState extends GameMechanicState {

  lastChecked = false;

  get requirement() {
    return this.config.requirement;
  }

  get resource() {
    return this.config.resource;
  }

  checkMilestoneState() {
    if (this.lastChecked !== this.isUnlocked) {
      this.config.onStateChange?.();
    }
    this.lastChecked = this.isUnlocked;
  }

  get isUnlocked() {
    return this.requirement <= Accelerators[this.resource].percentage;
  }

  get isEffectActive() {
    return this.isUnlocked;
  }

  get description() {
    const d = this.config.description;
    return typeof d === "function" ? d() : d;
  }

  get formattedEffect() {
    if (this.canBeApplied) return this.config.formatEffect(this.effectValue);
    return false;
  }
}

class AcceleratorState extends GameMechanicState {
  constructor(config) {
    super(config);
    this._milestones = this.config.milestones.map(x => new AcceleratorMilestoneState(x));
  }

  get fillCurrency() {
    return this.config.currency();
  }

  get canBeApplied() {
    return this.isUnlocked;
  }

  get isUnlocked() {
    return this.fillCurrency.value.gte(this.config.unlockReq()) || this.percentage > 0;
  }

  get name() {
    return this.config.name;
  }

  get accelerator() {
    return player.endgame.largeHadronCollider.accelerators[this.config.key];
  }

  get totalFill() {
    return this.config.percentageToFill(this.accelerator.fill);
  }

  get amountFilled() {
    return this.accelerator.fill;
  }

  set amountFilled(value) {
    this.accelerator.fill = value;
  }

  get isActive() {
    return this.accelerator.active;
  }

  get realPercentage() {
    return this.amountFilled;
  }

  get percentage() {
    return this.realPercentage;
  }

  get milestones() {
    return this._milestones;
  }

  get description() {
    return this.config.description;
  }

  get drainResource() {
    return this.config.drainResource;
  }

  get totalEffects() {
    const base1 = this.config.baseEffect1(this.effectValue1);
    const base2 = this.config.baseEffect2(this.effectValue2);
    const base3 = this.config.baseEffect3(this.effectValue3);
    return [base1, base2, base3];
  }

  get isCustomEffect() { return true; }

  get effectValue1() {
    return this.config.effects.alpha(this.percentage * 100);
  }

  get effectValue2() {
    return this.config.effects.beta(this.percentage * 100);
  }

  get effectValue3() {
    return this.config.effects.gamma(this.percentage * 100);
  }

  get maxValue() {
    return this.config.percentageToFill(1);
  }

  get isMaxed() {
    return this.percentage >= 1;
  }

  toggle() {
    const active = Accelerators.all.filter(a => a.isActive).length;
    if (!this.isActive && active === 1) GameUI.notify.error(`You can only have 1 Accelerator active at the same time!`);
    else this.accelerator.active = !this.accelerator.active;
  }

  checkMilestoneStates() {
    this.milestones.forEach(x => x.checkMilestoneState());
  }

  fill(diff) {
    // The UI removes the fill button after 100%, so we need to turn it off here
    if (this.isActive && this.isMaxed) {
      this.accelerator.active = false;
      return;
    }
    if (!this.isActive || this.isMaxed) return;
    if (Pelle.isDoomed && this.name === "Potency Accelerator") return;

    // Don't drain resources if you only have 1 of it.
    if (this.fillCurrency.value.lte(1)) return;
    const maxFill = LHC.acceleratorSpeed * diff / 1000;
    const pendFill = this.amountFilled + maxFill;
    const maxValue = this.config.percentage(this.fillCurrency.value);
    this.amountFilled = Math.min(pendFill, Math.max(this.amountFilled, maxValue));
    this.checkMilestoneStates();
  }
}

export const Accelerators = mapGameDataToObject(
  GameDatabase.endgame.accelerators,
  config => new AcceleratorState(config)
);

Accelerators.totalMilestones = () => Accelerators.all.flatMap(x => x.milestones).countWhere(x => x.canBeApplied);

export const LHC = {
  get hadronSpeed() {
    let firstThreeAcceleratorPercentagesSum = 0;
    let sumArray = [];
    for (let sum = 0; sum < Accelerators.all.length; sum++) {
      sumArray.push(Accelerators.all[sum].percentage * 100);
    }
    firstThreeAcceleratorPercentagesSum = sumArray.reduce(Number.sumReducer, 0);
    return 299792458 / (27000000 / Math.pow(firstThreeAcceleratorPercentagesSum, 3));
  },

  get acceleratorSpeed() {
    return 0.00001 * player.endgame.largeHadronCollider.powerCores;
  },

  get nextAccelerator() {
    return Accelerators.all.first(a => !a.isUnlocked);
  },

  get breakingPoint() {
    return Decimal.pow10(Decimal.pow10(225 + Accelerators.potency._milestones[1].effectOrDefault(0) +
      Accelerators.emptiness._milestones[2].effectOrDefault(0) + Accelerators.cosmic._milestones[2].effectOrDefault(0)));
  },

  gameLoop(diff) {
    Accelerators.all.forEach(a => a.fill(diff));
  }
};

class PowerCoreState extends GameMechanicState {
  constructor() {
    super({});
    this.cachedCost = new Lazy(() => this.costAfterCount(player.endgame.largeHadronCollider.powerCores));
    this.cachedEffectValue = new Lazy(() => player.endgame.largeHadronCollider.powerCores);
  }

  get isAffordable() {
    return player.celestials.laitela.hadrons.total >= this.cost;
  }

  get cost() {
    return this.cachedCost.value;
  }

  get boughtAmount() {
    return player.endgame.largeHadronCollider.powerCores;
  }

  set boughtAmount(value) {
    const diff = Math.clampMin(value - player.endgame.largeHadronCollider.powerCores, 0);
    player.endgame.largeHadronCollider.powerCores = value;
    this.cachedCost.invalidate();
    this.cachedEffectValue.invalidate();
  }

  get isCustomEffect() {
    return true;
  }

  get effectValue() {
    return this.cachedEffectValue.value;
  }

  purchase() {
    if (!this.isAffordable) return false;
    this.boughtAmount = this.boughtAmount + 1;
    return true;
  }

  costInv() {
    let cur = player.celestials.laitela.hadrons.total;
    return Math.floor(cur / 5 - 14);
  }

  buyMax(auto) {
    if (!this.isAffordable) return false;
    let bulk = Math.floor(this.costInv());
    if (bulk < 1) return false;
    const price = this.costAfterCount(bulk - 1);
    bulk = Math.max(bulk - this.boughtAmount, 0);
    if (bulk === 0) return false;
    this.boughtAmount = this.boughtAmount + bulk;
    let i = 0;
    while (player.celestials.laitela.hadrons.total > this.costAfterCount(this.boughtAmount) &&
    i < 50 && this.boughtAmount < 9e15) {
      this.boughtAmount = this.boughtAmount + 1;
      i += 1;
    }
    return true;
  }

  reset() {
    this.boughtAmount = 1;
  }

  costAfterCount(count) {
    return 5 * count + 75;
  }
}

LHC.powerCores = new PowerCoreState();

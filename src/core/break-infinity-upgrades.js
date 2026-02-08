import { RebuyableMechanicState, SetPurchasableMechanicState } from "./game-mechanics";
import { SpeedrunMilestones } from "./speedrun";

function AllBIULayerCheck() {
  if (!(Alpha.isRunning && Alpha.currentStage === 7)) return;
  for (let i = 0; i < BreakInfinityUpgrade.all.length; i++) {
    const a = BreakInfinityUpgrade.all[i];
    if (i < 9 && !a.isBought) return;
    if (i >= 9 && !a.isCapped) return;
  }
  Alpha.advanceLayer();
}
export class BreakInfinityUpgradeState extends SetPurchasableMechanicState {
  get currency() {
    return Currency.infinityPoints;
  }

  get set() {
    return player.infinityUpgrades;
  }

  get cost() {
    return this.config.cost();
  }

  get isAvailableForPurchase() {
    if (this.id === "postGalaxy" && Alpha.isRunning && Alpha.currentStage < 6) return false;
    if (this.id === "autoBuyerUpgrade" && Alpha.isRunning && Alpha.currentStage < 7) return false;
    return true;
  }

  onPurchased() {
    if (this.id === "postGalaxy") {
      SpeedrunMilestones(7).tryComplete();
      PelleStrikes.powerGalaxies.trigger();
      if (Alpha.isRunning && Alpha.currentStage === 6) Alpha.advanceLayer();
    }
    if (BreakInfinityUpgrade.all.filter(u => u._isAllBought).length === BreakInfinityUpgrade.all.length &&
      player.infinityRebuyables === [18, 17, 10] && Alpha.isRunning && Alpha.currentStage === 7) {
      Alpha.advanceLayer();
    }
  }

  get _isAllBought() {
    return this.isBought;
  }
}

class RebuyableBreakInfinityUpgradeState extends RebuyableMechanicState {
  get currency() {
    return Currency.infinityPoints;
  }

  get boughtAmount() {
    return player.infinityRebuyables[this.id];
  }

  set boughtAmount(value) {
    player.infinityRebuyables[this.id] = value;
  }

  get isCapped() {
    return this.boughtAmount === this.config.maxUpgrades();
  }

  onPurchased() {
    this.config.onPurchased?.();
    if (BreakInfinityUpgrade.all.filter(u => u._isAllBought).length === BreakInfinityUpgrade.all.length &&
      player.infinityRebuyables === [18, 17, 10] && Alpha.isRunning && Alpha.currentStage === 7) {
      Alpha.advanceLayer();
    }
  }
  
  get _isAllBought() {
    return this.isCapped;
  }
}

export const BreakInfinityUpgrade = mapGameDataToObject(
  GameDatabase.infinity.breakUpgrades,
  config => (config.rebuyable
    ? new RebuyableBreakInfinityUpgradeState(config)
    : new BreakInfinityUpgradeState(config))
);

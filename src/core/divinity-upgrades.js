import { SetPurchasableMechanicState } from "./game-mechanics";

export class DivinityUpgradeState extends SetPurchasableMechanicState {
  get name() {
    return this.config.name;
  }

  get layer() {
    return this.config.layer;
  }
  
  get currency() {
    //if (this.layer === 4 || this.layer === 5) return Currency.nebulae;
    if (this.layer === 2 || this.layer === 3) return Currency.divineStars;
    if (this.layer === 1) return Currency.divineMatter;
  }

  get set() {
    return player.celestials.pelle.divinityUpgrades;
  }

  onPurchased() {
    this.config.onPurchased?.();
  }
}

export const DivinityUpgrade = mapGameDataToObject(
  GameDatabase.celestials.divinityUpgrades,
  config => (config.rebuyable
    ? new DivinityUpgradeState(config)
    : new DivinityUpgradeState(config))
);

export const DivinityUpgrades = {
  all: DivinityUpgrade.all,
  get isUnlocked() {
    return DivinityMilestone.divineDimensions.isReached;
  }
};

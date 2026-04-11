import { BitUpgradeState } from "../game-mechanics";
import { GameDatabase } from "../secret-formula/game-database";

import { Quotes } from "./quotes";

export const EFFARIG_STAGES = {
  INFINITY: 1,
  ETERNITY: 2,
  REALITY: 3,
  ENDGAME: 4,
  COMPLETED: 5
};

export const Effarig = {
  displayName: "Effarig",
  possessiveName: "Effarig's",
  initializeRun() {
    if (this.currentStage === EFFARIG_STAGES.ENDGAME) {
      player.disablePostReality = true;
      disChargeAllPerkUpgrades();
      disChargeAll();
      AutomatorBackend.stop();
      Endgame.resetNoReward();
    }
    clearCelestialRuns();
    player.celestials.effarig.run = true;
    recalculateAllGlyphs();
    Tab.reality.glyphs.show(false);
    if (this.currentStage === EFFARIG_STAGES.ENDGAME) {
      for (x = 0; x < Glyphs.activeSlotCount; x++) {
        for (const type of BASIC_GLYPH_TYPES) Glyphs.addToInventory(GlyphGenerator.omniGlyph(type));
      }
    }
  },
  get isRunning() {
    return player.celestials.effarig.run;
  },
  get currentStage() {
    if (!EffarigUnlock.infinity.isUnlocked) {
      return EFFARIG_STAGES.INFINITY;
    }
    if (!EffarigUnlock.eternity.isUnlocked) {
      return EFFARIG_STAGES.ETERNITY;
    }
    if (!EffarigUnlock.reality.isUnlocked) {
      return EFFARIG_STAGES.REALITY;
    }
    if (!EffarigUnlock.endgame.isUnlocked && EffarigUnlock.extendRun.isUnlocked) {
      return EFFARIG_STAGES.ENDGAME;
    }
    return EFFARIG_STAGES.COMPLETED;
  },
  get currentStageName() {
    switch (this.currentStage) {
      case EFFARIG_STAGES.INFINITY:
        return "Infinity";
      case EFFARIG_STAGES.ETERNITY:
        return "Eternity";
      case EFFARIG_STAGES.REALITY:
        return "Reality";
      case EFFARIG_STAGES.ENDGAME:
        return "Endgame";
      default:
        return EffarigUnlock.extendRun.isUnlocked ? "Endgame" : "Reality";
    }
  },
  get eternityCap() {
    return this.isRunning && this.currentStage === EFFARIG_STAGES.ETERNITY ? DC.E50 : undefined;
  },
  get glyphLevelCap() {
    switch (this.currentStage) {
      case EFFARIG_STAGES.INFINITY:
        return 100;
      case EFFARIG_STAGES.ETERNITY:
        return 1500;
      case EFFARIG_STAGES.REALITY:
        return 2000;
      case EFFARIG_STAGES.ENDGAME:
        return 1000000;
      default:
        return EffarigUnlock.extendRun.isUnlocked ? 1000000 : 2000;
    }
  },
  get glyphEffectAmount() {
    const genEffectBitmask = Glyphs.activeWithoutCompanion
      .filter(g => generatedTypes.includes(g.type))
      .reduce((prev, curr) => prev | curr.effects, 0);
    const nongenEffectBitmask = Glyphs.activeWithoutCompanion
      .filter(g => !generatedTypes.includes(g.type))
      .reduce((prev, curr) => prev | curr.effects, 0);
    return countValuesFromBitmask(genEffectBitmask) + countValuesFromBitmask(nongenEffectBitmask);
  },
  get shardsGained() {
    const extraBoost = (ExpansionPack.effarigPack.isBought && !player.disablePostReality) ? Decimal.log10(player.antimatter.add(10)) : DC.D1;
    if (!TeresaUnlocks.effarig.canBeApplied && !EndgameMilestone.celestialEarlyUnlock.isReached) return new Decimal(0);
    return Decimal.floor(Decimal.pow(Currency.eternityPoints.value.add(1).log10().div(7500), this.glyphEffectAmount)).times(
      AlchemyResource.effarig.effectValue).times(extraBoost).timesEffectOf(Ra.unlocks.relicShardBoost);
  },
  get maxRarityBoost() {
    return 15 * (Decimal.pow(Decimal.log10(Decimal.log10(Currency.relicShards.value.plus(10))).add(1), 1.5).sub(1)).toNumber();
  },
  get rarityCapIncrease() {
    return EffarigUnlock.maxRarityBoost.isUnlocked
      ? Decimal.pow(Decimal.log10(Decimal.log10(Currency.relicShards.value.plus(10))).add(1), 1.5).sub(1).times(15).div(100).pow(3).sub(2.5).times(40).max(0).toNumber()
      : 0;
  },
  nerfFactor(power) {
    let c;
    switch (this.currentStage) {
      case EFFARIG_STAGES.INFINITY:
        c = 1500;
        break;
      case EFFARIG_STAGES.ETERNITY:
        c = 29.29;
        break;
      case EFFARIG_STAGES.REALITY:
        c = 25;
        break;
      case EFFARIG_STAGES.ENDGAME:
        c = 0;
        break;
      default:
        c = EffarigUnlock.extendRun.isUnlocked ? 0 : 25;
        break;
    }
    return (DC.D1.sub(new Decimal(c).div(Decimal.sqrt(power.add(1).pLog10().max(1)).add(c)))).times(3).toNumber();
  },
  get tickDilation() {
    return 0.7 + 0.1 * this.nerfFactor(Currency.timeShards.value);
  },
  get multDilation() {
    return 0.25 + 0.25 * this.nerfFactor(Currency.infinityPower.value);
  },
  get tickspeed() {
    const base = Tickspeed.baseValue.reciprocal().log10().add(3);
    return Decimal.pow10(Decimal.pow(base, this.tickDilation)).reciprocal();
  },
  multiplier(mult) {
    const base = new Decimal(mult).add(1).pLog10();
    return Decimal.pow10(Decimal.pow(base, this.multDilation));
  },
  get bonusRG() {
    if (Pelle.isDoomed && !PelleCelestialUpgrade.maxRGIncrease.isBought) return 0;
    // Will return 0 if Effarig Infinity is uncompleted
    return Decimal.floor(replicantiCap().pLog10().div(LOG10_MAX_VALUE).sub(1)).toNumber();
  },
  quotes: Quotes.effarig,
  symbol: "Ϙ"
};

class EffarigUnlockState extends BitUpgradeState {
  get bits() { return player.celestials.effarig.unlockBits; }
  set bits(value) { player.celestials.effarig.unlockBits = value; }

  get cost() {
    return this.config.cost;
  }

  get isEffectActive() {
    return !Pelle.isDisabled("effarig") && !player.disablePostReality;
  }

  purchase() {
    if (this.isUnlocked || !Currency.relicShards.purchase(this.cost)) return;
    this.unlock();
    this.config.onPurchased?.();
  }
}

export const EffarigUnlock = mapGameDataToObject(
  GameDatabase.celestials.effarig.unlocks,
  config => new EffarigUnlockState(config)
);

EventHub.logic.on(GAME_EVENT.TAB_CHANGED, () => {
  if (Tab.celestials.effarig.isOpen) Effarig.quotes.initial.show();
});

EventHub.logic.on(GAME_EVENT.BIG_CRUNCH_BEFORE, () => {
  if (!Effarig.isRunning) return;
  Effarig.quotes.completeInfinity.show();
});

EventHub.logic.on(GAME_EVENT.ETERNITY_RESET_BEFORE, () => {
  if (!Effarig.isRunning) return;
  Effarig.quotes.completeEternity.show();
});

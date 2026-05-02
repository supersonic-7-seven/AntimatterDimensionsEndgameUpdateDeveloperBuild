import { RebuyableMechanicState } from "../../game-mechanics/rebuyable";

import { PelleRifts } from "./rifts";

export const GalaxyGenerator = {
  // This is used for a slightly annoying workaround in order to visually update the glyph tab when the rifts
  // are refilling and the single glyph slot (which was lost during the drain) becomes available again
  hasReturnedGlyphSlot: false,

  get generationCaps() {
    return PelleRifts.all
      .map(x => ({ rift: x.config.key, cap: x.config.galaxyGeneratorThreshold }))
      .sort((a, b) => a.cap - b.cap);
  },

  get spentGalaxies() {
    return player.celestials.pelle.galaxyGenerator.spentGalaxies;
  },

  get generatedGalaxies() {
    return player.celestials.pelle.galaxyGenerator.generatedGalaxies;
  },

  get galaxies() {
    return this.generatedGalaxies.sub(this.spentGalaxies);
  },

  get gainPerSecondPreCap() {
    let extraGain = 1;
    if (EndgameMilestone.moreFasterGalaxies.isReached && !player.disablePostReality) extraGain = Decimal.pow(10, Math.min(Currency.endgames.value / 200, 50)).times(Decimal.pow(10, Math.max((Math.log10(Currency.endgames.value + 1) - 4) * 50, 0)));
    if (!Pelle.hasGalaxyGenerator) return new Decimal(0);
    return new Decimal(GalaxyGeneratorUpgrades.additive.effectValue).timesEffectsOf(
      GalaxyGeneratorUpgrades.multiplicative,
      GalaxyGeneratorUpgrades.antimatterMult,
      GalaxyGeneratorUpgrades.IPMult,
      GalaxyGeneratorUpgrades.EPMult,
      GalaxyGeneratorUpgrades.RSMult,
      GalaxyGeneratorUpgrades.DTMult
    ).times(extraGain).pow(GalaxyGeneratorUpgrades.remnantPow.effectValue);
  },

  get galGenInstability() {
    const extraReduction = (ExpansionPack.pellePack.isBought && !player.disablePostReality) ? 1 : 0;
    const reduction = Effects.sum(EndgameMastery(122), Achievement(206), EndgameUpgrade(12)) + extraReduction;
    let powReduction = 1;
    if (EndgameMilestone.instabilityReduction.isReached && !player.disablePostReality) powReduction = Math.pow(1 / Math.log10(Currency.endgames.value + 1), 0.1);
    return Math.pow(10 - reduction, powReduction);
  },

  get harshInstabilityStart() {
    return new Decimal(1e60);
  },

  harshGalGenInstabilityByGalaxies(currGalaxies) {
    const extremePower = GalacticPowers.galGenInstability2.isUnlocked ? GalacticPowers.galGenInstability2.reward : 1;
    const power = (Decimal.log10(Decimal.clamp(currGalaxies.div(this.harshInstabilityStart), 1, 1e50)).div(1000)).times(Effects.product(EndgameUpgrade(14))).times(1 / extremePower).toNumber();
    return Math.pow(1 + power, Decimal.log10(Decimal.clamp(currGalaxies.div(this.harshInstabilityStart), 1, 1e50)).toNumber());
  },

  get harshGalGenInstability() {
    const currGalaxies = player.galaxies.add(GalaxyGenerator.galaxies);
    return this.harshGalGenInstabilityByGalaxies(currGalaxies);
  },

  get instabilityStart() {
    const delay = GalacticPowers.galGenInstability1.isUnlocked ? GalacticPowers.galGenInstability1.reward : DC.D1;
    return delay.times(1e10);
  },

  gainPerSecondPostCapByGalaxies(currGalaxies) {
    if (!Pelle.hasGalaxyGenerator) return new Decimal(1);
    return Decimal.max(1, Decimal.pow(Decimal.pow(this.galGenInstability, this.harshGalGenInstabilityByGalaxies(currGalaxies)), Decimal.log10(Decimal.max(Decimal.pow(currGalaxies.div(this.instabilityStart), 0.75), 1))));
  },

  get gainPerSecondPostCap() {
    if (!Pelle.hasGalaxyGenerator) return new Decimal(1);
    const currGalaxies = player.galaxies.add(GalaxyGenerator.galaxies);
    return this.gainPerSecondPostCapByGalaxies(currGalaxies);
  },

  get gainPerSecond() {
    if (!Pelle.hasGalaxyGenerator) return new Decimal(0);
    return this.gainPerSecondPreCap.div(this.gainPerSecondPostCap);
  },

  gainPerSecondDisplay(neededCount) {
    // Equals to 1/gainPerSecond
    function g(x) {
      return new Decimal(GalaxyGenerator.gainPerSecondPostCapByGalaxies(x)).div(GalaxyGenerator.gainPerSecondPreCap);
    }

    const currGalaxies = player.galaxies.add(GalaxyGenerator.galaxies);
    const N = 1000;
    const h = new Decimal(neededCount).sub(currGalaxies).div(N);
    let s = g(currGalaxies).add(g(neededCount));
    for (let i = 1; i <= N - 1; i++) {
      const x = currGalaxies.add(h.mul(i));
      s = s.add(g(x).mul((i & 1) ? 4 : 2));
    }
    return s.mul(h).div(3);
  },

  get capObj() {
    return this.generationCaps[player.celestials.pelle.galaxyGenerator.phase];
  },

  get generationCap() {
    return this.capObj ? this.capObj.cap : Infinity;
  },

  get capRift() {
    return PelleRifts[this.capObj?.rift];
  },

  get isCapped() {
    return new Decimal(this.generationCap).eq(this.generatedGalaxies);
  },

  get sacrificeActive() {
    return player.celestials.pelle.galaxyGenerator.sacrificeActive;
  },

  startSacrifice() {
    player.celestials.pelle.collapsed.rifts = false;
    player.celestials.pelle.galaxyGenerator.sacrificeActive = true;
  },

  loop(diff) {
    if (this.isCapped) {
      Pelle.quotes.galaxyGeneratorRifts.show();
    }
    if (this.sacrificeActive) {
      let reductionSpeed = 0.075;
      if (EndgameMilestone.galGenAnimation.isReached && !player.disablePostReality) reductionSpeed = reductionSpeed * Math.pow(1.2, Math.floor(Math.min(Currency.endgames.value, 100) / 5));
      if (Alpha.isDestroyed) reductionSpeed = 1e300;
      this.capRift.reducedTo = Decimal.max(new Decimal(this.capRift.reducedTo).sub(new Decimal(reductionSpeed).times(diff).div(1000)), 0).toNumber();
      if (this.capRift.reducedTo === 0) {
        player.celestials.pelle.galaxyGenerator.sacrificeActive = false;
        player.celestials.pelle.galaxyGenerator.phase++;

        const phase = player.celestials.pelle.galaxyGenerator.phase;
        if (phase === 1) {
          Pelle.quotes.galaxyGeneratorPhase1.show();
        } else if (phase === 4) {
          Pelle.quotes.galaxyGeneratorPhase4.show();
        }

        if (!this.capObj) {
          Pelle.quotes.end.show();
        }
      }
      PelleRifts.all.forEach(x => x.checkMilestoneStates());

      // Force-unequip glyphs when the player loses the respective milestone. We call the respec option as normally
      // except for one particular case - when we want to respec into protected slots but have no room to do so. In
      // that case, we force-respec into the inventory instead
      if (!PelleRifts.vacuum.milestones[0].canBeApplied && Glyphs.active.filter(g => g).length > 0) {
        Glyphs.unequipAll(player.options.respecIntoProtected && Glyphs.findFreeIndex(true) === -1);
        Glyphs.refreshActive();
      }

    }
    player.celestials.pelle.galaxyGenerator.generatedGalaxies = player.celestials.pelle.galaxyGenerator.generatedGalaxies.add(Decimal.max(this.gainPerSecond.times(diff).div(1000), 0));
    player.celestials.pelle.galaxyGenerator.generatedGalaxies = Decimal.min(
      player.celestials.pelle.galaxyGenerator.generatedGalaxies,
      this.generationCap
    );

    if (!this.capRift) {
      PelleRifts.all.forEach(r => r.reducedTo = new Decimal(diff).div(1e5).times(3).add(r.reducedTo).clampMax(Alpha.isDestroyed ? Infinity : 2).toNumber());
      if (PelleRifts.vacuum.milestones[0].canBeApplied && !this.hasReturnedGlyphSlot) {
        Glyphs.refreshActive();
        EventHub.dispatch(GAME_EVENT.GLYPHS_EQUIPPED_CHANGED);
        this.hasReturnedGlyphSlot = true;
      }
    }
  }
};

export class GalaxyGeneratorUpgrade extends RebuyableMechanicState {
  get currency() {
    return this.config.currency();
  }

  get boughtAmount() {
    return player.celestials.pelle.rebuyables[this.id];
  }

  set boughtAmount(value) {
    player.celestials.pelle.rebuyables[this.id] = value;
  }

  get isCustomEffect() { return true; }

  get effectValue() {
    return this.config.effect(this.boughtAmount);
  }

  purchase(bulk) {
    if (!this.canBeBought) return false;
    if (GameEnd.creditsEverClosed) return false;
    let pending;
    let upg = GalaxyGeneratorUpgrades.all.find(g => g.config.id === this.id);
    let i;
    for (let num = 0; num < 20; num++) {
      if (GalaxyGeneratorUpgrades.all[num]) {
        if (GalaxyGeneratorUpgrades.all[num].id === this.id) i = num;
      }
    }
    let price;
    let logC = [3, 10, 10, 100, 1000, 1e10, 1e100, 10];
    let exD = [1/3, 0.1, 1e7, 20000, 10, 1e90, 1, 1];
    let currV = (i >= 2 && i <= 4 ? upg.currency.value.max(1).log10().div(exD[i]) : upg.currency.value.div(exD[i]));
    let currW = (i === 6 ? Decimal.sqrt(Decimal.log(currV, logC[i]).times(2).add(0.25)).sub(0.5) : Decimal.log(currV, logC[i]));
    if (bulk) {
      pending = Decimal.floor(currW).sub(player.celestials.pelle.rebuyables[this.id]);
      player.celestials.pelle.rebuyables[this.id] += pending.toNumber();
      price = player.celestials.pelle.rebuyables[this.id] - 1;
      price = (i === 6 ? Decimal.pow(logC[i], new Decimal(price).add(0.5).pow(2).sub(0.25).div(2)) : Decimal.pow(logC[i], price));
      price = (i >= 2 && i <= 4 ? Decimal.pow10(price.times(exD[i])) : price.times(exD[i]));
      upg.currency.value = upg.currency.value.sub(price);
    } else {
      upg.currency.value = upg.currency.value.sub(upg.cost);
      player.celestials.pelle.rebuyables[this.id]++;
    }
    this.onPurchased();
    GameUI.update();
    return true;
  }
}

export const GalaxyGeneratorUpgrades = mapGameDataToObject(
  GameDatabase.celestials.pelle.galaxyGeneratorUpgrades,
  config => new GalaxyGeneratorUpgrade(config)
);

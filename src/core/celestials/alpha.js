import { BitUpgradeState } from "../game-mechanics";
import { GameDatabase } from "../secret-formula/game-database";

import { Quotes } from "./quotes";

export const Alpha = {
  displayName: "Alpha",
  possessiveName: "Alpha's",
  get isUnlocked() {
    return ImaginaryUpgrade(30).isBought;
  },
  initializeRun() {
    player.disablePostReality = true;
    Endgame.resetNoReward();
    disChargeAllPerkUpgrades();
    disChargeAll();
    AutomatorBackend.stop();
    clearCelestialRuns();
    player.celestials.alpha.run = true;
    recalculateAllGlyphs();
    Tab.dimensions.antimatter.show(false);
    if (alphaRecords.records.totalEndgameAntimatter.gt(DC.E1)) {
      player.antimatter = alphaRecords.antimatter;
      player.dimensions.antimatter[0].bought = alphaRecords.dimensions.antimatter[0].bought;
      player.dimensions.antimatter[0].costBumps = alphaRecords.dimensions.antimatter[0].costBumps;
      player.dimensions.antimatter[0].amount = alphaRecords.dimensions.antimatter[0].amount;
      player.dimensions.antimatter[1].bought = alphaRecords.dimensions.antimatter[1].bought;
      player.dimensions.antimatter[1].costBumps = alphaRecords.dimensions.antimatter[1].costBumps;
      player.dimensions.antimatter[1].amount = alphaRecords.dimensions.antimatter[1].amount;
      player.dimensions.antimatter[2].bought = alphaRecords.dimensions.antimatter[2].bought;
      player.dimensions.antimatter[2].costBumps = alphaRecords.dimensions.antimatter[2].costBumps;
      player.dimensions.antimatter[2].amount = alphaRecords.dimensions.antimatter[2].amount;
      player.dimensions.antimatter[3].bought = alphaRecords.dimensions.antimatter[3].bought;
      player.dimensions.antimatter[3].costBumps = alphaRecords.dimensions.antimatter[3].costBumps;
      player.dimensions.antimatter[3].amount = alphaRecords.dimensions.antimatter[3].amount;
      player.dimensions.antimatter[4].bought = alphaRecords.dimensions.antimatter[4].bought;
      player.dimensions.antimatter[4].costBumps = alphaRecords.dimensions.antimatter[4].costBumps;
      player.dimensions.antimatter[4].amount = alphaRecords.dimensions.antimatter[4].amount;
      player.dimensions.antimatter[5].bought = alphaRecords.dimensions.antimatter[5].bought;
      player.dimensions.antimatter[5].costBumps = alphaRecords.dimensions.antimatter[5].costBumps;
      player.dimensions.antimatter[5].amount = alphaRecords.dimensions.antimatter[5].amount;
      player.dimensions.antimatter[6].bought = alphaRecords.dimensions.antimatter[6].bought;
      player.dimensions.antimatter[6].costBumps = alphaRecords.dimensions.antimatter[6].costBumps;
      player.dimensions.antimatter[6].amount = alphaRecords.dimensions.antimatter[6].amount;
      player.dimensions.antimatter[7].bought = alphaRecords.dimensions.antimatter[7].bought;
      player.dimensions.antimatter[7].costBumps = alphaRecords.dimensions.antimatter[7].costBumps;
      player.dimensions.antimatter[7].amount = alphaRecords.dimensions.antimatter[7].amount;
      player.dimensions.infinity[0].isUnlocked = alphaRecords.dimensions.infinity[0].isUnlocked;
      player.dimensions.infinity[0].bought = alphaRecords.dimensions.infinity[0].bought;
      player.dimensions.infinity[0].amount = alphaRecords.dimensions.infinity[0].amount;
      player.dimensions.infinity[0].cost = alphaRecords.dimensions.infinity[0].cost;
      player.dimensions.infinity[0].baseAmount = alphaRecords.dimensions.infinity[0].baseAmount;
      player.dimensions.infinity[1].isUnlocked = alphaRecords.dimensions.infinity[1].isUnlocked;
      player.dimensions.infinity[1].bought = alphaRecords.dimensions.infinity[1].bought;
      player.dimensions.infinity[1].amount = alphaRecords.dimensions.infinity[1].amount;
      player.dimensions.infinity[1].cost = alphaRecords.dimensions.infinity[1].cost;
      player.dimensions.infinity[1].baseAmount = alphaRecords.dimensions.infinity[1].baseAmount;
      player.dimensions.infinity[2].isUnlocked = alphaRecords.dimensions.infinity[2].isUnlocked;
      player.dimensions.infinity[2].bought = alphaRecords.dimensions.infinity[2].bought;
      player.dimensions.infinity[2].amount = alphaRecords.dimensions.infinity[2].amount;
      player.dimensions.infinity[2].cost = alphaRecords.dimensions.infinity[2].cost;
      player.dimensions.infinity[2].baseAmount = alphaRecords.dimensions.infinity[2].baseAmount;
      player.dimensions.infinity[3].isUnlocked = alphaRecords.dimensions.infinity[3].isUnlocked;
      player.dimensions.infinity[3].bought = alphaRecords.dimensions.infinity[3].bought;
      player.dimensions.infinity[3].amount = alphaRecords.dimensions.infinity[3].amount;
      player.dimensions.infinity[3].cost = alphaRecords.dimensions.infinity[3].cost;
      player.dimensions.infinity[3].baseAmount = alphaRecords.dimensions.infinity[3].baseAmount;
      player.dimensions.infinity[4].isUnlocked = alphaRecords.dimensions.infinity[4].isUnlocked;
      player.dimensions.infinity[4].bought = alphaRecords.dimensions.infinity[4].bought;
      player.dimensions.infinity[4].amount = alphaRecords.dimensions.infinity[4].amount;
      player.dimensions.infinity[4].cost = alphaRecords.dimensions.infinity[4].cost;
      player.dimensions.infinity[4].baseAmount = alphaRecords.dimensions.infinity[4].baseAmount;
      player.dimensions.infinity[5].isUnlocked = alphaRecords.dimensions.infinity[5].isUnlocked;
      player.dimensions.infinity[5].bought = alphaRecords.dimensions.infinity[5].bought;
      player.dimensions.infinity[5].amount = alphaRecords.dimensions.infinity[5].amount;
      player.dimensions.infinity[5].cost = alphaRecords.dimensions.infinity[5].cost;
      player.dimensions.infinity[5].baseAmount = alphaRecords.dimensions.infinity[5].baseAmount;
      player.dimensions.infinity[6].isUnlocked = alphaRecords.dimensions.infinity[6].isUnlocked;
      player.dimensions.infinity[6].bought = alphaRecords.dimensions.infinity[6].bought;
      player.dimensions.infinity[6].amount = alphaRecords.dimensions.infinity[6].amount;
      player.dimensions.infinity[6].cost = alphaRecords.dimensions.infinity[6].cost;
      player.dimensions.infinity[6].baseAmount = alphaRecords.dimensions.infinity[6].baseAmount;
      player.dimensions.infinity[7].isUnlocked = alphaRecords.dimensions.infinity[7].isUnlocked;
      player.dimensions.infinity[7].bought = alphaRecords.dimensions.infinity[7].bought;
      player.dimensions.infinity[7].amount = alphaRecords.dimensions.infinity[7].amount;
      player.dimensions.infinity[7].cost = alphaRecords.dimensions.infinity[7].cost;
      player.dimensions.infinity[7].baseAmount = alphaRecords.dimensions.infinity[7].baseAmount;
      player.dimensions.time[0].cost = alphaRecords.dimensions.time[0].cost;
      player.dimensions.time[0].amount = alphaRecords.dimensions.time[0].amount;
      player.dimensions.time[0].bought = alphaRecords.dimensions.time[0].bought;
      player.dimensions.time[1].cost = alphaRecords.dimensions.time[1].cost;
      player.dimensions.time[1].amount = alphaRecords.dimensions.time[1].amount;
      player.dimensions.time[1].bought = alphaRecords.dimensions.time[1].bought;
      player.dimensions.time[2].cost = alphaRecords.dimensions.time[2].cost;
      player.dimensions.time[2].amount = alphaRecords.dimensions.time[2].amount;
      player.dimensions.time[2].bought = alphaRecords.dimensions.time[2].bought;
      player.dimensions.time[3].cost = alphaRecords.dimensions.time[3].cost;
      player.dimensions.time[3].amount = alphaRecords.dimensions.time[3].amount;
      player.dimensions.time[3].bought = alphaRecords.dimensions.time[3].bought;
      player.dimensions.time[4].cost = alphaRecords.dimensions.time[4].cost;
      player.dimensions.time[4].amount = alphaRecords.dimensions.time[4].amount;
      player.dimensions.time[4].bought = alphaRecords.dimensions.time[4].bought;
      player.dimensions.time[5].cost = alphaRecords.dimensions.time[5].cost;
      player.dimensions.time[5].amount = alphaRecords.dimensions.time[5].amount;
      player.dimensions.time[5].bought = alphaRecords.dimensions.time[5].bought;
      player.dimensions.time[6].cost = alphaRecords.dimensions.time[6].cost;
      player.dimensions.time[6].amount = alphaRecords.dimensions.time[6].amount;
      player.dimensions.time[6].bought = alphaRecords.dimensions.time[6].bought;
      player.dimensions.time[7].cost = alphaRecords.dimensions.time[7].cost;
      player.dimensions.time[7].amount = alphaRecords.dimensions.time[7].amount;
      player.dimensions.time[7].bought = alphaRecords.dimensions.time[7].bought;
      player.buyUntil10 = alphaRecords.buyUntil10;
      player.sacrificed = alphaRecords.sacrificed;
      player.infinityUpgrades = new Set(alphaRecords.infinityUpgrades);
      player.infinityRebuyables[0] = alphaRecords.infinityRebuyables[0];
      player.infinityRebuyables[1] = alphaRecords.infinityRebuyables[1];
      player.infinityRebuyables[2] = alphaRecords.infinityRebuyables[2];
      player.challenge.normal.current = alphaRecords.challenge.normal.current;
      player.challenge.normal.bestTimes[0] = alphaRecords.challenge.normal.bestTimes[0];
      player.challenge.normal.bestTimes[1] = alphaRecords.challenge.normal.bestTimes[1];
      player.challenge.normal.bestTimes[2] = alphaRecords.challenge.normal.bestTimes[2];
      player.challenge.normal.bestTimes[3] = alphaRecords.challenge.normal.bestTimes[3];
      player.challenge.normal.bestTimes[4] = alphaRecords.challenge.normal.bestTimes[4];
      player.challenge.normal.bestTimes[5] = alphaRecords.challenge.normal.bestTimes[5];
      player.challenge.normal.bestTimes[6] = alphaRecords.challenge.normal.bestTimes[6];
      player.challenge.normal.bestTimes[7] = alphaRecords.challenge.normal.bestTimes[7];
      player.challenge.normal.bestTimes[8] = alphaRecords.challenge.normal.bestTimes[8];
      player.challenge.normal.bestTimes[9] = alphaRecords.challenge.normal.bestTimes[9];
      player.challenge.normal.bestTimes[10] = alphaRecords.challenge.normal.bestTimes[10];
      player.challenge.normal.completedBits = alphaRecords.challenge.normal.completedBits;
      player.challenge.infinity.current = alphaRecords.challenge.infinity.current;
      player.challenge.infinity.bestTimes[0] = alphaRecords.challenge.infinity.bestTimes[0];
      player.challenge.infinity.bestTimes[1] = alphaRecords.challenge.infinity.bestTimes[1];
      player.challenge.infinity.bestTimes[2] = alphaRecords.challenge.infinity.bestTimes[2];
      player.challenge.infinity.bestTimes[3] = alphaRecords.challenge.infinity.bestTimes[3];
      player.challenge.infinity.bestTimes[4] = alphaRecords.challenge.infinity.bestTimes[4];
      player.challenge.infinity.bestTimes[5] = alphaRecords.challenge.infinity.bestTimes[5];
      player.challenge.infinity.bestTimes[6] = alphaRecords.challenge.infinity.bestTimes[6];
      player.challenge.infinity.bestTimes[7] = alphaRecords.challenge.infinity.bestTimes[7];
      player.challenge.infinity.completedBits = alphaRecords.challenge.infinity.completedBits;
      player.challenge.eternity.current = alphaRecords.challenge.eternity.current;
      player.challenge.eternity.unlocked = alphaRecords.challenge.eternity.unlocked;
      player.challenge.eternity.requirementBits = alphaRecords.challenge.eternity.requirementBits;
      player.infinity.upgradeBits = alphaRecords.infinity.upgradeBits;
      player.auto.autobuyersOn = alphaRecords.auto.autobuyersOn;
      player.auto.disableContinuum = alphaRecords.auto.disableContinuum;
      player.auto.eternity.amount = alphaRecords.auto.eternity.amount;
      player.auto.eternity.increaseWithMult = alphaRecords.auto.eternity.increaseWithMult;
      player.auto.eternity.time = alphaRecords.auto.eternity.time;
      player.auto.eternity.xHighest = alphaRecords.auto.eternity.xHighest;
      player.auto.eternity.isActive = alphaRecords.auto.eternity.isActive;
      player.auto.bigCrunch.cost = alphaRecords.auto.bigCrunch.cost;
      player.auto.bigCrunch.interval = alphaRecords.auto.bigCrunch.interval;
      player.auto.bigCrunch.mode = alphaRecords.auto.bigCrunch.mode;
      player.auto.bigCrunch.amount = alphaRecords.auto.bigCrunch.amount;
      player.auto.bigCrunch.increaseWithMult = alphaRecords.auto.bigCrunch.increaseWithMult;
      player.auto.bigCrunch.time = alphaRecords.auto.bigCrunch.time;
      player.auto.bigCrunch.xHighest = alphaRecords.auto.bigCrunch.xHighest;
      player.auto.bigCrunch.isActive = alphaRecords.auto.bigCrunch.isActive;
      player.auto.bigCrunch.lastTick = alphaRecords.auto.bigCrunch.lastTick;
      player.auto.galaxy.cost = alphaRecords.auto.galaxy.cost;
      player.auto.galaxy.interval = alphaRecords.auto.galaxy.interval;
      player.auto.galaxy.limitGalaxies = alphaRecords.auto.galaxy.limitGalaxies;
      player.auto.galaxy.maxGalaxies = alphaRecords.auto.galaxy.maxGalaxies;
      player.auto.galaxy.buyMax = alphaRecords.auto.galaxy.buyMax;
      player.auto.galaxy.buyMaxInterval = alphaRecords.auto.galaxy.buyMaxInterval;
      player.auto.galaxy.isActive = alphaRecords.auto.galaxy.isActive;
      player.auto.galaxy.lastTick = alphaRecords.auto.galaxy.lastTick;
      player.auto.dimBoost.cost = alphaRecords.auto.dimBoost.cost;
      player.auto.dimBoost.interval = alphaRecords.auto.dimBoost.interval;
      player.auto.dimBoost.limitDimBoosts = alphaRecords.auto.dimBoost.limitDimBoosts;
      player.auto.dimBoost.maxDimBoosts = alphaRecords.auto.dimBoost.maxDimBoosts;
      player.auto.dimBoost.limitUntilGalaxies = alphaRecords.auto.dimBoost.limitUntilGalaxies;
      player.auto.dimBoost.galaxies = alphaRecords.auto.dimBoost.galaxies;
      player.auto.dimBoost.buyMaxInterval = alphaRecords.auto.dimBoost.buyMaxInterval;
      player.auto.dimBoost.isActive = alphaRecords.auto.dimBoost.isActive;
      player.auto.dimBoost.lastTick = alphaRecords.auto.dimBoost.lastTick;
      player.auto.tickspeed.isUnlocked = alphaRecords.auto.tickspeed.isUnlocked;
      player.auto.tickspeed.cost = alphaRecords.auto.tickspeed.cost;
      player.auto.tickspeed.interval = alphaRecords.auto.tickspeed.interval;
      player.auto.tickspeed.mode = alphaRecords.auto.tickspeed.mode;
      player.auto.tickspeed.isActive = alphaRecords.auto.tickspeed.isActive;
      player.auto.tickspeed.lastTick = alphaRecords.auto.tickspeed.lastTick;
      player.auto.tickspeed.isBought = alphaRecords.auto.tickspeed.isBought;
      player.auto.sacrifice.multiplier = alphaRecords.auto.sacrifice.multiplier;
      player.auto.sacrifice.isActive = alphaRecords.auto.sacrifice.isActive;
      if (player.auto.antimatterDims.all[0].isUnlocked) {
        Currency.antimatter.add(Autobuyer.antimatterDimension(1).cost);
        Autobuyer.antimatterDimension(1).purchase();
      }
      player.auto.antimatterDims.all[0].cost = alphaRecords.auto.antimatterDims.all[0].cost;
      player.auto.antimatterDims.all[0].interval = alphaRecords.auto.antimatterDims.all[0].interval;
      player.auto.antimatterDims.all[0].bulk = alphaRecords.auto.antimatterDims.all[0].bulk;
      player.auto.antimatterDims.all[0].mode = alphaRecords.auto.antimatterDims.all[0].mode;
      player.auto.antimatterDims.all[0].isActive = alphaRecords.auto.antimatterDims.all[0].isActive;
      player.auto.antimatterDims.all[0].lastTick = alphaRecords.auto.antimatterDims.all[0].lastTick;
      player.auto.antimatterDims.all[0].isBought = alphaRecords.auto.antimatterDims.all[0].isBought;
      if (player.auto.antimatterDims.all[1].isUnlocked) {
        Currency.antimatter.add(Autobuyer.antimatterDimension(2).cost);
        Autobuyer.antimatterDimension(2).purchase();
      }
      player.auto.antimatterDims.all[1].cost = alphaRecords.auto.antimatterDims.all[1].cost;
      player.auto.antimatterDims.all[1].interval = alphaRecords.auto.antimatterDims.all[1].interval;
      player.auto.antimatterDims.all[1].bulk = alphaRecords.auto.antimatterDims.all[1].bulk;
      player.auto.antimatterDims.all[1].mode = alphaRecords.auto.antimatterDims.all[1].mode;
      player.auto.antimatterDims.all[1].isActive = alphaRecords.auto.antimatterDims.all[1].isActive;
      player.auto.antimatterDims.all[1].lastTick = alphaRecords.auto.antimatterDims.all[1].lastTick;
      player.auto.antimatterDims.all[1].isBought = alphaRecords.auto.antimatterDims.all[1].isBought;
      if (player.auto.antimatterDims.all[2].isUnlocked) {
        Currency.antimatter.add(Autobuyer.antimatterDimension(3).cost);
        Autobuyer.antimatterDimension(3).purchase();
      }
      player.auto.antimatterDims.all[2].cost = alphaRecords.auto.antimatterDims.all[2].cost;
      player.auto.antimatterDims.all[2].interval = alphaRecords.auto.antimatterDims.all[2].interval;
      player.auto.antimatterDims.all[2].bulk = alphaRecords.auto.antimatterDims.all[2].bulk;
      player.auto.antimatterDims.all[2].mode = alphaRecords.auto.antimatterDims.all[2].mode;
      player.auto.antimatterDims.all[2].isActive = alphaRecords.auto.antimatterDims.all[2].isActive;
      player.auto.antimatterDims.all[2].lastTick = alphaRecords.auto.antimatterDims.all[2].lastTick;
      player.auto.antimatterDims.all[2].isBought = alphaRecords.auto.antimatterDims.all[2].isBought;
      if (player.auto.antimatterDims.all[3].isUnlocked) {
        Currency.antimatter.add(Autobuyer.antimatterDimension(4).cost);
        Autobuyer.antimatterDimension(4).purchase();
      }
      player.auto.antimatterDims.all[3].cost = alphaRecords.auto.antimatterDims.all[3].cost;
      player.auto.antimatterDims.all[3].interval = alphaRecords.auto.antimatterDims.all[3].interval;
      player.auto.antimatterDims.all[3].bulk = alphaRecords.auto.antimatterDims.all[3].bulk;
      player.auto.antimatterDims.all[3].mode = alphaRecords.auto.antimatterDims.all[3].mode;
      player.auto.antimatterDims.all[3].isActive = alphaRecords.auto.antimatterDims.all[3].isActive;
      player.auto.antimatterDims.all[3].lastTick = alphaRecords.auto.antimatterDims.all[3].lastTick;
      player.auto.antimatterDims.all[3].isBought = alphaRecords.auto.antimatterDims.all[3].isBought;
      if (player.auto.antimatterDims.all[4].isUnlocked) {
        Currency.antimatter.add(Autobuyer.antimatterDimension(5).cost);
        Autobuyer.antimatterDimension(5).purchase();
      }
      player.auto.antimatterDims.all[4].cost = alphaRecords.auto.antimatterDims.all[4].cost;
      player.auto.antimatterDims.all[4].interval = alphaRecords.auto.antimatterDims.all[4].interval;
      player.auto.antimatterDims.all[4].bulk = alphaRecords.auto.antimatterDims.all[4].bulk;
      player.auto.antimatterDims.all[4].mode = alphaRecords.auto.antimatterDims.all[4].mode;
      player.auto.antimatterDims.all[4].isActive = alphaRecords.auto.antimatterDims.all[4].isActive;
      player.auto.antimatterDims.all[4].lastTick = alphaRecords.auto.antimatterDims.all[4].lastTick;
      player.auto.antimatterDims.all[4].isBought = alphaRecords.auto.antimatterDims.all[4].isBought;
      if (player.auto.antimatterDims.all[5].isUnlocked) {
        Currency.antimatter.add(Autobuyer.antimatterDimension(6).cost);
        Autobuyer.antimatterDimension(6).purchase();
      }
      player.auto.antimatterDims.all[5].cost = alphaRecords.auto.antimatterDims.all[5].cost;
      player.auto.antimatterDims.all[5].interval = alphaRecords.auto.antimatterDims.all[5].interval;
      player.auto.antimatterDims.all[5].bulk = alphaRecords.auto.antimatterDims.all[5].bulk;
      player.auto.antimatterDims.all[5].mode = alphaRecords.auto.antimatterDims.all[5].mode;
      player.auto.antimatterDims.all[5].isActive = alphaRecords.auto.antimatterDims.all[5].isActive;
      player.auto.antimatterDims.all[5].lastTick = alphaRecords.auto.antimatterDims.all[5].lastTick;
      player.auto.antimatterDims.all[5].isBought = alphaRecords.auto.antimatterDims.all[5].isBought;
      if (player.auto.antimatterDims.all[6].isUnlocked) {
        Currency.antimatter.add(Autobuyer.antimatterDimension(7).cost);
        Autobuyer.antimatterDimension(7).purchase();
      }
      player.auto.antimatterDims.all[6].cost = alphaRecords.auto.antimatterDims.all[6].cost;
      player.auto.antimatterDims.all[6].interval = alphaRecords.auto.antimatterDims.all[6].interval;
      player.auto.antimatterDims.all[6].bulk = alphaRecords.auto.antimatterDims.all[6].bulk;
      player.auto.antimatterDims.all[6].mode = alphaRecords.auto.antimatterDims.all[6].mode;
      player.auto.antimatterDims.all[6].isActive = alphaRecords.auto.antimatterDims.all[6].isActive;
      player.auto.antimatterDims.all[6].lastTick = alphaRecords.auto.antimatterDims.all[6].lastTick;
      player.auto.antimatterDims.all[6].isBought = alphaRecords.auto.antimatterDims.all[6].isBought;
      if (player.auto.antimatterDims.all[7].isUnlocked) {
        Currency.antimatter.add(Autobuyer.antimatterDimension(8).cost);
        Autobuyer.antimatterDimension(8).purchase();
      }
      player.auto.antimatterDims.all[7].cost = alphaRecords.auto.antimatterDims.all[7].cost;
      player.auto.antimatterDims.all[7].interval = alphaRecords.auto.antimatterDims.all[7].interval;
      player.auto.antimatterDims.all[7].bulk = alphaRecords.auto.antimatterDims.all[7].bulk;
      player.auto.antimatterDims.all[7].mode = alphaRecords.auto.antimatterDims.all[7].mode;
      player.auto.antimatterDims.all[7].isActive = alphaRecords.auto.antimatterDims.all[7].isActive;
      player.auto.antimatterDims.all[7].lastTick = alphaRecords.auto.antimatterDims.all[7].lastTick;
      player.auto.antimatterDims.all[7].isBought = alphaRecords.auto.antimatterDims.all[7].isBought;
      player.auto.antimatterDims.isActive = alphaRecords.auto.antimatterDims.isActive;
      player.auto.infinityDims.all[0].isActive = alphaRecords.auto.infinityDims.all[0].isActive;
      player.auto.infinityDims.all[0].lastTick = alphaRecords.auto.infinityDims.all[0].lastTick;
      player.auto.infinityDims.all[1].isActive = alphaRecords.auto.infinityDims.all[1].isActive;
      player.auto.infinityDims.all[1].lastTick = alphaRecords.auto.infinityDims.all[1].lastTick;
      player.auto.infinityDims.all[2].isActive = alphaRecords.auto.infinityDims.all[2].isActive;
      player.auto.infinityDims.all[2].lastTick = alphaRecords.auto.infinityDims.all[2].lastTick;
      player.auto.infinityDims.all[3].isActive = alphaRecords.auto.infinityDims.all[3].isActive;
      player.auto.infinityDims.all[3].lastTick = alphaRecords.auto.infinityDims.all[3].lastTick;
      player.auto.infinityDims.all[4].isActive = alphaRecords.auto.infinityDims.all[4].isActive;
      player.auto.infinityDims.all[4].lastTick = alphaRecords.auto.infinityDims.all[4].lastTick;
      player.auto.infinityDims.all[5].isActive = alphaRecords.auto.infinityDims.all[5].isActive;
      player.auto.infinityDims.all[5].lastTick = alphaRecords.auto.infinityDims.all[5].lastTick;
      player.auto.infinityDims.all[6].isActive = alphaRecords.auto.infinityDims.all[6].isActive;
      player.auto.infinityDims.all[6].lastTick = alphaRecords.auto.infinityDims.all[6].lastTick;
      player.auto.infinityDims.all[7].isActive = alphaRecords.auto.infinityDims.all[7].isActive;
      player.auto.infinityDims.all[7].lastTick = alphaRecords.auto.infinityDims.all[7].lastTick;
      player.auto.infinityDims.isActive = alphaRecords.auto.infinityDims.isActive;
      player.auto.replicantiGalaxies.isActive = alphaRecords.auto.replicantiGalaxies.isActive;
      player.auto.replicantiUpgrades.all[0].isActive = alphaRecords.auto.replicantiUpgrades.all[0].isActive;
      player.auto.replicantiUpgrades.all[0].lastTick = alphaRecords.auto.replicantiUpgrades.all[0].lastTick;
      player.auto.replicantiUpgrades.all[1].isActive = alphaRecords.auto.replicantiUpgrades.all[1].isActive;
      player.auto.replicantiUpgrades.all[1].lastTick = alphaRecords.auto.replicantiUpgrades.all[1].lastTick;
      player.auto.replicantiUpgrades.all[2].isActive = alphaRecords.auto.replicantiUpgrades.all[2].isActive;
      player.auto.replicantiUpgrades.all[2].lastTick = alphaRecords.auto.replicantiUpgrades.all[2].lastTick;
      player.auto.replicantiUpgrades.isActive = alphaRecords.auto.replicantiUpgrades.isActive;
      player.auto.ipMultBuyer.isActive = alphaRecords.auto.ipMultBuyer.isActive;
      player.infinityPoints = alphaRecords.infinityPoints;
      player.infinities = alphaRecords.infinities;
      player.infinitiesBanked = alphaRecords.infinitiesBanked;
      player.dimensionBoosts = alphaRecords.dimensionBoosts;
      player.galaxies = alphaRecords.galaxies;
      player.chall2Pow = alphaRecords.chall2Pow;
      player.chall3Pow = alphaRecords.chall3Pow;
      player.matter = alphaRecords.matter;
      player.chall9TickspeedCostBumps = alphaRecords.chall9TickspeedCostBumps;
      player.chall8TotalSacrifice = alphaRecords.chall8TotalSacrifice;
      player.ic2Count = alphaRecords.ic2Count;
      player.partInfinityPoint = alphaRecords.partInfinityPoint;
      player.partInfinitied = alphaRecords.partInfinitied;
      player.break = alphaRecords.break;
      player.requirementChecks.infinity.maxAll = alphaRecords.requirementChecks.infinity.maxAll;
      player.requirementChecks.infinity.noSacrifice = alphaRecords.requirementChecks.infinity.noSacrifice;
      player.requirementChecks.infinity.noAD8 = alphaRecords.requirementChecks.infinity.noAD8;
      player.requirementChecks.eternity.onlyAD1 = alphaRecords.requirementChecks.eternity.onlyAD1;
      player.requirementChecks.eternity.onlyAD8 = alphaRecords.requirementChecks.eternity.onlyAD8;
      player.requirementChecks.eternity.noAD1 = alphaRecords.requirementChecks.eternity.noAD1;
      player.requirementChecks.eternity.noRG = alphaRecords.requirementChecks.eternity.noRG;
      player.records.totalTimePlayed = alphaRecords.records.totalTimePlayed;
      player.records.totalEndgameAntimatter = alphaRecords.records.totalEndgameAntimatter;
      player.records.totalRealityAntimatter = alphaRecords.records.totalRealityAntimatter;
      player.records.totalEternityAntimatter = alphaRecords.records.totalEternityAntimatter;
      player.records.totalInfinityAntimatter = alphaRecords.records.totalInfinityAntimatter;
      player.records.recentInfinities[0][0] = alphaRecords.records.recentInfinities[0][0];
      player.records.recentInfinities[0][1] = alphaRecords.records.recentInfinities[0][1];
      player.records.recentInfinities[0][2] = alphaRecords.records.recentInfinities[0][2];
      player.records.recentInfinities[0][3] = alphaRecords.records.recentInfinities[0][3];
      player.records.recentInfinities[0][4] = alphaRecords.records.recentInfinities[0][4];
      player.records.recentInfinities[1][0] = alphaRecords.records.recentInfinities[1][0];
      player.records.recentInfinities[1][1] = alphaRecords.records.recentInfinities[1][1];
      player.records.recentInfinities[1][2] = alphaRecords.records.recentInfinities[1][2];
      player.records.recentInfinities[1][3] = alphaRecords.records.recentInfinities[1][3];
      player.records.recentInfinities[1][4] = alphaRecords.records.recentInfinities[1][4];
      player.records.recentInfinities[2][0] = alphaRecords.records.recentInfinities[2][0];
      player.records.recentInfinities[2][1] = alphaRecords.records.recentInfinities[2][1];
      player.records.recentInfinities[2][2] = alphaRecords.records.recentInfinities[2][2];
      player.records.recentInfinities[2][3] = alphaRecords.records.recentInfinities[2][3];
      player.records.recentInfinities[2][4] = alphaRecords.records.recentInfinities[2][4];
      player.records.recentInfinities[3][0] = alphaRecords.records.recentInfinities[3][0];
      player.records.recentInfinities[3][1] = alphaRecords.records.recentInfinities[3][1];
      player.records.recentInfinities[3][2] = alphaRecords.records.recentInfinities[3][2];
      player.records.recentInfinities[3][3] = alphaRecords.records.recentInfinities[3][3];
      player.records.recentInfinities[3][4] = alphaRecords.records.recentInfinities[3][4];
      player.records.recentInfinities[4][0] = alphaRecords.records.recentInfinities[4][0];
      player.records.recentInfinities[4][1] = alphaRecords.records.recentInfinities[4][1];
      player.records.recentInfinities[4][2] = alphaRecords.records.recentInfinities[4][2];
      player.records.recentInfinities[4][3] = alphaRecords.records.recentInfinities[4][3];
      player.records.recentInfinities[4][4] = alphaRecords.records.recentInfinities[4][4];
      player.records.recentInfinities[5][0] = alphaRecords.records.recentInfinities[5][0];
      player.records.recentInfinities[5][1] = alphaRecords.records.recentInfinities[5][1];
      player.records.recentInfinities[5][2] = alphaRecords.records.recentInfinities[5][2];
      player.records.recentInfinities[5][3] = alphaRecords.records.recentInfinities[5][3];
      player.records.recentInfinities[5][4] = alphaRecords.records.recentInfinities[5][4];
      player.records.recentInfinities[6][0] = alphaRecords.records.recentInfinities[6][0];
      player.records.recentInfinities[6][1] = alphaRecords.records.recentInfinities[6][1];
      player.records.recentInfinities[6][2] = alphaRecords.records.recentInfinities[6][2];
      player.records.recentInfinities[6][3] = alphaRecords.records.recentInfinities[6][3];
      player.records.recentInfinities[6][4] = alphaRecords.records.recentInfinities[6][4];
      player.records.recentInfinities[7][0] = alphaRecords.records.recentInfinities[7][0];
      player.records.recentInfinities[7][1] = alphaRecords.records.recentInfinities[7][1];
      player.records.recentInfinities[7][2] = alphaRecords.records.recentInfinities[7][2];
      player.records.recentInfinities[7][3] = alphaRecords.records.recentInfinities[7][3];
      player.records.recentInfinities[7][4] = alphaRecords.records.recentInfinities[7][4];
      player.records.recentInfinities[8][0] = alphaRecords.records.recentInfinities[8][0];
      player.records.recentInfinities[8][1] = alphaRecords.records.recentInfinities[8][1];
      player.records.recentInfinities[8][2] = alphaRecords.records.recentInfinities[8][2];
      player.records.recentInfinities[8][3] = alphaRecords.records.recentInfinities[8][3];
      player.records.recentInfinities[8][4] = alphaRecords.records.recentInfinities[8][4];
      player.records.recentInfinities[9][0] = alphaRecords.records.recentInfinities[9][0];
      player.records.recentInfinities[9][1] = alphaRecords.records.recentInfinities[9][1];
      player.records.recentInfinities[9][2] = alphaRecords.records.recentInfinities[9][2];
      player.records.recentInfinities[9][3] = alphaRecords.records.recentInfinities[9][3];
      player.records.recentInfinities[9][4] = alphaRecords.records.recentInfinities[9][4];
      player.records.recentEternities[0][0] = alphaRecords.records.recentEternities[0][0];
      player.records.recentEternities[0][1] = alphaRecords.records.recentEternities[0][1];
      player.records.recentEternities[0][2] = alphaRecords.records.recentEternities[0][2];
      player.records.recentEternities[0][3] = alphaRecords.records.recentEternities[0][3];
      player.records.recentEternities[0][4] = alphaRecords.records.recentEternities[0][4];
      player.records.recentEternities[0][5] = alphaRecords.records.recentEternities[0][5];
      player.records.recentEternities[1][0] = alphaRecords.records.recentEternities[1][0];
      player.records.recentEternities[1][1] = alphaRecords.records.recentEternities[1][1];
      player.records.recentEternities[1][2] = alphaRecords.records.recentEternities[1][2];
      player.records.recentEternities[1][3] = alphaRecords.records.recentEternities[1][3];
      player.records.recentEternities[1][4] = alphaRecords.records.recentEternities[1][4];
      player.records.recentEternities[1][5] = alphaRecords.records.recentEternities[1][5];
      player.records.recentEternities[2][0] = alphaRecords.records.recentEternities[2][0];
      player.records.recentEternities[2][1] = alphaRecords.records.recentEternities[2][1];
      player.records.recentEternities[2][2] = alphaRecords.records.recentEternities[2][2];
      player.records.recentEternities[2][3] = alphaRecords.records.recentEternities[2][3];
      player.records.recentEternities[2][4] = alphaRecords.records.recentEternities[2][4];
      player.records.recentEternities[2][5] = alphaRecords.records.recentEternities[2][5];
      player.records.recentEternities[3][0] = alphaRecords.records.recentEternities[3][0];
      player.records.recentEternities[3][1] = alphaRecords.records.recentEternities[3][1];
      player.records.recentEternities[3][2] = alphaRecords.records.recentEternities[3][2];
      player.records.recentEternities[3][3] = alphaRecords.records.recentEternities[3][3];
      player.records.recentEternities[3][4] = alphaRecords.records.recentEternities[3][4];
      player.records.recentEternities[3][5] = alphaRecords.records.recentEternities[3][5];
      player.records.recentEternities[4][0] = alphaRecords.records.recentEternities[4][0];
      player.records.recentEternities[4][1] = alphaRecords.records.recentEternities[4][1];
      player.records.recentEternities[4][2] = alphaRecords.records.recentEternities[4][2];
      player.records.recentEternities[4][3] = alphaRecords.records.recentEternities[4][3];
      player.records.recentEternities[4][4] = alphaRecords.records.recentEternities[4][4];
      player.records.recentEternities[4][5] = alphaRecords.records.recentEternities[4][5];
      player.records.recentEternities[5][0] = alphaRecords.records.recentEternities[5][0];
      player.records.recentEternities[5][1] = alphaRecords.records.recentEternities[5][1];
      player.records.recentEternities[5][2] = alphaRecords.records.recentEternities[5][2];
      player.records.recentEternities[5][3] = alphaRecords.records.recentEternities[5][3];
      player.records.recentEternities[5][4] = alphaRecords.records.recentEternities[5][4];
      player.records.recentEternities[5][5] = alphaRecords.records.recentEternities[5][5];
      player.records.recentEternities[6][0] = alphaRecords.records.recentEternities[6][0];
      player.records.recentEternities[6][1] = alphaRecords.records.recentEternities[6][1];
      player.records.recentEternities[6][2] = alphaRecords.records.recentEternities[6][2];
      player.records.recentEternities[6][3] = alphaRecords.records.recentEternities[6][3];
      player.records.recentEternities[6][4] = alphaRecords.records.recentEternities[6][4];
      player.records.recentEternities[6][5] = alphaRecords.records.recentEternities[6][5];
      player.records.recentEternities[7][0] = alphaRecords.records.recentEternities[7][0];
      player.records.recentEternities[7][1] = alphaRecords.records.recentEternities[7][1];
      player.records.recentEternities[7][2] = alphaRecords.records.recentEternities[7][2];
      player.records.recentEternities[7][3] = alphaRecords.records.recentEternities[7][3];
      player.records.recentEternities[7][4] = alphaRecords.records.recentEternities[7][4];
      player.records.recentEternities[7][5] = alphaRecords.records.recentEternities[7][5];
      player.records.recentEternities[8][0] = alphaRecords.records.recentEternities[8][0];
      player.records.recentEternities[8][1] = alphaRecords.records.recentEternities[8][1];
      player.records.recentEternities[8][2] = alphaRecords.records.recentEternities[8][2];
      player.records.recentEternities[8][3] = alphaRecords.records.recentEternities[8][3];
      player.records.recentEternities[8][4] = alphaRecords.records.recentEternities[8][4];
      player.records.recentEternities[8][5] = alphaRecords.records.recentEternities[8][5];
      player.records.recentEternities[9][0] = alphaRecords.records.recentEternities[9][0];
      player.records.recentEternities[9][1] = alphaRecords.records.recentEternities[9][1];
      player.records.recentEternities[9][2] = alphaRecords.records.recentEternities[9][2];
      player.records.recentEternities[9][3] = alphaRecords.records.recentEternities[9][3];
      player.records.recentEternities[9][4] = alphaRecords.records.recentEternities[9][4];
      player.records.recentEternities[9][5] = alphaRecords.records.recentEternities[9][5];
      player.records.thisInfinity.time = alphaRecords.records.thisInfinity.time;
      player.records.thisInfinity.realTime = alphaRecords.records.thisInfinity.realTime;
      player.records.thisInfinity.lastBuyTime = alphaRecords.records.thisInfinity.lastBuyTime;
      player.records.thisInfinity.maxAM = alphaRecords.records.thisInfinity.maxAM;
      player.records.thisInfinity.bestIPmin = alphaRecords.records.thisInfinity.bestIPmin;
      player.records.thisInfinity.bestIPminVal = alphaRecords.records.thisInfinity.bestIPminVal;
      player.records.bestInfinity.time = alphaRecords.records.bestInfinity.time;
      player.records.bestInfinity.realTime = alphaRecords.records.bestInfinity.realTime;
      player.records.bestInfinity.bestIPminEternity = alphaRecords.records.bestInfinity.bestIPminEternity;
      player.records.bestInfinity.bestIPminReality = alphaRecords.records.bestInfinity.bestIPminReality;
      player.records.thisEternity.time = alphaRecords.records.thisEternity.time;
      player.records.thisEternity.realTime = alphaRecords.records.thisEternity.realTime;
      player.records.thisEternity.maxAM = alphaRecords.records.thisEternity.maxAM;
      player.records.thisEternity.maxIP = alphaRecords.records.thisEternity.maxIP;
      player.records.thisEternity.bestIPMsWithoutMaxAll = alphaRecords.records.thisEternity.bestIPMsWithoutMaxAll;
      player.records.thisEternity.bestEPmin = alphaRecords.records.thisEternity.bestEPmin;
      player.records.thisEternity.bestEPminVal = alphaRecords.records.thisEternity.bestEPminVal;
      player.records.thisEternity.bestInfinitiesPerMs = alphaRecords.records.thisEternity.bestInfinitiesPerMs;
      player.records.bestEternity.time = alphaRecords.records.bestEternity.time;
      player.records.bestEternity.realTime = alphaRecords.records.bestEternity.realTime;
      player.records.bestEternity.bestEPminReality = alphaRecords.records.bestEternity.bestEPminReality;
      player.IPMultPurchases = alphaRecords.IPMultPurchases;
      player.infinityPower = alphaRecords.infinityPower;
      player.postC4Tier = alphaRecords.postC4Tier;
      player.eternityPoints = alphaRecords.eternityPoints;
      player.eternities = alphaRecords.eternities;
      player.eternityUpgrades = new Set(alphaRecords.eternityUpgrades);
      player.epmultUpgrades = alphaRecords.epmultUpgrades;
      player.timeShards = alphaRecords.timeShards;
      player.totalTickGained = alphaRecords.totalTickGained;
      player.totalTickBought = alphaRecords.totalTickBought;
      player.replicanti.unl = alphaRecords.replicanti.unl;
      player.replicanti.amount = alphaRecords.replicanti.amount;
      player.replicanti.chance = alphaRecords.replicanti.chance;
      player.replicanti.chanceCost = alphaRecords.replicanti.chanceCost;
      player.replicanti.interval = alphaRecords.replicanti.interval;
      player.replicanti.intervalCost = alphaRecords.replicanti.intervalCost;
      player.replicanti.boughtGalaxyCap = alphaRecords.replicanti.boughtGalaxyCap;
      player.replicanti.galaxies = alphaRecords.replicanti.galaxies;
      player.replicanti.galCost = alphaRecords.replicanti.galCost;
      player.timestudy.theorem = alphaRecords.timestudy.theorem;
      player.timestudy.maxTheorem = alphaRecords.timestudy.maxTheorem;
      player.timestudy.amBought = alphaRecords.timestudy.amBought;
      player.timestudy.ipBought = alphaRecords.timestudy.ipBought;
      player.timestudy.epBought = alphaRecords.timestudy.epBought;
      for (x = 0; x < 305; x++) {
        if (alphaRecords.timestudy.studies.includes(x)) {
          player.timestudy.theorem = player.timestudy.theorem.add(TimeStudy(x).cost);
          TimeStudy(x).purchase();
        }
      }
      player.eternityChalls.eterc1 = alphaRecords.eternityChalls.eterc1;
      player.eternityChalls.eterc2 = alphaRecords.eternityChalls.eterc2;
      player.eternityChalls.eterc3 = alphaRecords.eternityChalls.eterc3;
      player.eternityChalls.eterc4 = alphaRecords.eternityChalls.eterc4;
      player.eternityChalls.eterc5 = alphaRecords.eternityChalls.eterc5;
      player.eternityChalls.eterc6 = alphaRecords.eternityChalls.eterc6;
      player.eternityChalls.eterc7 = alphaRecords.eternityChalls.eterc7;
      player.eternityChalls.eterc8 = alphaRecords.eternityChalls.eterc8;
      player.eternityChalls.eterc9 = alphaRecords.eternityChalls.eterc9;
      player.eternityChalls.eterc10 = alphaRecords.eternityChalls.eterc10;
      player.eternityChalls.eterc11 = alphaRecords.eternityChalls.eterc11;
      player.eternityChalls.eterc12 = alphaRecords.eternityChalls.eterc12;
      player.respec = alphaRecords.respec;
      player.eterc8ids = alphaRecords.eterc8ids;
      player.eterc8repl = alphaRecords.eterc8repl;
      for (x = 0; x < 7; x++) {
        if (alphaRecords.dilation.studies.includes(x)) {
          player.timestudy.theorem = player.timestudy.theorem.add(DilationTimeStudyState.studies[x].cost);
          DilationTimeStudyState.studies[x].purchase();
        }
      }
      player.dilation.active = alphaRecords.dilation.active;
      player.dilation.tachyonParticles = alphaRecords.dilation.tachyonParticles;
      player.dilation.dilatedTime = alphaRecords.dilation.dilatedTime;
      player.dilation.nextThreshold = alphaRecords.dilation.nextThreshold;
      player.dilation.baseTachyonGalaxies = alphaRecords.dilation.baseTachyonGalaxies;
      player.dilation.totalTachyonGalaxies = alphaRecords.dilation.totalTachyonGalaxies;
      player.dilation.upgrades = new Set(alphaRecords.dilation.upgrades);
      player.dilation.rebuyables[1] = alphaRecords.dilation.rebuyables[1];
      player.dilation.rebuyables[2] = alphaRecords.dilation.rebuyables[2];
      player.dilation.rebuyables[3] = alphaRecords.dilation.rebuyables[3];
      player.dilation.rebuyables[11] = alphaRecords.dilation.rebuyables[11];
      player.dilation.rebuyables[12] = alphaRecords.dilation.rebuyables[12];
      player.dilation.rebuyables[13] = alphaRecords.dilation.rebuyables[13];
      player.dilation.lastEP = alphaRecords.dilation.lastEP;
    }
  },
  escapeTheMatrix() {
    alphaRecords.antimatter = player.antimatter;
    alphaRecords.dimensions.antimatter[0].bought = player.dimensions.antimatter[0].bought;
    alphaRecords.dimensions.antimatter[0].costBumps = player.dimensions.antimatter[0].costBumps;
    alphaRecords.dimensions.antimatter[0].amount = player.dimensions.antimatter[0].amount;
    alphaRecords.dimensions.antimatter[1].bought = player.dimensions.antimatter[1].bought;
    alphaRecords.dimensions.antimatter[1].costBumps = player.dimensions.antimatter[1].costBumps;
    alphaRecords.dimensions.antimatter[1].amount = player.dimensions.antimatter[1].amount;
    alphaRecords.dimensions.antimatter[2].bought = player.dimensions.antimatter[2].bought;
    alphaRecords.dimensions.antimatter[2].costBumps = player.dimensions.antimatter[2].costBumps;
    alphaRecords.dimensions.antimatter[2].amount = player.dimensions.antimatter[2].amount;
    alphaRecords.dimensions.antimatter[3].bought = player.dimensions.antimatter[3].bought;
    alphaRecords.dimensions.antimatter[3].costBumps = player.dimensions.antimatter[3].costBumps;
    alphaRecords.dimensions.antimatter[3].amount = player.dimensions.antimatter[3].amount;
    alphaRecords.dimensions.antimatter[4].bought = player.dimensions.antimatter[4].bought;
    alphaRecords.dimensions.antimatter[4].costBumps = player.dimensions.antimatter[4].costBumps;
    alphaRecords.dimensions.antimatter[4].amount = player.dimensions.antimatter[4].amount;
    alphaRecords.dimensions.antimatter[5].bought = player.dimensions.antimatter[5].bought;
    alphaRecords.dimensions.antimatter[5].costBumps = player.dimensions.antimatter[5].costBumps;
    alphaRecords.dimensions.antimatter[5].amount = player.dimensions.antimatter[5].amount;
    alphaRecords.dimensions.antimatter[6].bought = player.dimensions.antimatter[6].bought;
    alphaRecords.dimensions.antimatter[6].costBumps = player.dimensions.antimatter[6].costBumps;
    alphaRecords.dimensions.antimatter[6].amount = player.dimensions.antimatter[6].amount;
    alphaRecords.dimensions.antimatter[7].bought = player.dimensions.antimatter[7].bought;
    alphaRecords.dimensions.antimatter[7].costBumps = player.dimensions.antimatter[7].costBumps;
    alphaRecords.dimensions.antimatter[7].amount = player.dimensions.antimatter[7].amount;
    alphaRecords.dimensions.infinity[0].isUnlocked = player.dimensions.infinity[0].isUnlocked;
    alphaRecords.dimensions.infinity[0].bought = player.dimensions.infinity[0].bought;
    alphaRecords.dimensions.infinity[0].amount = player.dimensions.infinity[0].amount;
    alphaRecords.dimensions.infinity[0].cost = player.dimensions.infinity[0].cost;
    alphaRecords.dimensions.infinity[0].baseAmount = player.dimensions.infinity[0].baseAmount;
    alphaRecords.dimensions.infinity[1].isUnlocked = player.dimensions.infinity[1].isUnlocked;
    alphaRecords.dimensions.infinity[1].bought = player.dimensions.infinity[1].bought;
    alphaRecords.dimensions.infinity[1].amount = player.dimensions.infinity[1].amount;
    alphaRecords.dimensions.infinity[1].cost = player.dimensions.infinity[1].cost;
    alphaRecords.dimensions.infinity[1].baseAmount = player.dimensions.infinity[1].baseAmount;
    alphaRecords.dimensions.infinity[2].isUnlocked = player.dimensions.infinity[2].isUnlocked;
    alphaRecords.dimensions.infinity[2].bought = player.dimensions.infinity[2].bought;
    alphaRecords.dimensions.infinity[2].amount = player.dimensions.infinity[2].amount;
    alphaRecords.dimensions.infinity[2].cost = player.dimensions.infinity[2].cost;
    alphaRecords.dimensions.infinity[2].baseAmount = player.dimensions.infinity[2].baseAmount;
    alphaRecords.dimensions.infinity[3].isUnlocked = player.dimensions.infinity[3].isUnlocked;
    alphaRecords.dimensions.infinity[3].bought = player.dimensions.infinity[3].bought;
    alphaRecords.dimensions.infinity[3].amount = player.dimensions.infinity[3].amount;
    alphaRecords.dimensions.infinity[3].cost = player.dimensions.infinity[3].cost;
    alphaRecords.dimensions.infinity[3].baseAmount = player.dimensions.infinity[3].baseAmount;
    alphaRecords.dimensions.infinity[4].isUnlocked = player.dimensions.infinity[4].isUnlocked;
    alphaRecords.dimensions.infinity[4].bought = player.dimensions.infinity[4].bought;
    alphaRecords.dimensions.infinity[4].amount = player.dimensions.infinity[4].amount;
    alphaRecords.dimensions.infinity[4].cost = player.dimensions.infinity[4].cost;
    alphaRecords.dimensions.infinity[4].baseAmount = player.dimensions.infinity[4].baseAmount;
    alphaRecords.dimensions.infinity[5].isUnlocked = player.dimensions.infinity[5].isUnlocked;
    alphaRecords.dimensions.infinity[5].bought = player.dimensions.infinity[5].bought;
    alphaRecords.dimensions.infinity[5].amount = player.dimensions.infinity[5].amount;
    alphaRecords.dimensions.infinity[5].cost = player.dimensions.infinity[5].cost;
    alphaRecords.dimensions.infinity[5].baseAmount = player.dimensions.infinity[5].baseAmount;
    alphaRecords.dimensions.infinity[6].isUnlocked = player.dimensions.infinity[6].isUnlocked;
    alphaRecords.dimensions.infinity[6].bought = player.dimensions.infinity[6].bought;
    alphaRecords.dimensions.infinity[6].amount = player.dimensions.infinity[6].amount;
    alphaRecords.dimensions.infinity[6].cost = player.dimensions.infinity[6].cost;
    alphaRecords.dimensions.infinity[6].baseAmount = player.dimensions.infinity[6].baseAmount;
    alphaRecords.dimensions.infinity[7].isUnlocked = player.dimensions.infinity[7].isUnlocked;
    alphaRecords.dimensions.infinity[7].bought = player.dimensions.infinity[7].bought;
    alphaRecords.dimensions.infinity[7].amount = player.dimensions.infinity[7].amount;
    alphaRecords.dimensions.infinity[7].cost = player.dimensions.infinity[7].cost;
    alphaRecords.dimensions.infinity[7].baseAmount = player.dimensions.infinity[7].baseAmount;
    alphaRecords.dimensions.time[0].cost = player.dimensions.time[0].cost;
    alphaRecords.dimensions.time[0].amount = player.dimensions.time[0].amount;
    alphaRecords.dimensions.time[0].bought = player.dimensions.time[0].bought;
    alphaRecords.dimensions.time[1].cost = player.dimensions.time[1].cost;
    alphaRecords.dimensions.time[1].amount = player.dimensions.time[1].amount;
    alphaRecords.dimensions.time[1].bought = player.dimensions.time[1].bought;
    alphaRecords.dimensions.time[2].cost = player.dimensions.time[2].cost;
    alphaRecords.dimensions.time[2].amount = player.dimensions.time[2].amount;
    alphaRecords.dimensions.time[2].bought = player.dimensions.time[2].bought;
    alphaRecords.dimensions.time[3].cost = player.dimensions.time[3].cost;
    alphaRecords.dimensions.time[3].amount = player.dimensions.time[3].amount;
    alphaRecords.dimensions.time[3].bought = player.dimensions.time[3].bought;
    alphaRecords.dimensions.time[4].cost = player.dimensions.time[4].cost;
    alphaRecords.dimensions.time[4].amount = player.dimensions.time[4].amount;
    alphaRecords.dimensions.time[4].bought = player.dimensions.time[4].bought;
    alphaRecords.dimensions.time[5].cost = player.dimensions.time[5].cost;
    alphaRecords.dimensions.time[5].amount = player.dimensions.time[5].amount;
    alphaRecords.dimensions.time[5].bought = player.dimensions.time[5].bought;
    alphaRecords.dimensions.time[6].cost = player.dimensions.time[6].cost;
    alphaRecords.dimensions.time[6].amount = player.dimensions.time[6].amount;
    alphaRecords.dimensions.time[6].bought = player.dimensions.time[6].bought;
    alphaRecords.dimensions.time[7].cost = player.dimensions.time[7].cost;
    alphaRecords.dimensions.time[7].amount = player.dimensions.time[7].amount;
    alphaRecords.dimensions.time[7].bought = player.dimensions.time[7].bought;
    alphaRecords.buyUntil10 = player.buyUntil10;
    alphaRecords.sacrificed = player.sacrificed;
    alphaRecords.infinityUpgrades = new Set(player.infinityUpgrades);
    alphaRecords.infinityRebuyables[0] = player.infinityRebuyables[0];
    alphaRecords.infinityRebuyables[1] = player.infinityRebuyables[1];
    alphaRecords.infinityRebuyables[2] = player.infinityRebuyables[2];
    alphaRecords.challenge.normal.current = player.challenge.normal.current;
    alphaRecords.challenge.normal.bestTimes[0] = player.challenge.normal.bestTimes[0];
    alphaRecords.challenge.normal.bestTimes[1] = player.challenge.normal.bestTimes[1];
    alphaRecords.challenge.normal.bestTimes[2] = player.challenge.normal.bestTimes[2];
    alphaRecords.challenge.normal.bestTimes[3] = player.challenge.normal.bestTimes[3];
    alphaRecords.challenge.normal.bestTimes[4] = player.challenge.normal.bestTimes[4];
    alphaRecords.challenge.normal.bestTimes[5] = player.challenge.normal.bestTimes[5];
    alphaRecords.challenge.normal.bestTimes[6] = player.challenge.normal.bestTimes[6];
    alphaRecords.challenge.normal.bestTimes[7] = player.challenge.normal.bestTimes[7];
    alphaRecords.challenge.normal.bestTimes[8] = player.challenge.normal.bestTimes[8];
    alphaRecords.challenge.normal.bestTimes[9] = player.challenge.normal.bestTimes[9];
    alphaRecords.challenge.normal.bestTimes[10] = player.challenge.normal.bestTimes[10];
    alphaRecords.challenge.normal.completedBits = player.challenge.normal.completedBits;
    alphaRecords.challenge.infinity.current = player.challenge.infinity.current;
    alphaRecords.challenge.infinity.bestTimes[0] = player.challenge.infinity.bestTimes[0];
    alphaRecords.challenge.infinity.bestTimes[1] = player.challenge.infinity.bestTimes[1];
    alphaRecords.challenge.infinity.bestTimes[2] = player.challenge.infinity.bestTimes[2];
    alphaRecords.challenge.infinity.bestTimes[3] = player.challenge.infinity.bestTimes[3];
    alphaRecords.challenge.infinity.bestTimes[4] = player.challenge.infinity.bestTimes[4];
    alphaRecords.challenge.infinity.bestTimes[5] = player.challenge.infinity.bestTimes[5];
    alphaRecords.challenge.infinity.bestTimes[6] = player.challenge.infinity.bestTimes[6];
    alphaRecords.challenge.infinity.bestTimes[7] = player.challenge.infinity.bestTimes[7];
    alphaRecords.challenge.infinity.completedBits = player.challenge.infinity.completedBits;
    alphaRecords.challenge.eternity.current = player.challenge.eternity.current;
    alphaRecords.challenge.eternity.unlocked = player.challenge.eternity.unlocked;
    alphaRecords.challenge.eternity.requirementBits = player.challenge.eternity.requirementBits;
    alphaRecords.infinity.upgradeBits = player.infinity.upgradeBits;
    alphaRecords.auto.autobuyersOn = player.auto.autobuyersOn;
    alphaRecords.auto.disableContinuum = player.auto.disableContinuum;
    alphaRecords.auto.eternity.amount = player.auto.eternity.amount;
    alphaRecords.auto.eternity.increaseWithMult = player.auto.eternity.increaseWithMult;
    alphaRecords.auto.eternity.time = player.auto.eternity.time;
    alphaRecords.auto.eternity.xHighest = player.auto.eternity.xHighest;
    alphaRecords.auto.eternity.isActive = player.auto.eternity.isActive;
    alphaRecords.auto.bigCrunch.cost = player.auto.bigCrunch.cost;
    alphaRecords.auto.bigCrunch.interval = player.auto.bigCrunch.interval;
    alphaRecords.auto.bigCrunch.mode = player.auto.bigCrunch.mode;
    alphaRecords.auto.bigCrunch.amount = player.auto.bigCrunch.amount;
    alphaRecords.auto.bigCrunch.increaseWithMult = player.auto.bigCrunch.increaseWithMult;
    alphaRecords.auto.bigCrunch.time = player.auto.bigCrunch.time;
    alphaRecords.auto.bigCrunch.xHighest = player.auto.bigCrunch.xHighest;
    alphaRecords.auto.bigCrunch.isActive = player.auto.bigCrunch.isActive;
    alphaRecords.auto.bigCrunch.lastTick = player.auto.bigCrunch.lastTick;
    alphaRecords.auto.galaxy.cost = player.auto.galaxy.cost;
    alphaRecords.auto.galaxy.interval = player.auto.galaxy.interval;
    alphaRecords.auto.galaxy.limitGalaxies = player.auto.galaxy.limitGalaxies;
    alphaRecords.auto.galaxy.maxGalaxies = player.auto.galaxy.maxGalaxies;
    alphaRecords.auto.galaxy.buyMax = player.auto.galaxy.buyMax;
    alphaRecords.auto.galaxy.buyMaxInterval = player.auto.galaxy.buyMaxInterval;
    alphaRecords.auto.galaxy.isActive = player.auto.galaxy.isActive;
    alphaRecords.auto.galaxy.lastTick = player.auto.galaxy.lastTick;
    alphaRecords.auto.dimBoost.cost = player.auto.dimBoost.cost;
    alphaRecords.auto.dimBoost.interval = player.auto.dimBoost.interval;
    alphaRecords.auto.dimBoost.limitDimBoosts = player.auto.dimBoost.limitDimBoosts;
    alphaRecords.auto.dimBoost.maxDimBoosts = player.auto.dimBoost.maxDimBoosts;
    alphaRecords.auto.dimBoost.limitUntilGalaxies = player.auto.dimBoost.limitUntilGalaxies;
    alphaRecords.auto.dimBoost.galaxies = player.auto.dimBoost.galaxies;
    alphaRecords.auto.dimBoost.buyMaxInterval = player.auto.dimBoost.buyMaxInterval;
    alphaRecords.auto.dimBoost.isActive = player.auto.dimBoost.isActive;
    alphaRecords.auto.dimBoost.lastTick = player.auto.dimBoost.lastTick;
    alphaRecords.auto.tickspeed.isUnlocked = player.auto.tickspeed.isUnlocked;
    alphaRecords.auto.tickspeed.cost = player.auto.tickspeed.cost;
    alphaRecords.auto.tickspeed.interval = player.auto.tickspeed.interval;
    alphaRecords.auto.tickspeed.mode = player.auto.tickspeed.mode;
    alphaRecords.auto.tickspeed.isActive = player.auto.tickspeed.isActive;
    alphaRecords.auto.tickspeed.lastTick = player.auto.tickspeed.lastTick;
    alphaRecords.auto.tickspeed.isBought = player.auto.tickspeed.isBought;
    alphaRecords.auto.sacrifice.multiplier = player.auto.sacrifice.multiplier;
    alphaRecords.auto.sacrifice.isActive = player.auto.sacrifice.isActive;
    alphaRecords.auto.antimatterDims.all[0].isUnlocked = player.auto.antimatterDims.all[0].isUnlocked;
    alphaRecords.auto.antimatterDims.all[0].cost = player.auto.antimatterDims.all[0].cost;
    alphaRecords.auto.antimatterDims.all[0].interval = player.auto.antimatterDims.all[0].interval;
    alphaRecords.auto.antimatterDims.all[0].bulk = player.auto.antimatterDims.all[0].bulk;
    alphaRecords.auto.antimatterDims.all[0].mode = player.auto.antimatterDims.all[0].mode;
    alphaRecords.auto.antimatterDims.all[0].isActive = player.auto.antimatterDims.all[0].isActive;
    alphaRecords.auto.antimatterDims.all[0].lastTick = player.auto.antimatterDims.all[0].lastTick;
    alphaRecords.auto.antimatterDims.all[0].isBought = player.auto.antimatterDims.all[0].isBought;
    alphaRecords.auto.antimatterDims.all[1].isUnlocked = player.auto.antimatterDims.all[1].isUnlocked;
    alphaRecords.auto.antimatterDims.all[1].cost = player.auto.antimatterDims.all[1].cost;
    alphaRecords.auto.antimatterDims.all[1].interval = player.auto.antimatterDims.all[1].interval;
    alphaRecords.auto.antimatterDims.all[1].bulk = player.auto.antimatterDims.all[1].bulk;
    alphaRecords.auto.antimatterDims.all[1].mode = player.auto.antimatterDims.all[1].mode;
    alphaRecords.auto.antimatterDims.all[1].isActive = player.auto.antimatterDims.all[1].isActive;
    alphaRecords.auto.antimatterDims.all[1].lastTick = player.auto.antimatterDims.all[1].lastTick;
    alphaRecords.auto.antimatterDims.all[1].isBought = player.auto.antimatterDims.all[1].isBought;
    alphaRecords.auto.antimatterDims.all[2].isUnlocked = player.auto.antimatterDims.all[2].isUnlocked;
    alphaRecords.auto.antimatterDims.all[2].cost = player.auto.antimatterDims.all[2].cost;
    alphaRecords.auto.antimatterDims.all[2].interval = player.auto.antimatterDims.all[2].interval;
    alphaRecords.auto.antimatterDims.all[2].bulk = player.auto.antimatterDims.all[2].bulk;
    alphaRecords.auto.antimatterDims.all[2].mode = player.auto.antimatterDims.all[2].mode;
    alphaRecords.auto.antimatterDims.all[2].isActive = player.auto.antimatterDims.all[2].isActive;
    alphaRecords.auto.antimatterDims.all[2].lastTick = player.auto.antimatterDims.all[2].lastTick;
    alphaRecords.auto.antimatterDims.all[2].isBought = player.auto.antimatterDims.all[2].isBought;
    alphaRecords.auto.antimatterDims.all[3].isUnlocked = player.auto.antimatterDims.all[3].isUnlocked;
    alphaRecords.auto.antimatterDims.all[3].cost = player.auto.antimatterDims.all[3].cost;
    alphaRecords.auto.antimatterDims.all[3].interval = player.auto.antimatterDims.all[3].interval;
    alphaRecords.auto.antimatterDims.all[3].bulk = player.auto.antimatterDims.all[3].bulk;
    alphaRecords.auto.antimatterDims.all[3].mode = player.auto.antimatterDims.all[3].mode;
    alphaRecords.auto.antimatterDims.all[3].isActive = player.auto.antimatterDims.all[3].isActive;
    alphaRecords.auto.antimatterDims.all[3].lastTick = player.auto.antimatterDims.all[3].lastTick;
    alphaRecords.auto.antimatterDims.all[3].isBought = player.auto.antimatterDims.all[3].isBought;
    alphaRecords.auto.antimatterDims.all[4].isUnlocked = player.auto.antimatterDims.all[4].isUnlocked;
    alphaRecords.auto.antimatterDims.all[4].cost = player.auto.antimatterDims.all[4].cost;
    alphaRecords.auto.antimatterDims.all[4].interval = player.auto.antimatterDims.all[4].interval;
    alphaRecords.auto.antimatterDims.all[4].bulk = player.auto.antimatterDims.all[4].bulk;
    alphaRecords.auto.antimatterDims.all[4].mode = player.auto.antimatterDims.all[4].mode;
    alphaRecords.auto.antimatterDims.all[4].isActive = player.auto.antimatterDims.all[4].isActive;
    alphaRecords.auto.antimatterDims.all[4].lastTick = player.auto.antimatterDims.all[4].lastTick;
    alphaRecords.auto.antimatterDims.all[4].isBought = player.auto.antimatterDims.all[4].isBought;
    alphaRecords.auto.antimatterDims.all[5].isUnlocked = player.auto.antimatterDims.all[5].isUnlocked;
    alphaRecords.auto.antimatterDims.all[5].cost = player.auto.antimatterDims.all[5].cost;
    alphaRecords.auto.antimatterDims.all[5].interval = player.auto.antimatterDims.all[5].interval;
    alphaRecords.auto.antimatterDims.all[5].bulk = player.auto.antimatterDims.all[5].bulk;
    alphaRecords.auto.antimatterDims.all[5].mode = player.auto.antimatterDims.all[5].mode;
    alphaRecords.auto.antimatterDims.all[5].isActive = player.auto.antimatterDims.all[5].isActive;
    alphaRecords.auto.antimatterDims.all[5].lastTick = player.auto.antimatterDims.all[5].lastTick;
    alphaRecords.auto.antimatterDims.all[5].isBought = player.auto.antimatterDims.all[5].isBought;
    alphaRecords.auto.antimatterDims.all[6].isUnlocked = player.auto.antimatterDims.all[6].isUnlocked;
    alphaRecords.auto.antimatterDims.all[6].cost = player.auto.antimatterDims.all[6].cost;
    alphaRecords.auto.antimatterDims.all[6].interval = player.auto.antimatterDims.all[6].interval;
    alphaRecords.auto.antimatterDims.all[6].bulk = player.auto.antimatterDims.all[6].bulk;
    alphaRecords.auto.antimatterDims.all[6].mode = player.auto.antimatterDims.all[6].mode;
    alphaRecords.auto.antimatterDims.all[6].isActive = player.auto.antimatterDims.all[6].isActive;
    alphaRecords.auto.antimatterDims.all[6].lastTick = player.auto.antimatterDims.all[6].lastTick;
    alphaRecords.auto.antimatterDims.all[6].isBought = player.auto.antimatterDims.all[6].isBought;
    alphaRecords.auto.antimatterDims.all[7].isUnlocked = player.auto.antimatterDims.all[7].isUnlocked;
    alphaRecords.auto.antimatterDims.all[7].cost = player.auto.antimatterDims.all[7].cost;
    alphaRecords.auto.antimatterDims.all[7].interval = player.auto.antimatterDims.all[7].interval;
    alphaRecords.auto.antimatterDims.all[7].bulk = player.auto.antimatterDims.all[7].bulk;
    alphaRecords.auto.antimatterDims.all[7].mode = player.auto.antimatterDims.all[7].mode;
    alphaRecords.auto.antimatterDims.all[7].isActive = player.auto.antimatterDims.all[7].isActive;
    alphaRecords.auto.antimatterDims.all[7].lastTick = player.auto.antimatterDims.all[7].lastTick;
    alphaRecords.auto.antimatterDims.all[7].isBought = player.auto.antimatterDims.all[7].isBought;
    alphaRecords.auto.antimatterDims.isActive = player.auto.antimatterDims.isActive;
    alphaRecords.auto.infinityDims.all[0].isActive = player.auto.infinityDims.all[0].isActive;
    alphaRecords.auto.infinityDims.all[0].lastTick = player.auto.infinityDims.all[0].lastTick;
    alphaRecords.auto.infinityDims.all[1].isActive = player.auto.infinityDims.all[1].isActive;
    alphaRecords.auto.infinityDims.all[1].lastTick = player.auto.infinityDims.all[1].lastTick;
    alphaRecords.auto.infinityDims.all[2].isActive = player.auto.infinityDims.all[2].isActive;
    alphaRecords.auto.infinityDims.all[2].lastTick = player.auto.infinityDims.all[2].lastTick;
    alphaRecords.auto.infinityDims.all[3].isActive = player.auto.infinityDims.all[3].isActive;
    alphaRecords.auto.infinityDims.all[3].lastTick = player.auto.infinityDims.all[3].lastTick;
    alphaRecords.auto.infinityDims.all[4].isActive = player.auto.infinityDims.all[4].isActive;
    alphaRecords.auto.infinityDims.all[4].lastTick = player.auto.infinityDims.all[4].lastTick;
    alphaRecords.auto.infinityDims.all[5].isActive = player.auto.infinityDims.all[5].isActive;
    alphaRecords.auto.infinityDims.all[5].lastTick = player.auto.infinityDims.all[5].lastTick;
    alphaRecords.auto.infinityDims.all[6].isActive = player.auto.infinityDims.all[6].isActive;
    alphaRecords.auto.infinityDims.all[6].lastTick = player.auto.infinityDims.all[6].lastTick;
    alphaRecords.auto.infinityDims.all[7].isActive = player.auto.infinityDims.all[7].isActive;
    alphaRecords.auto.infinityDims.all[7].lastTick = player.auto.infinityDims.all[7].lastTick;
    alphaRecords.auto.infinityDims.isActive = player.auto.infinityDims.isActive;
    alphaRecords.auto.replicantiGalaxies.isActive = player.auto.replicantiGalaxies.isActive;
    alphaRecords.auto.replicantiUpgrades.all[0].isActive = player.auto.replicantiUpgrades.all[0].isActive;
    alphaRecords.auto.replicantiUpgrades.all[0].lastTick = player.auto.replicantiUpgrades.all[0].lastTick;
    alphaRecords.auto.replicantiUpgrades.all[1].isActive = player.auto.replicantiUpgrades.all[1].isActive;
    alphaRecords.auto.replicantiUpgrades.all[1].lastTick = player.auto.replicantiUpgrades.all[1].lastTick;
    alphaRecords.auto.replicantiUpgrades.all[2].isActive = player.auto.replicantiUpgrades.all[2].isActive;
    alphaRecords.auto.replicantiUpgrades.all[2].lastTick = player.auto.replicantiUpgrades.all[2].lastTick;
    alphaRecords.auto.replicantiUpgrades.isActive = player.auto.replicantiUpgrades.isActive;
    alphaRecords.auto.ipMultBuyer.isActive = player.auto.ipMultBuyer.isActive;
    alphaRecords.infinityPoints = player.infinityPoints;
    alphaRecords.infinities = player.infinities;
    alphaRecords.infinitiesBanked = player.infinitiesBanked;
    alphaRecords.dimensionBoosts = player.dimensionBoosts;
    alphaRecords.galaxies = player.galaxies;
    alphaRecords.chall2Pow = player.chall2Pow;
    alphaRecords.chall3Pow = player.chall3Pow;
    alphaRecords.matter = player.matter;
    alphaRecords.chall9TickspeedCostBumps = player.chall9TickspeedCostBumps;
    alphaRecords.chall8TotalSacrifice = player.chall8TotalSacrifice;
    alphaRecords.ic2Count = player.ic2Count;
    alphaRecords.partInfinityPoint = player.partInfinityPoint;
    alphaRecords.partInfinitied = player.partInfinitied;
    alphaRecords.break = player.break;
    alphaRecords.requirementChecks.infinity.maxAll = player.requirementChecks.infinity.maxAll;
    alphaRecords.requirementChecks.infinity.noSacrifice = player.requirementChecks.infinity.noSacrifice;
    alphaRecords.requirementChecks.infinity.noAD8 = player.requirementChecks.infinity.noAD8;
    alphaRecords.requirementChecks.eternity.onlyAD1 = player.requirementChecks.eternity.onlyAD1;
    alphaRecords.requirementChecks.eternity.onlyAD8 = player.requirementChecks.eternity.onlyAD8;
    alphaRecords.requirementChecks.eternity.noAD1 = player.requirementChecks.eternity.noAD1;
    alphaRecords.requirementChecks.eternity.noRG = player.requirementChecks.eternity.noRG;
    alphaRecords.records.totalTimePlayed = player.records.totalTimePlayed;
    alphaRecords.records.totalEndgameAntimatter = player.records.totalEndgameAntimatter;
    alphaRecords.records.totalRealityAntimatter = player.records.totalRealityAntimatter;
    alphaRecords.records.totalEternityAntimatter = player.records.totalEternityAntimatter;
    alphaRecords.records.totalInfinityAntimatter = player.records.totalInfinityAntimatter;
    alphaRecords.records.recentInfinities[0][0] = player.records.recentInfinities[0][0];
    alphaRecords.records.recentInfinities[0][1] = player.records.recentInfinities[0][1];
    alphaRecords.records.recentInfinities[0][2] = player.records.recentInfinities[0][2];
    alphaRecords.records.recentInfinities[0][3] = player.records.recentInfinities[0][3];
    alphaRecords.records.recentInfinities[0][4] = player.records.recentInfinities[0][4];
    alphaRecords.records.recentInfinities[1][0] = player.records.recentInfinities[1][0];
    alphaRecords.records.recentInfinities[1][1] = player.records.recentInfinities[1][1];
    alphaRecords.records.recentInfinities[1][2] = player.records.recentInfinities[1][2];
    alphaRecords.records.recentInfinities[1][3] = player.records.recentInfinities[1][3];
    alphaRecords.records.recentInfinities[1][4] = player.records.recentInfinities[1][4];
    alphaRecords.records.recentInfinities[2][0] = player.records.recentInfinities[2][0];
    alphaRecords.records.recentInfinities[2][1] = player.records.recentInfinities[2][1];
    alphaRecords.records.recentInfinities[2][2] = player.records.recentInfinities[2][2];
    alphaRecords.records.recentInfinities[2][3] = player.records.recentInfinities[2][3];
    alphaRecords.records.recentInfinities[2][4] = player.records.recentInfinities[2][4];
    alphaRecords.records.recentInfinities[3][0] = player.records.recentInfinities[3][0];
    alphaRecords.records.recentInfinities[3][1] = player.records.recentInfinities[3][1];
    alphaRecords.records.recentInfinities[3][2] = player.records.recentInfinities[3][2];
    alphaRecords.records.recentInfinities[3][3] = player.records.recentInfinities[3][3];
    alphaRecords.records.recentInfinities[3][4] = player.records.recentInfinities[3][4];
    alphaRecords.records.recentInfinities[4][0] = player.records.recentInfinities[4][0];
    alphaRecords.records.recentInfinities[4][1] = player.records.recentInfinities[4][1];
    alphaRecords.records.recentInfinities[4][2] = player.records.recentInfinities[4][2];
    alphaRecords.records.recentInfinities[4][3] = player.records.recentInfinities[4][3];
    alphaRecords.records.recentInfinities[4][4] = player.records.recentInfinities[4][4];
    alphaRecords.records.recentInfinities[5][0] = player.records.recentInfinities[5][0];
    alphaRecords.records.recentInfinities[5][1] = player.records.recentInfinities[5][1];
    alphaRecords.records.recentInfinities[5][2] = player.records.recentInfinities[5][2];
    alphaRecords.records.recentInfinities[5][3] = player.records.recentInfinities[5][3];
    alphaRecords.records.recentInfinities[5][4] = player.records.recentInfinities[5][4];
    alphaRecords.records.recentInfinities[6][0] = player.records.recentInfinities[6][0];
    alphaRecords.records.recentInfinities[6][1] = player.records.recentInfinities[6][1];
    alphaRecords.records.recentInfinities[6][2] = player.records.recentInfinities[6][2];
    alphaRecords.records.recentInfinities[6][3] = player.records.recentInfinities[6][3];
    alphaRecords.records.recentInfinities[6][4] = player.records.recentInfinities[6][4];
    alphaRecords.records.recentInfinities[7][0] = player.records.recentInfinities[7][0];
    alphaRecords.records.recentInfinities[7][1] = player.records.recentInfinities[7][1];
    alphaRecords.records.recentInfinities[7][2] = player.records.recentInfinities[7][2];
    alphaRecords.records.recentInfinities[7][3] = player.records.recentInfinities[7][3];
    alphaRecords.records.recentInfinities[7][4] = player.records.recentInfinities[7][4];
    alphaRecords.records.recentInfinities[8][0] = player.records.recentInfinities[8][0];
    alphaRecords.records.recentInfinities[8][1] = player.records.recentInfinities[8][1];
    alphaRecords.records.recentInfinities[8][2] = player.records.recentInfinities[8][2];
    alphaRecords.records.recentInfinities[8][3] = player.records.recentInfinities[8][3];
    alphaRecords.records.recentInfinities[8][4] = player.records.recentInfinities[8][4];
    alphaRecords.records.recentInfinities[9][0] = player.records.recentInfinities[9][0];
    alphaRecords.records.recentInfinities[9][1] = player.records.recentInfinities[9][1];
    alphaRecords.records.recentInfinities[9][2] = player.records.recentInfinities[9][2];
    alphaRecords.records.recentInfinities[9][3] = player.records.recentInfinities[9][3];
    alphaRecords.records.recentInfinities[9][4] = player.records.recentInfinities[9][4];
    alphaRecords.records.recentEternities[0][0] = player.records.recentEternities[0][0];
    alphaRecords.records.recentEternities[0][1] = player.records.recentEternities[0][1];
    alphaRecords.records.recentEternities[0][2] = player.records.recentEternities[0][2];
    alphaRecords.records.recentEternities[0][3] = player.records.recentEternities[0][3];
    alphaRecords.records.recentEternities[0][4] = player.records.recentEternities[0][4];
    alphaRecords.records.recentEternities[0][5] = player.records.recentEternities[0][5];
    alphaRecords.records.recentEternities[1][0] = player.records.recentEternities[1][0];
    alphaRecords.records.recentEternities[1][1] = player.records.recentEternities[1][1];
    alphaRecords.records.recentEternities[1][2] = player.records.recentEternities[1][2];
    alphaRecords.records.recentEternities[1][3] = player.records.recentEternities[1][3];
    alphaRecords.records.recentEternities[1][4] = player.records.recentEternities[1][4];
    alphaRecords.records.recentEternities[1][5] = player.records.recentEternities[1][5];
    alphaRecords.records.recentEternities[2][0] = player.records.recentEternities[2][0];
    alphaRecords.records.recentEternities[2][1] = player.records.recentEternities[2][1];
    alphaRecords.records.recentEternities[2][2] = player.records.recentEternities[2][2];
    alphaRecords.records.recentEternities[2][3] = player.records.recentEternities[2][3];
    alphaRecords.records.recentEternities[2][4] = player.records.recentEternities[2][4];
    alphaRecords.records.recentEternities[2][5] = player.records.recentEternities[2][5];
    alphaRecords.records.recentEternities[3][0] = player.records.recentEternities[3][0];
    alphaRecords.records.recentEternities[3][1] = player.records.recentEternities[3][1];
    alphaRecords.records.recentEternities[3][2] = player.records.recentEternities[3][2];
    alphaRecords.records.recentEternities[3][3] = player.records.recentEternities[3][3];
    alphaRecords.records.recentEternities[3][4] = player.records.recentEternities[3][4];
    alphaRecords.records.recentEternities[3][5] = player.records.recentEternities[3][5];
    alphaRecords.records.recentEternities[4][0] = player.records.recentEternities[4][0];
    alphaRecords.records.recentEternities[4][1] = player.records.recentEternities[4][1];
    alphaRecords.records.recentEternities[4][2] = player.records.recentEternities[4][2];
    alphaRecords.records.recentEternities[4][3] = player.records.recentEternities[4][3];
    alphaRecords.records.recentEternities[4][4] = player.records.recentEternities[4][4];
    alphaRecords.records.recentEternities[4][5] = player.records.recentEternities[4][5];
    alphaRecords.records.recentEternities[5][0] = player.records.recentEternities[5][0];
    alphaRecords.records.recentEternities[5][1] = player.records.recentEternities[5][1];
    alphaRecords.records.recentEternities[5][2] = player.records.recentEternities[5][2];
    alphaRecords.records.recentEternities[5][3] = player.records.recentEternities[5][3];
    alphaRecords.records.recentEternities[5][4] = player.records.recentEternities[5][4];
    alphaRecords.records.recentEternities[5][5] = player.records.recentEternities[5][5];
    alphaRecords.records.recentEternities[6][0] = player.records.recentEternities[6][0];
    alphaRecords.records.recentEternities[6][1] = player.records.recentEternities[6][1];
    alphaRecords.records.recentEternities[6][2] = player.records.recentEternities[6][2];
    alphaRecords.records.recentEternities[6][3] = player.records.recentEternities[6][3];
    alphaRecords.records.recentEternities[6][4] = player.records.recentEternities[6][4];
    alphaRecords.records.recentEternities[6][5] = player.records.recentEternities[6][5];
    alphaRecords.records.recentEternities[7][0] = player.records.recentEternities[7][0];
    alphaRecords.records.recentEternities[7][1] = player.records.recentEternities[7][1];
    alphaRecords.records.recentEternities[7][2] = player.records.recentEternities[7][2];
    alphaRecords.records.recentEternities[7][3] = player.records.recentEternities[7][3];
    alphaRecords.records.recentEternities[7][4] = player.records.recentEternities[7][4];
    alphaRecords.records.recentEternities[7][5] = player.records.recentEternities[7][5];
    alphaRecords.records.recentEternities[8][0] = player.records.recentEternities[8][0];
    alphaRecords.records.recentEternities[8][1] = player.records.recentEternities[8][1];
    alphaRecords.records.recentEternities[8][2] = player.records.recentEternities[8][2];
    alphaRecords.records.recentEternities[8][3] = player.records.recentEternities[8][3];
    alphaRecords.records.recentEternities[8][4] = player.records.recentEternities[8][4];
    alphaRecords.records.recentEternities[8][5] = player.records.recentEternities[8][5];
    alphaRecords.records.recentEternities[9][0] = player.records.recentEternities[9][0];
    alphaRecords.records.recentEternities[9][1] = player.records.recentEternities[9][1];
    alphaRecords.records.recentEternities[9][2] = player.records.recentEternities[9][2];
    alphaRecords.records.recentEternities[9][3] = player.records.recentEternities[9][3];
    alphaRecords.records.recentEternities[9][4] = player.records.recentEternities[9][4];
    alphaRecords.records.recentEternities[9][5] = player.records.recentEternities[9][5];
    alphaRecords.records.thisInfinity.time = player.records.thisInfinity.time;
    alphaRecords.records.thisInfinity.realTime = player.records.thisInfinity.realTime;
    alphaRecords.records.thisInfinity.lastBuyTime = player.records.thisInfinity.lastBuyTime;
    alphaRecords.records.thisInfinity.maxAM = player.records.thisInfinity.maxAM;
    alphaRecords.records.thisInfinity.bestIPmin = player.records.thisInfinity.bestIPmin;
    alphaRecords.records.thisInfinity.bestIPminVal = player.records.thisInfinity.bestIPminVal;
    alphaRecords.records.bestInfinity.time = player.records.bestInfinity.time;
    alphaRecords.records.bestInfinity.realTime = player.records.bestInfinity.realTime;
    alphaRecords.records.bestInfinity.bestIPminEternity = player.records.bestInfinity.bestIPminEternity;
    alphaRecords.records.bestInfinity.bestIPminReality = player.records.bestInfinity.bestIPminReality;
    alphaRecords.records.thisEternity.time = player.records.thisEternity.time;
    alphaRecords.records.thisEternity.realTime = player.records.thisEternity.realTime;
    alphaRecords.records.thisEternity.maxAM = player.records.thisEternity.maxAM;
    alphaRecords.records.thisEternity.maxIP = player.records.thisEternity.maxIP;
    alphaRecords.records.thisEternity.bestIPMsWithoutMaxAll = player.records.thisEternity.bestIPMsWithoutMaxAll;
    alphaRecords.records.thisEternity.bestEPmin = player.records.thisEternity.bestEPmin;
    alphaRecords.records.thisEternity.bestEPminVal = player.records.thisEternity.bestEPminVal;
    alphaRecords.records.thisEternity.bestInfinitiesPerMs = player.records.thisEternity.bestInfinitiesPerMs;
    alphaRecords.records.bestEternity.time = player.records.bestEternity.time;
    alphaRecords.records.bestEternity.realTime = player.records.bestEternity.realTime;
    alphaRecords.records.bestEternity.bestEPminReality = player.records.bestEternity.bestEPminReality;
    alphaRecords.IPMultPurchases = player.IPMultPurchases;
    alphaRecords.infinityPower = player.infinityPower;
    alphaRecords.postC4Tier = player.postC4Tier;
    alphaRecords.eternityPoints = player.eternityPoints;
    alphaRecords.eternities = player.eternities;
    alphaRecords.eternityUpgrades = new Set(player.eternityUpgrades);
    alphaRecords.epmultUpgrades = player.epmultUpgrades;
    alphaRecords.timeShards = player.timeShards;
    alphaRecords.totalTickGained = player.totalTickGained;
    alphaRecords.totalTickBought = player.totalTickBought;
    alphaRecords.replicanti.unl = player.replicanti.unl;
    alphaRecords.replicanti.amount = player.replicanti.amount;
    alphaRecords.replicanti.chance = player.replicanti.chance;
    alphaRecords.replicanti.chanceCost = player.replicanti.chanceCost;
    alphaRecords.replicanti.interval = player.replicanti.interval;
    alphaRecords.replicanti.intervalCost = player.replicanti.intervalCost;
    alphaRecords.replicanti.boughtGalaxyCap = player.replicanti.boughtGalaxyCap;
    alphaRecords.replicanti.galaxies = player.replicanti.galaxies;
    alphaRecords.replicanti.galCost = player.replicanti.galCost;
    alphaRecords.timestudy.theorem = player.timestudy.theorem;
    alphaRecords.timestudy.maxTheorem = player.timestudy.maxTheorem;
    alphaRecords.timestudy.amBought = player.timestudy.amBought;
    alphaRecords.timestudy.ipBought = player.timestudy.ipBought;
    alphaRecords.timestudy.epBought = player.timestudy.epBought;
    for (x = 0; x < 305; x++) {
      if (TimeStudy(x)) {
        if (TimeStudy(x).isBought) {
          alphaRecords.timestudy.studies.push(x);
        }
      }
    }
    alphaRecords.eternityChalls.eterc1 = player.eternityChalls.eterc1;
    alphaRecords.eternityChalls.eterc2 = player.eternityChalls.eterc2;
    alphaRecords.eternityChalls.eterc3 = player.eternityChalls.eterc3;
    alphaRecords.eternityChalls.eterc4 = player.eternityChalls.eterc4;
    alphaRecords.eternityChalls.eterc5 = player.eternityChalls.eterc5;
    alphaRecords.eternityChalls.eterc6 = player.eternityChalls.eterc6;
    alphaRecords.eternityChalls.eterc7 = player.eternityChalls.eterc7;
    alphaRecords.eternityChalls.eterc8 = player.eternityChalls.eterc8;
    alphaRecords.eternityChalls.eterc9 = player.eternityChalls.eterc9;
    alphaRecords.eternityChalls.eterc10 = player.eternityChalls.eterc10;
    alphaRecords.eternityChalls.eterc11 = player.eternityChalls.eterc11;
    alphaRecords.eternityChalls.eterc12 = player.eternityChalls.eterc12;
    alphaRecords.respec = player.respec;
    alphaRecords.eterc8ids = player.eterc8ids;
    alphaRecords.eterc8repl = player.eterc8repl;
    for (x = 0; x < 7; x++) {
      if (player.dilation.studies.includes(x)) {
        alphaRecords.dilation.studies.push(x);
      }
    }
    alphaRecords.dilation.active = player.dilation.active;
    alphaRecords.dilation.tachyonParticles = player.dilation.tachyonParticles;
    alphaRecords.dilation.dilatedTime = player.dilation.dilatedTime;
    alphaRecords.dilation.nextThreshold = player.dilation.nextThreshold;
    alphaRecords.dilation.baseTachyonGalaxies = player.dilation.baseTachyonGalaxies;
    alphaRecords.dilation.totalTachyonGalaxies = player.dilation.totalTachyonGalaxies;
    alphaRecords.dilation.upgrades = new Set(player.dilation.upgrades);
    alphaRecords.dilation.rebuyables[1] = player.dilation.rebuyables[1];
    alphaRecords.dilation.rebuyables[2] = player.dilation.rebuyables[2];
    alphaRecords.dilation.rebuyables[3] = player.dilation.rebuyables[3];
    alphaRecords.dilation.rebuyables[11] = player.dilation.rebuyables[11];
    alphaRecords.dilation.rebuyables[12] = player.dilation.rebuyables[12];
    alphaRecords.dilation.rebuyables[13] = player.dilation.rebuyables[13];
    alphaRecords.dilation.lastEP = player.dilation.lastEP;
    clearCelestialRuns();
    player.disablePostReality = false;
    Endgame.resetNoReward();
    recalculateAllGlyphs();
    Tab.dimensions.antimatter.show(false);
  },
  get isRunning() {
    return player.celestials.alpha.run;
  },
  get currentStage() {
    return player.celestials.alpha.stage;
  },
  get stageNames() {
    return ["Reach the 4th Dimension Boost", "Reach the 5th Dimension Boost", "Reach the 1st Antimatter Galaxy", "Reach Infinity",
            "Complete Normal Challenge 12", "Break Infinity", "Purchase the 5e11 Break Infinity Upgrade",
            "Purchase All Break Infinity Upgrades", "Complete All Infinity Challenges", "Unlock Replicanti",
            "Purchase the 8th Infinity Dimension", "Reach Eternity", "Purchase Time Study 62", "Purchase the 4th Time Dimension",
            "Purchase the 3rd Eternity Upgrade", "Reach 115 Total Time Theorems", "Complete any Eternity Challenge Once",
            "Complete any Eternity Challenge Five Times", "Purchase Time Study 181", "Complete Eternity Challenge 10 Once",
            "Purchase Time Study 192", "Unlock Eternity Challenge 11", "Complete Eternity Challenge 11", "Unlock Time Dilation",
            "Perform a Dilated Eternity", "Begin Generation of Time Theorems", "Purchase the 8th Time Dimension", "Reach Reality"];
  },
  get shortStageNames() {
    return ["4th Dimboost", "5th Dimboost", "1st Galaxy", "Infinity", "NC12", "Break Infinity", "5e11 BIU", "All BIU", "All ICs",
            "Replicanti", "ID8", "Eternity", "TS62", "TD4", "Eternity Upgrade 3", "115 Total TT", "ECx1", "ECx5", "TS181", "EC10x1",
            "TS192", "EC11", "EC11x5", "Dilation", "Dilated Eternity", "TT Generation", "TD8", "Reality"];
  },
  get currentStageName() {
    return this.stageNames[this.currentStage];
  },
  get currentShortStageName() {
    return this.shortStageNames[this.currentStage];
  },
  get celestialMatterConversionNerf() {
    return 0.01 + (this.currentStage / 400) + Math.max(0, (this.currentStage - 22) / 400) + Math.max(0, (this.currentStage - 25) / 200);
  },
  quotes: Quotes.alpha,
  symbol: "α"
};

class AlphaUnlockState extends BitUpgradeState {
  get bits() { return player.celestials.alpha.unlockBits; }
  set bits(value) { player.celestials.alpha.unlockBits = value; }

  get requirement() {
    return this.config.requirement;
  }

  get nerfDescription() {
    return this.config.nerfDescription;
  }

  get buffDescription() {
    return this.config.buffDescription;
  }

  get isEffectActive() {
    return player.celestials.alpha.stage >= this.requirement;
  }
}

export const AlphaUnlocks = mapGameDataToObject(
  GameDatabase.celestials.alpha.unlocks,
  config => new AlphaUnlockState(config)
);

export const AlphaArrays = {
  get nerfNames() {
    let nerfs = [];
    for (let n = 0; n < 28; n++) {
      nerfs.push(typeof AlphaUnlocks.all.find(x => x.id === n).nerfDescription === "function"
                 ? AlphaUnlocks.all.find(x => x.id === n).nerfDescription()
                 : AlphaUnlocks.all.find(x => x.id === n).nerfDescription);
    }
    return nerfs;
  },
  get buffNames() {
    let buffs = [];
    for (let n = 0; n < 28; n++) {
      buffs.push(typeof AlphaUnlocks.all.find(x => x.id === n).buffDescription === "function"
                 ? AlphaUnlocks.all.find(x => x.id === n).buffDescription()
                 : AlphaUnlocks.all.find(x => x.id === n).buffDescription);
    }
    return buffs;
  }
};

export const AlphaDescriptions = {
  get layerRow() {
    let layers = [];
    if (Alpha.currentStage >= 0) {
      for (let n = 0; n < Math.min(Alpha.currentStage + 1, 28); n++) {
        layers.push(Alpha.shortStageNames[n]);
      }
    }
    if (Alpha.currentStage <= 26) {
      for (let n = Alpha.currentStage + 1; n < 28; n++) {
        layers.push("?");
      }
    }
    return layers;
  },
  get nerfRow() {
    let nerfs = [];
    if (Alpha.currentStage >= 1) {
      for (let n = 0; n < Alpha.currentStage; n++) {
        nerfs.push(AlphaArrays.nerfNames[n]);
      }
    }
    if (Alpha.currentStage <= 27) {
      for (let n = Alpha.currentStage; n < 28; n++) {
        nerfs.push("?");
      }
    }
    return nerfs;
  },
  get buffRow() {
    let buffs = [];
    if (Alpha.currentStage >= 1) {
      for (let n = 0; n < Alpha.currentStage; n++) {
        buffs.push(AlphaArrays.buffNames[n]);
      }
    }
    if (Alpha.currentStage <= 27) {
      for (let n = Alpha.currentStage; n < 28; n++) {
        buffs.push("?");
      }
    }
    return buffs;
  },
};

EventHub.logic.on(GAME_EVENT.TAB_CHANGED, () => {
  if (Tab.celestials.alpha.isOpen) Alpha.quotes.unlock.show();
});

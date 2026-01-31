export const Ethereal = {
  get isUnlocked() {
    return GalacticPowers.etherealUnlock.isUnlocked;
  },
  get cosmicSector() {
    return player.endgame.ethereal.sector;
  },
  get sectorThreshold() {
    return Decimal.pow(this.cosmicSector, this.cosmicSector);
  },
  get sectorBoost() {
    if (player.disablePostReality && !Alpha.isRunning) return DC.D1;
    if (Alpha.isRunning) return Decimal.pow(2, this.cosmicSector - 1);
    return Decimal.pow(2, Math.pow(this.cosmicSector - 1, 2));
  },
  get isExtended() {
    return player.endgame.ethereal.isExtended;
  },
  get nextStar() {
    return EtherealStars.all.find(x => !x.isUnlocked);
  },
  get nextStarUnlockStage() {
    return this.nextStar?.unlockStage;
  }
};

export class EtherealStarState {
  constructor(config) {
    this.config = config;
  }

  get id() {
    return this.config.id;
  }

  get reward() {
    return this.config.effect();
  }

  get unlockStage() {
    return this.config.unlockStage;
  }

  get isUnlocked() {
    return Alpha.currentStage >= this.unlockStage;
  }

  get canGainStar() {
    return Currency.etherealPower.gte(this.config.resetReq);
  }
}

export const EtherealStars = mapGameDataToObject(
  GameDatabase.endgame.stars,
  config => (config.isBaseResource
    ? new EtherealStarState(config)
    : new EtherealStarState(config))
);

export function getEtherealPowerGainPerSecond() {
  const cpFactor = Decimal.pow(Decimal.log10(player.endgame.celestialPoints.add(1)).div(100), 10);
  const singFactor = Decimal.pow(Decimal.log10(player.celestials.laitela.singularities.add(1)).div(20000), 3);
  const rmFactor = Decimal.pow(Decimal.log10(Decimal.log10(player.reality.realityMachines.add(1)).add(1)).div(5), 75);
  const gpFactor = Decimal.pow(Decimal.log10(Decimal.max(player.endgame.galacticPower, DC.NUMMAX)).div(308.25), 5);
  return cpFactor.times(singFactor).times(rmFactor).times(gpFactor).div(1000).times(Achievement(206).effectOrDefault(1));
}

export function tryAdvanceSector() {
  if (Currency.etherealPower.lt(Ethereal.sectorThreshold)) return;
  player.endgame.ethereal.sector++;
}

export function resetForStar(id) {
  const gainedStarType = EtherealStars.all.find(x => x.id === id);
  const starName = gainedStarType.config.name;
  const resetReq = gainedStarType.config.resetReq;
  if (Currency.etherealPower.lt(resetReq)) return;
  const resetFormula = Decimal.pow(Currency.etherealPower.value.div(resetReq), 0.5 - id / 20);
  player.endgame.ethereal.power = DC.D0;
  player.endgame.ethereal.sector = 1;
  player.endgame.ethereal.star[starName] = player.endgame.ethereal.star[starName].add(resetFormula);
}

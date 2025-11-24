export class GalacticPowerState {
  constructor(config) {
    this.config = config;
  }

  get id() {
    return this.config.id;
  }

  get reward() {
    return this.config.effect();
  }

  get unlockGP() {
    return this.config.galacticPower;
  }

  get isUnlocked() {
    return Currency.galacticPower.gte(this.unlockGP);
  }
}

export const GalacticPowers = mapGameDataToObject(
  GameDatabase.endgame.galacticPowers,
  config => (config.isBaseResource
    ? new GalacticPowerState(config)
    : new GalacticPowerState(config))
);

export const GalacticPower = {
  get isUnlocked() {
    return SingularityMilestone.galacticPower.isUnlocked || Currency.galacticPower.gt(0);
  },
  get nextPower() {
    return GalacticPowers.all.find(x => !x.isUnlocked);
  },
  get nextPowerUnlockGP() {
    return this.nextPower?.unlockGP;
  }
};

export function getGalacticPowerGainPerSecond() {
  const allGalaxies = Replicanti.galaxies.total + player.galaxies + player.dilation.totalTachyonGalaxies;
  const galaxyFactor = Math.max(allGalaxies / 100000, 1);
  const celMatterFactor = Math.max(Math.pow(Decimal.log10(player.endgame.celestialMatter.add(1)) / 10, 2), 1);
  const imaginaryFactor = Math.max(Math.pow(Decimal.log10(player.reality.imaginaryMachines + 1), 1.5), 1);
  const galaxyExponent = Math.min(1 + Math.pow(allGalaxies / 2000000, 2), 100);
  return Pelle.isDoomed ? new Decimal(0) : Decimal.pow(galaxyFactor * celMatterFactor * imaginaryFactor / 1000, galaxyExponent);
}

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
  const celMatterFactor = Math.max(Math.pow(Decimal.log10(player.endgame.celestialMatter.add(1)) / 10, 4), 1);
  const imaginaryFactor = Math.max(Math.pow(Decimal.log10(player.reality.imaginaryMachines + 1), 2.5), 1);
  const staticDivisor = 1e7;
  const base = galaxyFactor * celMatterFactor * imaginaryFactor / staticDivisor;
  const galaxyExponent1 = Math.max(Math.min(Math.pow(allGalaxies / 1680000, 6.4), 4), 1);
  const galaxyExponent2 = Math.max(Math.min(Math.pow(allGalaxies / 1960000, 15), 5), 1);
  const galaxyExponent3 = Math.max(Math.min(Math.pow(allGalaxies / 2160000, 5), 1.6), 1);
  const galaxyExponent4 = Math.max(Math.min(Math.pow(allGalaxies / 4500000, 0.75), 1.25), 1);
  const galaxyExponent5 = Math.max(Math.min(Math.pow(allGalaxies / 8000000, 0.25), 2.5), 1);
  const exponent = galaxyExponent1 * galaxyExponent2 * galaxyExponent3 * galaxyExponent4 * galaxyExponent5;
  return Pelle.isDoomed ? new Decimal(0) : Decimal.pow(base, exponent);
}

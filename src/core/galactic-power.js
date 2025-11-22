export class GalacticPowerState {
  constructor(config) {
    this.config = config;
  }

  get id() {
    return this.config.id;
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
    return SingularityMilestone.galacticPower.isUnlocked;
  },
  get nextPower() {
    return GalacticPowers.all.find(x => !x.isUnlocked);
  },
  get nextPowerUnlockGP() {
    return this.nextPower?.unlockGP;
  }
};

export function getGalacticPowerGainPerSecond() {
  const galaxyFactor = Math.max(player.galaxies / 100000, 1);
  const celMatterFactor = Math.max(Math.pow(Decimal.log10(player.endgame.celestialMatter) / 10, 2), 1);
  const imaginaryFactor = Math.max(Math.pow(Decimal.log10(player.reality.imaginaryMachines), 1.5), 1);
  const galaxyExponent = 1 + Math.pow(player.galaxies / 10000000, 3);
  return Decimal.pow(galaxyFactor * celMatterFactor * imaginaryFactor, galaxyExponent);
}

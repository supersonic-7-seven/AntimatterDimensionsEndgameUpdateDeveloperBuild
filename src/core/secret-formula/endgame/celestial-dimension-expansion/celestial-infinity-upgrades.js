export const celestialInfinityUpgrades = {
  gameSpeedMultCIP: {
    id: 1,
    cost: 1,
    description: () => `Gain a multiplier to Game Speed based on unspent Celestial Infinity Points`,
    effect: () => Currency.celestialInfinityPoints.value.plus(1).pow(308),
    formatEffect: value => formatX(value, 2, 1)
  },
  celDimPurchaseBoost: {
    id: 2,
    cost: 10,
    description: () => `Increase the Celestial Dimension Per-Purchase Multiplier to ${formatX(3)}`,
    effect: 3
  },
  rawCelestialDimMult: {
    id: 3,
    cost: 20,
    description: () => `Multiply all Celestial Dimension Multipliers by ${formatInt(10)}`,
    effect: 10
  },
  celDimBoostBuff: {
    id: 4,
    cost: 50,
    description: () => `Increase the Celestial Dimension Boost base multiplier to ${formatX(20)}`,
    effect: 20
  },
  celGalaxyBuff: {
    id: 5,
    cost: 100,
    description: () => `Increase the Celestial Galaxy buff from ${formatX(1.02, 2, 2)} to ${formatX(1.03, 2, 2)} per Galaxy`,
    effect: 1.03
  },
  celestialMatterConversionBuff: {
    id: 6,
    cost: 500,
    description: () => `Increase the Celestial Matter Conversion Rate base from ${formatPow(2)} to ${formatPow(2.5, 1, 1)}`,
    effect: 2.5
  },
  antimatterCelestialDimBuff: {
    id: 7,
    cost: 1000,
    description: "Multiply all Celestial Dimensions by the Antimatter Exponent's Exponent",
    effect: () => Decimal.log10(Decimal.log10(player.antimatter.add(1)).add(1)).max(1)
  },
  cipGen: {
    id: 8,
    cost: 2000,
    description: () => `Generate CIP at ${formatPercents(0.1)} of your fastest Celestial Crunch`,
    effect: () => player.records.bestCelestialInfinity.time.times(10)
  },
  buffedStart: {
    id: 9,
    cost: 4000,
    description: () => `Start Celestial Infinities with ${formatInt(2)} Celestial Dimension Boosts and a Celestial Galaxy`,
    effect: 2
  }
};

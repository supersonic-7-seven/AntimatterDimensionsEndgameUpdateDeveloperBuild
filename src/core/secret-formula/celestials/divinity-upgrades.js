export const divinityUpgrades = {
  divineL1U1: {
    name: "Celestial Storage",
    id: "divineL1U1",
    layer: 1,
    cost: new Decimal(10000),
    description: "Cosmic Sector boost affects Celestial Dimension Overflow start at a reduced rate",
    effect: () => Decimal.pow(Ethereal.sectorBoost, 0.1),
    formatEffect: value => formatX(value, 2, 2)
  },
  divineL1U2: {
    name: "Accelerated Reconstruction",
    id: "divineL1U2",
    layer: 1,
    cost: new Decimal(1e9),
    description: () => `Remnants of Alpha Decay time to reach cap is reduced by ${formatPercents(0.1)}`,
    effect: 0.9
  },
  divineL1U3: {
    name: "Divine Momentum",
    id: "divineL1U3",
    layer: 1,
    cost: new Decimal(1e20),
    description: "Divine Dimensions are boosted based on Celestial Points",
    effect: () => Decimal.pow(Decimal.log10(player.endgame.celestialPoints).div(Decimal.log10(DC.NUMMAX)).max(1), 3),
    formatEffect: value => formatX(value, 2, 2)
  },
  divineL1U4: {
    name: "Artisan of Destruction",
    id: "divineL1U4",
    layer: 1,
    cost: new Decimal(1e50),
    description: () => `Only in Pelle, raise the Antimatter Exponent’s Exponent to the power of ${format(1.01, 2, 2)}`,
    effect: 1.01
  },
  divineL1U5: {
    name: "The Great Revival",
    id: "divineL1U5",
    layer: 1,
    cost: new Decimal(1e100),
    description: "Unlock Divine Energy and Resurgence Upgrades"
  },
  divineL1U6: {
    name: "Wavelength",
    id: "divineL1U6",
    layer: 1,
    cost: new Decimal(1e125),
    description: "Divine Energy boosts Divine Dimensions",
    effect: () => Decimal.pow(Currency.divineEnergy.value, 0.5).max(1),
    formatEffect: value => formatX(value, 2, 2)
  },
  divineL1U7: {
    name: "Lucky Seven",
    id: "divineL1U7",
    layer: 1,
    cost: new Decimal(1e160),
    description: () => `Divine Energy production is multiplied by ${formatInt(7)}`,
    effect: 7
  },
  divineL1U8: {
    name: "Renewed Energy",
    id: "divineL1U8",
    layer: 1,
    cost: new Decimal(1e200),
    description: () => `Divine Energy is produced normally at a ${formatPercents(0.1)} rate`,
    effect: 0.1
  },
  divineL1U9: {
    name: "The Immortal Flow",
    id: "divineL1U9",
    layer: 1,
    cost: new Decimal(1e250),
    description: "Producing Divine Energy no longer halts Divine Dimension production"
  },
  divineL1U10: {
    name: "In Over My Head",
    id: "divineL1U10",
    layer: 1,
    cost: new Decimal(1e300),
    description: () => `Reduce the time for Dual Machines to approach their cap by ${formatPercents(0.5)}`,
    effect: 0.5
  },
};

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
  divineL2U1: {
    name: "Stellar Compound",
    id: "divineL2U1",
    layer: 2,
    cost: new Decimal(1),
    description: "Divine Dimensions gain a multiplier based on real time since your last Condense",
    effect: () => Decimal.pow(Time.thisCondenseRealTime.totalSeconds.add(1), 3),
    formatEffect: value => formatX(value, 2, 2)
  },
  divineL2U2: {
    name: "Solar Flares",
    id: "divineL2U2",
    layer: 2,
    cost: new Decimal(7),
    description: "Divine Stars mutliply Divine Energy production",
    effect: () => player.celestials.pelle.divinity.divineStars.max(1),
    formatEffect: value => formatX(value, 2)
  },
  divineL2U3: {
    name: "Postmortal",
    id: "divineL2U3",
    layer: 2,
    cost: new Decimal(17),
    description: "Divine Stars boost Ethereal Power production",
    effect: () => Decimal.pow(Decimal.log10(player.celestials.pelle.divinity.divineStars.add(1)).add(1), 7),
    formatEffect: value => formatX(value, 2, 2)
  },
  divineL2U4: {
    name: "Electrify",
    id: "divineL2U4",
    layer: 2,
    cost: new Decimal(77),
    description: "Divine Energy base gain is now based on your highest-ever Divine Matter"
  },
  divineL2U5: {
    name: "Cannot Afford Loss",
    id: "divineL2U5",
    layer: 2,
    cost: new Decimal(277),
    description: "Keep all Layer One Divine Upgrades on Condense"
  },
  divineL2U6: {
    name: "Headstart",
    id: "divineL2U6",
    layer: 2,
    cost: new Decimal(777),
    description: () => `Start Condense with ${format(5e36, 2, 2)} Divine Matter`,
    effect: 5e36
  },
  divineL2U7: {
    name: "Gravitate",
    id: "divineL2U7",
    layer: 2,
    cost: new Decimal(2777),
    description: () => `Divine Dimensions are raised ${formatPow(1.1, 2, 3)}`,
    effect: 1.1
  },
  divineL2U8: {
    name: "Liftoff",
    id: "divineL2U8",
    layer: 2,
    cost: new Decimal(7777),
    description: () => `The Divine Dimension Per-Purchase Multiplier is increased to ${formatX(17)}`
  },
  divineL2U9: {
    name: "Ascension",
    id: "divineL2U9",
    layer: 2,
    cost: new Decimal(77777),
    description: "Divine Dimensions are multiplied based on Celestial Matter",
    effect: () => Decimal.pow(Decimal.log10(Currency.celestialMatter.value).add(1), 7),
    formatEffect: value => formatX(value, 2, 2)
  },
  divineL2U10: {
    name: "Completion",
    id: "divineL2U10",
    layer: 2,
    cost: new Decimal(1777777),
    description: () => `Divine Matter effects are set to highest-ever Divine Matter and Divine Energy gain
      is always produced at a ${formatPercents(1)} rate with no penalty`
  },
};

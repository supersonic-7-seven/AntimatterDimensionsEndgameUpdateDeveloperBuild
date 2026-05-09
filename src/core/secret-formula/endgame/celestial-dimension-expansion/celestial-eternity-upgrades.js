function rebuyable(config) {
  const effectFunction = config.effect || (x => x);
  const { id, maxUpgrades, description, isDisabled, noLabel, onPurchased, isDecimal } = config;
  return {
    rebuyable: true,
    id,
    cost: () => config.isDecimal
      ? Decimal.pow(config.costIncrease, player.endgame.celDimExpansion.celestialEternityRebuyables[config.id]).times(config.initialCost)
      : config.initialCost * Math.pow(config.costIncrease, player.endgame.celDimExpansion.celestialEternityRebuyables[config.id]),
    maxUpgrades,
    description,
    effect: () => effectFunction(player.endgame.celDimExpansion.celestialEternityRebuyables[config.id]),
    isDisabled,
    formatEffect: config.formatEffect,
    formatCost: value => format(value, 2, 0),
    noLabel,
    onPurchased,
    isDecimal
  };
}

export const celestialEternityUpgrades = {
  betterCIP: rebuyable({
    id: 0,
    initialCost: 1,
    costIncrease: 1e4,
    maxUpgrades: 10,
    effect: value => Math.pow(0.99, value),
    description: () => `Reduce the Celestial Infinity Point conversion formula divisor by ${formatPercents(0.01)}`,
    formatEffect: value => `${formatX(value, 2, 3)}`,
    noLabel: false,
    isDecimal: false
  }),
  largeCDMult: rebuyable({
    id: 1,
    initialCost: 10,
    costIncrease: 10,
    maxUpgrades: 1000,
    effect: value => Decimal.pow(1000, value),
    description: () => `Multiply Celestial Dimensions by ${formatX(1000)} per purchase`,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false,
    isDecimal: false
  }),
  conversionFormulaImprovement: rebuyable({
    id: 2,
    initialCost: 1e100,
    costIncrease: 1e50,
    maxUpgrades: 25,
    effect: value => Math.pow(1.01, value),
    description: () => `Multiply the Celestial Dimension Conversion Exponent by ${formatX(1.01, 2, 2)}`,
    formatEffect: value => `${formatX(value, 2, 3)}`,
    noLabel: false,
    isDecimal: true
  }),
  bulkCelGalaxies: {
    id: "bulkCelGalaxies",
    cost: 1e3,
    description: "Unlock the buy max Celestial Galaxy Autobuyer mode"
  },
  instaAutos: {
    id: "instaAutos",
    cost: 1e6,
    description: "Celestial Dimension-related Autobuyer intervals are now Instant"
  },
  celEternityAuto: {
    id: "celEternityAuto",
    cost: 1e10,
    description: "Unlock an Autobuyer for Celestial Eternities and improve the Celestial Crunch Autobuyer"
  },
  freeDimBoost: {
    id: "freeDimBoost",
    cost: 1e15,
    description: "Purchasing Celestial Dimension Boosts no longer resets anything"
  },
  freeGalaxy: {
    id: "freeGalaxy",
    cost: 1e25,
    description: "Purchasing Celestial Galaxies no longer resets anything"
  },
  startingBoosts: {
    id: "startingBoosts",
    cost: 1e50,
    description: () => `Start Cel Crunches and Cel Eternities with ${format(1e25, 2, 2)} Cel Matter, and Cel Eternities
      with ${format(1e25, 2, 2)} CIP`,
    effect: 1e25
  },
  celTickReduction: {
    id: "celTickReduction",
    cost: 1e100,
    description: () => `Reduce the post-Break Celestial Tickspeed cost scaling to ${formatX(1.65, 2, 2)}`,
    effect: 0.35
  },
  celDimReduction: {
    id: "celDimReduction",
    cost: 1e200,
    description: () => `Reduce the post-Break Celestial Dimension cost scaling to ${formatX(2)}`,
    effect: 1
  },
  passiveCIP: {
    id: "passiveCIP",
    cost: 1e300,
    description: () => `Generate ${formatPercents(0.01)} of your pending CIP every second`
  },
};

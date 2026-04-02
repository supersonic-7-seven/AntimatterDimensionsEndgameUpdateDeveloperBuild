function rebuyable(config) {
  const effectFunction = config.effect || (x => x);
  const { id, maxUpgrades, description, isDisabled, noLabel, onPurchased } = config;
  return {
    rebuyable: true,
    id,
    cost: () => config.initialCost * Math.pow(config.costIncrease, player.endgame.celDimExpansion.celestialInfinityRebuyables[config.id]),
    maxUpgrades,
    description,
    effect: () => effectFunction(player.endgame.celDimExpansion.celestialInfinityRebuyables[config.id]),
    isDisabled,
    formatEffect: config.formatEffect ||
      (value => {
        return (value === config.maxUpgrades
          ? `Currently: ${formatX(10 - value)}`
          : `Currently: ${formatX(10 - value)} | Next: ${formatX(10 - value - 1)}`);
      }),
    formatCost: value => format(value, 2, 0),
    noLabel,
    onPurchased
  };
}

export const celestialBreakInfinityUpgrades = {
  autoCD1: {
    id: "autoCD1",
    cost: 5e4,
    description: "Unlock Autobuyers for the first four Celestial Dimensions"
  },
  autoCD2: {
    id: "autoCD2",
    cost: 1e5,
    description: "Unlock Autobuyers for the other four Celestial Dimensions"
  },
  autoCDPlus: {
    id: "autoCDPlus",
    cost: 1e6,
    description: "Unlock Autobuyers for Celestial Tickspeed, Celestial Dimension Boosts, Celestial Galaxies and Celestial Crunches"
  },
  celTickspeedCostMult: rebuyable({
    id: 0,
    initialCost: 1e5,
    costIncrease: 20,
    maxUpgrades: 8,
    description: "Reduce post-infinity Celestial Tickspeed Upgrade cost multiplier scaling",
    noLabel: true,
    onPurchased: () => GameCache.celestialTickSpeedMultDecrease.invalidate()
  }),
  celDimCostMult: rebuyable({
    id: 1,
    initialCost: 4e5,
    costIncrease: 100,
    maxUpgrades: 7,
    description: "Reduce post-infinity Celestial Dimension cost multiplier scaling",
    noLabel: true,
    onPurchased: () => GameCache.celestialDimensionMultDecrease.invalidate()
  }),
  cipGen: rebuyable({
    id: 2,
    initialCost: 1e6,
    costIncrease: 10,
    maxUpgrades: 10,
    effect: value => Player.bestRunCIPPM.times(value / 20),
    description: () => {
      let generation = `Generate ${formatInt(5 * player.endgame.celDimExpansion.celestialInfinityRebuyables[2])}%`;
      if (!CelestialBreakInfinityUpgrade.cipGen.isCapped) {
        generation += ` ➜ ${formatInt(5 * (1 + player.endgame.celDimExpansion.celestialInfinityRebuyables[2]))}%`;
      }
      return `${generation} of your best CIP/min from your last 10 Celestial Infinities`;
    },
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${format(value, 2, 1)} CIP/min`,
    noLabel: false
  }),
  celDimPurchaseBuff: rebuyable({
    id: 3,
    initialCost: 1e9,
    costIncrease: 1e3,
    maxUpgrades: 100,
    effect: value => Math.pow(1.2, value),
    description: () => `Increase the Celestial Dimension per-purchase multiplier by ${formatPercents(0.2)}`,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  }),
  celDimboostBuff: rebuyable({
    id: 4,
    initialCost: 1e12,
    costIncrease: 1e6,
    maxUpgrades: 50,
    effect: value => Math.pow(1.5, value),
    description: () => `Increase the Celestial Dimension Boost multiplier by ${formatPercents(0.5)}`,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  }),
  celGalaxyBuff: rebuyable({
    id: 5,
    initialCost: 1e15,
    costIncrease: 1e9,
    maxUpgrades: 33,
    effect: value => Math.pow(1.1, value),
    description: () => `Increase the Celestial Galaxy to Celestial Tickspeed multiplier by ${formatPercents(0.1)}`,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  })
};

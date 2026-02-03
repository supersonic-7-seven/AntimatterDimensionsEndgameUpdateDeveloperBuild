export const alphaUnlocks = {
  fourthDimboost: {
    id: 0,
    requirement: 1,
    nerfDescription: "Square-root the Dimension Boost Multiplier",
    buffDescription: "Square the Dimension Boost Multiplier",
    effects: {
      nerf: 0.5,
      buff: 2
    }
  },
  fifthDimboost: {
    id: 1,
    requirement: 2,
    nerfDescription: "Double the Dimension Boost Scaling Threshold",
    buffDescription: () => `Decrease the base Dimension Boost Scaling Threshold by ${formatInt(1)}`,
    effects: {
      nerf: 2,
      buff: 1
    }
  },
  firstGalaxy: {
    id: 2,
    requirement: 3,
    nerfDescription: () => `All Galaxies are ${formatPercents(1 - Math.min(Decimal.log10(Decimal.log10(Tickspeed.perSecond.add(1)).add(1)).div(100).toNumber(), 1), 2)} weaker`,
    buffDescription: "The Alternation Effect in Glyph Alchemy affects all Galaxy types",
    effects: {
      nerf: () => Math.min(Decimal.log10(Decimal.log10(Tickspeed.perSecond.add(1)).add(1)).div(100).toNumber(), 1)
    }
  },
  infinity: {
    id: 3,
    requirement: 4,
    nerfDescription: "Infinity Upgrade costs are squared",
    buffDescription: () => `IP Gain is raised ${formatPow(Tesseracts.effectiveCount / 100, 2, 3)} (based on Tesseracts)`,
    effects: {
      nerf: 2,
      buff: () => Tesseracts.effectiveCount / 100
    }
  },
  autoCrunchChallenge: {
    id: 4,
    requirement: 5,
    nerfDescription: "The Big Crunch Autobuyer purchase scaling triples instead of doubles",
    buffDescription: () => `Charged Infinity Upgrades act as if your Teresa Level was ${formatPercents(0.25, 2)} higher`,
    effects: {
      nerf: 3,
      buff: 1.25
    }
  },
  breakInfinity: {
    id: 5,
    requirement: 6,
    nerfDescription: () => `Break Infinty Upgrades are ${formatX(1000)} more expensive, post-Break Tickspeed/Dimension cost scalings start at ${formatX(20)}`,
    buffDescription: () => `Reduce Post-Break Tickspeed/Dimension cost scalings by ${format(0.1, 1, 1)}`,
    effects: {
      nerfA: 1000,
      nerfB: 20,
      buff: 0.1
    }
  },
  powerGalaxies: {
    id: 6,
    requirement: 7,
    nerfDescription: () => `Distant Galaxy Cost Scaling starts at ${formatInt(0)} Galaxies`,
    buffDescription: "Galaxy scalings for Distant/Remote Antimatter Galaxies are doubled",
    effects: {
      nerf: 0,
      buff: 2
    }
  },
  breakUpgrades: {
    id: 7,
    requirement: 8,
    nerfDescription: () => `The Infinity Dimension Purchase cap is decreased to ${formatInt(25)}`,
    buffDescription: () => `Reduce Post-Break Tickspeed/Dimension cost scalings by ${format(0.1, 1, 1)}`,
    effects: {
      nerf: 25,
      buff: 0.1
    }
  },
  infinityChallenges: {
    id: 8,
    requirement: 9,
    nerfDescription: () => `The Repeatable IP Multiplier Upgrade is capped at ${formatInt(140)} Purchases`,
    buffDescription: "Infinity Dimension Multipliers are squared and convert Infinity Dimensions to Continuum",
    effects: {
      nerf: 140,
      buff: 2
    }
  },
  replicanti: {
    id: 9,
    requirement: 10,
    nerfDescription: "Replicanti Interval is squared",
    buffDescription: "Replicanti Interval is square-rooted",
    effects: {
      nerf: 2,
      buff: 0.5
    }
  },
  infinityDimensions: {
    id: 10,
    requirement: 11,
    nerfDescription: () => `Infinity Point gain is raised ${formatPow(Math.clamp(1 - Decimal.log10(Currency.infinityPoints.value.add(1)).sub(280).div(100).toNumber(), 0, 1), 2, 3)} (only applies first Eternity)`,
    buffDescription: () => `The ${formatInt(8)}th Infinity Dimension is powered ${formatInt(10)}`,
    effects: {
      nerf: () => Math.clamp(1 - Decimal.log10(Currency.infinityPoints.value.add(1)).sub(280).div(100).toNumber(), 0, 1),
      buff: 10
    }
  },
  eternity: {
    id: 11,
    requirement: 12,
    nerfDescription: () => `The Time Dimension Per-Purchase Multiplier is decreased to ${formatX(2)}`,
    buffDescription: () => `Remove the nerf "Any ${formatInt(8)}th TDs purchased above ${format(1e8, 2, 2)} will not increase the multiplier"`,
    effects: {
      nerf: 2
    }
  },
  timestudy62: {
    id: 12,
    requirement: 13,
    nerfDescription: "Square all Time Theorem costs",
    buffDescription: () => `Eternity Point gain is multiplied by ${formatX(Decimal.pow10(Decimal.log10(Currency.infinityPoints.value.add(1)).div(1000)), 2, 2)} (based on IP)`,
    effects: {
      nerf: 2,
      buff: () => Decimal.pow10(Decimal.log10(Currency.infinityPoints.value.add(1)).div(1000))
    }
  },
  timeDimension4: {
    id: 13,
    requirement: 14,
    nerfDescription: () => `The multiplier of your highest Time Dimension is always ${formatX(1)}`,
    buffDescription: () => `The Time Dimension Per-Purchase Multiplier is increased to ${formatX(10)}`,
    effects: {
      buff: 10
    }
  },
  eternityUpgrades: {
    id: 14,
    requirement: 15,
    nerfDescription: () => `All Infinity Dimensions are raised ${formatPow(0.9, 2, 3)}`,
    buffDescription: () => `The ${formatInt(1)}st Infinity Dimension is powered ${formatInt(20)}`,
    effects: {
      nerf: 0.9,
      buff: 20
    }
  },
  eternityChallengeUnlock: {
    id: 15,
    requirement: 16,
    nerfDescription: () => `Infinity Points are raised ${formatPow(0.75, 2, 3)} inside Eternity Challenges`,
    buffDescription: () => `Uncap Eternity Upgrade ${formatInt(1)}`,
    effects: {
      nerf: 0.75
    }
  },
  ecCompletion1: {
    id: 16,
    requirement: 17,
    nerfDescription: () => `IP nerf in Eternity Challenges is decreased to ${formatPow(0.65, 2, 3)}`,
    buffDescription: "Time Dimension Multipliers are squared and convert Time Dimensions to Continuum",
    effects: {
      nerf: 0.65,
      buff: 2
    }
  },
  ecCompletion5: {
    id: 17,
    requirement: 18,
    nerfDescription: () => `IP nerf in Eternity Challenges is decreased to ${formatPow(0.55, 2, 3)}`,
    buffDescription: "Time Dimension Multipliers are squared",
    effects: {
      nerf: 0.55,
      buff: 2
    }
  },
  timestudy181: {
    id: 18,
    requirement: 19,
    nerfDescription: () => `All Antimatter Dimensions are raised ${formatPow(0.9, 2, 3)}`,
    buffDescription: "All Antimatter Dimension Multipliers are squared",
    effects: {
      nerf: 0.9,
      buff: 2
    }
  },
  eternityChallenge10: {
    id: 19,
    requirement: 20,
    nerfDescription: () => `Eternity Point gain is raised ${formatPow(0.9, 2, 3)}`,
    buffDescription: () => `Infinity gain is raised ${formatPow(1.5, 2, 3)}`,
    effects: {
      nerf: 0.9,
      buff: 1.5
    }
  },
  timestudy192: {
    id: 20,
    requirement: 21,
    nerfDescription: () => `Post-Infinite Replicanti scale is increased to ${formatX(1.5, 1, 1)} per ${format(DC.NUMMAX, 2, 2)} Replicanti`,
    buffDescription: "Replicanti Interval is square-rooted",
    effects: {
      nerf: 1.5,
      buff: 0.5
    }
  },
  eternityChallenge11: {
    id: 21,
    requirement: 22,
    nerfDescription: () => `Eternity Challenge ${formatInt(11)} must have a ${formatX(5)} Bulk Completion`,
    buffDescription: () => `Reduce Post-Break Tickspeed cost scale by ${format(0.05, 2, 2)}`,
    effects: {
      buff: 0.05
    }
  },
  ec11Bulk: {
    id: 22,
    requirement: 23,
    nerfDescription: () => `The Dilation Study costs ${formatInt(12900)} Time Theorems`,
    buffDescription: () => `Reduce Post-Break Tickspeed cost scale by ${format(0.05, 2, 2)}`,
    effects: {
      nerf: 12900,
      buff: 0.05
    }
  },
  unlockDilation: {
    id: 23,
    requirement: 24,
    nerfDescription: () => `The base Dilation penalty is increased to ${formatPow(0.7, 2, 3)}`,
    buffDescription: () => `The base Dilation penalty is reduced to ${formatPow(0.8, 2, 3)}`,
    effects: {
      nerf: 0.7,
      buff: 0.8
    }
  },
  dilatedEternity: {
    id: 24,
    requirement: 25,
    nerfDescription: () => `The base Dilation penalty is increased to ${formatPow(0.65, 2, 3)}`,
    buffDescription: () => `Tachyon Particle gain is raised ${formatPow(1.4, 2, 3)}`,
    effects: {
      nerf: 0.65,
      buff: 1.4
    }
  },
  timeTheoremGeneration: {
    id: 25,
    requirement: 26,
    nerfDescription: () => `Time Theorem Generation is ${formatPercents(Math.clamp(1 - Decimal.log10(Currency.timeTheorems.value.add(1)).toNumber(), 0, 1), 2)} weaker (based on TP)`,
    buffDescription: "Time Theorem Generation is squared",
    effects: {
      nerf: () => Math.clamp(Decimal.log10(Currency.timeTheorems.value.add(1)).toNumber(), 0, 1),
      buff: 2
    }
  },
  timeDimension8: {
    id: 26,
    requirement: 27,
    nerfDescription: () => `Eternity Point gain is raised ${formatPow(Math.clamp(1 - Decimal.log10(Currency.eternityPoints.value.add(1)).sub(3350).div(1000).toNumber(), 0, 1), 2, 3)}`,
    buffDescription: () => `The ${formatInt(8)}th Time Dimension is powered ${formatInt(100)}`,
    effects: {
      nerf: () => Math.clamp(1 - Decimal.log10(Currency.eternityPoints.value.add(1)).sub(3350).div(1000).toNumber(), 0, 1),
      buff: 100
    }
  },
  reality: {
    id: 27,
    requirement: 28,
    nerfDescription: "None",
    buffDescription: "Remove almost all hardcaps"
  }
};

window.alphaRecords = {
  antimatter: DC.E1,
  dimensions: {
    antimatter: Array.range(0, 8).map(() => ({
      bought: 0,
      costBumps: 0,
      amount: DC.D0
    })),
    infinity: Array.range(0, 8).map(tier => ({
      isUnlocked: false,
      bought: 0,
      amount: DC.D0,
      cost: [DC.E8, DC.E9, DC.E10, DC.E20, DC.E140, DC.E200, DC.E250, DC.E280][tier],
      baseAmount: 0
    })),
    time: Array.range(0, 8).map(tier => ({
      cost: [DC.D1, DC.D5, DC.E2, DC.E3, DC.E2350, DC.E2650, DC.E3000, DC.E3350][tier],
      amount: DC.D0,
      bought: 0
    }))
  },
  buyUntil10: true,
  sacrificed: DC.D0,
  infinityUpgrades: new Set(),
  infinityRebuyables: [0, 0, 0],
  challenge: {
    normal: {
      current: 0,
      bestTimes: Array.repeat(DC.BEMAX, 11),
      completedBits: 0,
    },
    infinity: {
      current: 0,
      bestTimes: Array.repeat(DC.BEMAX, 8),
      completedBits: 0,
    },
    eternity: {
      current: 0,
      unlocked: 0,
      requirementBits: 0,
    }
  },
  infinity: {
    upgradeBits: 0
  },
  auto: {
    autobuyersOn: true,
    disableContinuum: false,
    eternity: {
      amount: DC.D1,
      increaseWithMult: true,
      time: 1,
      xHighest: DC.D1,
      isActive: false
    },
    bigCrunch: {
      cost: 1,
      interval: 150000,
      mode: 0,
      amount: DC.D1,
      increaseWithMult: true,
      time: 1,
      xHighest: DC.D1,
      isActive: true,
      lastTick: 0,
    },
    galaxy: {
      cost: 1,
      interval: 20000,
      limitGalaxies: false,
      maxGalaxies: 1,
      buyMax: false,
      buyMaxInterval: 0,
      isActive: true,
      lastTick: 0
    },
    dimBoost: {
      cost: 1,
      interval: 4000,
      limitDimBoosts: false,
      maxDimBoosts: 1,
      limitUntilGalaxies: false,
      galaxies: 10,
      buyMaxInterval: 0,
      isActive: true,
      lastTick: 0
    },
    tickspeed: {
      isUnlocked: false,
      cost: 1,
      interval: 500,
      mode: AUTOBUYER_MODE.BUY_SINGLE,
      isActive: true,
      lastTick: 0,
      isBought: false
    },
    sacrifice: {
      multiplier: DC.D2,
      isActive: true
    },
    antimatterDims: {
      all: Array.range(0, 8).map(tier => ({
        isUnlocked: false,
        cost: 1,
        interval: [500, 600, 700, 800, 900, 1000, 1100, 1200][tier],
        bulk: 1,
        mode: AUTOBUYER_MODE.BUY_10,
        isActive: true,
        lastTick: 0,
        isBought: false
      })),
      isActive: true,
    },
    infinityDims: {
      all: Array.range(0, 8).map(() => ({
        isActive: false,
        lastTick: 0,
      })),
      isActive: true,
    },
    replicantiGalaxies: {
      isActive: false,
    },
    replicantiUpgrades: {
      all: Array.range(0, 3).map(() => ({
        isActive: false,
        lastTick: 0,
      })),
      isActive: true,
    },
    ipMultBuyer: { isActive: false, },
  },
  infinityPoints: DC.D0,
  infinities: DC.D0,
  infinitiesBanked: DC.D0,
  dimensionBoosts: DC.D0,
  galaxies: DC.D0,
  chall2Pow: 1,
  chall3Pow: DC.D0_01,
  matter: DC.D1,
  chall9TickspeedCostBumps: 0,
  chall8TotalSacrifice: DC.D1,
  ic2Count: 0,
  partInfinityPoint: DC.D0,
  partInfinitied: 0,
  break: false,
  requirementChecks: {
    infinity: {
      maxAll: false,
      noSacrifice: true,
      noAD8: true,
    },
    eternity: {
      onlyAD1: true,
      onlyAD8: true,
      noAD1: true,
      noRG: true,
    }
  },
  records: {
    totalTimePlayed: DC.D0,
    totalEndgameAntimatter: DC.E1,
    totalRealityAntimatter: DC.E1,
    totalEternityAntimatter: DC.E1,
    totalInfinityAntimatter: DC.E1,
    recentInfinities: Array.range(0, 10).map(() =>
      [DC.BEMAX, Number.MAX_VALUE, DC.D1, DC.D1, ""]),
    recentEternities: Array.range(0, 10).map(() =>
      [DC.BEMAX, Number.MAX_VALUE, DC.D1, DC.D1, "", DC.D0]),
    thisInfinity: {
      time: DC.D0,
      realTime: 0,
      lastBuyTime: DC.D0,
      maxAM: DC.D0,
      bestIPmin: DC.D0,
      bestIPminVal: DC.D0,
    },
    bestInfinity: {
      time: DC.BEMAX,
      realTime: Number.MAX_VALUE,
      bestIPminEternity: DC.D0,
      bestIPminReality: DC.D0,
    },
    thisEternity: {
      time: DC.D0,
      realTime: 0,
      maxAM: DC.D0,
      maxIP: DC.D0,
      bestIPMsWithoutMaxAll: DC.D0,
      bestEPmin: DC.D0,
      bestEPminVal: DC.D0,
      bestInfinitiesPerMs: DC.D0,
    },
    bestEternity: {
      time: DC.BEMAX,
      realTime: Number.MAX_VALUE,
      bestEPminReality: DC.D0,
    },
  },
  IPMultPurchases: 0,
  infinityPower: DC.D1,
  postC4Tier: 0,
  eternityPoints: DC.D0,
  eternities: DC.D0,
  eternityUpgrades: new Set(),
  epmultUpgrades: 0,
  timeShards: DC.D0,
  totalTickGained: 0,
  totalTickBought: 0,
  replicanti: {
    unl: false,
    amount: DC.D0,
    chance: 0.01,
    chanceCost: DC.E150,
    interval: 1000,
    intervalCost: DC.E140,
    boughtGalaxyCap: DC.D0,
    galaxies: DC.D0,
    galCost: DC.E170,
  },
  timestudy: {
    theorem: DC.D0,
    maxTheorem: DC.D0,
    amBought: 0,
    ipBought: 0,
    epBought: 0,
    studies: [],
  },
  eternityChalls: {},
  respec: false,
  eterc8ids: 50,
  eterc8repl: 40,
  dilation: {
    studies: [],
    active: false,
    tachyonParticles: DC.D0,
    dilatedTime: DC.D0,
    nextThreshold: DC.E3,
    baseTachyonGalaxies: DC.D0,
    totalTachyonGalaxies: DC.D0,
    upgrades: new Set(),
    rebuyables: {
      1: 0,
      2: 0,
      3: 0,
      11: 0,
      12: 0,
      13: 0,
    },
    lastEP: DC.DM1,
  }
};

export const expansionPacks = {
  teresaPack: {
    name: "Teresa's Expansion Pack",
    id: "teresaPack",
    symbol: "Ϟ",
    description: () =>
      `Uncap Teresa's Canister. Teresa's Canister now affects the Reality Machine cap as well as Reality Machine gain.
      Unlock Charged Perk Upgrades in the Teresa Tab.`,
    cost: Decimal.pow(10, 1e30),
    formatCost: value => formatPostBreak(value, 2, 0)
  },
  effarigPack: {
    name: "Effarig's Expansion Pack",
    id: "effarigPack",
    symbol: "Ϙ",
    description: () =>
      `Multiply Relic Shard gain by the logarithm of your Antimatter amount. The Effarig Level ${formatInt(10)} reward in Ra
      is improved so that Effarig Glyphs are always generated with ${formatInt(7)} effects. Increase Glyph Alchemy caps to one-third
      of your all-time maximum Glyph Level. Alchemy resources are kept on Endgame, and making a Reality Glyph no longer spends
      Reality resources.`,
    cost: Decimal.pow(10, 1e50),
    formatCost: value => formatPostBreak(value, 2, 0)
  },
  enslavedPack: {
    name: "The Nameless Ones' Expansion Pack",
    id: "enslavedPack",
    symbol: "\uf0c1",
    description: () =>
      `Charging your Black Hole always only takes ${formatPercents(0.99)} of your total Game Speed. Unlock optimizers for
      for adjusting the amount of your stored time you desire to discharge as well as the interval at which you want to discharge
      your Stored Time. Double the strength of all Effective Tesseracts.`,
    cost: Decimal.pow(10, 1e70),
    formatCost: value => formatPostBreak(value, 2, 0)
  },
  vPack: {
    name: "V's Expansion Pack",
    id: "vPack",
    symbol: "⌬",
    description: () =>
      `Automatically unlock one V-Achievement every ${TimeSpan.fromSeconds(new Decimal(60))}, which can be reduced by spending
      Celestial Points.`,
    cost: Decimal.pow(10, 1e90),
    formatCost: value => formatPostBreak(value, 2, 0)
  },
  raPack: {
    name: "Ra's Expansion Pack",
    id: "raPack",
    symbol: "<i class='fas fa-sun'></i>",
    description: () =>
      `Ra is kept on Endgame. Raise the level cap of all Celestials to the double-logarithm of your record Antimatter amount.
      Unlock an additional effect for each Celestial which scales based on their level. Multiply Memory and Memory Chunk gain
      by ${formatX(10)}.`,
    cost: Decimal.pow(10, 1e110),
    formatCost: value => formatPostBreak(value, 2, 0)
  },
  laitelaPack: {
    name: "Lai'tela's Expansion Pack",
    id: "laitelaPack",
    symbol: "ᛝ",
    description: () =>
      `Unlock an autobuyer that will increase/decrease the bulk Singularity level based on an inputted time for each. While in
      Lai'tela's Reality, Game Speed returns to normal twice as fast. Square the Annihilation to ${formatInt(8)}th DMD multiplier
      if Annihilation multiplier currently affects the ${formatInt(8)}th DMD. Reduce the DMD Interval increase on Ascension
      by ${formatInt(200)}. Multiply Dark Matter gain by the double-logarithm of your Antimatter amount or the logarithm of
      your Imaginary Machine amount, whichever is bigger. Start Endgames with ${formatInt(10)} Singularities. Multiply Dark Energy
      gain by the logarithm of your Singularity amount squared. Raise the Annhilation effect to a power based on Dark Matter.
      Unlock the ability to "Hadronize" Lai'tela's Reality, increasing the Antimatter required to gain significant entropy while
      resetting Lai'tela's Reality to allow for all 8 Dimensions. While disabled Dimension count still resets on Endgame, Hadronizes
      do not. Hadronization allows for additional completions of Lai'tela for the same ${formatX(8)} reward to Dark Matter on
      destabilization and ${formatX(8)} to Dark Energy on the final destabilization for each Hadronization.`,
    cost: Decimal.pow(10, 1e130),
    formatCost: value => formatPostBreak(value, 2, 0)
  },
  pellePack: {
    name: "Pelle's Expansion Pack",
    id: "pellePack",
    symbol: "♅",
    description: () =>
      `Reduce the Galaxy Generator Instability Magnitude by ${formatInt(1)}, and raise the first three types of Dimensions to
      a power based on your record Galaxy amount.`,
    cost: Decimal.pow(10, 1e150),
    formatCost: value => formatPostBreak(value, 2, 0)
  }
};

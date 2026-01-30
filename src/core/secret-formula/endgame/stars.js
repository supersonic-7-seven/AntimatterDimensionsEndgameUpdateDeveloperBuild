export const stars = {
  red: {
    id: 0,
    unlockStage: 1,
    effect: () => {
      const amount = player.endgame.ethereal.stars.red;
      //const boost = Ethereal.starBoost;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount), 0.4).div(100).add(1), boost.div(100).add(1));
    },
    description: amount => `Raise the Exponents of all Antimatter Dimension Multipliers to ${formatPow(amount, 2, 3)}`
  },
  orange: {
    id: 1,
    unlockStage: 4,
    effect: () => {
      const amount = player.endgame.ethereal.stars.orange;
      //const boost = Ethereal.starBoost;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount), 0.5).div(100).add(1), boost.div(100).add(1));
    },
    description: amount => `Raise the Exponents of all Infinity Dimension Multipliers to ${formatPow(amount, 2, 3)}`
  },
  yellow: {
    id: 2,
    unlockStage: 7,
    effect: () => {
      const amount = player.endgame.ethereal.stars.yellow;
      //const boost = Ethereal.starBoost;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount), 1.2).div(10).add(1), boost.div(100).add(1));
    },
    description: amount => `Multiply the Celestial Matter Conversion Exponent by ${formatX(amount, 2, 3)}`
  },
  green: {
    id: 3,
    unlockStage: 10,
    effect: () => {
      const amount = player.endgame.ethereal.stars.green;
      //const boost = Ethereal.starBoost;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount), 1.5).div(20).add(1), boost.div(100).add(1));
    },
    description: amount => `Raise Imaginary Machine Gain to ${formatPow(amount, 2, 3)}`
  },
  blue: {
    id: 4,
    unlockStage: 13,
    effect: () => {
      const amount = player.endgame.ethereal.stars.blue;
      //const boost = Ethereal.starBoost;
      return Decimal.pow(Decimal.pow(amount, 0.8), boost.div(100).add(1));
    },
    description: amount => `Multiply Ethereal Power Gain by ${formatX(amount, 2, 3)}`
  },
  purple: {
    id: 5,
    unlockStage: 16,
    effect: () => {
      const amount = player.endgame.ethereal.stars.purple;
      //const boost = Ethereal.starBoost;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount), 0.8).div(100).add(1), boost.div(100).add(1));
    },
    description: amount => `Raise the Exponents of all Time Dimension Multipliers to ${formatPow(amount, 2, 3)}`
  },
  white: {
    id: 6,
    unlockStage: 20,
    effect: () => {
      const amount = player.endgame.ethereal.stars.white;
      //const boost = Ethereal.starBoost;
      return Decimal.pow10(Decimal.pow(Decimal.pow(Decimal.log10(amount).times(100), 1.8), boost.div(100).add(1)));
    },
    description: amount => `Increase the Dark Matter cap by ${formatX(amount, 2)}`
  },
  black: {
    id: 7,
    unlockStage: 24,
    effect: () => {
      const amount = player.endgame.ethereal.stars.black;
      //const boost = Ethereal.starBoost;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount), 1.3).div(100).add(1), boost.div(100).add(1));
    },
    description: amount => `Raise the Antimatter Exponent to ${formatPow(amount, 2, 3)}`
  },
  gray: {
    id: 8,
    unlockStage: 28,
    effect: () => {
      const amount = player.endgame.ethereal.stars.gray;
      return Decimal.log10(amount).times(10);
    },
    description: amount => `Increase the effectiveness of all other stars by ${formatPercents(1 + amount.toNumber(), 2)}`
  },
};

export const stars = {
  red: {
    id: 0,
    name: "red",
    dmReq: 1,
    resetReq: 1e10,
    effect: () => {
      const amount = player.endgame.ethereal.stars.red;
      //const boost = Ethereal.starBoost;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 0.4).div(100).add(1), boost.div(100).add(1));
    },
    description: amount => `Raise the Exponents of all Antimatter Dimension Multipliers to ${formatPow(amount, 2, 3)}`
  },
  orange: {
    id: 1,
    name: "orange",
    dmReq: 1e10,
    resetReq: 1e12,
    effect: () => {
      const amount = player.endgame.ethereal.stars.orange;
      //const boost = Ethereal.starBoost;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 0.5).div(100).add(1), boost.div(100).add(1));
    },
    description: amount => `Raise the Exponents of all Infinity Dimension Multipliers to ${formatPow(amount, 2, 3)}`
  },
  yellow: {
    id: 2,
    name: "yellow",
    dmReq: 1e15,
    resetReq: 1e14,
    effect: () => {
      const amount = player.endgame.ethereal.stars.yellow;
      //const boost = Ethereal.starBoost;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 1.2).div(10).add(1), boost.div(100).add(1));
    },
    description: amount => `Multiply the Celestial Matter Conversion Exponent by ${formatX(amount, 2, 3)}`
  },
  green: {
    id: 3,
    name: "green",
    dmReq: 1e20,
    resetReq: 1e16,
    effect: () => {
      const amount = player.endgame.ethereal.stars.green;
      //const boost = Ethereal.starBoost;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 1.5).div(20).add(1), boost.div(100).add(1));
    },
    description: amount => `Raise Imaginary Machine Gain to ${formatPow(amount, 2, 3)}`
  },
  blue: {
    id: 4,
    name: "blue",
    dmReq: 1e25,
    resetReq: 1e18,
    effect: () => {
      const amount = player.endgame.ethereal.stars.blue;
      //const boost = Ethereal.starBoost;
      return Decimal.pow(Decimal.pow(amount.add(1), 0.8), boost.div(100).add(1));
    },
    description: amount => `Multiply Ethereal Power Gain by ${formatX(amount, 2, 3)}`
  },
  purple: {
    id: 5,
    name: "purple",
    dmReq: 1e30,
    resetReq: 1e20,
    effect: () => {
      const amount = player.endgame.ethereal.stars.purple;
      //const boost = Ethereal.starBoost;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 0.8).div(100).add(1), boost.div(100).add(1));
    },
    description: amount => `Raise the Exponents of all Time Dimension Multipliers to ${formatPow(amount, 2, 3)}`
  },
  white: {
    id: 6,
    name: "white",
    dmReq: 1e35,
    resetReq: 1e24,
    effect: () => {
      const amount = player.endgame.ethereal.stars.white;
      //const boost = Ethereal.starBoost;
      return Decimal.pow10(Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)).times(100), 1.8), boost.div(100).add(1)));
    },
    description: amount => `Increase the Dark Matter cap by ${formatX(amount, 2)}`
  },
  black: {
    id: 7,
    name: "black",
    dmReq: 1e40,
    resetReq: 1e30,
    effect: () => {
      const amount = player.endgame.ethereal.stars.black;
      //const boost = Ethereal.starBoost;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 1.3).div(100).add(1), boost.div(100).add(1));
    },
    description: amount => `Raise the Antimatter Exponent to ${formatPow(amount, 2, 3)}`
  },
  gray: {
    id: 8,
    name: "gray",
    dmReq: 1e50,
    resetReq: 1e40,
    effect: () => {
      const amount = player.endgame.ethereal.stars.gray;
      return Decimal.log10(amount.add(1)).times(10);
    },
    description: amount => `Increase the effectiveness of all other stars by ${formatPercents(1 + amount.toNumber(), 2)}`
  },
};

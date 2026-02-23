export const Hadrons = {
  get hadrons() {
    return player.celestials.laitela.hadrons;
  },
  get timeFactor() {
    return Time.thisEndgameRealTime._ms.div(36000);
  },
  get singularityMultiplier() {
    return Decimal.pow10(new Decimal(this.hadrons.light).times(this.timeFactor.times(4).min(100)).times(10));
  },
  get darkMatterCapMultiplier() {
    return Decimal.pow10(new Decimal(this.hadrons.light).times(this.timeFactor.times(2).min(100)).times(100));
  },
  get darkEnergyAscensionBoost() {
    return new Decimal(this.hadrons.light).times(this.timeFactor.min(100)).toNumber();
  },
  get entropyFormulaBoost() {
    return Decimal.pow(Decimal.log10(this.timeFactor.div(2).max(1).min(100)).times(2).add(1), this.hadrons.light);
  },
  get continuumMultiplier() {
    return Decimal.pow(Decimal.log10(this.timeFactor.div(5).max(1).min(100)).div(2).add(1), this.hadrons.dark);
  }
};

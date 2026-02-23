export const Hadrons = {
  get hadrons() {
    return player.celestials.laitela.hadrons;
  },
  get timeFactor() {
    return Time.thisEndgameRealTime._ms.div(36000);
  },
  get singularityMultiplier() {
    return DualityUpgrade(15).isBought ? Decimal.pow10(new Decimal(this.hadrons.light).times(this.timeFactor.times(4).min(100)).times(10)) : DC.D1;
  },
  get darkMatterCapMultiplier() {
    return DualityUpgrade(16).isBought ? Decimal.pow10(new Decimal(this.hadrons.light).times(this.timeFactor.times(2).min(100)).times(100)) : DC.D1;
  },
  get darkEnergyAscensionBoost() {
    return DualityUpgrade(17).isBought ? new Decimal(this.hadrons.light).times(this.timeFactor.min(100)) : DC.D0;
  },
  get entropyFormulaBoost() {
    return DualityUpgrade(18).isBought ? Decimal.pow(Decimal.log10(this.timeFactor.div(2).max(1).min(100)).times(2).add(1), this.hadrons.light) : DC.D1;
  },
  get continuumMultiplier() {
    return DualityUpgrade(19).isBought ? Decimal.pow(Decimal.log10(this.timeFactor.div(5).max(1).min(100)).div(2).add(1), this.hadrons.dark) : DC.D1;
  }
};

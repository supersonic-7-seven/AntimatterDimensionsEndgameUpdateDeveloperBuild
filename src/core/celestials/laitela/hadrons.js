export const Hadrons = {
  get hadrons() {
    return player.celestials.laitela.hadrons;
  },
  get timeFactor() {
    return DualityUpgrade(15).isBought ? Time.thisEndgameRealTime._ms.div(36000) : DC.D0;
  },
  get singularityMultiplier() {
    return DualityUpgrade(15).isBought && !player.disablePostReality ? Decimal.pow10(new Decimal(this.hadrons.light).times(
      this.timeFactor.times(4).min(100)).times(10)) : DC.D1;
  },
  get darkMatterCapMultiplier() {
    return DualityUpgrade(16).isBought && !player.disablePostReality ? Decimal.pow10(new Decimal(this.hadrons.light).times(
      this.timeFactor.times(2).min(100)).times(100)) : DC.D1;
  },
  get darkEnergyAscensionBoost() {
    return DualityUpgrade(17).isBought && !player.disablePostReality ? new Decimal(this.hadrons.light).times(
      this.timeFactor.min(100)) : DC.D0;
  },
  get entropyFormulaBoost() {
    return DualityUpgrade(18).isBought && !player.disablePostReality ? Decimal.pow(Decimal.log10(
      this.timeFactor.div(2).max(1).min(100)).times(2).add(1), this.hadrons.light) : DC.D1;
  },
  get continuumMultiplier() {
    return DualityUpgrade(19).isBought && !player.disablePostReality ? Decimal.pow(Decimal.log10(
      this.timeFactor.div(5).max(1).min(100)).div(10).times(1 + DualityUpgrade(21).effectOrDefault(0)).add(1), this.hadrons.dark) : DC.D1;
  }
};

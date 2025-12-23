import { AutobuyerState } from "./autobuyer";

export class BulkSingularityAutobuyerState extends AutobuyerState {
  get data() {
    return player.auto.bulkSingularity;
  }

  get name() {
    return `Bulk Singularity`;
  }

  get isUnlocked() {
    return ExpansionPack.laitelaPack.isBought;
  }

  get lowerBound() {
    return this.data.lowerBound;
  }

  set lowerBound(value) {
    this.data.lowerBound = value;
  }

  get upperBound() {
    return this.data.upperBound;
  }

  set upperBound(value) {
    this.data.upperBound = value;
  }

  get bulk() {
    return 0;
  }

  tick() {
    if (Singularity.timePerCondense.gt(this.upperBound)) {
      const bulk = Math.floor(Decimal.log10(Singularity.timePerCondense.div(this.upperBound)));
      player.celestials.laitela.singularityCapIncreases = player.celestials.laitela.singularityCapIncreases.sub(bulk);
    }

    if (Singularity.timePerCondense.lt(this.lowerBound)) {
      const bulk = Math.floor(Decimal.log10(Singularity.timePerCondense.div(this.lowerBound).recip()));
      player.celestials.laitela.singularityCapIncreases = player.celestials.laitela.singularityCapIncreases.add(bulk);
    }
  }
}

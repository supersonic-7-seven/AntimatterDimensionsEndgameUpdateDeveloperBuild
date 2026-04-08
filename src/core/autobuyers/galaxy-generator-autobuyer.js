import { IntervaledAutobuyerState } from "./autobuyer";

export class GalaxyGeneratorAutobuyerState extends IntervaledAutobuyerState {
  get _upgradeName() {
    let upgrades = ["additive", "multiplicative", "antimatterMult", "IPMult", "EPMult", "RSMult"];
    if (DivinityMilestone.firstDivine.isReached) upgrades.push("DTMult");
    return upgrades[this.id - 1];
  }

  get data() {
    return player.auto.galaxyGenerator.all[this.id - 1];
  }

  get name() {
    let names = ["Base Galaxy Multiplier", "Multiplicative Galaxy Multiplier", "Antimatter Multiplier", "Infinity Point Multiplier", "Eternity Point Multiplier", "Reality Shard Multiplier"];
    if (DivinityMilestone.firstDivine.isReached) names.push("Dilated Time Multiplier");
    return names[this.id - 1];
  }

  get interval() {
    return 1000 / Decimal.max(Decimal.log10(player.records.bestEndgame.galaxies.add(1)).sub(100), 1).toNumber();
  }

  get isUnlocked() {
    return ExpansionPack.pellePack.isBought && !player.disablePostReality;
  }

  get resetTickOn() {
    return PRESTIGE_EVENT.ENDGAME;
  }

  get bulk() {
    return 1;
  }

  tick() {
    if (Pelle.hasGalaxyGenerator) {
      super.tick();
      const upgradeName = this._upgradeName;
      GalaxyGeneratorUpgrades[upgradeName].purchase(this.bulk);
    }
  }

  static get entryCount() { return DivinityMilestone.firstDivine.isReached ? 7 : 6; }
  static get autobuyerGroupName() { return "Galaxy Generator Upgrade"; }
  static get isActive() { return player.auto.galaxyGenerator.isActive; }
  static set isActive(value) { player.auto.galaxyGenerator.isActive = value; }
}

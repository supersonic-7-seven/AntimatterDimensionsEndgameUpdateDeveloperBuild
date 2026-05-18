<script>
import AcceleratorsPanel from "./AcceleratorsPanel";
import NullUpgradesTabComponent from "./NullUpgradesTabComponent";

export default {
  name: "LargeHadronColliderTab",
  components: {
    AcceleratorsPanel,
    NullUpgradesTabComponent
  },
  data() {
    return {
      hasAccelerator: false,
      hadronSpeed: 0,
      accelPower: 1,
      amSoftcap: new Decimal(),
      amHardcap: new Decimal(),
      isRunning: false,
      highestAntimatter: new Decimal(),
      nullMatter: new Decimal(),
      nullPerSecond: new Decimal()
    };
  },
  computed: {
    hadronSpeedText() {
      if (this.hadronSpeed === 0) return `Your Hadrons are stationary`;
      if (this.hadronSpeed >= 1000) return `Your Hadrons are moving at ${formatHybridLarge(this.hadronSpeed, 3)} m/s`;
      return `Your Hadrons are moving at ${format(this.hadronSpeed, 3, 3)} m/s`;
    },
    voidText() {
      return this.isRunning ? "[Exit the Void.]" : "[Enter the Void.]";
    },
    runButtonOuterClass() {
      return {
        "l-void-run-button": true,
        "c-void-run-button": true,
        "c-void-run-button--running": this.isRunning,
        "c-void-run-button--not-running": !this.isRunning,
      };
    },
  },
  methods: {
    update() {
      this.hasAccelerator = Accelerators.all.some(a => a.isUnlocked);
      this.hadronSpeed = LHC.hadronSpeed;
      this.accelPower = LHC.acceleratorSpeed * 100000;
      this.amSoftcap.copyFrom(Pelle.isDoomed ? DC.E9E15 : Decimal.pow10(1e200));
      this.amHardcap.copyFrom(Pelle.isDoomed ? DC.ENUMMAX : LHC.breakingPoint);
      this.isRunning = player.endgame.largeHadronCollider.void.isRunning;
      this.highestAntimatter.copyFrom(player.endgame.largeHadronCollider.void.highestAntimatter);
      this.nullMatter.copyFrom(player.endgame.largeHadronCollider.void.nullMatter);
      this.nullPerSecond.copyFrom(!player.endgame.largeHadronCollider.void.isRunning ? DC.D0 :
        Decimal.log10(Decimal.pow(AntimatterDimension(1).productionPerSecond, 0.01).max(1)).pow(
        Decimal.log10(Decimal.log10(Decimal.pow(AntimatterDimension(1).productionPerSecond, 0.01).max(1)).max(1))));
    },
    startRun() {
      if (this.isRunning) exitTheVoid();
      else enterTheVoid();
    }
  }
};
</script>

<template>
  <div class="l-large-hadron-collider-tab">
    <div class="l-large-hadron-collider-all-content-container">
      <div
        v-if="hasAccelerator"
        class="c-large-hadron-collider-description"
      >
        {{ hadronSpeedText }}
        <br>
        The Large Hadron Collider is currently consuming {{ formatInt(accelPower) }} GWh of power
      </div>
      <AcceleratorsPanel v-if="hasAccelerator" />
      <div
        v-if="!hasAccelerator"
        class="c-large-hadron-collider-description"
      >
        Reach {{ format(Decimal.pow10(1e200), 2, 2) }} Antimatter
      </div>
      <div class="c-large-hadron-collider-entropy">
        Excess Entropy in the universe has caused your Antimatter to decay past {{ format(amSoftcap, 2, 2) }},
        and has restricted it from exceeding {{ format(amHardcap, 2, 2) }}.
      </div>
    </div>
    <br>
    <br>
    <div v-if="highestAntimatter.gt(10)">
      <span class="c-void-antimatter-amount">[Your highest Antimatter inside The Void is {{ format(highestAntimatter, 2, 1) }}.]</span>
      <br>
      <span class="c-null">[You have {{ format(nullMatter, 2, 2) }} Null Matter. +{{ format(nullPerSecond, 2, 2) }}/s]</span>
    </div>
    <div class="l-void-run">
      <div
        :class="runButtonOuterClass"
        @click="startRun"
      >
        <div
          :button-symbol="voidText"
        >
          {{ voidText }}
        </div>
      </div>
    </div>
    <NullUpgradesTabComponent />
  </div>
</template>

<style scoped>
.l-large-hadron-collider-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.l-large-hadron-collider-all-content-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

.c-large-hadron-collider-description {
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-alpha--base);
}

.c-large-hadron-collider-entropy {
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  color: red;
}

.c-void-antimatter-amount {
  position: relative;
  font-size: 1rem;
  color: red;
}

.c-null {
  position: relative;
  font-size: 2rem;
  color: black;
  text-shadow: 0 0 0.2rem white;
}
</style>

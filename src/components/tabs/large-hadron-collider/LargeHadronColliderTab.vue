<script>
import AcceleratorsPanel from "./AcceleratorsPanel";

export default {
  name: "LargeHadronColliderTab",
  components: {
    AcceleratorsPanel
  },
  data() {
    return {
      hasAccelerator: false,
      hadronSpeed: 0,
      amSoftcap: new Decimal(),
      amHardcap: new Decimal()
    };
  },
  computed: {
    hadronSpeedText() {
      if (this.hadronSpeed === 0) return `Your Hadrons are stationary`;
      if (this.hadronSpeed >= 1000) return `Your Hadrons are moving at ${formatHybridLarge(this.hadronSpeed, 3)} m/s`;
      return `Your Hadrons are moving at ${format(this.hadronSpeed, 3, 3)} m/s`;
    },
  },
  methods: {
    update() {
      this.hasAccelerator = Accelerators.all.some(a => a.isUnlocked);
      this.hadronSpeed = LHC.hadronSpeed;
      this.amSoftcap.copyFrom(Pelle.isDoomed ? DC.E9E15 : Decimal.pow10(1e200));
      this.amHardcap.copyFrom(Pelle.isDoomed ? DC.ENUMMAX : LHC.breakingPoint);
    },
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
</style>

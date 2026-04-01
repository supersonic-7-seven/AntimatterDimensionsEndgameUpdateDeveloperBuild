<script>
export default {
  name: "CelestialBreakInfinityButton",
  data() {
    return {
      isBroken: false,
      isUnlocked: false
    };
  },
  computed: {
    classObject() {
      return {
        "o-break-celestial-infinity-upgrade-btn": true,
        "o-break-celestial-infinity-upgrade-btn--color-2": true,
        "o-break-celestial-infinity-upgrade-btn--available": this.isUnlocked,
        "o-break-celestial-infinity-upgrade-btn--unavailable": !this.isUnlocked,
        "o-break-celestial-infinity-upgrade-btn--unclickable": this.isBroken,
      };
    },
    text() {
      return this.isUnlocked
        ? (this.isBroken ? "CELESTIAL INFINITY IS BROKEN" : "BREAK CELESTIAL INFINITY")
        : `PURCHASE CELESTIAL BREAK INFINITY\n\nCOSTS: ${formatInt(10000)} CIP`;
    }
  },
  methods: {
    update() {
      this.isBroken = player.endgame.celDimExpansion.isBroken;
      this.isUnlocked = player.endgame.celDimExpansion.isBreakUnlocked;
    },
    clicked() {
      if (!this.isUnlocked && player.endgame.celestialPoints.gte(10000)) {
        Currency.celestialPoints.purchase(10000);
        player.endgame.celDimExpansion.isBreakUnlocked = true;
      }
      if (!this.isBroken && this.isUnlocked) Modal.breakCelestialInfinity.show();
    }
  }
};
</script>

<template>
  <button
    :class="classObject"
    @click="clicked"
  >
    {{ text }}
  </button>
</template>

<style scoped>

</style>

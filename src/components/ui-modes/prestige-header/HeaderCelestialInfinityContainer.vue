<script>
import CelestialCrunchButton from "./CelestialCrunchButton";

export default {
  name: "HeaderCelestialInfinityContainer",
  components: {
    CelestialCrunchButton,
  },
  data() {
    return {
      showContainer: false,
      celestialInfinityPoints: new Decimal(0),
    };
  },
  methods: {
    update() {
      this.showContainer = player.endgame.celDimExpansion.isBroken;
      this.celestialInfinityPoints.copyFrom(Currency.celestialInfinityPoints.value.floor());
    },
  },
};
</script>

<template>
  <div
    v-if="showContainer"
    class="c-prestige-button-container"
  >
    <div class="c-celestial-infinity-points">
      You have
      <span class="c-game-header__cip-amount">{{ format(celestialInfinityPoints, 2) }}</span>
      {{ pluralize("Celestial Infinity Point", celestialInfinityPoints) }}.
    </div>
    <CelestialCrunchButton />
  </div>
</template>

<style scoped>
.c-celestial-infinity-points {
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
}
</style>

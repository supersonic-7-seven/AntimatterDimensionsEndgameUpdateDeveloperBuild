<script>
export default {
  name: "CelestialCrunchButton",
  data() {
    return {
      isModern: false,
      shouldDisplay: false
    };
  },
  methods: {
    update() {
      this.shouldDisplay = !player.endgame.celDimExpansion.isBroken && Currency.celestialMatter.value.gte(DC.NUMMAX);
      if (!this.shouldDisplay) return;
      this.isModern = player.options.newUI;
    },
    handleClick() {
      celestialCrunchResetRequest();
    }
  }
};
</script>

<template>
  <span v-if="shouldDisplay">
    <div v-if="isModern">
      <button
        :class="{
          'btn-celestial-crunch': true,
        }"
        @click="handleClick"
      >
        Celestial Crunch
      </button>
    </div>
    <div v-else>
      <button
        :class="{
          'o-tab-btn': true,
          'o-big-crunch-btn': true,
          'l-old-ui__big-crunch-btn': true,
        }"
        @click="handleClick"
      >
        Celestial Crunch
      </button>
    </div>
  </span>
</template>

<style scoped>
.l-spacing {
  margin-top: 1rem;
}
</style>

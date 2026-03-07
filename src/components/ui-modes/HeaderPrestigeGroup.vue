<script>
import HeaderCenterContainer from "./prestige-header/HeaderCenterContainer";
import HeaderEternityContainer from "./prestige-header/HeaderEternityContainer";
import HeaderInfinityContainer from "./prestige-header/HeaderInfinityContainer";
import HeaderCelestialInfinityContainer from "./prestige-header/HeaderCelestialInfinityContainer";

export default {
  name: "HeaderPrestigeGroup",
  components: {
    HeaderCenterContainer,
    HeaderEternityContainer,
    HeaderInfinityContainer,
    HeaderCelestialInfinityContainer,
  },
  computed: {
    isCelestialDimensionsTab() {
      return Tab.dimensions.celestial.isOpen;
    },
  },
};
</script>

<template>
  <div v-if="!isCelestialDimensionsTab" class="c-prestige-info-blocks">
    <HeaderEternityContainer class="l-game-header__eternity" />
    <HeaderCenterContainer class="l-game-header__center" />
    <HeaderInfinityContainer class="l-game-header__infinity" />
  </div>

  <div v-else class="c-prestige-info-blocks">
    <HeaderEternityContainer class="l-game-header__eternity" />
    <HeaderCenterContainer class="l-game-header__center" />
    <HeaderCelestialInfinityContainer class="l-game-header__infinity" />
  </div>

</template>

<style scoped>
.c-prestige-info-blocks {
  display: flex;
  flex-direction: row;
  height: 14rem;
  width: 100%;
  color: var(--color-text);
}

.l-game-header__eternity {
  position: absolute;
  left: calc(25% - 22rem);
  width: 22rem;
}

.l-game-header__center {
  position: absolute;
  right: calc(50% - 25rem);
  width: 50rem;
}

.l-game-header__infinity {
  position: absolute;
  right: calc(25% - 22rem);
  width: 22rem;
}
</style>

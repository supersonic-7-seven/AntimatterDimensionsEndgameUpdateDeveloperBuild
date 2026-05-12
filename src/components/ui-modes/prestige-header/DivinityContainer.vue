<script>
import CondenseButton from "./CondenseButton";

export default {
  name: "DivinityContainer",
  components: {
    CondenseButton
  },
  data() {
    return {
      showContainer: false,
      divineStars: new Decimal(0),
      hasSupernova: false,
      nebulae: new Decimal(0),
    };
  },
  methods: {
    update() {
      this.showContainer = DivinityMilestone.divineDimensions.isReached;
      this.divineStars.copyFrom(Currency.divineStars.value.floor());
      //this.hasSupernova = PlayerProgress.nebulaeUnlocked();
      //this.nebulae.copyFrom(Currency.nebulae.value.floor());
    },
  },
  /*
  <div
    v-if="showContainer && hasSupernova"
    class="c-prestige-button-container"
  >
    <div class="c-divine-stars">
      You have
      <span class="c-game-header__neb-amount">{{ format(nebulae, 2) }}</span>
      {{ pluralize("Nebula", nebulae) }}.
    </div>
    <SupernovaButton />
  </div>
  */
};
</script>

<template>
  <div class="c-prestige-row">
    <div
      v-if="showContainer"
      class="c-prestige-button-container"
    >
      <div class="c-divine-stars">
        You have
        <span class="c-game-header__vs-amount">{{ format(divineStars, 2) }}</span>
        {{ pluralize("Divine Star", divineStars) }}.
      </div>
      <CondenseButton />
    </div>
  </div>
</template>

<style scoped>
.c-prestige-row {
  flex-direction: row;
}

.c-divine-stars {
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
}
</style>

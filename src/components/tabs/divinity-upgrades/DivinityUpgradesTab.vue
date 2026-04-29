<script>
import DivinityUpgradeButton from "./DivinityUpgradeButton";

export default {
  name: "DivinityUpgradesTab",
  components: {
    DivinityUpgradeButton
  },
  computed: {
    grid() {
      return [
        [
          DivinityUpgrade.divineL1U1,
          DivinityUpgrade.divineL1U2,
          DivinityUpgrade.divineL1U3,
          DivinityUpgrade.divineL1U4,
          DivinityUpgrade.divineL1U5,
        ],
        [
          DivinityUpgrade.divineL1U6,
          DivinityUpgrade.divineL1U7,
          DivinityUpgrade.divineL1U8,
          DivinityUpgrade.divineL1U9,
          DivinityUpgrade.divineL1U10,
        ]
      ];
    }
  },
};
</script>

<template>
  <div class="l-divinity-upgrade-grid">
    <div
      v-for="(column, columnId) in grid"
      :key="columnId"
      class="l-divinity-upgrade-grid__row"
    >
      <DivinityUpgradeButton
        v-for="upgrade in column"
        :key="upgrade.id"
        :upgrade="upgrade"
      />
    </div>
  </div>
</template>

<style scoped>

</style>

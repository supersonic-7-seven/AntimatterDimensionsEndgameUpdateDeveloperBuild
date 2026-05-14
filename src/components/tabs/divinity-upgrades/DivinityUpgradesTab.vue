<script>
import DivinityUpgradeButton from "./DivinityUpgradeButton";

export default {
  name: "DivinityUpgradesTab",
  components: {
    DivinityUpgradeButton
  },
  data() {
    return {
      has1: false,
      has2: false,
      has3: false,
      has4: false,
      has5: false
    };
  },
  computed: {
    grid1() {
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
    },
    grid2() {
      return [
        [
          DivinityUpgrade.divineL2U1,
          DivinityUpgrade.divineL2U2,
          DivinityUpgrade.divineL2U3,
          DivinityUpgrade.divineL2U4,
          DivinityUpgrade.divineL2U5,
        ],
        [
          DivinityUpgrade.divineL2U6,
          DivinityUpgrade.divineL2U7,
          DivinityUpgrade.divineL2U8,
          DivinityUpgrade.divineL2U9,
          DivinityUpgrade.divineL2U10,
        ]
      ];
    }
  },
  methods: {
    update() {
      this.has1 = DivinityMilestone.divineDimensions.isReached;
      this.has2 = PlayerProgress.condenseUnlocked();
      this.has3 = (DivinityUpgrades.all.filter(u => u.layer === 2 && u.isBought).length === DivinityUpgrades.all.filter(u => u.layer === 2).length);
      //this.has4 = PlayerProgress.nebulaeUnlocked();
      //this.has5 = (DivinityUpgrades.all.filter(u => u.layer === 4 && u.isBought).length === DivinityUpgrades.all.filter(u => u.layer === 4).length);
    }
  }
};
</script>

<template>
  <div class="l-divinity-upgrade-grid">
    <div v-if="has1">
      <div class="c-divinity-header">
        Layer One Upgrades
      </div>
      <div
        v-for="(column, columnId) in grid1"
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
    <div v-if="has2">
      <div class="c-divinity-header">
        Layer Two Upgrades
      </div>
      <div
        v-for="(column, columnId) in grid2"
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
  </div>
</template>

<style scoped>
.c-divinity-header {
  position: relative;
  font-size: 3rem;
  font-weight: bold;
  color: var(--color-pelle--base);
}
</style>

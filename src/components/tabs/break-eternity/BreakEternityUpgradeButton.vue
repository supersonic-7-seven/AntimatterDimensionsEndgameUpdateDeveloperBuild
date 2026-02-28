<script>
import CostDisplay from "@/components/CostDisplay";
import DescriptionDisplay from "@/components/DescriptionDisplay";
import EffectDisplay from "@/components/EffectDisplay";
import HintText from "@/components/HintText";

export default {
  name: "BreakEternityUpgradeButton",
  components: {
    DescriptionDisplay,
    EffectDisplay,
    CostDisplay,
    HintText
  },
  props: {
    upgrade: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isCapped: false,
      isAffordable: false,
      isAvailable: false
    };
  },
  computed: {
    config() {
      return this.upgrade.config;
    },
    classObject() {
      return {
        "o-break-eternity-upgrade": true,
        "o-break-eternity-upgrade--bought": this.isCapped,
        "o-break-eternity-upgrade--available": !this.isCapped && this.isAffordable && this.isAvailable,
        "o-break-eternity-upgrade--unavailable": !this.isCapped && !this.isAffordable || !this.isBought && !this.isAvailable
      };
    }
  },
  methods: {
    update() {
      const upgrade = this.upgrade;
      this.isCapped = upgrade.isCapped;
      this.isAffordable = upgrade.isAffordable && upgrade.isAvailable;
      this.isAvailable = upgrade.isAvailable;
    }
  }
};
</script>

<template>
  <div class="l-spoon-btn-group">
    <button
      v-if="isAvailable"
      :class="classObject"
      class="l-break-eternity-upgrade-btn"
      @click="upgrade.purchase()"
    >
      <HintText
        type="breakEternityUpgrades"
        class="l-hint-text--reality-upgrade c-hint-text--reality-upgrade"
      >
        {{ config.name }}
      </HintText>
      <DescriptionDisplay :config="upgrade.config" />
      <EffectDisplay :config="upgrade.config" />
      <CostDisplay
        :config="upgrade.config"
        name="Antimatter"
      />
    </button>
    <button
      v-else
      :class="classObject"
      class="l-break-eternity-upgrade-btn"
    >
      <HintText
        type="breakEternityUpgrades"
        class="l-hint-text--reality-upgrade c-hint-text--reality-upgrade"
      >
        {{ config.name }}
      </HintText>
      <DescriptionDisplay :config="upgrade.config" />
      <EffectDisplay :config="upgrade.config" />
      <CostDisplay
        v-if="!isCapped"
        :config="upgrade.config"
        name="Antimatter"
      />
    </button>
  </div>
</template>

<style scoped>

</style>

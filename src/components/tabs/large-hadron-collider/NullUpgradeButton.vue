<script>
import CostDisplay from "@/components/CostDisplay";
import DescriptionDisplay from "@/components/DescriptionDisplay";
import EffectDisplay from "@/components/EffectDisplay";
import HintText from "@/components/HintText";

export default {
  name: "NullUpgradeButton",
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
      isBought: false,
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
        "o-null-upgrade": true,
        "o-null-upgrade--bought": this.isBought,
        "o-null-upgrade--available": !this.isBought && this.isAffordable && this.isAvailable,
        "o-null-upgrade--unavailable": !this.isBought && !this.isAffordable || !this.isBought && !this.isAvailable
      };
    }
  },
  methods: {
    update() {
      const upgrade = this.upgrade;
      this.isBought = upgrade.isBought || upgrade.isCapped;
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
      class="l-null-upgrade-btn"
      @click="upgrade.purchase()"
    >
      <HintText
        type="nullUpgrades"
        class="l-hint-text--reality-upgrade c-hint-text--reality-upgrade"
      >
        {{ config.name }}
      </HintText>
      <DescriptionDisplay :config="upgrade.config" />
      <EffectDisplay :config="upgrade.config" />
      <CostDisplay
        v-if="!isBought"
        :config="upgrade.config"
        name="Null Matter"
      />
    </button>
    <button
      v-else
      :class="classObject"
      class="l-null-upgrade-btn"
    >
      <HintText
        type="nullUpgrades"
        class="l-hint-text--reality-upgrade c-hint-text--reality-upgrade"
      >
        {{ config.name }}
      </HintText>
      <DescriptionDisplay :config="upgrade.config" />
      <EffectDisplay :config="upgrade.config" />
      <CostDisplay
        v-if="!isBought"
        :config="upgrade.config"
        name="Null Matter"
      />
    </button>
  </div>
</template>

<style scoped>

</style>

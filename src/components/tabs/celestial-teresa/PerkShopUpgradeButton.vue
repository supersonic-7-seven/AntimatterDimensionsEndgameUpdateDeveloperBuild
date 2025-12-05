<script>
import CostDisplay from "@/components/CostDisplay";
import DescriptionDisplay from "@/components/DescriptionDisplay";
import EffectDisplay from "@/components/EffectDisplay";

export default {
  name: "PerkShopUpgradeButton",
  components: {
    DescriptionDisplay,
    EffectDisplay,
    CostDisplay
  },
  props: {
    upgrade: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isAvailableForPurchase: false,
      isCapped: false,
      otherCurr: false,
      displayEffect: false,
    };
  },
  computed: {
    isDoomed: () => Pelle.isDoomed,
    classObject() {
      return {
        "o-teresa-shop-button": true,
        "o-teresa-shop-button--available": this.isAvailableForPurchase && !this.isCapped,
        "o-teresa-shop-button--capped": this.isCapped,
        "o-teresa-shop-button--pelle-disabled": this.isDoomed &&
          (this.upgrade === PerkShopUpgrade.musicGlyph || this.upgrade === PerkShopUpgrade.fillMusicGlyph)
      };
    },
    effectConfig() {
      const config = this.config;
      return {
        effect: () => this.upgrade.chargedValue !== config.effect ? config.chargedEffect : config.effect,
        formatEffect: config.formatEffect,
      };
    },
  },
  methods: {
    update() {
      this.isAvailableForPurchase = this.upgrade.isAvailableForPurchase;
      this.isCapped = this.upgrade.isCapped;
      this.otherCurr = (this.upgrade === PerkShopUpgrade.addCharges);
      this.displayEffect = this.upgrade.displayEffect;
    }
  }
};
</script>

<template>
  <div class="l-spoon-btn-group">
    <button
      :class="classObject"
      @click="upgrade.purchase()"
    >
      <DescriptionDisplay
        v-if="displayEffect"
        :config="upgrade.config"
        :length="70"
      />
      <br>
      <EffectDisplay :config="effectConfig" />
      <br>
      <CostDisplay
        v-if="!isCapped"
        :config="upgrade.config"
        :name="otherCurr ? 'Celestial Point' : 'Perk Point'"
      />
    </button>
  </div>
</template>

<style scoped>
.o-teresa-shop-button--pelle-disabled {
  text-decoration: line-through;
  cursor: auto;
}
</style>

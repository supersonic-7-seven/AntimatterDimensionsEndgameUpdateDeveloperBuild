<script>
import CostDisplay from "@/components/CostDisplay";
import DescriptionDisplay from "@/components/DescriptionDisplay";
import EffectDisplay from "@/components/EffectDisplay";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "PerkShopUpgradeButton",
  components: {
    PrimaryButton,
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
      chargeView: false,
      chargeUnlocked: false,
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
    chargeDisplay() {
      return this.chargeView ? "ON" : "OFF";
    },
  },
  watch: {
    chargeView(newValue) {
      Teresa.chargeModeOn = newValue;
    }
  },
  methods: {
    update() {
      this.isAvailableForPurchase = this.upgrade.isAvailableForPurchase;
      this.isCapped = this.upgrade.isCapped;
      this.otherCurr = (this.upgrade === PerkShopUpgrade.addCharges);
      this.chargeView = Teresa.chargeModeOn;
      this.chargeUnlocked = ExpansionPack.teresaPack.isBought;
    }
  }
};
</script>

<template>
  <div>
    <div class="l-spoon-btn-group">
      <button
        :class="classObject"
        @click="upgrade.purchase()"
      >
        <DescriptionDisplay
          :config="upgrade.config"
          :length="70"
        />
        <br>
        <EffectDisplay :config="upgrade.config" />
        <br>
        <CostDisplay
          v-if="!isCapped"
          :config="upgrade.config"
          :name="otherCurr ? 'Celestial Point' : 'Perk Point'"
        />
      </button>
    </div>
    <PrimaryButton
      v-if="chargeUnlocked"
      class="o-primary-btn--subtab-option"
      @click="chargeView = !chargeView"
    >
      Toggle Charge Mode: {{ chargeDisplay }}
    </PrimaryButton>
  </div>
</template>

<style scoped>
.o-teresa-shop-button--pelle-disabled {
  text-decoration: line-through;
  cursor: auto;
}
</style>

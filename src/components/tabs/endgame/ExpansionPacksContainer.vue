<script>
import CostDisplay from "@/components/CostDisplay";
import DescriptionDisplay from "@/components/DescriptionDisplay";
import EffectDisplay from "@/components/EffectDisplay";

export default {
  name: "ExpansionPacksContainer",
  components: {
    DescriptionDisplay,
    EffectDisplay,
    CostDisplay
  },
  props: {
    pack: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isBought: false,
      isUnlocked: false
    };
  },
  computed: {
    classObject() {
      return {
        "o-expansion-pack": true,
        "o-expansion-pack--teresa": this.pack.config.id === "teresaPack",
        "o-expansion-pack--effarig": this.pack.config.id === "effarigPack",
        "o-expansion-pack--enslaved": this.pack.config.id === "enslavedPack",
        "o-expansion-pack--v": this.pack.config.id === "vPack",
        "o-expansion-pack--ra": this.pack.config.id === "raPack",
        "o-expansion-pack--laitela": this.pack.config.id === "laitelaPack",
        "o-expansion-pack--pelle": this.pack.config.id === "pellePack"
      };
    },
  },
  methods: {
    update() {
      const pack = this.pack;
      this.isBought = pack.isBought;
      this.isUnlocked = pack.isUnlocked;
    }
  }
};
</script>

<template>
  <div v-show="isUnlocked">
  <button
    :class="classObject"
    @click="pack.purchase()"
  >
    <DescriptionDisplay :config="pack.config" />
    <EffectDisplay
      br
      :config="pack.config"
    />
    <CostDisplay
      v-if="!isBought"
      br
      :config="upgrade.config"
      name="Antimatter"
    />
  </button>
</template>

<style scoped>

</style>

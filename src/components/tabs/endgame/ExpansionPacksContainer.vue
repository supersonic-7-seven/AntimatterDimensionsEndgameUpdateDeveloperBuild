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
        "o-expansion-pack--teresa": this.pack.config.id === "teresaPack" && !this.isBought,
        "o-expansion-pack--effarig": this.pack.config.id === "effarigPack" && !this.isBought,
        "o-expansion-pack--enslaved": this.pack.config.id === "enslavedPack" && !this.isBought,
        "o-expansion-pack--v": this.pack.config.id === "vPack" && !this.isBought,
        "o-expansion-pack--ra": this.pack.config.id === "raPack" && !this.isBought,
        "o-expansion-pack--laitela": this.pack.config.id === "laitelaPack" && !this.isBought,
        "o-expansion-pack--pelle": this.pack.config.id === "pellePack" && !this.isBought,
        "o-expansion-pack--teresa--bought": this.pack.config.id === "teresaPack" && this.isBought,
        "o-expansion-pack--effarig--bought": this.pack.config.id === "effarigPack" && this.isBought,
        "o-expansion-pack--enslaved--bought": this.pack.config.id === "enslavedPack" && this.isBought,
        "o-expansion-pack--v--bought": this.pack.config.id === "vPack" && this.isBought,
        "o-expansion-pack--ra--bought": this.pack.config.id === "raPack" && this.isBought,
        "o-expansion-pack--laitela--bought": this.pack.config.id === "laitelaPack" && this.isBought,
        "o-expansion-pack--pelle--bought": this.pack.config.id === "pellePack" && this.isBought
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
        :config="pack.config"
        name="Antimatter"
      />
    </button>
  </div>
</template>

<style scoped>

</style>

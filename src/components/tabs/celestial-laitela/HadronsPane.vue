<script>
export default {
  name: "HadronsPane",
  data() {
    return {
      totalHadrons: 0,
      lightHadrons: 0,
      darkHadrons: 0,
      hadronTimer: new Decimal(0),
      effect1: new Decimal(1),
      effect2: new Decimal(1),
      effect3: new Decimal(0),
      effect4: new Decimal(1),
      effect5: new Decimal(1),
      hasEffect1: false,
      hasEffect2: false,
      hasEffect3: false,
      hasEffect4: false,
      hasDark: false
    };
  },
  computed: {
    effect1Time() {
      return TimeSpan.fromHours(new Decimal(0.25).sub(this.hadronTimer)).toStringShort();
    },
    effect2Time() {
      return TimeSpan.fromHours(new Decimal(0.5).sub(this.hadronTimer)).toStringShort();
    },
    effect3Time() {
      return TimeSpan.fromHours(new Decimal(1).sub(this.hadronTimer)).toStringShort();
    },
    effect4Time() {
      return TimeSpan.fromHours(new Decimal(2).sub(this.hadronTimer)).toStringShort();
    },
    effect5Time() {
      return TimeSpan.fromHours(new Decimal(5).sub(this.hadronTimer)).toStringShort();
    },
    effect1Text() {
      if (this.effect1Time.lte(0)) return `Effect is capped`;
      return `Time to cap: ${this.effect1Time}`;
    },
    effect2Text() {
      if (this.effect1Time.lte(0)) return `Effect is capped`;
      return `Time to cap: ${this.effect1Time}`;
    },
    effect3Text() {
      if (this.effect3Time.lte(0)) return `Effect is capped`;
      return `Time to cap: ${this.effect1Time}`;
    },
    effect4Text() {
      if (this.effect4Time.lte(0)) return `Effect is capped`;
      return `Time to cap: ${this.effect1Time}`;
    },
    effect5Text() {
      if (this.effect5Time.lte(0)) return `Effect is capped`;
      return `Time to cap: ${this.effect1Time}`;
    },
    hadronTime() {
      return TimeSpan.fromHours(this.hadronTimer).toStringShort();
    }
  },
  methods: {
    update() {
      const hadrons = player.celestials.laitela.hadrons;
      this.totalHadrons = hadrons.total;
      this.lightHadrons = hadrons.light;
      this.darkHadrons = hadrons.dark;
      this.hadronTimer.copyFrom(Hadrons.timeFactor.div(100));
      this.effect1.copyFrom(Hadrons.singularityMultiplier);
      this.effect2.copyFrom(Hadrons.darkMatterCapMultiplier);
      this.effect3.copyFrom(Hadrons.darkEnergyAscensionBoost);
      this.effect4.copyFrom(Hadrons.entropyFormulaBoost);
      this.effect5.copyFrom(Hadrons.continuumMultiplier);
      this.hasEffect1 = DualityUpgrade(15).isBought;
      this.hasEffect2 = DualityUpgrade(16).isBought;
      this.hasEffect3 = DualityUpgrade(17).isBought;
      this.hasEffect4 = DualityUpgrade(18).isBought;
      this.hasDark = DualityUpgrade(19).isBought;
    },
    assignOne() {
      player.celestials.laitela.hadrons.light -= 1;
      player.celestials.laitela.hadrons.dark += 1;
    },
    unassignOne() {
      player.celestials.laitela.hadrons.light += 1;
      player.celestials.laitela.hadrons.dark -= 1;
    },
    assignAll() {
      player.celestials.laitela.hadrons.light = 0;
      player.celestials.laitela.hadrons.dark = player.celestials.laitela.hadrons.total;
    },
    unassignAll() {
      player.celestials.laitela.hadrons.light = player.celestials.laitela.hadrons.total;
      player.celestials.laitela.hadrons.dark = 0;
    }
  }
};
</script>

<template>
  <div class="c-laitela-hadrons-container">
    <div class="c-laitela-hadrons-row">
      <h2>
        You have {{ quantify("Hadrons", lightHadrons, 2) }}
      </h2>
      <h2 v-if="hasDark">
        You have {{ quantify("Dark Hadrons", darkHadrons, 2) }}
      </h2>
      <br>
      <h2>
        You have spent {{ hadronTime }} in your current Endgame
      </h2>
    </div>
    <div
      v-if="hasEffect1"
      class="c-laitela-hadrons-row"
    >
      <div>
        Hadron Effect 1:
      </div>
      <div>
        Multiply Singularities by {{ format(effect1, 2, 2) }}
      </div>
      <div>
        {{ effect1Text }}
      </div>
    </div>
    <div
      v-if="hasEffect2"
      class="c-laitela-hadrons-row"
    >
      <div>
        Hadron Effect 2:
      </div>
      <div>
        Multiply Dark Matter cap by {{ format(effect2, 2, 2) }}
      </div>
      <div>
        {{ effect2Text }}
      </div>
    </div>
    <div
      v-if="hasEffect3"
      class="c-laitela-hadrons-row"
    >
      <div>
        Hadron Effect 3:
      </div>
      <div>
        Increase Dark Energy Multiplier on Ascension by {{ format(effect3, 2, 2) }}
      </div>
      <div>
        {{ effect3Text }}
      </div>
    </div>
    <div
      v-if="hasEffect4"
      class="c-laitela-hadrons-row"
    >
      <div>
        Hadron Effect 4:
      </div>
      <div>
        Antimatter generates {{ formatX(effect4, 2, 2) }} more Entropy
      </div>
      <div>
        {{ effect4Text }}
      </div>
    </div>
    <div
      v-if="hasDark"
      class="c-laitela-hadrons-row"
    >
      <div>
        Dark Hadron Effect:
      </div>
      <div>
        Multiply Continuum Purchases by {{ format(effect5, 2, 2) }}
      </div>
      <div>
        {{ effect5Text }}
      </div>
    </div>
    <div v-if="hasDark">
      <button
        class="c-laitela-hadrons-assign"
        :class="{ 'c-laitela-hadrons-assign--available' : lightHadrons > 0 }"
        @click="assignOne"
      >
        Convert a Hadron into a Dark Hadron.
      </button>
      <button
        class="c-laitela-hadrons-assign"
        :class="{ 'c-laitela-hadrons-assign--available' : darkHadrons > 0 }"
        @click="unassignOne"
      >
        Covert a Dark Hadron into a Hadron.
      </button>
      <button
        class="c-laitela-hadrons-assign"
        :class="{ 'c-laitela-hadrons-assign--available' : lightHadrons > 0 }"
        @click="assignAll"
      >
        Convert all Hadrons into Dark Hadrons.
      </button>
      <button
        class="c-laitela-hadrons-assign"
        :class="{ 'c-laitela-hadrons-assign--available' : darkHadrons > 0 }"
        @click="unassignAll"
      >
        Convert all Dark Hadrons into Hadrons.
      </button>
    </div>
  </div>
</template>

<style scoped>
.c-laitela-hadrons-assign {
  margin: 0 0.3rem 1rem;
}
</style>

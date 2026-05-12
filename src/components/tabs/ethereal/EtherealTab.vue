<script>
import StarContainer from "./StarContainer";

export default {
  name: "EtherealTab",
  components: {
    StarContainer
  },
  data() {
    return {
      etherealPower: new Decimal(),
      etherealPowerPerSecond: new Decimal(),
      cosmicSector: 0,
      nextSectorAt: new Decimal(),
      sectorBoost: new Decimal(),
      isExtended: false,
      canExtend: false,
      isBetter: false,
      nextStarReq: 0
    };
  },
  computed: {
    etherealPowerDisplay() {
      if (this.etherealPower.lt(1)) return `${format(this.etherealPower, 3, 3)}`;
      if (this.etherealPower.lt(10)) return `${format(this.etherealPower, 2, 2)}`;
      if (this.etherealPower.lt(100)) return `${format(this.etherealPower, 1, 1)}`;
      return `${formatHybridLarge(this.etherealPower, 3)}`;
    },
    extraPowerDisplay() {
      return `It is also based on Galactic Power amounts above ${format(DC.NUMMAX, 2, 2)}.`;
    },
    etherealClassObject() {
      return {
        "o-ethereal-button": true,
        "c-ethereal-btn": true,
        "o-ethereal-button--available": true
      };
    },
    stars() {
      return Object.values(GameDatabase.endgame.stars)
        .sort((a, b) => a.dmReq - b.dmReq)
        .map(config => new EtherealStarState(config));
    },
    rows() {
      return Math.ceil(this.stars.length / 3);
    },
    nextStarText() {
      if (!this.nextStarReq) return `All stars have been unlocked`;
      return `The next star unlocks at ${format(this.nextStarReq, 2, 2)} Dual Machines`;
    },
    etherealPowerTimeEstimate() {
      return TimeSpan.fromSeconds(Decimal.sub(this.nextSectorAt, this.etherealPower)
        .div(this.etherealPowerPerSecond)).toTimeEstimate();
    }
  },
  methods: {
    update() {
      this.etherealPower.copyFrom(Currency.etherealPower.value);
      this.etherealPowerPerSecond.copyFrom(getEtherealPowerGainPerSecond());
      this.cosmicSector = Ethereal.cosmicSector;
      this.nextSectorAt.copyFrom(Ethereal.sectorThreshold);
      this.sectorBoost.copyFrom(Ethereal.sectorBoost);
      this.isExtended = player.endgame.ethereal.isExtended;
      this.canExtend = this.etherealPower.gte(1e25);
      this.isBetter = Alpha.isDestroyed;
      this.nextStarReq = Ethereal.nextStarDMReq;
    },
    extendEthereal() {
      return player.endgame.ethereal.isExtended = true;
    },
    getStar(row, column) {
      return () => this.stars[(row - 1) * 3 + column - 1];
    }
  }
};
</script>

<template>
  <div class="l-ethereal-tab">
    <div>
      <div>
        <span class="c-normal-ethereal-text">You have </span>
        <span class="c-really-cool-ethereal-text">{{ etherealPowerDisplay }}</span>
        <span class="c-normal-ethereal-text"> Ethereal Power. </span>
        <span class="c-really-cool-ethereal-text">+{{ format(etherealPowerPerSecond, 3, 3) }}/s</span>
      </div>
      <div>
        <span class="c-normal-ethereal-text">
          Ethereal Power income is based on Celestial Points, Singularities, and Reality Machine amounts.
        </span>
        <span
          v-if="isBetter"
          class="c-normal-ethereal-text"
        >
          {{ extraPowerDisplay }}
        </span>
      </div>
      <div>
        <span class="c-normal-ethereal-text">Your Cosmic Sector is </span>
        <span class="c-really-cool-ethereal-text">{{ formatInt(cosmicSector) }}</span>
        <span class="c-normal-ethereal-text">, which is currently multiplying all Celestial Dimensions and delaying
        the Celestial Matter Softcap by </span>
        <span class="c-really-cool-ethereal-text">{{ formatX(sectorBoost, 3) }}</span><span class="c-normal-ethereal-text">.</span>
      </div>
      <div>
        <span class="c-normal-ethereal-text">You will ascend into the next Cosmic Sector at </span>
        <span
          class="c-really-cool-ethereal-text"
          :ach-tooltip="etherealPowerTimeEstimate"
        >{{ formatHybridLarge(nextSectorAt, 3) }}</span>
        <span class="c-normal-ethereal-text"> Ethereal Power.</span>
      </div>
    </div>
    <br>
    <div
      v-if="!isExtended"
      class="l-ethereal-extension-unlock"
    >
      <div v-if="!canExtend">
        <span class="c-normal-ethereal-text">Reach {{ format(1e25, 2, 2) }} Ethereal Power to Extend the Ethereal.</span>
      </div>
      <div v-if="canExtend">
        <button
          :class="etherealClassObject"
          @click="extendEthereal"
        >
          Extend the Ethereal
        </button>
      </div>
    </div>
    <div
      v-if="isExtended"
      class="l-star-grid"
    >
      <div
        v-for="row in rows"
        :key="row"
        class="l-star-grid__row"
      >
        <StarContainer
          v-for="column in 3"
          :key="row * 3 + column"
          :get-star="getStar(row, column)"
          class="l-star-grid__cell"
        />
      </div>
      <br>
      <span class="c-normal-ethereal-text">
        {{ nextStarText }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.l-ethereal-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.l-ethereal-extension-unlock {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.c-normal-ethereal-text {
  font-size: 2rem;
  color: #0000ff;
}

.c-really-cool-ethereal-text {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(#000000, #0000ff);
  background-clip: text;
  text-shadow: 0 0 1.5rem #0000ff;

  -webkit-text-fill-color: transparent;
}

.c-really-cool-ethereal-text::before{
  text-shadow: 0 0 white;
}
</style>

<script>
export default {
  name: "EtherealTab",
  data() {
    return {
      etherealPower: new Decimal(),
      etherealPowerPerSecond: new Decimal(),
      cosmicSector: 0,
      nextSectorAt: new Decimal(),
      sectorBoost: new Decimal(),
      isExtended: false,
      canExtend: false,
      cosmicSectorTimeEstimate: "Calculating..."
    };
  },
  computed: {
    etherealPowerDisplay() {
      if (this.etherealPower.lt(1)) return `${format(this.etherealPower, 3, 3)}`;
      if (this.etherealPower.lt(10)) return `${format(this.etherealPower, 2, 2)}`;
      if (this.etherealPower.lt(100)) return `${format(this.etherealPower, 1, 1)}`;
      return `${formatHybridLarge(this.etherealPower, 3)}`;
    },
    etherealClassObject() {
      return {
        "o-ethereal-button": true,
        "c-ethereal-btn": true,
        "o-ethereal-button--available": true
      };
    },
  },
  methods: {
    update() {
      this.etherealPower.copyFrom(Currency.etherealPower.value);
      this.etherealPowerPerSecond.copyFrom(getEtherealPowerGainPerSecond());
      this.cosmicSector = Ethereal.cosmicSector;
      this.nextSectorAt.copyFrom(Ethereal.sectorThreshold);
      this.sectorBoost.copyFrom(Ethereal.sectorBoost);
      this.isExtended = player.endgame.ethereal.isExtended;
      this.canExtend = this.etherealPower.gte(1e10);
      this.cosmicSectorTimeEstimate = TimeSpan.fromSeconds(Decimal.sub(this.nextSectorAt, this.etherealPower).div(this.etherealPowerPerSecond)).toTimeEstimate();
    },
    extendEthereal() {
      return player.endgame.ethereal.isExtended = true;
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
        <span v-if="false">It is also based on Galactic Power amounts above {{ format(DC.NUMMAX, 2, 2) }}.</span>
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
          :ach-tooltip="cosmicSectorTimeEstimate"
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
        <span class="c-normal-ethereal-text">Reach {{ format(1e10, 2, 2) }} Ethereal Power to Extend the Ethereal.</span>
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
  color: #0000c0;
}

.c-really-cool-ethereal-text {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(#000000, #0000c0);
  background-clip: text;
  text-shadow: 0 0 1.5rem #0000ff;

  -webkit-text-fill-color: transparent;
}
.c-really-cool-ethereal-text:hover::before{
  text-shadow: 0 0 white;
}
</style>

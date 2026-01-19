<script>
export default {
  name: "EtherealTab"
};
</script>

<template>
  <div>
    <div>
      <br>
      <div class="nyi-ethereal-text">
      <b>
        Below is the test style of numbers in the Ethereal
      </b>
      </div>
      <br>
      <div class="really-cool-ethereal-text">
        9007199254740992
      </div>
    </div>
  </div>
</template>

<style scoped>
.nyi-ethereal-text {
  font-size: 2rem;
  color: #0000c0;
}

.really-cool-ethereal-text {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(#000000, #0000c0);
  background-clip: text;
  text-shadow: 0 0 1.5rem #0000ff;

  -webkit-text-fill-color: transparent;
}
</style>

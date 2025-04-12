<template>
  <div class="counter-squared">
    {{ $store.state.counter }} <sup>2</sup> =
    {{ $store.getters.counterSquared }}
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.counter-squared {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 20px 0;
}
</style>

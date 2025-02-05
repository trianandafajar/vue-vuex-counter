<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter />
    <CounterSquare />
    <Button />
    <InputColorCode />
  </div>
</template>

<script>
import Counter from "../components/Counter.vue";
import CounterSquare from "../components/CounterSquare.vue";
import Button from "../components/Button.vue";
import InputColorCode from "../components/InputColorCode.vue";
// @ is an alias to /src

export default {
    name: "HomeView",
    components: { Counter, CounterSquare, Button, InputColorCode }
}
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
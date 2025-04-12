<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- Menampilkan komponen Counter -->
    <Counter />
    
    <!-- Menampilkan komponen CounterSquare -->
    <CounterSquare />
    
    <!-- Menampilkan komponen Button untuk mengubah counter -->
    <Button />
    
    <!-- Menampilkan komponen InputColorCode untuk mengubah warna -->
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
  components: { Counter, CounterSquare, Button, InputColorCode },
};
</script>

<style>
div {
  margin-bottom: 10px;
}

/* Gaya untuk komponen counter */
.counter {
  font-size: 80px;
}

/* Gaya untuk tombol */
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}

/* Styling untuk gambar logo */
img {
  display: block;
  margin: 0 auto 20px;
}
</style>

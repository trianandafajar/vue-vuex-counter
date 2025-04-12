<template>
  <div class="buttons">
    <button @click="$store.dispatch('decreaseCounter')">-</button>
    <button @click="$store.dispatch('increaseCounter')">+</button>

    <!-- Menampilkan nilai counter -->
    <p>Counter: {{ counter }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    // Mengambil nilai counter dari Vuex store
    counter() {
      return this.$store.getters.counter;
    },
  },
};
</script>

<style>
.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #45a049;
}

p {
  margin-top: 20px;
  font-size: 20px;
}
</style>

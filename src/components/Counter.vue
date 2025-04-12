<template>
  <div>
    <div class="counter" :style="{ color: $store.state.colorCode }">
      {{ $store.state.counter }}
    </div>
    
    <!-- Tombol untuk menaikkan dan menurunkan counter -->
    <div class="buttons">
      <button @click="$store.dispatch('increaseCounter')">+</button>
      <button @click="$store.dispatch('decreaseCounter')">-</button>
    </div>
    
    <!-- Input untuk mengganti warna -->
    <div class="color-picker">
      <label for="colorInput">Set Color Code: </label>
      <input
        id="colorInput"
        v-model="colorInput"
        type="text"
        @input="updateColor"
        placeholder="Enter color code"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorInput: "", // Model untuk input warna
    };
  },
  methods: {
    updateColor() {
      if (this.colorInput) {
        // Kirim input ke store untuk mengubah warna
        this.$store.dispatch("setColorCode", this.colorInput);
      }
    },
  },
};
</script>

<style scoped>
.counter {
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0;
}

.buttons button {
  font-size: 1.5rem;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
}

.color-picker {
  margin-top: 20px;
}

input {
  padding: 5px;
  font-size: 1rem;
  margin-left: 10px;
  border: 1px solid #ccc;
}
</style>

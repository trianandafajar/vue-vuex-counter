<template>
  <div class="color-input">
    <input 
      type="text" 
      v-model="colorCode" 
      placeholder="Enter the Color" 
    />
  </div>
</template>

<script>
export default {
  computed: {
    colorCode: {
      // Setter
      set(value) {
        // Dispatch action to update Vuex store
        this.$store.dispatch("setColorCode", value);
      },
      // Getter
      get() {
        return this.$store.state.colorCode;
      },
    },
  },
};
</script>

<style scoped>
.color-input input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  margin: 10px 0;
}
</style>

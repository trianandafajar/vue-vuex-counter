<template>
    <div class="">
        <input type="text" v-model="colorCode" placeholder="Enter the Color">
    </div>
</template>

<script>
export default {
    computed: {
        colorCode: {
            set(number) {
                this.$store.dispatch("setColorCode", number);
            },
            get() {
                return this.$store.state.colorCode;
            }
        }
    },
}
</script>

<style>

</style>
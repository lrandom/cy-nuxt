<script setup lang="ts">
const {data: products} = await useFetch("/api/v1/post");

definePageMeta({
  middleware: function (from, to) {
    console.log("Middleware from", from);
    console.log("Middleware to", to);
  },
})
</script>

<template>
  {{ products }}
</template>

<style scoped>

</style>
<script setup lang="ts">
useSeoMeta({
  title: "Post" + useRoute().params.id
})
</script>

<template>
  Post Page {{ useRoute().params.id }}
</template>

<style scoped>

</style>
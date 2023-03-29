<script setup lang="ts">
import MyComp from "./components/MyComp.vue";

const greeting = "greeting traveler";
</script>

<template>
  <div class="text-2xl texrt">
    my E-Shop
    <MyComp :msg="greeting" />
  </div>
</template>

<style scoped></style>

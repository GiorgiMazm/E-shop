<script setup lang="ts">
import MyComp from "./components/MyComp.vue";

const greeting = "greeting traveler";
</script>

<template>
  <div class="text-2xl text-amber-600">
    my E-Shops

    <MyComp :msg="greeting" />
  </div>
</template>

<style scoped></style>

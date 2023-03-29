<script setup lang="ts">
import MyComp from "./components/MyComp.vue";

const greeting = "greeting traveler";
</script>

<template>
  <div>
    my E-Shop
    <MyComp :msg="greeting" />
  </div>
</template>

<style scoped></style>

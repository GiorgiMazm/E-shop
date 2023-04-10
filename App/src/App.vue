<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { useProductStore } from "./stores/ProductStore";

const store = useProductStore();

store.signIn("giorgi@gmail.com", "qwert");
</script>

<template>
  <div>
    <AppHeader />
    <main><router-view /></main>
    <AppFooter />
  </div>
</template>

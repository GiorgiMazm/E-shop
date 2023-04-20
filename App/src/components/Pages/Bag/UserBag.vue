<script setup lang="ts">
import UserBagItem from "./UserBagItem.vue";
import { useProductStore } from "../../../stores/ProductStore";
import { computed } from "vue";

const store = useProductStore();
const userBag = computed(() => {
  return store.userModule.getCurrentUser?.bag;
});

const itemAmount = computed(() => store.userModule.getCurrentUser?.bag.length);
</script>

<template>
  <section class="bg-gray-400">
    <div class="container mx-auto">
      <h2 class="text-2xl">Your items: {{ itemAmount }}</h2>
      <ul class="flex flex-wrap justify-center">
        <UserBagItem
          v-for="(item, index) in userBag"
          :index="index"
          :key="index"
          :item="item"
        />
      </ul>
    </div>
  </section>
</template>

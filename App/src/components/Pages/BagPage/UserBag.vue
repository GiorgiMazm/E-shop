<script setup lang="ts">
import UserBagItem from "./UserBagItem.vue";
import { useProductStore } from "../../../stores/ProductStore";
import { computed } from "vue";

const store = useProductStore();
const userBag = computed(() => {
  const bag = store.getUserBagById(1);
  return bag ? bag.products : [];
});
</script>

<template>
  <section class="bg-gray-400">
    <div class="container mx-auto">
      <h2 class="text-2xl">Your items:</h2>
      <ul class="flex flex-wrap justify-center">
        <UserBagItem
          v-for="(item, index) in userBag"
          :index="index"
          :key="index"
          :name="item.name"
          :link="item.link"
          :price="item.price"
        />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import Item from "../Interfaces/Item";
import { XMarkIcon } from "@heroicons/vue/24/solid";

const userItems: Ref<Item[]> = ref([
  {
    name: "Macbook",
    price: 2000,
    link: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202303230456",
    id: 1,
  },
]);
</script>

<template>
  <section class="bg-gray-400">
    <div class="container mx-auto">
      <h2 class="text-2xl">Your items:</h2>
      <ul>
        <li
          v-for="(item, index) in userItems"
          :key="index"
          class="border-2 border-gray-700 p-4 w-1/3 flex items-center my-3 relative"
        >
          <XMarkIcon
            class="h-6 w-6 absolute left-2 top-5 cursor-pointer hover:text-white"
          />
          <span>{{ item.name }}</span>
          <img class="h-32 mx-3" :src="item.link" :alt="item.name" />
          <span class="mx-3">{{ item.price }}$</span>
        </li>
      </ul>
    </div>
  </section>
</template>

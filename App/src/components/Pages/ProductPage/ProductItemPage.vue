<script setup lang="ts">
import { useRoute } from "vue-router";
import { useProductStore } from "../../../stores/ProductStore";
import { CurrencyDollarIcon } from "@heroicons/vue/24/solid";
const store = useProductStore();
const route = useRoute();
const item = store.getProductById(Number(route.params.id));
</script>

<template>
  <section class="bg-gray-500">
    <div
      class="container mx-auto flex flex-wrap flex-col items-center py-5 text-gray-300"
      v-if="item"
    >
      <h1 class="py-4 text-5xl">Product information</h1>
      <h2 class="py-4 text-2xl">Name: {{ item.name }}</h2>
      <h2 class="mb-4">Category: {{ item.category }}</h2>
      <div class="flex justify-center">
        <img :src="item.link" :alt="item.name" class="w-2/5 h-2/5" />
        <div class="ml-5 w-2/5">
          <h2>Description: {{ item.description }}</h2>

          <button
            class="rounded-xl bg-gray-700 py-3 px-4 m-5 ml-0 hover:text-amber-600"
          >
            Buy now
          </button>
          <button
            @click="store.getCurrentUser.addItemToBag(item!)"
            class="rounded-xl bg-gray-700 py-3 px-4 m-5 hover:text-amber-500"
          >
            Add to basket
          </button>
        </div>
      </div>
      <h2 class="mt-4">
        Price: {{ item.price }}
        <CurrencyDollarIcon class="h-8 w-8 text-gray-300 inline" />
      </h2>
    </div>
  </section>
</template>

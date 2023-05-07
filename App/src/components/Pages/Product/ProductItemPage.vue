<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "../../../stores/ProductStore";
import { CurrencyDollarIcon } from "@heroicons/vue/24/solid";
import ReviewSection from "./Review/ReviewSection.vue";
import { ref } from "vue";

const store = useProductStore();
const route = useRoute();
const router = useRouter();
const item = store.productModule.getProductById(Number(route.params.id));
const quantity = ref(1);

function addSeveralItems() {
  if (store.userModule.getCurrentUser && item) {
    store.userModule.addItemToBag(item, quantity.value);
    alert("item was added to your bag");
  } else alert("You have to log in to add item to your bag");
  quantity.value = 1;
}
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
          <h2 class="mt-4">
            Price: {{ item.price }}
            <CurrencyDollarIcon class="h-8 w-8 text-gray-300 inline" />
          </h2>

          <div class="flex flex-col">
            <label>quantity</label>
            <input
              class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600 w-14"
              v-model="quantity"
            />
          </div>

          <button
            @click.prevent="router.push('/checkout')"
            class="rounded-xl bg-gray-700 py-3 px-4 m-5 ml-0 hover:text-amber-600"
          >
            Buy now
          </button>
          <button
            @click="addSeveralItems"
            class="rounded-xl bg-gray-700 py-3 px-4 m-5 hover:text-amber-500"
          >
            Add to basket
          </button>

          <router-link
            class="rounded-xl bg-gray-400 py-4 px-10 mr-3 my-4 hover:text-amber-500"
            :to="'/products/'"
          >
            Back</router-link
          >
          <ReviewSection :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { useProductStore } from "../../../stores/ProductStore";
defineProps<{
  price: number;
  imgLink: string;
  itemName: string;
  index: number;
  id: number;
}>();

const store = useProductStore();
</script>

<template>
  <div class="bg-red-800 w-80 m-2 p-2">
    <XMarkIcon
      class="h-6 w-6 cursor-pointer hover:text-black"
      @click="store.removeProductItem(index)"
    />

    <h2 class="text-center my-2">{{ itemName }}</h2>

    <img class="h-80 w-full" :src="imgLink" :alt="itemName" />
    <p class="py-3">{{ price }}$</p>
    <div class="flex flex-wrap justify-around">
      <button
        class="rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-600"
      >
        Buy now
      </button>
      <button
        @click="store.addItemToUserBag(id, 1)"
        class="rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-500"
      >
        Add to basket
      </button>

      <button
        class="my-5 rounded bg-gray-500 py-3 px-4 mr-3 hover:text-amber-500"
      >
        <router-link :to="'/product/' + id"> Learn more</router-link>
      </button>
    </div>
  </div>
</template>

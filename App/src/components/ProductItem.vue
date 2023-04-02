<script lang="ts" setup>
import { XMarkIcon } from "@heroicons/vue/24/solid";
defineProps<{
  price: number;
  imgLink: string;
  itemName: string;
  index: number;
}>();

const emit = defineEmits<{
  (e: "removeItem", index: number): void;
  (e: "addItemToBag", index: number): void;
}>();
</script>

<template>
  <div class="bg-red-800 w-80 m-2 p-2">
    <XMarkIcon
      class="h-6 w-6 cursor-pointer hover:text-black"
      @click="emit('removeItem', index)"
    />

    <h2 class="text-center my-2">{{ itemName }}</h2>

    <img class="h-80 w-full" :src="imgLink" :alt="itemName" />
    <p class="py-3">{{ price }}$</p>
    <button class="rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-600">
      Buy now
    </button>
    <button
      @click="emit('addItemToBag', index)"
      class="rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-500"
    >
      Add to basket
    </button>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  price: number;
  imgLink: string;
  itemName: string;
  index: number;
}>();

const emit = defineEmits<{ (e: "removeItem", index: number): void }>();
</script>

<template>
  <div class="bg-red-800 w-80 m-2 p-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 cursor-pointer"
      @click="emit('removeItem', index)"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>

    <h2 class="text-center my-2">{{ itemName }}</h2>

    <img class="h-80 w-full" :src="imgLink" :alt="itemName" />
    <p class="py-3">{{ price }}$</p>
    <button class="rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-600">
      Buy now
    </button>
    <button class="rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-500">
      Add to basket
    </button>
  </div>
</template>

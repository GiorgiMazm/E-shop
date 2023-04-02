<script lang="ts" setup>
defineProps<{ price: number; imgLink: string; itemName: string }>();
</script>

<template>
  <div class="bg-red-800 w-80 m-2 p-2">
    <h2 class="text-center">{{ itemName }}</h2>
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

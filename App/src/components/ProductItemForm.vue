<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const price = ref(0);
const imageLink = ref("");
const emit = defineEmits<{
  (e: "addItem", name: string, price: number, imageLink: string): void;
}>();
</script>

<template>
  <form class="my-5">
    <input
      class="rounded mx-3 text-black px-3"
      placeholder="Name of the product"
      type="text"
      v-model="name"
    />
    <label>Product name</label>

    <input
      class="rounded mx-3 text-black px-3"
      placeholder="Price of the product"
      type="text"
      v-model="price"
    />
    <label>Product price</label>

    <input
      class="rounded mx-3 text-black px-3"
      placeholder="Image of the product"
      type="text"
      v-model="imageLink"
    />
    <label>Product image</label>

    <button
      class="mx-3 rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-500"
      @click.prevent="emit('addItem', name, price, imageLink)"
      type="submit"
    >
      Create
    </button>
  </form>
</template>

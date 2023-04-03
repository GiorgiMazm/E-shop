<script setup lang="ts">
import { ref } from "vue";
import { useProductStore } from "../stores/ProductStore";

const store = useProductStore();
const name = ref("");
const price = ref(0);
const imageLink = ref("");
</script>

<template>
  <form class="my-5">
    <label>Product name</label>
    <input
      class="rounded mx-3 text-black px-3"
      placeholder="Name of the product"
      type="text"
      v-model="name"
    />

    <label>Product price</label>
    <input
      class="rounded mx-3 text-black px-3"
      placeholder="Price of the product"
      type="text"
      v-model="price"
    />

    <label>Product image</label>
    <input
      class="rounded mx-3 text-black px-3"
      placeholder="Image of the product"
      type="text"
      v-model="imageLink"
    />

    <button
      class="mx-3 rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-500"
      @click.prevent="store.addProductItem(name, price, imageLink)"
      type="submit"
    >
      Create
    </button>
  </form>
</template>

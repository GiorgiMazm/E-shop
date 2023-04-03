<script setup lang="ts">
import { ref } from "vue";
import ProductItem from "./ProductItem.vue";
import ProductItemForm from "./ProductItemForm.vue";
import { useProductStore } from "../stores/ProductStore";
import { storeToRefs } from "pinia";

const store = useProductStore();
const { productsList } = storeToRefs(store);

function addProductToBag(index: number): void {
  console.log(productsList.value[index]);
}

const newFormVisibility = ref(false);

function toggleNewItemForm(): void {
  newFormVisibility.value = !newFormVisibility.value;
}
</script>

<template>
  <section class="bg-gray-500 text-gray-200 pb-7">
    <div class="container mx-auto">
      <h1 class="text-4xl text-center pt-5">Our product</h1>
      <div class="flex flex-wrap justify-around mt-5">
        <ProductItem
          v-for="(item, index) in productsList"
          :item-name="item.name"
          :price="item.price"
          :img-link="item.link"
          :key="item.id"
          :index="index"
          @add-item-to-bag="addProductToBag"
        />
      </div>
      <button
        v-if="!newFormVisibility"
        @click="toggleNewItemForm"
        class="hover:text-black"
      >
        Add new product
      </button>
      <ProductItemForm v-if="newFormVisibility" />
      <button
        class="mx-3 rounded-l bg-gray-700 py-3 px-4 mr-3 hover:text-amber-500"
        v-if="newFormVisibility"
        @click="toggleNewItemForm"
      >
        Cancel
      </button>
    </div>
  </section>
</template>

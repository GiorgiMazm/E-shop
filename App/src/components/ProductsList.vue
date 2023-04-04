<script setup lang="ts">
import ProductItem from "./ProductItem.vue";
import ProductItemForm from "./ProductItemForm.vue";
import { useProductStore } from "../stores/ProductStore";
import { storeToRefs } from "pinia";
import Item from "../Interfaces/Item";
import { Ref } from "vue";

const store = useProductStore();
const { productsList }: { productsList: Ref<Item[]> } = storeToRefs(store);
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
          :id="item.id"
          :key="item.id"
          :index="index"
        />
      </div>
      <ProductItemForm />
    </div>
  </section>
</template>

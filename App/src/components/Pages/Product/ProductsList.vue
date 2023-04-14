<script setup lang="ts">
import ProductItem from "./ProductItem.vue";
import { useProductStore } from "../../../stores/ProductStore";
import { reactive } from "vue";

const store = useProductStore();
const productsList = reactive(store.productModule.getProductList);
</script>

<template>
  <section>
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-around mt-5">
        <ProductItem
          v-for="(item, index) in productsList"
          :item="item"
          :key="item.id"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

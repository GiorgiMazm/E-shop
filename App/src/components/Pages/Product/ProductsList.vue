<script setup lang="ts">
import ProductItem from "./ProductItem.vue";
import { useProductStore } from "../../../stores/ProductStore";
import { computed } from "vue";

const store = useProductStore();

const productsList = computed(() => store.productModule.getProductList);
</script>

<template>
  <section>
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-around mt-5">
        <ProductItem v-for="item in productsList" :item="item" :key="item.id" />
      </div>
    </div>
  </section>
</template>

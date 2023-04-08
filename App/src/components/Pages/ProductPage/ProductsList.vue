<script setup lang="ts">
import ProductItem from "./ProductItem.vue";
import { useProductStore } from "../../../stores/ProductStore";
import { storeToRefs } from "pinia";
import Item from "../../../types/Item";
import { Ref } from "vue";

const store = useProductStore();
const { getProductList: productsList }: { getProductList: Ref<Item[]> } =
  storeToRefs(store);
</script>

<template>
  <section>
    <div class="container mx-auto">
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
    </div>
  </section>
</template>

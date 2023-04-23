<script setup lang="ts">
import ProductsList from "./ProductsList.vue";
import ProductItemForm from "./ProductItemForm.vue";
import { ItemCategory } from "../../../types/ItemCategory";
import { ref } from "vue";
import { useProductStore } from "../../../stores/ProductStore";
import { onBeforeRouteLeave } from "vue-router";

const filter = ref<ItemCategory>(ItemCategory.NotSet);
const store = useProductStore();
store.productModule.loadAllProduct();

const keyWord = ref("");

onBeforeRouteLeave(() => {
  store.productModule.setFilteredProductList(ItemCategory.NotSet, "");
});
</script>

<template>
  <div class="bg-gray-500 text-gray-200 pb-5">
    <div class="mx-auto container">
      <h1 class="text-5xl text-center py-7 font-bold">Our products</h1>
      <div>
        <label class="text-gray-100">Filter</label>
        <select
          @change="store.productModule.setFilteredProductList(filter, keyWord)"
          v-model="filter"
          class="text-black ml-2"
        >
          <option :value="ItemCategory.NotSet" selected>Not set</option>
          <option :value="ItemCategory.Technique">Technique</option>
          <option :value="ItemCategory.Gym">Gym</option>
        </select>

        <label class="text-gray-100 mx-3">Find</label>
        <input
          @keyup="store.productModule.setFilteredProductList(filter, keyWord)"
          class="text-gray-900 px-2"
          v-model="keyWord"
          type="text"
        />
      </div>
      <ProductItemForm />
      <ProductsList />
    </div>
  </div>
</template>

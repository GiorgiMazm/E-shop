<script setup lang="ts">
import ProductsList from "./ProductsList.vue";
import ProductItemForm from "./ProductItemForm.vue";
import { ItemCategory } from "../../../types/ItemCategory";
import { ref } from "vue";
import { useProductStore } from "../../../stores/ProductStore";

const filter = ref<ItemCategory>(ItemCategory.NotSet);
const store = useProductStore();
</script>

<template>
  <div class="bg-gray-500 text-gray-200 pb-5">
    <h1 class="text-4xl text-center pt-5">Our product</h1>
    <div>
      <label>Filter</label>
      <select
        @change="store.productModule.setFilter(filter)"
        v-model="filter"
        class="text-black ml-2"
      >
        <option :value="ItemCategory.NotSet" selected>Not set</option>
        <option :value="ItemCategory.Technique">Technique</option>
        <option :value="ItemCategory.Gym">Gym</option>
      </select>
    </div>
    <ProductsList />
    <ProductItemForm />
  </div>
</template>

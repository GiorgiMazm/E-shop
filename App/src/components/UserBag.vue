<script setup lang="ts">
import UserBagItem from "./UserBagItem.vue";
import { useProductStore } from "../stores/ProductStore";
import { storeToRefs } from "pinia";
import { Ref } from "vue";
import Item from "../Interfaces/Item";

const store = useProductStore();
const { getProductBag: productsBag }: { getProductBag: Ref<Item[]> } =
  storeToRefs(store);
</script>

<template>
  <section class="bg-gray-400">
    <div class="container mx-auto">
      <h2 class="text-2xl">Your items:</h2>
      <ul class="flex flex-wrap justify-center">
        <UserBagItem
          v-for="(item, index) in productsBag"
          :index="index"
          :key="index"
          :name="item.name"
          :link="item.link"
          :price="item.price"
        />
      </ul>
    </div>
  </section>
</template>

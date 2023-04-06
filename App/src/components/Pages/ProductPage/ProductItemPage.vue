<script setup lang="ts">
import { useRoute } from "vue-router";
import { useProductStore } from "../../../stores/ProductStore";
import { CurrencyDollarIcon } from "@heroicons/vue/24/solid";
const store = useProductStore();
const route = useRoute();
const item = store.getItemById(Number(route.params.id));
</script>

<template>
  <section class="bg-gray-500">
    <div
      class="container mx-auto flex flex-wrap flex-col items-center py-5 text-gray-300"
    >
      <h1 class="py-4 text-5xl">Product information</h1>
      <h2 class="py-4 text-2xl">Name: {{ item.name }}</h2>
      <div class="flex justify-center">
        <img :src="item.link" :alt="item.name" class="w-2/5 h-2/5" />
        <div class="ml-5 w-2/5">
          <h2>
            Description: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Autem, error, libero. Asperiores cupiditate, ducimus eaque
            exercitationem itaque maxime nobis optio pariatur praesentium quae
            quam quis quisquam quos reiciendis sequi sint voluptatum. Accusamus
            assumenda at consequuntur deleniti eaque, et exercitationem fugiat
            harum incidunt iste nesciunt nobis nostrum officia quibusdam
            repellendus suscipit?
          </h2>

          <button
            class="rounded-xl bg-gray-700 py-3 px-4 m-5 ml-0 hover:text-amber-600"
          >
            Buy now
          </button>
          <button
            @click="store.addItemToBag(item.id)"
            class="rounded-xl bg-gray-700 py-3 px-4 m-5 hover:text-amber-500"
          >
            Add to basket
          </button>
        </div>
      </div>
      <h2 class="mt-4">
        Price: {{ item.price }}
        <CurrencyDollarIcon class="h-8 w-8 text-gray-300 inline" />
      </h2>
    </div>
  </section>
</template>

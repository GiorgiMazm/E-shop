<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useProductStore } from "../../../stores/ProductStore";
import { ref } from "vue";
import { ItemCategory } from "../../../types/ItemCategory";

const store = useProductStore();
const route = useRoute();
const item = store.productModule.getProductById(Number(route.params.id))!;

const name = ref(item.name);
const price = ref(item.price);
const description = ref(item.description);
const link = ref(item.link);
const category = ref(item.category);
</script>

<template>
  <section class="bg-gray-500 text-gray-300">
    <div class="container mx-auto">
      <h1 class="text-center pt-4 text-5xl">Edit Product</h1>
      <form class="py-6 max-w-xl">
        <div class="flex flex-col">
          <label>Product name</label>
          <input
            class="rounded text-black px-3 my-2 border-2 border-amber-500"
            placeholder="Name of the product"
            type="text"
            v-model="name"
          />
        </div>
        <div class="flex flex-col">
          <label>Product price (in $)</label>
          <input
            class="rounded text-black px-3 my-2 border-2 border-amber-500"
            placeholder="Name of the product"
            type="text"
            v-model="price"
          />
        </div>
        <div class="flex flex-col">
          <label>Product description</label>
          <textarea
            class="rounded text-black px-3 my-2 border-2 border-amber-500 h-64"
            placeholder="Name of the product"
            type="text"
            v-model="description"
          />
        </div>
        <div class="flex flex-col">
          <label>Product image link</label>
          <input
            class="rounded text-black px-3 my-2 border-2 border-amber-500"
            placeholder="Name of the product"
            type="text"
            v-model="link"
          />
        </div>

        <div class="flex flex-col mb-4">
          <label>Product category</label>
          <select
            v-model="category"
            class="rounded text-black px-3 my-2 border-2 border-amber-500"
          >
            <option :value="ItemCategory.NotSet" disabled selected hidden>
              Not set
            </option>
            <option :value="ItemCategory.Technique">Technique</option>
            <option :value="ItemCategory.Technique">Gym</option>
          </select>
        </div>

        <router-link
          @click="
            store.productModule.editProductItem(
              item.id,
              name,
              price,
              description,
              link,
              category
            )
          "
          class="rounded-xl bg-gray-700 py-3 px-10 mr-3 my-4 hover:text-amber-500"
          :to="'/products/'"
        >
          Save</router-link
        >

        <router-link
          class="rounded-xl bg-gray-700 py-3 px-10 mr-3 my-4 hover:text-amber-500"
          :to="'/products/'"
        >
          Cancel</router-link
        >
      </form>
    </div>
  </section>
</template>

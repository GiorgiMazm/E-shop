<script setup lang="ts">
import { ref } from "vue";
import { useProductStore } from "../../../stores/ProductStore";

const store = useProductStore();
const name = ref("");
const price = ref(0);
const imageLink = ref("");
const newFormVisibility = ref(false);

function toggleNewItemForm(): void {
  newFormVisibility.value = !newFormVisibility.value;
  name.value = "";
  price.value = 0;
  imageLink.value = "";
}
</script>

<template>
  <div>
    <form class="my-5" v-if="newFormVisibility">
      <label>Product name</label>
      <input
        class="rounded mx-3 text-black px-3"
        placeholder="Name of the product"
        type="text"
        v-model="name"
      />

      <label>Product price</label>
      <input
        class="rounded mx-3 text-black px-3"
        placeholder="Price of the product"
        type="text"
        v-model="price"
      />

      <label>Product image</label>
      <input
        class="rounded mx-3 text-black px-3"
        placeholder="Image of the product"
        type="text"
        v-model="imageLink"
      />

      <button
        class="mx-3 rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-500"
        @click.prevent="
          store.addProductItem(name, price, imageLink);
          toggleNewItemForm();
        "
        type="submit"
      >
        Create
      </button>
    </form>
    <button
      v-if="!newFormVisibility"
      @click="toggleNewItemForm"
      class="hover:text-black"
    >
      Add new product
    </button>
    <button
      class="mx-3 rounded-l bg-gray-700 py-3 px-4 mr-3 hover:text-amber-500"
      v-if="newFormVisibility"
      @click="toggleNewItemForm"
    >
      Cancel
    </button>
  </div>
</template>

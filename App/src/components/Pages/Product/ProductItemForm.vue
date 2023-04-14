<script setup lang="ts">
import { ref } from "vue";
import { useProductStore } from "../../../stores/ProductStore";
import { ItemCategory } from "../../../types/ItemCategory";

const store = useProductStore();
const name = ref("");
const price = ref(0);
const imageLink = ref("");
const description = ref("");
const category = ref<ItemCategory>(ItemCategory.NotSet);
const newFormVisibility = ref(false);
const user = store.userModule.getCurrentUser;

function toggleNewItemForm(): void {
  newFormVisibility.value = !newFormVisibility.value;
  name.value = "";
  price.value = 0;
  imageLink.value = "";
  description.value = "";
  description.value = "";
  category.value = ItemCategory.NotSet;
}
</script>

<template>
  <div class="container mx-auto" v-if="user?.admin">
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

      <label>Product description</label>
      <input
        class="rounded mx-3 text-black px-3"
        placeholder="Description"
        type="text"
        v-model="description"
      />

      <label>Product category</label>
      <select v-model="category" class="text-black">
        <option :value="ItemCategory.NotSet" disabled selected hidden>
          Not set
        </option>
        <option :value="ItemCategory.Technique">Technique</option>
        <option :value="ItemCategory.Technique">Gym</option>
      </select>

      <button
        class="mx-3 rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-500"
        @click.prevent="
          store.productModule.addProductItem(
            name,
            price,
            imageLink,
            description,
            category
          );
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
      class="mx-3 rounded-l bg-gray-700 py-3 px-4 hover:text-amber-500"
      v-if="newFormVisibility"
      @click="toggleNewItemForm"
    >
      Cancel
    </button>
  </div>
</template>

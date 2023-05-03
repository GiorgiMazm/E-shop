<script setup lang="ts">
import { ref } from "vue";
import { useProductStore } from "../../../stores/ProductStore";
import { ItemCategory } from "../../../types/ItemCategory";

const store = useProductStore();
const name = ref("");
const price = ref(0);
const link = ref("");
const description = ref("");
const category = ref<ItemCategory>(ItemCategory.NotSet);
const isFormVisible = ref(false);
const user = store.userModule.getCurrentUser;

function toggleNewItemForm(): void {
  isFormVisible.value = !isFormVisible.value;
  name.value = "";
  price.value = 0;
  link.value = "";
  description.value = "";
  description.value = "";
  category.value = ItemCategory.NotSet;
}
</script>

<template>
  <div class="container mx-auto" v-if="user?.admin">
    <form class="my-5" v-if="isFormVisible">
      <div class="my-4">
        <label>Product name</label>
        <input
          class="rounded mx-3 text-black px-3"
          placeholder="Name of the product"
          type="text"
          v-model="name"
        />
      </div>

      <div class="my-4">
        <label>Product price</label>
        <input
          class="rounded mx-3 text-black px-3"
          placeholder="Price of the product"
          type="text"
          v-model="price"
        />
      </div>

      <div class="my-4">
        <label>Product image</label>
        <input
          class="rounded mx-3 text-black px-3"
          placeholder="Image of the product"
          type="text"
          v-model="link"
        />
      </div>

      <div class="my-4">
        <label>Product description</label>
        <textarea
          class="rounded mx-3 text-black px-3"
          placeholder="Description"
          type="text"
          v-model="description"
        />
      </div>

      <div class="my-4">
        <label>Product category</label>
        <select v-model="category" class="text-black ml-4">
          <option :value="ItemCategory.NotSet" disabled selected hidden>
            Not set
          </option>
          <option :value="ItemCategory.Technique">Technique</option>
          <option :value="ItemCategory.Gym">Gym</option>
        </select>
      </div>

      <button
        class="mx-3 rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-500"
        @click.prevent="
          store.productModule.addProductItem({
            name: name,
            price: price,
            link: link,
            description: description,
            category: category,
          });
          toggleNewItemForm();
        "
        type="submit"
      >
        Create
      </button>
    </form>
    <button
      v-if="!isFormVisible"
      @click="toggleNewItemForm"
      class="hover:text-black"
    >
      Add new product
    </button>
    <button
      class="mx-3 rounded-l bg-gray-700 py-3 px-4 hover:text-amber-500"
      v-if="isFormVisible"
      @click="toggleNewItemForm"
    >
      Cancel
    </button>
  </div>
</template>

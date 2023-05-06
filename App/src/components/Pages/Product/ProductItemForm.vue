<script setup lang="ts">
import { reactive, ref } from "vue";
import { useProductStore } from "../../../stores/ProductStore";
import { ItemCategory } from "../../../types/ItemCategory";
import { required, integer, minValue } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const store = useProductStore();

const formData = reactive({
  name: "",
  price: 0,
  link: "",
  description: "",
  category: ItemCategory.NotSet,
});
const rules = {
  name: { required },
  price: { required, integer, minValue: minValue(1) },
  link: { required },
  description: { required },
  category: { required },
};
const validation = useVuelidate(rules, formData);
const isFormVisible = ref(false);

const user = store.userModule.getCurrentUser;

function toggleNewItemForm(): void {
  isFormVisible.value = !isFormVisible.value;
  formData.name = "";
  formData.price = 0;
  formData.link = "";
  formData.description = "";
  formData.category = ItemCategory.NotSet;
}

function createProduct() {
  if (validation.value.$invalid) return;
  store.productModule.addProductItem({
    name: formData.name,
    price: formData.price,
    link: formData.link,
    description: formData.description,
    category: formData.category,
  });
  toggleNewItemForm();
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
          v-model="formData.name"
        />
        <span class="text-red-600 pb-3" v-if="validation.name.$invalid"
          >Name is required</span
        >
      </div>

      <div class="my-4">
        <label>Product price</label>
        <input
          class="rounded mx-3 text-black px-3"
          placeholder="Price of the product"
          type="text"
          v-model="formData.price"
        />
        <span class="text-red-600 pb-3" v-if="validation.price.$invalid"
          >Price must be a number bigger than 0</span
        >
      </div>

      <div class="my-4">
        <label>Product image</label>
        <input
          class="rounded mx-3 text-black px-3"
          placeholder="Image of the product"
          type="text"
          v-model="formData.link"
        />
        <span class="text-red-600 pb-3" v-if="validation.link.$invalid"
          >Link is required
        </span>
      </div>

      <div class="my-4">
        <label>Product description</label>
        <textarea
          class="rounded mx-3 text-black px-3"
          placeholder="Description"
          type="text"
          v-model="formData.description"
        />
        <span class="text-red-600 pb-3" v-if="validation.description.$invalid"
          >Description is required</span
        >
      </div>

      <div class="my-4">
        <label>Product category</label>
        <select v-model="formData.category" class="text-black ml-4">
          <option :value="ItemCategory.NotSet" disabled selected hidden>
            Not set
          </option>
          <option :value="ItemCategory.Technique">Technique</option>
          <option :value="ItemCategory.Gym">Gym</option>
        </select>
        <span class="text-red-600 pb-3" v-if="validation.category.$invalid"
          >Category is required</span
        >
      </div>

      <button
        class="mx-3 rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-500"
        @click.prevent="createProduct"
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

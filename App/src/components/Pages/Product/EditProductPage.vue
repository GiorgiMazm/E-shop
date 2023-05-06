<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "../../../stores/ProductStore";
import { reactive } from "vue";
import { ItemCategory } from "../../../types/ItemCategory";
import { integer, minValue, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const store = useProductStore();
const route = useRoute();
const router = useRouter();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const product = store.productModule.getProductById(Number(route.params.id))!;
const formData = reactive(product);
const rules = {
  name: { required },
  price: { required, integer, minValue: minValue(1) },
  link: { required },
  description: { required },
  category: { required },
};
const validation = useVuelidate(rules, formData);

function editProductItem() {
  if (validation.value.$invalid) return;
  if (product) {
    store.productModule.editProductItem(product);
    router.push("/products");
  }
}
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
            v-model="formData.name"
          />
          <span class="text-red-600 pb-3" v-if="validation.name.$invalid"
            >Name is required</span
          >
        </div>
        <div class="flex flex-col">
          <label>Product price (in $)</label>
          <input
            class="rounded text-black px-3 my-2 border-2 border-amber-500"
            placeholder="Name of the product"
            type="text"
            v-model="formData.price"
          />
          <span class="text-red-600 pb-3" v-if="validation.price.$invalid"
            >Price must be a number bigger than 0</span
          >
        </div>
        <div class="flex flex-col">
          <label>Product description</label>
          <textarea
            class="rounded text-black px-3 my-2 border-2 border-amber-500 h-64"
            placeholder="Name of the product"
            type="text"
            v-model="formData.description"
          />
          <span class="text-red-600 pb-3" v-if="validation.description.$invalid"
            >Description is required</span
          >
        </div>
        <div class="flex flex-col">
          <label>Product image link</label>
          <input
            class="rounded text-black px-3 my-2 border-2 border-amber-500"
            placeholder="Name of the product"
            type="text"
            v-model="formData.link"
          />
          <span class="text-red-600 pb-3" v-if="validation.link.$invalid"
            >Link is required
          </span>
        </div>

        <div class="flex flex-col mb-4">
          <label>Product category</label>
          <select
            v-model="formData.category"
            class="rounded text-black px-3 my-2 border-2 border-amber-500"
          >
            <option :value="ItemCategory.NotSet" disabled selected hidden>
              Not set
            </option>
            <option :value="ItemCategory.Technique">Technique</option>
            <option :value="ItemCategory.Gym">Gym</option>
          </select>
        </div>

        <button
          @click.prevent="editProductItem"
          class="rounded-xl bg-gray-700 py-3 px-10 mr-3 my-4 hover:text-amber-500"
        >
          Save
        </button>

        <button
          @click.prevent="router.push('/products')"
          class="rounded-xl bg-gray-700 py-3 px-10 mr-3 my-4 hover:text-amber-500"
        >
          Cansel
        </button>
      </form>
    </div>
  </section>
</template>

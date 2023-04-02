<script setup lang="ts">
import { ref, Ref } from "vue";
import ProductItem from "./ProductItem.vue";
import ProductItemForm from "./ProductItemForm.vue";

interface Item {
  name: string;
  price: number;
  link: string;
  id: number;
}

const productsList: Ref<Item[]> = ref([
  {
    name: "Macbook",
    price: 2000,
    link: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202303230456",
    id: 1,
  },
  {
    name: "Macbook pro",
    price: 2500,
    link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_EMEA_LANG_DE?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359389",
    id: 2,
  },

  {
    name: "Macbook air",
    price: 1500,
    link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-macbook-air-gold-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145607000",
    id: 3,
  },

  {
    name: "Lenovo thinkpad",
    price: 3000,
    link: "https://laptopmedia.com/wp-content/uploads/2021/06/3-52-e1624453916559.jpg",
    id: 4,
  },
]);
let counter = 5;
function addProductItem(name: string, price: number, imageLink: string) {
  const obj: Item = {
    name: name,
    price: price,
    link: imageLink,
    id: counter++,
  };
  productsList.value.push(obj);
  toggleNewItemForm();
}

function removeProductItem(index: number) {
  productsList.value.splice(index, 1);
}
const newFormVisibility = ref(false);

function toggleNewItemForm(): void {
  newFormVisibility.value = !newFormVisibility.value;
}
</script>

<template>
  <section class="bg-gray-500 text-gray-200 pb-7">
    <div class="container mx-auto">
      <h1 class="text-4xl text-center pt-5">Our product</h1>
      <div class="flex flex-wrap justify-around mt-5">
        <ProductItem
          v-for="(item, index) in productsList"
          :item-name="item.name"
          :price="item.price"
          :img-link="item.link"
          :key="item.id"
          :index="index"
          @remove-item="removeProductItem"
        />
      </div>
      <button
        v-if="!newFormVisibility"
        @click="toggleNewItemForm"
        class="hover:text-black"
      >
        Add new product
      </button>
      <ProductItemForm v-if="newFormVisibility" @add-item="addProductItem" />
      <button
        class="mx-3 rounded-l bg-gray-700 py-3 px-4 mr-3 hover:text-amber-500"
        v-if="newFormVisibility"
        @click="toggleNewItemForm"
      >
        Cancel
      </button>
    </div>
  </section>
</template>

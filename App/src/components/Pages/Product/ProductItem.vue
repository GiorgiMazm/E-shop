<script lang="ts" setup>
import { XMarkIcon, PencilIcon } from "@heroicons/vue/24/solid";
import { useProductStore } from "../../../stores/ProductStore";
import Item from "../../../types/Item";
import { useRouter } from "vue-router";

const props = defineProps<{
  item: Item;
}>();
const store = useProductStore();
const router = useRouter();

function addItemToBag() {
  if (store.userModule.getCurrentUser) {
    store.userModule.addItemToBag(props.item, 1);
    alert("item was added to your bag");
  } else alert("You have to log in to add item to your bag");
}
</script>

<template>
  <div class="bg-red-800 w-80 m-2 p-2">
    <div
      class="flex justify-between p-3"
      v-if="store.userModule.isCurrentUserAdmin"
    >
      <XMarkIcon
        class="h-6 w-6 cursor-pointer hover:text-black"
        @click="store.productModule.removeProductItem(props.item.id)"
      />

      <router-link :to="'/product/edit/' + props.item.id">
        <PencilIcon class="h-6 w-6 cursor-pointer hover:text-black"
      /></router-link>
    </div>

    <h2 class="text-center my-2">{{ item.name }}</h2>

    <img class="h-80 w-full" :src="props.item.link" :alt="item.name" />
    <p class="py-3">{{ props.item.price }}$</p>
    <div class="flex flex-wrap justify-around">
      <button
        @click.prevent="router.push('/checkout')"
        class="rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-600"
      >
        Buy now
      </button>
      <button
        @click="addItemToBag"
        class="rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-500"
      >
        Add to basket
      </button>

      <router-link
        :to="'/product/' + props.item.id"
        class="my-5 rounded bg-gray-500 py-3 px-4 mr-3 hover:text-amber-500"
      >
        Learn more</router-link
      >
    </div>
  </div>
</template>

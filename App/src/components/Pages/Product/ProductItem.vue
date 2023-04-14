<script lang="ts" setup>
import { XMarkIcon, PencilIcon } from "@heroicons/vue/24/solid";
import { useProductStore } from "../../../stores/ProductStore";
import Item from "../../../types/Item";
const props = defineProps<{
  item: Item;
  index: number;
}>();
const store = useProductStore();

const user = store.userModule.getCurrentUser;
</script>

<template>
  <div class="bg-red-800 w-80 m-2 p-2">
    <div class="flex justify-between p-3" v-if="user?.admin">
      <XMarkIcon
        class="h-6 w-6 cursor-pointer hover:text-black"
        @click="store.productModule.removeProductItem(index)"
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
        class="rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-600"
      >
        Buy now
      </button>
      <button
        @click="store.userModule.getCurrentUser?.addItemToBag(item)"
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

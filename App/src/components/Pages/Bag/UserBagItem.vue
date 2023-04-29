<script lang="ts" setup>
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { useProductStore } from "../../../stores/ProductStore";
import Item from "../../../types/Item";
const props = defineProps<{
  item: Item;
}>();

const store = useProductStore();
</script>

<template>
  <li
    class="border-2 border-gray-700 p-4 items-center m-3 w-80 inline-flex relative"
  >
    <XMarkIcon
      class="h-6 w-6 cursor-pointer hover:text-white absolute left-2 top-5"
      @click.prevent="store.userModule.removeItemFromBag(props.item)"
    />
    <span>{{ item.name }}</span>
    <img class="h-32 mx-3 w-36" :src="props.item.link" :alt="item.name" />
    <span class="mx-3">{{ props.item.price }}$</span>
  </li>
</template>

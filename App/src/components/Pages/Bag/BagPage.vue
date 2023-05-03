<script setup lang="ts">
import UserBag from "./UserBag.vue";
import { useProductStore } from "../../../stores/ProductStore";
import { CurrencyDollarIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";
const store = useProductStore();

const userBagSum = computed(() => store.userModule.getUserBagSum);
</script>

<template>
  <div v-if="store.userModule.getCurrentUser">
    <section class="bg-gray-500">
      <div class="container mx-auto">
        <h2 class="text-4xl text-center py-5">
          <button
            class="rounded-xl bg-gray-700 py-3 px-4 mb-3 hover:text-amber-600"
            @click="store.userModule.clearBag()"
          >
            Clear bag
          </button>
          Total is: {{ userBagSum }}
          <CurrencyDollarIcon class="h-12 w-12 text-black inline" />
          <button
            class="rounded-xl bg-gray-700 py-3 px-4 ml-3 hover:text-amber-600"
          >
            Process to checkout
          </button>
        </h2>
      </div>
    </section>
    <UserBag />
  </div>
</template>

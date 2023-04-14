<script setup lang="ts">
import UserBag from "./UserBag.vue";
import { useProductStore } from "../../../stores/ProductStore";
import { CurrencyDollarIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";
const store = useProductStore();

const sum = computed(() => store.userModule.getCurrentUser?.sum);
</script>

<template>
  <div v-if="store.userModule.getCurrentUser">
    <UserBag />
    <section class="bg-gray-500">
      <div class="container mx-auto">
        <h2 class="text-4xl text-center py-5">
          Total is: {{ sum }}
          <CurrencyDollarIcon class="h-12 w-12 text-black inline" />
        </h2>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CheckoutForm from "./CheckoutForm.vue";
import { useProductStore } from "../../../stores/ProductStore";
import { CurrencyDollarIcon } from "@heroicons/vue/24/outline";

const store = useProductStore();
</script>

<template>
  <div>
    <section class="bg-gray-500 py-7">
      <div class="container mx-auto">
        <h1 class="text-5xl text-center">Buy your items now</h1>
        <h2
          v-if="store.userModule.getCurrentUser"
          class="text-center text-2xl pt-3"
        >
          Total to pay: {{ store.userModule.getUserBagSum }}
          <CurrencyDollarIcon class="h-10 w-10 text-black inline" />
        </h2>
        <CheckoutForm />
      </div>
    </section>
  </div>
</template>

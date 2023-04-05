<script lang="ts" setup>
import { ShoppingBagIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <header class="bg-gray-700">
    <div class="flex justify-between items-center container mx-auto">
      <ul class="flex justify-between w-1/5 p-3 text-gray-300">
        <li>
          <router-link class="ma-2 hover:text-amber-600" to="/"
            >Home</router-link
          >
        </li>

        <li>
          <router-link class="ma-2 hover:text-amber-600" to="/products"
            >Products</router-link
          >
        </li>

        <li>
          <router-link class="ma-2 hover:text-amber-600" to="/bag"
            >Your Bag</router-link
          >
        </li>
      </ul>

      <div>
        <ShoppingBagIcon class="h-8 w-8 text-gray-200" />
      </div>
    </div>
  </header>
</template>

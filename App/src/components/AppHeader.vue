<script lang="ts" setup>
import {
  ShoppingBagIcon,
  HomeIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/24/solid";
</script>
<template>
  <header class="bg-gray-700 py-5">
    <div class="flex justify-between items-center container mx-auto">
      <ul class="flex justify-between w-1/5 p-3 text-gray-300">
        <li>
          <router-link class="ma-2 hover:text-amber-600" to="/"
            ><HomeIcon class="h-6 w-6 inline mr-2" /> Home</router-link
          >
        </li>

        <li>
          <router-link class="ma-2 hover:text-amber-600" to="/products">
            <ShoppingCartIcon class="h-6 w-6 inline mr-2" />
            Products</router-link
          >
        </li>
        <li>
          <router-link class="ma-2 hover:text-amber-600" to="/signin">
            sign in</router-link
          >
        </li>
        <li>
          <router-link class="ma-2 hover:text-amber-600" to="/signup">
            sign up</router-link
          >
        </li>
      </ul>

      <div>
        <router-link class="ma-2 text-gray-300 hover:text-amber-600" to="/bag"
          ><ShoppingBagIcon class="h-8 w-8 inline mr-2" />Your Bag</router-link
        >
      </div>
    </div>
  </header>
</template>

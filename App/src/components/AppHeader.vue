<script lang="ts" setup>
import { ShoppingBagIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <header class="bg-gray-700">
    <div class="flex justify-between items-center container mx-auto">
      <ul class="flex justify-between w-1/5 p-3 text-gray-300">
        <li><a class="hover:text-amber-600" href="#">Home</a></li>
        <li><a class="hover:text-amber-600" href="#">Products</a></li>
        <li><a class="hover:text-amber-600" href="#">Contact</a></li>
      </ul>

      <div>
        <ShoppingBagIcon class="h-8 w-8 text-gray-200" />
      </div>
    </div>
  </header>
</template>

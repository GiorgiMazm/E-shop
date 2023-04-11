<script lang="ts" setup>
import {
  ShoppingBagIcon,
  HomeIcon,
  ShoppingCartIcon,
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/vue/24/solid";
import { useProductStore } from "../stores/ProductStore";
import { computed } from "vue";

const store = useProductStore();
const user = computed(() => store.getCurrentUser);
</script>
<template>
  <header class="bg-gray-700 py-5">
    <div class="flex justify-between items-center container mx-auto">
      <ul class="flex justify-between w-1/4 p-3 text-gray-300">
        <li>
          <router-link class="hover:text-amber-600" to="/"
            ><HomeIcon class="h-6 w-6 inline mr-2" /> Home</router-link
          >
        </li>

        <li>
          <router-link class="hover:text-amber-600" to="/products">
            <ShoppingCartIcon class="h-6 w-6 inline mr-2" />
            Products</router-link
          >
        </li>
        <li v-if="!user">
          <router-link class="hover:text-amber-600" to="/signin">
            <LockClosedIcon class="h-6 w-6 inline mr-2" />
            Sign in</router-link
          >
        </li>

        <li v-if="user" @click="store.signOut()">
          <router-link class="hover:text-amber-600" to="/">
            <LockOpenIcon class="h-6 w-6 inline mr-2" />
            Log out</router-link
          >
        </li>
      </ul>

      <div v-if="user">
        <router-link class="ma-2 text-gray-300 hover:text-amber-600" to="/bag"
          ><ShoppingBagIcon class="h-8 w-8 inline mr-2" />Your Bag</router-link
        >
      </div>
    </div>
  </header>
</template>

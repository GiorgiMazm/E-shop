<script setup lang="ts">
import { ref } from "vue";
import { useProductStore } from "../../../stores/ProductStore";

const email = ref("");
const password = ref("");
const store = useProductStore();
</script>

<template>
  <section class="bg-gray-900 py-14">
    <div class="container mx-auto">
      <form
        @submit.prevent="store.signIn(email, password)"
        class="w-2/5 mx-auto bg-gray-200 p-5 text-gray-800 py-8"
      >
        <h1 class="text-3xl text-center my-2">Sign in</h1>
        <p class="text-center">
          Use your e-com account to fully enjoy our shop
        </p>
        <div class="flex flex-col">
          <label>Email address</label>
          <input
            class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
            placeholder="someEmail@gmail.com"
            type="email"
            v-model="email"
          />
        </div>

        <div class="flex flex-col">
          <label>Password</label>
          <input
            class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
            placeholder="Password"
            v-model="password"
          />
        </div>

        <button type="submit" class="bg-blue-600 w-4/6 block mx-auto py-3 my-4">
          Sign in
        </button>

        <p>
          If you don't have an account you can
          <router-link
            class="ma-2 hover:text-blue-700 text-blue-500"
            to="/signup"
          >
            Create new</router-link
          >
        </p>
      </form>
    </div>
  </section>
</template>
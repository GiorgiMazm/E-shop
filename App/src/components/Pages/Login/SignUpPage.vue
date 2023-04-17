<script setup lang="ts">
import { reactive, ref } from "vue";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/20/solid";
import { useProductStore } from "../../../stores/ProductStore";
import router from "../../../router/router";

const store = useProductStore();
const name = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");

const passwordObject = reactive({
  passwordType: "password",
  passwordVisibility: false,
});

function signUp() {
  store.userModule.signUp(
    name.value,
    lastName.value,
    email.value,
    password.value
  );
  if (store.userModule.getCurrentUser) router.push("/");
}
</script>

<template>
  <section class="bg-gray-900 py-14">
    <div class="container mx-auto">
      <form
        class="w-2/5 mx-auto bg-gray-200 p-5 text-gray-800 py-8"
        @submit.prevent="signUp"
      >
        <h1 class="text-3xl text-center my-2">Sign up</h1>
        <p class="text-center pb-5">
          Create e-com account to increase your using experience during shopping
        </p>

        <div class="flex flex-col">
          <label>Name</label>
          <input
            class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600 block"
            placeholder="Max"
            v-model="name"
            type="text"
          />
        </div>
        <div class="flex flex-col">
          <label>Last name</label>
          <input
            class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600 block"
            placeholder="Smith"
            v-model="lastName"
            type="text"
          />
        </div>
        <div class="flex flex-col">
          <label>Email address</label>
          <input
            class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
            placeholder="max.smith@gmail.com"
            type="email"
            v-model="email"
          />
        </div>

        <div class="flex flex-col relative">
          <label>Password</label>
          <input
            class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600 block"
            placeholder="superStr0ngPa$$w0rd"
            v-model="password"
            :type="passwordObject.passwordType"
          />
          <EyeIcon
            v-if="!passwordObject.passwordVisibility"
            @click="store.passwordVisibilityToggle(passwordObject)"
            class="w-5 h-5 cursor-pointer absolute right-5 top-11"
          />
          <EyeSlashIcon
            v-if="passwordObject.passwordVisibility"
            @click="store.passwordVisibilityToggle(passwordObject)"
            class="w-5 h-5 cursor-pointer absolute right-5 top-11"
          />
        </div>

        <button type="submit" class="bg-blue-600 w-4/6 block mx-auto py-3 my-4">
          Sign up
        </button>

        <p>
          If you already have an account you can
          <router-link
            class="ma-2 hover:text-blue-700 text-blue-500"
            to="/signin"
          >
            Sign in</router-link
          >
        </p>
      </form>
    </div>
  </section>
</template>

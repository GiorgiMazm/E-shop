<script setup lang="ts">
import { reactive } from "vue";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/20/solid";
import { useProductStore } from "../../../stores/ProductStore";
import router from "../../../router/router";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

const store = useProductStore();
const formData = reactive({
  name: "",
  lastName: "",
  email: "",
  password: "",
});

const rules = {
  name: { required },
  lastName: { required },
  email: { required, email },
  password: { required, minLength: minLength(8) },
};

const validation = useVuelidate(rules, formData);

const passwordObject = reactive({
  passwordType: "password",
  isPasswordVisible: false,
});

async function signUp() {
  if (validation.value.$invalid) return;

  await store.userModule.signUp({
    name: formData.name,
    lastName: formData.lastName,
    email: formData.email,
    password: formData.password,
  });
  await store.userModule.loadAllUser();
  store.userModule.signIn(formData.email, formData.password);
  if (store.userModule.getCurrentUser) await router.push("/");
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
            v-model="formData.name"
            type="text"
          />
          <span class="text-red-600 pb-3" v-if="validation.name.$invalid"
            >Name is required</span
          >
        </div>
        <div class="flex flex-col">
          <label>Last name</label>
          <input
            class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600 block"
            placeholder="Smith"
            v-model="formData.lastName"
            type="text"
          />
          <span class="text-red-600 pb-3" v-if="validation.lastName.$invalid"
            >Last name is required</span
          >
        </div>
        <div class="flex flex-col">
          <label>Email address</label>
          <input
            class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
            placeholder="max.smith@gmail.com"
            type="email"
            v-model="formData.email"
          />
          <span class="text-red-600 pb-3" v-if="validation.email.$invalid"
            >Email is not valid</span
          >
        </div>

        <div class="flex flex-col relative">
          <label>Password</label>
          <input
            class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600 block"
            placeholder="superStr0ngPa$$w0rd"
            v-model="formData.password"
            :type="passwordObject.passwordType"
          />
          <span class="text-red-600 pb-3" v-if="validation.password.$invalid"
            >Password must be at least 8 char</span
          >
          <EyeIcon
            v-if="!passwordObject.isPasswordVisible"
            @click="store.passwordVisibilityToggle(passwordObject)"
            class="w-5 h-5 cursor-pointer absolute right-5 top-11"
          />
          <EyeSlashIcon
            v-if="passwordObject.isPasswordVisible"
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

<script lang="ts" setup>
import { useProductStore } from "../../../stores/ProductStore";
import { reactive } from "vue";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/20/solid";
import { minLength, required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const store = useProductStore();
const user = store.userModule.getCurrentUser;

const formData = reactive({
  name: "",
  lastName: "",
  email: "",
  password: "",
});
if (user) {
  formData.name = user.name;
  formData.lastName = user.lastName;
  formData.email = user.email;
  formData.password = user.password;
}

const rules = {
  name: { required },
  lastName: { required },
  email: { required, email },
  password: { required, minLength: minLength(6) },
};

const validation = useVuelidate(rules, formData);

const passwordObject = reactive({
  passwordType: "password",
  isPasswordVisible: false,
});

function editUserInfo() {
  if (validation.value.$invalid) return;
  store.userModule.editUserInfo({
    name: formData.name,
    lastName: formData.lastName,
    email: formData.email,
    password: formData.password,
  });
}
</script>

<template>
  <section class="bg-gray-200 text-gray-700">
    <div class="container mx-auto">
      <h1 class="text-center text-6xl font-bold py-6">Edit Profile</h1>

      <form class="py-6 max-w-xl">
        <div class="flex flex-col">
          <label>Name</label>
          <input
            class="rounded text-black px-3 my-2 border-2 border-amber-500"
            placeholder="Name of the product"
            type="text"
            v-model="formData.name"
          />
          <span class="text-red-600 pb-3" v-if="validation.name.$invalid"
            >Name is required</span
          >
        </div>
        <div class="flex flex-col">
          <label>Last name</label>
          <input
            class="rounded text-black px-3 my-2 border-2 border-amber-500"
            placeholder="Name of the product"
            type="text"
            v-model="formData.lastName"
          />
          <span class="text-red-600 pb-3" v-if="validation.lastName.$invalid"
            >Last name is required</span
          >
        </div>
        <div class="flex flex-col">
          <label>Email address</label>
          <input
            class="rounded text-black px-3 my-2 border-2 border-amber-500"
            placeholder="Name of the product"
            type="text"
            v-model="formData.email"
          />
          <span class="text-red-600 pb-3" v-if="validation.email.$invalid"
            >Email is not valid</span
          >
        </div>
        <div class="flex flex-col relative">
          <label>Password</label>
          <input
            class="rounded text-black px-3 mt-2 mb-6 border-2 border-amber-500"
            placeholder="Name of the product"
            :type="passwordObject.passwordType"
            v-model="formData.password"
          />
          <span class="text-red-600 pb-3" v-if="validation.password.$invalid"
            >Password must be at least 8 char</span
          >

          <EyeIcon
            v-if="!passwordObject.isPasswordVisible"
            @click="store.passwordVisibilityToggle(passwordObject)"
            class="w-5 h-5 cursor-pointer absolute right-5 top-9"
          />
          <EyeSlashIcon
            v-if="passwordObject.isPasswordVisible"
            @click="store.passwordVisibilityToggle(passwordObject)"
            class="w-5 h-5 cursor-pointer absolute right-5 top-9"
          />
        </div>
        <router-link
          class="rounded-xl bg-gray-100 py-3 px-10 mr-3 my-4 hover:text-amber-500"
          :to="'/'"
          @click="editUserInfo"
        >
          Save</router-link
        >

        <router-link
          class="rounded-xl bg-gray-100 py-3 px-10 mr-3 my-4 hover:text-amber-500"
          :to="'/'"
        >
          Cancel</router-link
        >
      </form>
    </div>
  </section>
</template>

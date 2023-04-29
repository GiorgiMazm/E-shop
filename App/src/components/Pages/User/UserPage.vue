<script lang="ts" setup>
import { useProductStore } from "../../../stores/ProductStore";
import { reactive, ref } from "vue";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/20/solid";

const store = useProductStore();
const user = store.userModule.getCurrentUser;
const name = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const passwordObject = reactive({
  passwordType: "password",
  passwordVisibility: false,
});

if (user) {
  name.value = user.name;
  lastName.value = user.lastName;
  email.value = user.email;
  password.value = user.password;
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
            v-model="name"
          />
        </div>
        <div class="flex flex-col">
          <label>Last name</label>
          <input
            class="rounded text-black px-3 my-2 border-2 border-amber-500"
            placeholder="Name of the product"
            type="text"
            v-model="lastName"
          />
        </div>
        <div class="flex flex-col">
          <label>Email address</label>
          <input
            class="rounded text-black px-3 my-2 border-2 border-amber-500"
            placeholder="Name of the product"
            type="text"
            v-model="email"
          />
        </div>
        <div class="flex flex-col relative">
          <label>Password</label>
          <input
            class="rounded text-black px-3 mt-2 mb-6 border-2 border-amber-500"
            placeholder="Name of the product"
            :type="passwordObject.passwordType"
            v-model="password"
          />

          <EyeIcon
            v-if="!passwordObject.passwordVisibility"
            @click="store.passwordVisibilityToggle(passwordObject)"
            class="w-5 h-5 cursor-pointer absolute right-5 top-9"
          />
          <EyeSlashIcon
            v-if="passwordObject.passwordVisibility"
            @click="store.passwordVisibilityToggle(passwordObject)"
            class="w-5 h-5 cursor-pointer absolute right-5 top-9"
          />
        </div>
        <router-link
          class="rounded-xl bg-gray-100 py-3 px-10 mr-3 my-4 hover:text-amber-500"
          :to="'/'"
          @click="
            store.userModule.editUserInfo({
              name: name,
              lastName: lastName,
              email: email,
              password: password,
            })
          "
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

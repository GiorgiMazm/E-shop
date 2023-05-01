<script setup lang="ts">
import SingleUser from "./SingleUser.vue";
import { useProductStore } from "../../../stores/ProductStore";

const store = useProductStore();
</script>

<template>
  <section class="bg-gray-500 py-16">
    <div class="container mx-auto">
      <h1 class="text-6xl text-center">
        User list({{ store.userModule.getUserList.all.length }} users)
      </h1>
      <div class="flex justify-center pt-4 flex-wrap">
        <SingleUser
          v-for="(user, index) in store.userModule.getUserList.all"
          :key="index"
          :user="user"
        />
      </div>
    </div>
  </section>
</template>

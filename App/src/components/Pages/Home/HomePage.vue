<script setup lang="ts">
import { useProductStore } from "../../../stores/ProductStore";

const store = useProductStore();
</script>

<template>
  <div>
    <section class="p-11 bg-gray-500">
      <div class="container mx-auto text-center">
        <h1 class="text-6xl text-gray-300 font-bold pb-3">
          Welcome to our e commerce shop
          <span v-if="store.getCurrentUser"
            >{{ store.getCurrentUser.name }}
            {{ store.getCurrentUser.lastName }}</span
          >
          !
        </h1>

        <p class="text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          commodi corporis cupiditate debitis deleniti dolor dolorem doloremque
          eius esse, est eveniet explicabo fuga hic incidunt ipsum iusto
          laudantium maiores minima nam neque nostrum numquam odio officia
          officiis porro quis quisquam reprehenderit rerum sapiente similique
          totam ut vel voluptas. Alias, placeat!
        </p>
      </div>
    </section>
  </div>
</template>

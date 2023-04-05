<script setup lang="ts">
import {
  AtSymbolIcon,
  PhoneIcon,
  EnvelopeIcon,
  LinkIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
  <footer class="bg-gray-700 pt-9">
    <div class="container mx-auto text-gray-200">
      <h2 class="text-2xl text-center">Contact us</h2>
      <ul class="flex justify-center py-7">
        <li class="text-gray-300 hover:text-cyan-400">
          <a href="#"> <AtSymbolIcon class="h-8 w-8 mx-5" /> </a>
        </li>

        <li class="text-gray-300 hover:text-cyan-400">
          <a href="#"> <PhoneIcon class="h-8 w-8 mx-5" /> </a>
        </li>

        <li class="text-gray-300 hover:text-cyan-400">
          <a href="#"> <EnvelopeIcon class="h-8 w-8 mx-5" /> </a>
        </li>

        <li class="text-gray-300 hover:text-cyan-400">
          <a href="#"> <LinkIcon class="h-8 w-8 mx-5" /> </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

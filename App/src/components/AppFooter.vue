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
        <li>
          <a href="#"> <AtSymbolIcon class="h-8 w-8 text-gray-300 mx-5" /> </a>
        </li>

        <li>
          <a href="#"> <PhoneIcon class="h-8 w-8 text-gray-300 mx-5" /> </a>
        </li>

        <li>
          <a href="#"> <EnvelopeIcon class="h-8 w-8 text-gray-300 mx-5" /> </a>
        </li>

        <li>
          <a href="#"> <LinkIcon class="h-8 w-8 text-gray-300 mx-5" /> </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

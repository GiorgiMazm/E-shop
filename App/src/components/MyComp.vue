<script setup lang="ts">

defineProps<{ msg: string }>();
</script>

<template>
  <div class="text-6xl">hi man {{ msg }}
      <h1 class="text-3xl font-bold underline font">
          Hello world!
      </h1>
  </div>
</template>

<style scoped></style>

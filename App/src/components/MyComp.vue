<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <div>
    hi man {{ msg }}
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </div>
</template>

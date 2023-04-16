<script lang="ts" setup>
import Review from "../../../types/Review";
import { useProductStore } from "../../../stores/ProductStore";

const props = defineProps<{
  review: Review;
}>();
const user = useProductStore().userModule.getUserById(props.review.authorId);
</script>

<template>
  <article class="border-2 my-3 p-3 text-center">
    <h2 class="font-bold">{{ props.review.title }}</h2>
    <p>
      {{ props.review.description }}
    </p>
    <p>Rate: {{ props.review.rate }}/10</p>
    <p>From: {{ user?.name }} {{ user?.lastName }}</p>
  </article>
</template>

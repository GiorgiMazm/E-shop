<script lang="ts" setup>
import Review from "../../../types/Review";
import { useProductStore } from "../../../stores/ProductStore";

const props = defineProps<{
  review: Review;
}>();
const user = useProductStore().getUserById(props.review.authorId);
</script>

<template>
  <div class="border-2 my-3 p-3">
    <h2>From: {{ user?.name }} {{ user?.lastName }}</h2>
    <p>
      {{ props.review.description }}
    </p>
    <p>Rate: {{ props.review.rate }}/10</p>
  </div>
</template>

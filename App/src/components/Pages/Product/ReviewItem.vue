<script lang="ts" setup>
import Review from "../../../types/Review";
import { useProductStore } from "../../../stores/ProductStore";

const props = defineProps<{
  review: Review;
}>();
const user = useProductStore().getUserById(props.review.authorId);
</script>

<template>
  <div>
    <h2>from: {{ user?.name }}</h2>
    <p>
      {{ props.review.description }}
    </p>
    <p>{{ props.review.rate }}/10</p>
  </div>
</template>

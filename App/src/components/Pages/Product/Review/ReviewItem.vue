<script lang="ts" setup>
import Review from "../../../../types/Review";
import { useProductStore } from "../../../../stores/ProductStore";
import { XMarkIcon } from "@heroicons/vue/24/solid";

const store = useProductStore();
const props = defineProps<{
  review: Review;
}>();
const user = useProductStore().userModule.getUserById(props.review.user.id);
</script>

<template>
  <article class="border-2 my-3 p-3 text-center">
    <XMarkIcon
      class="h-6 w-6 cursor-pointer hover:text-black"
      @click="store.reviewModule.removeReview(props.review.id)"
      v-if="store.userModule.getCurrentUser?.admin"
    />
    <h2 class="font-bold">{{ props.review.title }}</h2>
    <p>
      {{ props.review.description }}
    </p>
    <p>Rate: {{ props.review.rate }}/10</p>
    <p>From: {{ user?.name }} {{ user?.lastName }}</p>
  </article>
</template>

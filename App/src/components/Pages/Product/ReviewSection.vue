<script setup lang="ts">
import ReviewItem from "./ReviewItem.vue";
import { ref } from "vue";
import { useProductStore } from "../../../stores/ProductStore";
const store = useProductStore();
const description = ref("");
const rate = ref(10);
const props = defineProps<{
  itemId: number;
}>();

function clearInputs() {
  description.value = "";
  rate.value = 10;
}
</script>

<template>
  <section>
    <h2 class="text-center font-bold text-3xl">Reviews</h2>
    <h3 class="text-center text-2xl">
      The average rating of this product is
      <span class="font-bold">{{
        store.reviewModule.getAverageRateByProductId(props.itemId)
      }}</span>
    </h3>
    <form
      class="mt-4"
      v-if="store.userModule.getCurrentUser"
      @submit.prevent="
        store.reviewModule.addUserReview(
          props.itemId,
          store.userModule.getCurrentUser?.id!,
          description,
          rate
        );
        clearInputs();
      "
    >
      <div class="flex flex-col">
        <label>Add your review</label>
        <textarea
          class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
          placeholder="Tell about your experience with this product..."
          v-model="description"
        />
      </div>

      <div class="flex flex-col">
        <label>Rate this product on scale 1 to 10</label>
        <select
          class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
          v-model="rate"
        >
          <option v-for="num in 10" :key="num" :value="num">
            {{ num }}
          </option>
        </select>
      </div>

      <button
        class="rounded-xl bg-gray-700 py-3 px-4 mr-3 hover:text-amber-500"
        type="submit"
      >
        Create
      </button>
    </form>

    <div>
      <ReviewItem
        v-for="review in store.reviewModule.getUserReviewByProductId(
          props.itemId
        )"
        :review="review"
        :key="review.id"
      />
    </div>
  </section>
</template>

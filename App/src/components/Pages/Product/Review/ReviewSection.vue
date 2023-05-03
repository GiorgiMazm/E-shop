<script setup lang="ts">
import ReviewItem from "./ReviewItem.vue";
import { ref } from "vue";
import { useProductStore } from "../../../../stores/ProductStore";
import Review from "../../../../types/Review";
import Item from "../../../../types/Item";
const store = useProductStore();
const title = ref("");
const description = ref("");
const rate = ref(10);
const props = defineProps<{
  item: Item;
}>();

function clearInputs() {
  title.value = "";
  description.value = "";
  rate.value = 10;
}
</script>

<template>
  <section>
    <h2 class="text-center font-bold text-3xl">Reviews</h2>
    <h3 class="text-center text-2xl">
      The average rating of this product is
      <mark class="font-bold bg-gray-500">{{
        store.reviewModule.getAverageRateByProductId(props.item.id)
      }}</mark>
    </h3>
    <form
      class="mt-4"
      v-if="store.userModule.getCurrentUser"
      @submit.prevent="
        store.reviewModule.addReview({
          product: props.item,
          user: store.userModule.getCurrentUser,
          title: title,
          description: description,
          rate: rate,
        } as Review);
        clearInputs();
      "
    >
      <div class="flex flex-col">
        <label>Review title</label>
        <input
          class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
          placeholder="Title..."
          v-model="title"
        />
      </div>
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
        v-for="review in store.reviewModule.getReviewByProductId(props.item.id)"
        :review="review"
        :key="review.id"
      />
    </div>
  </section>
</template>

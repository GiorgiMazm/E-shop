<script setup lang="ts">
import ReviewItem from "./ReviewItem.vue";
import { reactive } from "vue";
import { useProductStore } from "../../../../stores/ProductStore";
import Review from "../../../../types/Review";
import Item from "../../../../types/Item";
import { integer, minValue, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const props = defineProps<{
  item: Item;
}>();
const store = useProductStore();
const formData = reactive({
  title: "",
  description: "",
  rate: 10,
});

const rules = {
  title: { required },
  description: { required },
  rate: { required, integer, minValue: minValue(1) },
};

const validation = useVuelidate(rules, formData);
function clearInputs() {
  formData.title = "";
  formData.description = "";
  formData.rate = 10;
}
function createReview() {
  if (validation.value.$invalid) return;
  store.reviewModule.addReview({
    product: props.item,
    user: store.userModule.getCurrentUser,
    title: formData.title,
    description: formData.description,
    rate: formData.rate,
  } as Review);
  clearInputs();
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
      @submit.prevent="createReview"
    >
      <div class="flex flex-col">
        <label>Review title</label>
        <input
          class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
          placeholder="Title..."
          v-model="formData.title"
        />
        <span class="text-red-600 pb-3" v-if="validation.title.$invalid"
          >Title is required</span
        >
      </div>
      <div class="flex flex-col">
        <label>Add your review</label>
        <textarea
          class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
          placeholder="Tell about your experience with this product..."
          v-model="formData.description"
        />
        <span class="text-red-600 pb-3" v-if="validation.description.$invalid"
          >Description is required</span
        >
      </div>

      <div class="flex flex-col">
        <label>Rate this product on scale 1 to 10</label>
        <select
          class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
          v-model="formData.rate"
        >
          <option v-for="num in 10" :key="num" :value="num">
            {{ num }}
          </option>
        </select>
        <span class="text-red-600 pb-3" v-if="validation.rate.$invalid"
          >Rate is required</span
        >
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

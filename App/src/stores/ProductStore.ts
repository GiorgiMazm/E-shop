import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import Review from "../types/Review";
import userModule from "./userModule";
import productModule from "./productModule";

export const useProductStore = defineStore("Products", () => {
  const userReviewList = reactive<Review[]>([
    {
      authorId: 1,
      productId: 2,
      description: "the best thing ever",
      rate: 4,
      id: 1,
    },
  ]);

  const getUserReviewList = computed(() => {
    return userReviewList;
  });

  function getUserReviewByProductId(id: number) {
    return getUserReviewList.value.filter((review) => review.productId === id);
  }

  function getAverageRateByProductId(
    productId: number
  ): number | "no rate yet" {
    const rateArray = getUserReviewByProductId(productId);
    const sum = rateArray.reduce((accumulator, rate) => {
      return accumulator + rate.rate;
    }, 0);

    if (sum === 0) return "no rate yet";

    return parseFloat((sum / rateArray.length).toFixed(1));
  }

  const reviewIdCounter = ref(1);

  function addUserReview(
    productId: number,
    authorId: number,
    description: string,
    rate: number
  ): void {
    if (userModule.getCurrentUser) {
      userReviewList.push({
        authorId: authorId,
        productId: productId,
        rate: rate,
        description: description,
        id: ++reviewIdCounter.value,
      });
    }
  }

  return {
    productModule,
    getUserReviewList,
    getUserReviewByProductId,
    addUserReview,
    getAverageRateByProductId,
    userModule,
  };
});

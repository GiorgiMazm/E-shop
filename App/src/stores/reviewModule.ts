import { computed, reactive, ref } from "vue";
import Review from "../types/Review";
import userModule from "./userModule";

const reviewIdCounter = ref(1);
const userReviewList = reactive<Review[]>([
  {
    authorId: 1,
    productId: 2,
    description: "the best thing ever",
    rate: 4,
    id: 1,
  },
]);
export default {
  getUserReviewList: computed(() => {
    return userReviewList;
  }),

  getUserReviewByProductId(id: number) {
    return userReviewList.filter((review: Review) => review.productId === id);
  },

  getAverageRateByProductId(productId: number): number | "no rate yet" {
    const rateArray = this.getUserReviewByProductId(productId);
    const sum = rateArray.reduce((accumulator: number, rate: Review) => {
      return accumulator + rate.rate;
    }, 0);

    if (sum === 0) return "no rate yet";

    return parseFloat((sum / rateArray.length).toFixed(1));
  },

  addUserReview(
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
  },
};

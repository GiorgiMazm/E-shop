import { computed, reactive } from "vue";
import Review from "../types/Review";
import userModule from "./userModule";
import UserModule from "./userModule";
import axios from "axios";

const userReviewList = reactive<{ array: Review[] }>({ array: [] });
export default {
  async loadAllReview() {
    try {
      userReviewList.array = await axios
        .get("http://localhost:8080/reviewList")
        .then((response) => response.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  getUserReviewList: computed(() => {
    return userReviewList;
  }),

  getUserReviewByProductId(id: number) {
    return userReviewList.array.filter(
      (review: Review) => review.product.id === id
    );
  },

  getAverageRateByProductId(productId: number): number | "no rate yet" {
    const rateArray = this.getUserReviewByProductId(productId);
    const sum = rateArray.reduce((accumulator: number, rate: Review) => {
      return accumulator + rate.rate;
    }, 0);

    if (sum === 0) return "no rate yet";

    return parseFloat((sum / rateArray.length).toFixed(1));
  },

  async addUserReview(review: Review) {
    if (userModule.getCurrentUser) {
      try {
        await axios.post("http://localhost:8080/newReview", review);
      } catch (error) {
        alert(error);
        console.log(error);
      }
      await this.loadAllReview();
    }
  },

  async removeUserReview(id: number) {
    if (!UserModule.getCurrentUser.value?.admin) return;
    try {
      await axios.delete("http://localhost:8080/deleteReview/" + id);
      await this.loadAllReview();
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
};

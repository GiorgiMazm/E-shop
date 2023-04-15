import { defineStore } from "pinia";
import userModule from "./userModule";
import productModule from "./productModule";
import reviewModule from "./reviewModule";

export const useProductStore = defineStore("Products", () => {
  return {
    productModule,
    userModule,
    reviewModule,
  };
});

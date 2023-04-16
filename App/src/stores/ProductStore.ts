import { defineStore } from "pinia";
import userModule from "./userModule";
import productModule from "./productModule";
import reviewModule from "./reviewModule";

export const useProductStore = defineStore("Products", () => {
  function passwordVisibilityToggle(passwordObject: {
    passwordVisibility: boolean;
    passwordType: string;
  }) {
    passwordObject.passwordVisibility = !passwordObject.passwordVisibility;
    if (passwordObject.passwordType === "password")
      passwordObject.passwordType = "text";
    else passwordObject.passwordType = "password";
  }
  return {
    productModule,
    userModule,
    reviewModule,
    passwordVisibilityToggle,
  };
});

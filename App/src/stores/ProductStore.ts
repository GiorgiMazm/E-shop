import { defineStore } from "pinia";
import userModule from "./userModule";
import productModule from "./productModule";
import reviewModule from "./reviewModule";

export const useProductStore = defineStore("Products", () => {
  function passwordVisibilityToggle(passwordObject: {
    isPasswordVisible: boolean;
    passwordType: string;
  }) {
    passwordObject.isPasswordVisible = !passwordObject.isPasswordVisible;
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

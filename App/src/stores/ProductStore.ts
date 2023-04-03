import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("counter", () => {
  const name = ref("Eduardo");
  function sayHi(): void {
    console.log("hi " + name.value);
  }
  return { name, sayHi };
});

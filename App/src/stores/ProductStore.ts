import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import Item from "../Interfaces/Item";

export const useProductStore = defineStore("counter", () => {
  const productsList: Ref<Item[]> = ref([
    {
      name: "Macbook",
      price: 2000,
      link: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202303230456",
      id: 1,
    },
    {
      name: "Macbook pro",
      price: 2500,
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_EMEA_LANG_DE?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359389",
      id: 2,
    },

    {
      name: "Macbook air",
      price: 1500,
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-macbook-air-gold-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145607000",
      id: 3,
    },

    {
      name: "Lenovo thinkpad",
      price: 3000,
      link: "https://laptopmedia.com/wp-content/uploads/2021/06/3-52-e1624453916559.jpg",
      id: 4,
    },
  ]);

  return { productsList };
});
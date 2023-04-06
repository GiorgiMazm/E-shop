import { defineStore } from "pinia";
import { computed, Ref, ref } from "vue";
import Item from "../types/Item";
import { ItemCategory } from "../types/ItemCategory";

export const useProductStore = defineStore("Products", () => {
  const productsList: Ref<Item[]> = ref([
    {
      name: "Macbook",
      price: 2000,
      link: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202303230456",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing" +
        "            elit. Autem, error, libero. Asperiores cupiditate, ducimus eaque" +
        "            exercitationem itaque maxime nobis optio pariatur praesentium quae" +
        "            quam quis quisquam quos reiciendis sequi sint voluptatum. Accusamus" +
        "            assumenda at consequuntur deleniti eaque, et exercitationem fugiat" +
        "            harum incidunt iste nesciunt nobis nostrum officia quibusdam" +
        "            repellendus suscipit",
      category: ItemCategory.Technique,
      id: 1,
    },
    {
      name: "Macbook pro",
      price: 2500,
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_EMEA_LANG_DE?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359389",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing" +
        "            elit. Autem, error, libero. Asperiores cupiditate, ducimus eaque" +
        "            exercitationem itaque maxime nobis optio pariatur praesentium quae" +
        "            quam quis quisquam quos reiciendis sequi sint voluptatum. Accusamus" +
        "            assumenda at consequuntur deleniti eaque, et exercitationem fugiat" +
        "            harum incidunt iste nesciunt nobis nostrum officia quibusdam" +
        "            repellendus suscipit",
      category: ItemCategory.Technique,
      id: 2,
    },

    {
      name: "Macbook air",
      price: 1500,
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-macbook-air-gold-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145607000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing" +
        "            elit. Autem, error, libero. Asperiores cupiditate, ducimus eaque" +
        "            exercitationem itaque maxime nobis optio pariatur praesentium quae" +
        "            quam quis quisquam quos reiciendis sequi sint voluptatum. Accusamus" +
        "            assumenda at consequuntur deleniti eaque, et exercitationem fugiat" +
        "            harum incidunt iste nesciunt nobis nostrum officia quibusdam" +
        "            repellendus suscipit",
      category: ItemCategory.Technique,
      id: 3,
    },

    {
      name: "Lenovo thinkpad",
      price: 3000,
      link: "https://laptopmedia.com/wp-content/uploads/2021/06/3-52-e1624453916559.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing" +
        "            elit. Autem, error, libero. Asperiores cupiditate, ducimus eaque" +
        "            exercitationem itaque maxime nobis optio pariatur praesentium quae" +
        "            quam quis quisquam quos reiciendis sequi sint voluptatum. Accusamus" +
        "            assumenda at consequuntur deleniti eaque, et exercitationem fugiat" +
        "            harum incidunt iste nesciunt nobis nostrum officia quibusdam" +
        "            repellendus suscipit",
      category: ItemCategory.Technique,
      id: 4,
    },
  ]);
  const productsBag: Ref<Item[]> = ref([]);
  const counter = ref(5);

  const getProductList = computed(() => {
    return productsList.value;
  });

  const getProductBag = computed(() => {
    return productsBag.value;
  });

  function addProductItem(
    name: string,
    price: number,
    imageLink: string,
    description: string,
    category: ItemCategory
  ): void {
    const obj: Item = {
      name: name,
      price: price,
      link: imageLink,
      description: description,
      category: category,
      id: counter.value++,
    };
    productsList.value.push(obj);
  }

  function removeProductItem(index: number): void {
    productsList.value.splice(index, 1);
  }

  function getProductById(id: number) {
    return productsList.value.find((item) => item.id === id);
  }

  const getItemById = computed(() => {
    return (id: number) => getProductById(id);
  });

  function addItemToBag(id: number): void {
    const item = getItemById.value(id);
    if (item !== undefined) {
      productsBag.value.push(item);
    }
  }

  function removeItemFromBag(index: number): void {
    productsBag.value.splice(index, 1);
  }

  return {
    getProductList,
    getProductBag,
    getItemById,
    addProductItem,
    removeProductItem,
    addItemToBag,
    removeItemFromBag,
  };
});

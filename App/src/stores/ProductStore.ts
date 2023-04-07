import { defineStore } from "pinia";
import { computed, Ref, ref } from "vue";
import Item from "../types/Item";
import { ItemCategory } from "../types/ItemCategory";
import Bag from "../types/Bag";

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
      name: "Batman Protein Shaker",
      price: 15,
      link: "https://cdn.shopify.com/s/files/1/1099/1898/products/Batman_Insulated_Stainless_Steel_Protein_Shaker_Bottle_BlenderBottle.png?v=1628611819",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing" +
        "            elit. Autem, error, libero. Asperiores cupiditate, ducimus eaque" +
        "            exercitationem itaque maxime nobis optio pariatur praesentium quae" +
        "            quam quis quisquam quos reiciendis sequi sint voluptatum. Accusamus" +
        "            assumenda at consequuntur deleniti eaque, et exercitationem fugiat" +
        "            harum incidunt iste nesciunt nobis nostrum officia quibusdam" +
        "            repellendus suscipit",
      category: ItemCategory.Gym,
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
  const productsBag: Ref<Bag[]> = ref([{ userId: 1, products: [] }]);
  const counter = ref(5);

  const getProductList = computed(() => {
    return productsList.value;
  });

  function getUserBagById(id: number) {
    return productsBag.value.find((bag) => bag.userId === id);
  }

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

  function addItemToBag(id: number, userId: number): void {
    const item = getProductById(id);
    const bag = getUserBagById(userId);

    if (item && bag) {
      bag.products.push(item);
    }
  }

  function removeItemFromBag(index: number, userId: number): void {
    const bag = getUserBagById(userId);
    if (bag) bag.products.splice(index, 1);
  }

  function getBagSum(userId: number) {
    const bag = getUserBagById(userId);
    if (bag) {
      return bag.products.reduce((sum, product) => sum + product.price, 0);
    }
  }

  // not using yet
  function filterProducts(filterBy: ItemCategory) {
    return productsList.value.filter((item) => item.category === filterBy);
  }

  return {
    getProductList,
    getUserBagById,
    getProductById,
    addProductItem,
    removeProductItem,
    addItemToBag,
    removeItemFromBag,
    getBagSum,
  };
});

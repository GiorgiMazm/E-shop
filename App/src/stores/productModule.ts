import axios from "axios";
import { computed, reactive } from "vue";
import Item from "../types/Item";
import { ItemCategory } from "../types/ItemCategory";
import userModule from "./userModule";

// const productsList = reactive<Item[]>([
//   {
//     name: "Macbook",
//     price: 2000,
//     link: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202303230456",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing" +
//       "            elit. Autem, error, libero. Asperiores cupiditate, ducimus eaque" +
//       "            exercitationem itaque maxime nobis optio pariatur praesentium quae" +
//       "            quam quis quisquam quos reiciendis sequi sint voluptatum. Accusamus" +
//       "            assumenda at consequuntur deleniti eaque, et exercitationem fugiat" +
//       "            harum incidunt iste nesciunt nobis nostrum officia quibusdam" +
//       "            repellendus suscipit",
//     category: ItemCategory.Technique,
//     id: 1,
//   },
//   {
//     name: "Macbook pro",
//     price: 2500,
//     link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_EMEA_LANG_DE?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359389",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing" +
//       "            elit. Autem, error, libero. Asperiores cupiditate, ducimus eaque" +
//       "            exercitationem itaque maxime nobis optio pariatur praesentium quae" +
//       "            quam quis quisquam quos reiciendis sequi sint voluptatum. Accusamus" +
//       "            assumenda at consequuntur deleniti eaque, et exercitationem fugiat" +
//       "            harum incidunt iste nesciunt nobis nostrum officia quibusdam" +
//       "            repellendus suscipit",
//     category: ItemCategory.Technique,
//     id: 2,
//   },
//
//   {
//     name: "Batman Protein Shaker",
//     price: 15,
//     link: "https://cdn.shopify.com/s/files/1/1099/1898/products/Batman_Insulated_Stainless_Steel_Protein_Shaker_Bottle_BlenderBottle.png?v=1628611819",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing" +
//       "            elit. Autem, error, libero. Asperiores cupiditate, ducimus eaque" +
//       "            exercitationem itaque maxime nobis optio pariatur praesentium quae" +
//       "            quam quis quisquam quos reiciendis sequi sint voluptatum. Accusamus" +
//       "            assumenda at consequuntur deleniti eaque, et exercitationem fugiat" +
//       "            harum incidunt iste nesciunt nobis nostrum officia quibusdam" +
//       "            repellendus suscipit",
//     category: ItemCategory.Gym,
//     id: 3,
//   },
//
//   {
//     name: "Lenovo thinkpad",
//     price: 3000,
//     link: "https://laptopmedia.com/wp-content/uploads/2021/06/3-52-e1624453916559.jpg",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing" +
//       "            elit. Autem, error, libero. Asperiores cupiditate, ducimus eaque" +
//       "            exercitationem itaque maxime nobis optio pariatur praesentium quae" +
//       "            quam quis quisquam quos reiciendis sequi sint voluptatum. Accusamus" +
//       "            assumenda at consequuntur deleniti eaque, et exercitationem fugiat" +
//       "            harum incidunt iste nesciunt nobis nostrum officia quibusdam" +
//       "            repellendus suscipit",
//     category: ItemCategory.Technique,
//     id: 4,
//   },
// ]);
const productsList = reactive<{ array: Item[] }>({
  array: [
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
  ],
});

export default {
  async loadAllProduct() {
    try {
      productsList.array = await axios
        .get("http://localhost:8080/productList")
        .then((response) => response.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  getProductList: computed(() => {
    return productsList.array;
  }),

  setFilteredProductList(filter: ItemCategory, keyWord: string) {
    if (filter === ItemCategory.Gym) {
      productsList.array.filter((product) => {
        return (
          product.category === ItemCategory.Gym &&
          product.name.toLowerCase().includes(keyWord.toLowerCase().trim())
        );
      });
    } else if (filter === ItemCategory.Technique)
      productsList.array = productsList.array.filter((product) => {
        return (
          product.category === ItemCategory.Technique &&
          product.name.toLowerCase().includes(keyWord.toLowerCase().trim())
        );
      });
    else {
      productsList.array = productsList.array.filter((product) =>
        product.name.toLowerCase().includes(keyWord.toLowerCase().trim())
      );
    }
  },

  async addProductItem(
    name: string,
    price: number,
    imageLink: string,
    description: string,
    category: ItemCategory
  ): Promise<void> {
    if (!userModule.getCurrentUser.value?.admin) return;
    const obj = {
      name: name,
      price: price,
      link: imageLink,
      description: description,
      category: category,
    };

    try {
      await axios.post("http://localhost:8080/newProduct", obj);
      await this.loadAllProduct();
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },

  async removeProductItem(id: number): Promise<void> {
    if (!userModule.getCurrentUser.value?.admin) return;
    try {
      await axios.delete("http://localhost:8080/deleteProduct/" + id);
      await this.loadAllProduct();
    } catch (error) {
      alert(error);
      console.log(error);
    }

    userModule.getUserList.value.forEach((user) => {
      user.bag = user.bag.filter((item) => item.id !== id);
    });
  },

  getProductById(id: number) {
    return productsList.array.find((item) => item.id === id);
  },

  async editProductItem(
    id: number,
    name: string,
    price: number,
    description: string,
    link: string,
    category: ItemCategory
  ) {
    if (!userModule.getCurrentUser.value?.admin) return;
    const obj = {
      name: name,
      price: price,
      link: link,
      description: description,
      category: category,
    };

    try {
      await axios.put("http://localhost:8080/editProduct/" + id, obj);
      await this.loadAllProduct();
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
};

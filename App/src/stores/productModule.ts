import axios from "axios";
import { computed, reactive } from "vue";
import Item from "../types/Item";
import { ItemCategory } from "../types/ItemCategory";
import userModule from "./userModule";

const productsList = reactive<{ array: Item[] }>({
  array: [],
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

  async setFilteredProductList(filter: ItemCategory, keyWord: string) {
    if (filter === ItemCategory.Gym) {
      await this.loadAllProduct();
      productsList.array = productsList.array.filter((product) => {
        return (
          product.category === ItemCategory.Gym &&
          product.name.toLowerCase().includes(keyWord.toLowerCase().trim())
        );
      });
    } else if (filter === ItemCategory.Technique) {
      await this.loadAllProduct();
      productsList.array = productsList.array.filter((product) => {
        return (
          product.category === ItemCategory.Technique &&
          product.name.toLowerCase().includes(keyWord.toLowerCase().trim())
        );
      });
    } else {
      await this.loadAllProduct();
      productsList.array = productsList.array.filter((product) =>
        product.name.toLowerCase().includes(keyWord.toLowerCase().trim())
      );
    }
  },

  async addProductItem(item: {
    name: string;
    price: number;
    link: string;
    description: string;
    category: ItemCategory;
  }): Promise<void> {
    if (!userModule.isCurrentUserAdmin.value) return;

    try {
      await axios.post("http://localhost:8080/newProduct", item);
      await this.loadAllProduct();
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },

  async removeProductItem(id: number): Promise<void> {
    if (!userModule.isCurrentUserAdmin.value) return;
    try {
      await axios.delete("http://localhost:8080/deleteProduct/" + id);
      await this.loadAllProduct();
    } catch (error) {
      alert(error);
      console.log(error);
    }

    userModule.getUserList.value.all.forEach((user) => {
      user.bag = user.bag.filter((item) => item.id !== id);
    });
  },

  getProductById(id: number) {
    return productsList.array.find((item) => item.id === id);
  },

  async editProductItem(item: Item) {
    if (!userModule.isCurrentUserAdmin.value) return;

    try {
      await axios.put("http://localhost:8080/editProduct/" + item.id, item);
      await this.loadAllProduct();
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
};

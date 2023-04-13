import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import Item from "../types/Item";
import { ItemCategory } from "../types/ItemCategory";
import User from "../types/User";
import Review from "../types/Review";

export const useProductStore = defineStore("Products", () => {
  const productsList = reactive<Item[]>([
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
  const userList = reactive<User[]>([
    new User("giorgi@gmail.com", "bfdsq34D", "Giorgi", "Mazm", true),
    new User("john.cena@gmail.com", "bfdsq34D", "John", "Cena", false),
  ]);
  const currentUser = reactive<{ user: User | null }>({
    user: null,
  });
  const productIdCounter = ref(5);
  const getProductList = computed(() => {
    return productsList;
  });

  const getCurrentUser = computed(() => {
    return currentUser.user;
  });
  function addProductItem(
    name: string,
    price: number,
    imageLink: string,
    description: string,
    category: ItemCategory
  ): void {
    if (!getCurrentUser.value?.admin) return;
    const obj: Item = {
      name: name,
      price: price,
      link: imageLink,
      description: description,
      category: category,
      id: productIdCounter.value++,
    };
    productsList.push(obj);
  }

  function removeProductItem(index: number): void {
    if (!getCurrentUser.value?.admin) return;
    productsList.splice(index, 1);
  }

  function editProductItem(
    id: number,
    name: string,
    price: number,
    description: string,
    link: string,
    category: ItemCategory
  ) {
    if (!getCurrentUser.value?.admin) return;
    const item = getProductById(id);
    if (item) {
      item.name = name;
      item.price = price;
      item.description = description;
      item.category = category;
      item.link = link;
    }
  }

  function editUserInfo(
    name: string,
    lastname: string,
    email: string,
    password: string
  ) {
    if (currentUser.user) {
      currentUser.user.name = name;
      currentUser.user.lastName = lastname;
      currentUser.user.email = email;
      currentUser.user.password = password;
    }
  }

  function getUserById(id: number) {
    return userList.find((user) => user.id === id);
  }

  function getProductById(id: number) {
    return productsList.find((item) => item.id === id);
  }

  // not implementing correctly yet
  // function filterProducts(filterBy: ItemCategory) {
  //   return productsList.filter((item) => item.category === filterBy);
  // }

  function signIn(email: string, password: string) {
    const user = userList.find(
      (user) => user.password === password && user.email === email
    );
    if (user) currentUser.user = user;
  }

  function signOut() {
    currentUser.user = null;
  }

  const userReviewList = reactive<Review[]>([
    {
      authorId: 1,
      productId: 2,
      description: "the best thing ever",
      rate: 4,
      id: 1,
    },
  ]);

  const getUserReviewList = computed(() => {
    return userReviewList;
  });

  function getUserReviewByProductId(id: number) {
    return getUserReviewList.value.filter((review) => review.productId === id);
  }

  return {
    getCurrentUser,
    userList,
    getProductList,
    getProductById,
    addProductItem,
    removeProductItem,
    editProductItem,
    editUserInfo,
    signIn,
    signOut,
    getUserReviewList,
    getUserById,
    getUserReviewByProductId,
  };
});

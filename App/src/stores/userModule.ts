import { computed, reactive } from "vue";
import User from "../types/User";
import axios from "axios";
import Item from "../types/Item";

const currentUser = reactive<{ user: User | null }>({
  user: null,
});
const userList = reactive<{ all: User[] }>({
  all: [
    {
      email: "giorgi@gmail.com",
      password: "bfdsq34D",
      name: "Giorgi",
      lastName: "Mazm",
      admin: true,
      id: 0,
      bag: [],
    },
  ],
});
export default {
  async loadAllUser() {
    try {
      userList.all = await axios
        .get("http://localhost:8080/userList")
        .then((response) => response.data);
      console.log(userList.all);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  editUserInfo(
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
  },

  getUserById(id: number) {
    return userList.all.find((user) => user.id === id);
  },

  signIn(email: string, password: string) {
    const user = userList.all.find(
      (user) => user.password === password && user.email === email
    );
    if (user) currentUser.user = user;
  },

  signUp(name: string, lastName: string, email: string, password: string) {
    const user: User = {
      email: "giorgi@gmail.com",
      password: "bfdsq34D",
      name: "Giorgi",
      lastName: "Mazm",
      admin: true,
      id: 0,
      bag: [],
    };
    userList.all.push(user);
    currentUser.user = user;
    console.log(user);
  },

  signOut() {
    currentUser.user = null;
  },

  getCurrentUser: computed(() => {
    return currentUser.user;
  }),

  getUserList: computed(() => {
    return userList;
  }),

  getUserBagSum: computed(() => {
    return currentUser.user?.bag.reduce(
      (sum, bag) => sum + Number(bag.price),
      0
    );
  }),

  clearBag() {
    if (currentUser.user) currentUser.user.bag = [];
  },

  removeItemFromBag(id: number) {
    if (currentUser.user) {
      const index = currentUser.user.bag.findIndex(
        (product) => product.id === id
      );
      currentUser.user.bag.splice(index, 1);
    }
  },

  addItemToBag(item: Item, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      currentUser.user?.bag.push(item);
    }
  },
};

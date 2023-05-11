import { computed, reactive } from "vue";
import User from "../types/User";
import axios from "axios";
import Item from "../types/Item";

const currentUser = reactive<{ user: User | null }>({
  user: null,
});
const userList = reactive<{ all: User[] }>({
  all: [],
});
export default {
  async loadAllUser() {
    try {
      userList.all = await axios
        .get("http://localhost:8080/userList")
        .then((response) => response.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },

  async deleteUser(id: number) {
    try {
      await axios.delete("http://localhost:8080/deleteUser/" + id);
      await this.loadAllUser();
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },

  async editUserPrivilege(id: number) {
    try {
      await axios.put("http://localhost:8080/editPrivilege/" + id);
      await this.loadAllUser();
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },

  async editUserInfo(newUser: {
    name: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    if (currentUser.user) {
      try {
        await axios.put(
          "http://localhost:8080/editUser/" + currentUser.user.id,
          newUser
        );
        currentUser.user.name = newUser.name;
        currentUser.user.lastName = newUser.lastName;
        currentUser.user.email = newUser.email;
        currentUser.user.password = newUser.password;
      } catch (error) {
        alert(error);
        console.log(error);
      }
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

  async signUp(user: {
    name: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    try {
      await axios.post("http://localhost:8080/newUser", user);
      await this.loadAllUser();
      return true;
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },

  signOut() {
    currentUser.user = null;
  },

  getCurrentUser: computed(() => {
    return currentUser.user;
  }),

  isCurrentUserAdmin: computed(() => {
    return currentUser.user?.admin;
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

  async clearBag() {
    if (currentUser.user) {
      currentUser.user.bag = [];
      try {
        await axios.put(
          "http://localhost:8080/editUserBag/" + currentUser.user?.id,
          []
        );
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  },

  async removeItemFromBag(deletingProduct: Item) {
    if (currentUser.user) {
      const index = currentUser.user.bag.findIndex(
        (product) => product.id === deletingProduct.id
      );
      currentUser.user.bag.splice(index, 1);
      try {
        await axios.delete(
          "http://localhost:8080/deleteUserBag/" + currentUser.user?.id,
          { data: deletingProduct }
        );
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  },

  async addItemToBag(item: Item, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      try {
        await axios.post(
          "http://localhost:8080/addUserBag/" + currentUser.user?.id,
          item
        );
      } catch (error) {
        alert(error);
        console.log(error);
      }
      currentUser.user?.bag.push(item);
    }
  },
};

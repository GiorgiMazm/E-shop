import { computed, reactive } from "vue";
import User from "../types/User";

const currentUser = reactive<{ user: User | null }>({
  user: null,
});
export default {
  userList: reactive<User[]>([
    new User("giorgi@gmail.com", "bfdsq34D", "Giorgi", "Mazm", true),
    new User("john.cena@gmail.com", "bfdsq34D", "John", "Cena", false),
  ]),

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
    return this.userList.find((user) => user.id === id);
  },

  signIn(email: string, password: string) {
    const user = this.userList.find(
      (user) => user.password === password && user.email === email
    );
    if (user) currentUser.user = user;
  },

  signOut() {
    currentUser.user = null;
  },

  getCurrentUser: computed(() => {
    return currentUser.user;
  }),
};

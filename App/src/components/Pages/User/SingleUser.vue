<script setup lang="ts">
import User from "../../../types/User";
import { useProductStore } from "../../../stores/ProductStore";
import { useRouter } from "vue-router";

const props = defineProps<{
  user: User;
}>();
const router = useRouter();
const store = useProductStore();
const currentUser = store.userModule.getCurrentUser === props.user;

function deleteUser() {
  if (currentUser) {
    store.userModule.signOut();
    router.push("/");
  }
  store.userModule.deleteUser(props.user.id);
}
</script>

<template>
  <div class="my-3 w-1/4">
    <p class="text-white" v-if="currentUser">This is your account</p>
    <p>First name: {{ props.user.name }}</p>
    <p>Last Name: {{ props.user.lastName }}</p>
    <p>Email address: {{ props.user.email }}</p>
    <p v-if="props.user.admin">Privilege: Admin</p>
    <p v-else>Privilege: Standard user</p>
    <button
      @click="store.userModule.editUserPrivilege(props.user.id)"
      class="rounded-xl bg-gray-300 py-2 px-3 mt-2 hover:text-amber-600"
      v-if="!props.user.admin"
    >
      Make user admin
    </button>

    <button
      v-if="props.user.admin && !currentUser"
      @click="store.userModule.editUserPrivilege(props.user.id)"
      class="rounded-xl bg-gray-300 py-2 px-3 mt-2 hover:text-amber-600"
    >
      Exclude from admins
    </button>
    <button
      @click="deleteUser"
      class="rounded-xl bg-gray-700 py-2 px-3 ml-3 mt-2 hover:text-amber-600"
    >
      Delete user
    </button>
  </div>
</template>

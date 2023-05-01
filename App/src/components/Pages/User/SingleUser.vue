<script setup lang="ts">
import User from "../../../types/User";
import { useProductStore } from "../../../stores/ProductStore";

const props = defineProps<{
  user: User;
}>();

const store = useProductStore();
</script>

<template>
  <div class="my-3 w-1/4">
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
      v-if="props.user.admin"
      @click="store.userModule.editUserPrivilege(props.user.id)"
      class="rounded-xl bg-gray-300 py-2 px-3 mt-2 hover:text-amber-600"
    >
      Exclude from admins
    </button>
    <button
      @click="store.userModule.deleteUser(props.user.id)"
      class="rounded-xl bg-gray-700 py-2 px-3 ml-3 hover:text-amber-600"
    >
      Delete user
    </button>
  </div>
</template>

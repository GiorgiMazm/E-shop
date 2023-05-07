<script setup lang="ts">
import { useProductStore } from "../../../stores/ProductStore";
import { reactive } from "vue";
import { maxLength, minLength, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { useRouter } from "vue-router";

const store = useProductStore();
const router = useRouter();
const formData = reactive({
  firstName: "",
  lastName: "",
  city: "",
  street: "",
  zip: "",
  creditCardNumber: "",
  ccv: "",
  expirationDate: "",
});

const rules = {
  firstName: { required },
  lastName: { required },
  city: { required },
  street: { required },
  zip: { required, minLength: minLength(5), maxLength: maxLength(5) },
  creditCardNumber: {
    required,
    minLength: minLength(16),
    maxLength: maxLength(16),
  },
  ccv: { required, minLength: minLength(3), maxLength: maxLength(3) },
  expirationDate: {
    required,
    minLength: minLength(5),
    maxLength: maxLength(5),
  },
};

const validation = useVuelidate(rules, formData);
const user = store.userModule.getCurrentUser;
if (user) {
  formData.firstName = user.name;
  formData.lastName = user.lastName;
}

function buy() {
  if (validation.value.$invalid) return;
  router.push("/");
  alert("you have successfully bought it!");
}
</script>

<template>
  <div>
    <form
      class="w-2/5 my-4 mx-auto bg-gray-400 p-5 text-gray-800 py-8"
      @submit.prevent="buy"
    >
      <h2 class="text-center text-2xl">Shipping Details</h2>
      <div class="flex flex-col">
        <label>First Name</label>
        <input
          class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600 block"
          placeholder="Sauron"
          v-model="formData.firstName"
          type="text"
        />
        <span class="text-red-600 pb-3" v-if="validation.firstName.$invalid"
          >First name is required</span
        >
      </div>
      <div class="flex flex-col">
        <label>Last name</label>
        <input
          class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600 block"
          placeholder="Smith"
          v-model="formData.lastName"
          type="text"
        />
        <span class="text-red-600 pb-3" v-if="validation.lastName.$invalid"
          >Last name is required</span
        >
      </div>
      <div class="flex flex-col">
        <label>City</label>
        <input
          class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
          placeholder="Mordor"
          type="text"
          v-model="formData.city"
        />
        <span class="text-red-600 pb-3" v-if="validation.city.$invalid"
          >City is required</span
        >
      </div>

      <div class="flex flex-col">
        <label>Street</label>
        <input
          class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
          placeholder="Evilstreet 27"
          type="text"
          v-model="formData.street"
        />
        <span class="text-red-600 pb-3" v-if="validation.street.$invalid"
          >Street is required</span
        >
      </div>
      <div class="flex flex-col">
        <label>ZIP</label>
        <input
          class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
          placeholder="54544"
          type="text"
          v-model="formData.zip"
        />
        <span class="text-red-600 pb-3" v-if="validation.zip.$invalid"
          >ZIP is not valid</span
        >
      </div>
      <div class="flex flex-col">
        <label>Credit card number</label>
        <input
          class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
          placeholder="4354 5753 6735 7555"
          type="text"
          v-model="formData.creditCardNumber"
        />
        <span
          class="text-red-600 pb-3"
          v-if="validation.creditCardNumber.$invalid"
          >Credit card number is not valid</span
        >
      </div>

      <div class="flex justify-around">
        <div class="flex flex-col">
          <label>CCV</label>
          <input
            class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
            placeholder="435"
            type="text"
            v-model="formData.ccv"
          />
          <span class="text-red-600 pb-3" v-if="validation.ccv.$invalid"
            >CCV is not valid</span
          >
        </div>
        <div class="flex flex-col">
          <label>Expiration date</label>
          <input
            class="my-2 text-black p-2 bg-gray-200 border-2 border-gray-600"
            placeholder="MM/YY"
            type="text"
            v-model="formData.expirationDate"
          />
          <span
            class="text-red-600 pb-3"
            v-if="validation.expirationDate.$invalid"
            >Expiration date is not valid</span
          >
        </div>
      </div>

      <button
        type="submit"
        class="bg-gray-700 w-44 py-3 m-4 hover:text-amber-500 text-gray-300"
      >
        Pay
      </button>
      <router-link
        to="/products"
        class="bg-gray-700 w-44 inline-block py-3 m-4 text-center hover:text-amber-500 text-gray-300"
      >
        Back</router-link
      >
    </form>
  </div>
</template>

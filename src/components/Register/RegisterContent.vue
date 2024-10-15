<template>
  <div
    class="bg-[#282828] bg-content-login rounded-lg max-w-[50%] m-auto mt-[50px] border min-h-[60vh]"
  >
    <div class="p-10">
      <div class="flex flex-col gap-2">
        <p class="font-bold text-2xl text-[#FFFD02]">JOIN WITH US</p>
        <p class="text-sm">Let's show your professional and projects!</p>
        <form class="min-w-[80%] m-auto" @submit.prevent="handleLogin">
          <div class="mb-4 flex flex-col flex-start custom-input">
            <label for="name" class="block text-white text-left"
              >Full Name:</label
            >
            <input
              type="text"
              id="name"
              v-model="state.loginData.name"
              required
              class="mt-2"
              placeholder="Please enter your name"
            />
          </div>
          <div class="mb-4 flex flex-col flex-start custom-input">
            <label for="name" class="block text-white text-left"
              >Email Address:</label
            >
            <input
              type="email"
              id="email"
              v-model="state.loginData.email"
              required
              class="mt-2"
              placeholder="Please enter your email"
            />
          </div>
          <div class="mb-4 flex flex-col flex-start custom-input">
            <label for="name" class="block text-white text-left"
              >Password:</label
            >
            <input
              type="password"
              id="password"
              v-model="state.loginData.password"
              required
              class="mt-2 border border-white"
              placeholder="Please enter your password"
            />
          </div>
          <div class="mb-4 flex flex-col flex-start custom-input">
            <label for="name" class="block text-white text-left"
              >Confirm Password:</label
            >
            <input
              type="password"
              id="password"
              v-model="state.loginData.confirm_password"
              required
              class="mt-2 border border-white"
              placeholder="Please confirm your password"
            />
          </div>

          <button
            type="submit"
            class="w-full py-3 mt-10 rounded-lg bg-[#FFFD02] text-black font-bold"
          >
            Create new account
          </button>

          <div class="flex items-center gap-2 mt-3 text-sm">
            <p>Already have an account</p>
            <a href="/login" class="text-blue-500">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  loginData: {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  },
});

const handleLogin = () => {
  console.log(state.loginData);
};
</script>

<style scoped>
.bg-content-login {
  background-image: url("https://img.freepik.com/premium-photo/black-background-with-light-it-that-is-lit-up_662214-79365.jpg");
  background-size: cover;
  background-position: center;
  /* height: 200px; */
}

.custom-input input {
  border: 1px solid white;
}
</style>

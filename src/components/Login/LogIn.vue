<template>
  <div
    class="bg-[#282828] bg-content-login rounded-lg max-w-[50%] m-auto mt-[100px] border min-h-[60vh]"
  >
    <div class="p-10">
      <div class="flex flex-col gap-2">
        <p class="font-bold text-2xl text-[#FFFD02]">HI GUYS! WELCOME BACK</p>
        <p class="text-sm">Please enter your information to join</p>
        <form class="min-w-[80%] m-auto" @submit.prevent="handleLogin">
          <div class="mb-4 flex flex-col flex-start custom-input">
            <label for="name" class="block text-white text-left">Name:</label>
            <input
              type="text"
              id="name"
              v-model="loginData.name"
              required
              class="mt-2"
              placeholder="Please enter your name"
            />
          </div>
          <div class="mb-4 flex flex-col flex-start custom-input">
            <label for="name" class="block text-white text-left"
              >Password:</label
            >
            <input
              type="password"
              id="password"
              v-model="loginData.password"
              required
              class="mt-2 border border-white"
              placeholder="Please enter your password"
            />
          </div>
          <div class="flex justify-between gap-3 text-sm">
            <div class="flex items-center gap-2">
              <p>Don't have a account</p>
              <a href="/register" class="text-blue-500">Sign up</a>
            </div>
            <a class="float-right text-blue-500" href="/">Forgot Password</a>
          </div>

          <button
            type="submit"
            class="w-full py-3 mt-10 rounded-lg bg-[#FFFD02] text-black font-bold"
          >
            Sign in
          </button>
          <div class="flex flex-col mt-2">
            <a class="font-bold">OR</a>
            <div class="flex gap-3 justify-center mt-2">
              <button
                v-for="(item, index) in socials"
                :key="index"
                class="border py-3 rounded-lg flex items-center gap-2 w-full justify-center"
              >
                <img :src="item.url" alt="social" class="h-[30px]" />
                {{ item.name }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const socials = [
  {
    url: "/images/socials/ggle.svg",
    name: "Google",
  },
  {
    url: "/images/socials/slack.svg",
    name: "Slack",
  },
  {
    url: "/images/socials/github.svg",
    name: "Github",
  },
];
const loginData = {
  name: "",
  password: "",
};

const handleLogin = () => {
  console.log(loginData);
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

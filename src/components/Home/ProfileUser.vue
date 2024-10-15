<template>
  <div class="flex flex-col">
    <div
      class="bg-[#282828] p-5 rounded-lg flex flex-col border border-gray-700"
    >
      <img
        src="/images/avatar/A1.jpg"
        alt="avatar"
        class="w-[100px] rounded-full m-auto"
      />
      <p class="font-bold text-lg mt-5 text-[#FFFD02]">Trubel Theresa</p>
      <a class="text-sm text-gray-500">theresadev@gmail.it</a>
      <p class="text-sm">FE Developer</p>
      <p class="text-sm text-justify mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div class="flex items-center justify-between mt-4 p-5 border rounded-lg">
        <div class="flex flex-col">
          <p class="font-bold text-sm">1K</p>
          <p class="font-light text-xs">Followers</p>
        </div>
        <div class="flex flex-col">
          <p class="font-bold text-sm">1K</p>
          <p class="font-light text-xs">Following</p>
        </div>
      </div>
      <button
        class="w-full rounded-lg p-2 profile-btn mt-6"
        @click="onNavigateToProfile"
      >
        My Profile
      </button>
    </div>
    <div class="text-left mt-5">
      <p class="font-bold">Recent Projects</p>
      <div class="flex flex-col gap-3 mt-3">
        <div v-for="(project, index) in recentProjectList" :key="index">
          <div class="flex gap-2 items-center">
            <img
              :src="project.url"
              :alt="project.alt"
              class="w-[50px] rounded-lg border p-1"
            />
            <div>
              <p class="text-sm">{{ project.name }}</p>
              <p class="text-xs">{{ project.views }} view</p>
              <div class="flex items-center gap-1">
                <div
                  v-for="(star, index) in new Array(project.rate)"
                  :key="index"
                >
                  <img
                    src="/images/projects/star.svg"
                    alt="rate"
                    class="w-[10px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const recentProjectList = [
  {
    name: "Social Angular App",
    rate: 5,
    views: 10,
    url: "/images/projects/angular.svg",
  },
  {
    name: "Admin Template Reactjs - TyeScript",
    rate: 4,
    views: 10,
    url: "/images/projects/ts.svg",
  },
  {
    name: "Shopping app",
    rate: 1,
    views: 10,
    url: "/images/projects/shopping.svg",
  },
];

const onNavigateToProfile = () => {
  router.push("/profile");
};
</script>

<style scoped>
.profile-btn {
  background: linear-gradient(to bottom, #282828 0%, #515151 99%);
  border: none;
  border-radius: 20px;
}
</style>

<template>
  <div class="flex flex-col gap-1 profile-content-app">
    <div class="bg-profile"></div>
    <div
      class="bg-[#282828] px-2 rounded-b-[10px] pt-2 pb-5 border border-gray-700"
    >
      <div class="profile-infor flex">
        <div class="relative md:w-[150px] w-[100px]">
          <img
            src="/images/avatar/A1.jpg"
            class="md:h-[120px] md:w-[120px] w-[90px] h-[90px] rounded-full absolute top-[-25%] left-[2%] border border-2"
          />
        </div>

        <div class="text-left flex-1">
          <p class="text-xl font-bold text-[#FFFD02]">Trubel Theresa</p>
          <p class="text-sm text-gray-400">heresadev@gmail.it</p>
          <div
            class="flex md:flex-row flex-col justify-between items-center w-full mt-2"
          >
            <div class="flex gap-3">
              <p class="text-slate-500">
                <b class="text-white">1000K</b> Followers
              </p>
              <p class="text-slate-500">
                <b class="text-white">1000K</b> Following
              </p>
            </div>
            <button
              class="border text-[#FFFD02] border-[#FFFD02] py-2 lg:px-4 px-2 md:px-5 rounded-lg lg:mr-3 flex gap-2 items-center mt-2 whitespace-nowrap justify-center md:w-[30%] w-full"
            >
              <img src="/images/edit.svg" class="h-[20px] w-[20px]" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div>
        <p class="text-slate-300 text-sm mt-4 leading-7">
          ❤️ Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s ❤️
        </p>
      </div>
    </div>
    <CreatePost />
    <div class="mt-2 flex flex-col gap-2">
      <div v-for="(post, index) in postList" :key="index">
        <PostDetails />
      </div>
    </div>
  </div>
</template>

<script setup>
import CreatePost from "../PostComp/CreatePost.vue";
import PostDetails from "../PostComp/PostDetail.vue";
const postList = new Array(5).fill(0);
</script>

<style scoped>
.profile-content-app {
  height: 95vh;
  overflow: scroll;
}

.bg-profile {
  background-image: url("https://www.bu.edu/lernet/artemis/projects/StudentWebsites/Harshini/img/cute5");
  min-height: 150px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>

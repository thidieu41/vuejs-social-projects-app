<template>
  <div class="bg-[#282828] p-5 rounded-lg border border-gray-700">
    <div class="flex justify-between items-center">
      <p class="text-left font-bold text-lg">Friends</p>
      <AddNewFriendModal :listFriend="listFriend" />
    </div>

    <div class="flex flex-col gap-1 mt-2 tab-content-app">
      <div v-for="(item, index) in listFriend.concat(listFriend)" :key="index">
        <div
          class="flex items-center justify-between hover:bg-[#4C4C4C] p-2 rounded-lg"
          role="button"
          @click="onNavigateToProfile"
          @keypress.enter="onNavigateToProfile"
        >
          <div class="flex items-center gap-2">
            <div class="relative">
              <img
                :src="item.url"
                alt="avatar"
                :class="[
                  'h-[45px] w-[45px] rounded-full',
                  item.online ? 'border  border-[#FFFD02]' : '',
                ]"
              />
              <img
                src="/images/dot.svg"
                alt="avatar"
                class="status-avatar-img"
                v-if="item.online"
              />
            </div>
            <p>{{ item.name }}</p>
          </div>

          <p class="text-sm text-gray-400">{{ item.active }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import AddNewFriendModal from "./AddFriendVue.vue";
const listFriend = [
  {
    url: "/images/avatar/A1.jpg",
    name: "James Smith",
    active: "",
    online: true,
  },
  {
    url: "/images/avatar/A2.avif",
    name: "Thomas Williams",
    active: "2 days",
    online: false,
  },
  {
    url: "/images/avatar/A3.avif",
    name: "Richard Miller",
    active: "2 days",
    online: false,
  },
  {
    url: "/images/avatar/A4.avif",
    name: "Mary Wilson",
    active: "",
    online: true,
  },
  {
    url: "/images/avatar/A5.jpeg",
    name: "Jennifer Garcia",
    active: "",
    online: true,
  },
  {
    url: "/images/avatar/A1.jpg",
    name: "James Smith",
    active: "",
    online: true,
  },
  {
    url: "/images/avatar/A2.avif",
    name: "Thomas Williams",
    active: "2 days",
    online: false,
  },
  {
    url: "/images/avatar/A3.avif",
    name: "Richard Miller",
    active: "2 days",
    online: false,
  },
  {
    url: "/images/avatar/A4.avif",
    name: "Mary Wilson",
    active: "",
    online: true,
  },
  {
    url: "/images/avatar/A5.jpeg",
    name: "Jennifer Garcia",
    active: "",
    online: true,
  },
];

const router = useRouter();
const onNavigateToProfile = () => {
  router.push("/profile");
};
</script>

<style scoped>
.tab-content-app {
  height: 80vh;
  overflow: scroll;
}
.status-avatar-img {
  position: absolute;
  width: 14px;
  bottom: 1px;
  left: 29px;
  filter: brightness(0) saturate(100%) invert(65%) sepia(51%) saturate(1427%)
    hue-rotate(61deg) brightness(108%) contrast(136%);
}
</style>

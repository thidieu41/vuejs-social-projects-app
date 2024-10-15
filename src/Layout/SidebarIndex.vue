<template>
  <div class="flex h-screen">
    <div
      :class="[
        'fixed inset-y-0 left-0 w-64 bg-[#282828] text-white transform transition-transform duration-300 z-10',
        state.isOpen ? 'translate-x-0' : '-translate-x-full',
        'lg:relative lg:translate-x-0 lg:w-1/5',
      ]"
      v-if="showSidebar"
    >
      <div class="mb-2 p-4">
        <h5
          class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-[#FFFD02]"
        >
          PROFILE WORKS {{ isShow }}
        </h5>
      </div>
      <nav
        class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white"
      >
        <div tabindex="0" v-for="(item, index) in menuList" :key="index">
          <router-link
            role="button"
            @click="hanldeOpenSibar()"
            :to="item.path"
            class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-[#4C4C4C] outline-none text-white"
          >
            <div class="grid place-items-center mr-4">
              <img
                :src="item.icon"
                :alt="item.alt"
                class="h-[25px] style-image"
              />
            </div>
            {{ item.menu }}
            <!-- <span
            :class="[
              'inline-flex items-center justify-center ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full p-1',
              item.number !== 0 ? 'text-right' : 'hidden',
            ]"
          >
            {{ item.number }}
          </span> -->
          </router-link>
        </div>
      </nav>
    </div>

    <div class="flex-1 ml-0">
      <header
        class="p-4 bg-gray-200 flex justify-between lg:hidden"
        v-if="showSidebar"
      >
        <button
          @click="handleSetOpen()"
          class="text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h5
          class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-black"
        >
          VUE TAILWIND
        </h5>
      </header>

      <main class="p-2 md:pr-6 lg:p-4 lg:pr-10">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useRoute } from "vue-router";

const menuList = [
  {
    icon: "/images/menu/home.svg",
    menu: "Home",
    alt: "home",
    path: "/",
    number: 0,
  },
  {
    icon: "/images/menu/noti.svg",
    menu: "Notification",
    alt: "noti",
    path: "/notification",
    number: 25,
  },
  {
    icon: "/images/menu/msg.svg",
    menu: "Messages",
    alt: "msg",
    path: "/messages",
    number: 33,
  },
  {
    icon: "/images/menu/profile.svg",
    menu: "Profile",
    alt: "profile",
    path: "/profile",
    number: 0,
  },
  {
    icon: "/images/menu/setting.svg",
    menu: "Settings",
    alt: "setting",
    path: "/setting",
    number: 0,
  },
  {
    icon: "/images/menu/logout.svg",
    menu: "Log Out",
    alt: "logout",
    path: "/login",
    number: 0,
  },
];

const route = useRoute();

const state = reactive({
  isOpen: false,
});

const hanldeOpenSibar = () => {
  const screen = window.innerWidth;
  if (screen < 768) {
    state.isOpen = false;
  }
};

const handleSetOpen = () => {
  state.isOpen = !state.isOpen;
  console.log(state.isOpen);
};

const showSidebar = computed(() => {
  const hiddenPaths = ["/login", "/register"];
  return !hiddenPaths.includes(route.path);
});
</script>

<style scoped>
.router-link-exact-active {
  color: #fffd02;
}

.router-link-exact-active .style-image {
  filter: brightness(0) saturate(100%) invert(80%) sepia(91%) saturate(636%)
    hue-rotate(358deg) brightness(102%) contrast(107%);
}
</style>

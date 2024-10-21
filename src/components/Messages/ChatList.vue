<template>
  <div
    class="bg-[#282828] lg:p-5 p-2 rounded-lg flex flex-col gap-4 h-[740px] border border-gray-700"
  >
    <div class="flex justify-between items-center">
      <p class="font-bold">Messages</p>
      <img src="/images/msg/note.svg" alt="note" class="h-[30px]" />
    </div>

    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <img src="/images/msg/search.svg" alt="note" class="h-[20px]" />
      </div>
      <input
        type="search"
        id="search"
        class="block w-full p-4 ps-10 text-sm rounded-lg text-white"
        placeholder="Search"
        v-model="state.inputSearch"
        @keypress.enter="debounceInputSearch"
        @keyup="debounceInputSearch"
      />
      <div ref="dropdown">
        <button
          type="button"
          class="absolute end-3 bottom-3"
          @click="onOpenMenuFilter"
        >
          <img src="/images/msg/filter.svg" alt="note" class="h-[20px]" />
        </button>
        <transition name="fade">
          <div
            v-if="state.isDropdownOpen"
            class="absolute right-0 z-10 w-40 rounded-md shadow-lg bg-[#282828] ring-1 ring-gray-500"
          >
            <div
              class="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="#"
                @click.prevent="onOpenMenuFilter()"
                class="block px-4 py-2 text-sm text-white text-left hover:bg-gray-700 hover:text-[#fffd02]"
                role="menuitem"
                v-for="(item, key) in listMenu"
                :key="key"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div class="flex flex-col gap-5 chat-list-app">
      <div v-for="(item, index) in chatList" :key="index" class="w-full">
        <div
          role="button"
          :class="[
            'flex gap-2 items-center p-2 rounded-lg chat-list-item hover:bg-[#4C4C4C] w-full justify-between overflow-x-hidden',
            chatId === item.id ? 'bg-[#4C4C4C]' : '',
          ]"
          @click="handleSetChatId(item.id)"
        >
          <div class="flex gap-2 items-center">
            <img
              :src="item.url"
              alt="note"
              class="h-[60px] w-[60px] rounded-lg"
            />
            <div class="text-left">
              <p class="font-bold">{{ item.name }}</p>
              <p
                class="text-sm whitespace-nowrap text-ellipsis overflow-x-hidden max-w-[270px]"
              >
                {{ item.lastMsg }}
              </p>
              <p class="font-light text-gray-400 text-xs">{{ item.date }}</p>
            </div>
          </div>
          <img src="/images/dot.svg" class="h-[10px]" v-if="item.unread" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  reactive,
  onMounted,
  onUnmounted,
  ref,
  defineProps,
  defineEmits,
} from "vue";
import { debounce } from "lodash";

const listMenu = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "User",
    id: "user",
  },
  {
    name: "Group",
    id: "group",
  },
  {
    name: "Unread",
    id: "unread",
  },
  {
    name: "Read",
    id: "read",
  },
];

const state = reactive({
  isDropdownOpen: false,
  inputSearch: "",
});

const props = defineProps({
  chatId: Number,
  handleSetChatId: Function,
  chatList: Array,
});

const emit = defineEmits(["on-search"]);

const dropdown = ref(null);

const debounceInputSearch = debounce(() => {
  emit("on-search", state.inputSearch);
}, 500);

const onOpenMenuFilter = () => {
  state.isDropdownOpen = !state.isDropdownOpen;
};

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    state.isDropdownOpen = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.chat-list-app {
  max-height: 85%;
  overflow: scroll;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

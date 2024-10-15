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
      />
      <button type="button" class="absolute end-3 bottom-3">
        <img src="/images/msg/filter.svg" alt="note" class="h-[20px]" />
      </button>
    </div>

    <div class="flex flex-col gap-5 chat-list-app">
      <div v-for="(item, index) in chatList" :key="index">
        <div
          role="button"
          :class="[
            'flex gap-2 items-center p-2 rounded-lg chat-list-item hover:bg-[#4C4C4C] w-full justify-between overflow-x-hidden',
            state.chatId === item.id ? 'bg-[#4C4C4C]' : '',
          ]"
          @click="onSetChatId(item.id)"
        >
          <div class="flex gap-2 items-center max-w-[80%]">
            <img
              :src="item.url"
              alt="note"
              class="h-[60px] w-[60px] rounded-lg"
            />
            <div class="text-left">
              <p class="font-bold">{{ item.name }}</p>
              <p
                class="text-sm whitespace-nowrap text-ellipsis overflow-x-hidden w-[80%]"
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
import { reactive } from "vue";

const chatList = [
  {
    id: 1,
    url: "/images/avatar/A1.jpg",
    name: "James",
    lastMsg: "Lorem Ipsum is simply dummy text ",
    date: " 2 hours",
    unread: false,
    isReading: false,
  },
  {
    id: 2,
    url: "/images/avatar/A2.avif",
    name: "Richard",
    lastMsg: "Lorem Ipsum is simply dummy text ",
    date: " 2 hours",
    unread: false,
    isReading: false,
  },
  {
    id: 3,
    url: "/images/avatar/A3.avif",
    name: "Charles",
    lastMsg: "Lorem Ipsum is simply dummy text ",
    date: " 2 hours",
    unread: true,
    isReading: false,
  },
  {
    id: 4,
    url: "/images/avatar/A4.avif",
    name: "Elizabeth",
    lastMsg: "Lorem Ipsum is simply dummy text ",
    date: " 2 hours",
    unread: false,
    isReading: false,
  },
  {
    id: 5,
    url: "/images/avatar/A5.jpeg",
    name: "Karen",
    lastMsg: "Lorem Ipsum is simply dummy text ",
    date: " 2 hours",
    unread: false,
    isReading: true,
  },
];

const state = reactive({
  chatId: 5,
});

const onSetChatId = (newChat) => {
  state.chatId = newChat;
};
</script>

<style scoped>
.chat-list-app {
  max-height: 85%;
  overflow: scroll;
}
</style>

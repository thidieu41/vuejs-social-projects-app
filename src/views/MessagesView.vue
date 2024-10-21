<template>
  <div class="mess-app">
    <ChatList
      :chatId="state.chatId"
      :handleSetChatId="onSelectedChat"
      :chatList="state.chatList"
      @on-search="onSearchChatList"
    />
    <MessList :chatSelected="state.chatSelected" />
  </div>
</template>

<script setup>
import MessList from "@/components/Messages/MessageList.vue";
import ChatList from "@/components/Messages/ChatList.vue";
import { reactive } from "vue";

const chatList = [
  {
    id: 1,
    url: "/images/avatar/A1.jpg",
    name: "James",
    lastMsg:
      "Every moment lower and lower, but fortunately, her clothes filled up like a balloon and saved her from falling like a parachute.",
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
    lastMsg:
      "Every moment lower and lower, but fortunately, her clothes filled up like a balloon and saved her from falling like a parachute.",
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
  chatSelected: {},
  chatList: chatList,
});

state.chatSelected = state.chatList[state.chatId - 1];

const onSelectedChat = (newChatId) => {
  state.chatId = newChatId;
  state.chatSelected = state.chatList[state.chatId - 1];
  state.chatList[newChatId - 1].unread = false;
};

const onSearchChatList = (search) => {
  if (!search) {
    state.chatList = chatList;
  }

  state.chatList = state.chatList.filter((item) =>
    item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
};
</script>

<style scoped>
.mess-app {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 20px;
}

@media (max-width: 425px) {
  .mess-app {
    grid-template-columns: auto;
  }
}
</style>

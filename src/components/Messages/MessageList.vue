<template>
  <div
    class="bg-[#282828] rounded-lg flex flex-col gap-4 h-[740px] border border-gray-700"
  >
    <div
      class="flex justify-between items-center bg-[#212121] p-4 rounded-tr-lg rounded-tl-lg border-b border-gray-700"
    >
      <div class="flex gap-3 items-center">
        <img
          src="/images/avatar/A5.jpeg"
          alt="note"
          class="h-[50px] w-[50px] rounded-lg"
        />
        <div class="text-left">
          <p class="font-bold text-[#FFFD02]">Karen</p>
          <p class="text-xs">Active 1 min ago</p>
        </div>
      </div>
      <div class="flex gap-10">
        <div v-for="(item, index) in msgActions" :key="index">
          <button>
            <img
              :src="item.url"
              alt="note"
              class="h-[25px] w-[25px] rounded-lg"
            />
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-5 chat-list-app">
      <div v-for="(item, index) in messList" :key="index">
        <div
          :class="[
            'p-3 mx-2 rounded-lg max-w-[70%] ',
            item.sender === 'you'
              ? 'text-right float-end bg-gray-200 text-black'
              : 'text-white text-left bg-gray-700',
          ]"
        >
          {{ item.content }}
        </div>
      </div>
    </div>
    <div class="flex items-center gap-5 px-5">
      <div v-for="(action, index) in inputAction" :key="index">
        <button>
          <img
            :src="action.url"
            alt="note"
            class="h-[25px] w-[25px] rounded-lg"
          />
        </button>
      </div>
      <input placeholder="Type your message" class="w-full" />
      <button>
        <img
          src="/images/msg/send.svg"
          alt="note"
          class="h-[30px] w-[30px] rounded-lg"
        />
      </button>
    </div>
  </div>
</template>

<script>
const msgActions = [
  {
    url: "/images/msg/phone.svg",
  },
  {
    url: "/images/msg/video.svg",
  },
  {
    url: "/images/msg/notes.svg",
  },
];

const inputAction = [
  {
    url: "/images/msg/emojis.svg",
  },
  {
    url: "/images/msg/attach.svg",
  },
];

const messList = [
  {
    content: "Hi there! How are you today?",
    sender: "you",
    date: "18:00",
  },
  {
    content: "Hello! I’m doing well, thank you. How can I assist you today?",
    sender: "user",
    date: "18:05",
  },
  {
    content:
      " I have a question about your product. Can you tell me more about its features?",
    sender: "you",
    date: "18:7",
  },
  {
    content:
      "Of course! Our product offers [brief description of features]. If you need more details or have any specific questions, just let me know!",
    sender: "user",
    date: "18:11",
  },
  {
    content: "That sounds great! How do I get started?",
    sender: "you",
    date: "18:20",
  },
  {
    content:
      "To get started, you can [provide instructions or a link]. If you encounter any issues or need help with anything else, feel free to ask!",
    sender: "user",
    date: "18:21",
  },
  {
    content: "Thanks for the help!",
    sender: "you",
    date: "18:23",
  },
  {
    content: "You’re welcome! Have a great day!",
    sender: "user",
    date: "18:25",
  },
];

export default {
  data() {
    return {
      msgActions,
      messList,
      inputAction,
    };
  },
};
</script>

<style scoped>
.chat-list-app {
  max-height: 75%;
  overflow: scroll;
}
</style>

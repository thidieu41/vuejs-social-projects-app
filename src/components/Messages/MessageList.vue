<template>
  <div
    class="bg-[#282828] rounded-lg flex flex-col gap-4 h-[740px] border border-gray-700"
  >
    <div
      class="flex justify-between items-center bg-[#212121] p-4 rounded-tr-lg rounded-tl-lg border-b border-gray-700"
    >
      <div class="flex gap-3 items-center">
        <img
          :src="chatSelected.url"
          alt="note"
          class="h-[50px] w-[50px] rounded-lg"
        />
        <div class="text-left">
          <p class="font-bold text-[#FFFD02]">{{ chatSelected.name }}</p>
          <p class="text-xs">Active 1 min ago</p>
        </div>
      </div>
      <div class="flex gap-10 items-center">
        <button>
          <img
            src="/images/msg/phone.svg"
            alt="note"
            class="h-[25px] w-[25px] rounded-lg"
          />
        </button>
        <button>
          <img
            src="/images/msg/video.svg"
            alt="note"
            class="h-[25px] w-[25px] rounded-lg"
          />
        </button>
        <div class="related" ref="dropdownmenu">
          <button @click="onShowMenuChat">
            <img
              src="/images/msg/notes.svg"
              alt="note"
              class="h-[20px] w-[20px] rounded-lg mt-2"
            />
          </button>
          <transition name="fade">
            <div
              v-if="state.isShowMenu"
              class="absolute right-7 mt-3 z-10 w-36 rounded-md shadow-lg bg-[#282828] ring-1 ring-gray-500 flex flex-col p-4 gap-3"
            >
              <button class="text-left hover:text-[#FFFD02]">
                Report User
              </button>
              <button class="text-left hover:text-[#FFFD02]">Block User</button>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-5 chat-list-app" ref="scrollContainer">
      <div v-for="(item, index) in state.messList" :key="index">
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
      <div class="related flex" ref="dropdownemojis">
        <transition name="fade">
          <div
            class="absolute w-[300px] flex flex-wrap bottom-20 mb-5 rounded-md shadow-lg bg-[#282828] ring-1 ring-gray-500 p-2 m-auto"
            v-if="state.isShowEmoji"
          >
            <button
              v-for="(emoji, index) in popularEmojis"
              :key="index"
              class="text-center ml-2 hover:bg-gray-500 px-2 text-[20px] pt-1 rounded-lg"
            >
              {{ emoji }}
            </button>
          </div>
        </transition>
        <button @click="onShowEmojis">
          <img
            src="/images/msg/emojis.svg"
            alt="note"
            class="h-[22px] w-[22px] rounded-lg"
          />
        </button>
      </div>

      <div class="flex">
        <label for="inputFile" class="cursor-pointer">
          <img
            src="/images/msg/attach.svg"
            alt="note"
            class="h-[25px] w-[25px] rounded-lg"
          />
        </label>
        <input
          class="hidden"
          id="inputFile"
          type="file"
          @change="onUploadImageFile"
        />
      </div>

      <input
        placeholder="Type your message"
        class="w-full"
        v-model="state.inputMess"
        @keyup.enter="onSendMessage"
      />
      <button @click="onSendMessage">
        <img
          src="/images/msg/send.svg"
          alt="note"
          class="h-[30px] w-[30px] rounded-lg"
        />
      </button>
    </div>
  </div>

  <!-- On Preview Image Modal -->
  <div
    class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-10"
    v-if="state.isShowPreviewImage"
    @click="onClosePreviewModal"
  >
    <div
      @click.stop
      class="bg-gray-700 rounded-lg p-6 shadow-lg max-w-lg w-full flex flex-col gap-4"
    >
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold text-[#FFFD02]">Preview File Image</h2>
        <button @click="onClosePreviewModal">
          <img src="images/close.svg" alt="close" class="h-[30px]" />
        </button>
      </div>

      <!-- Modal content -->
      <div class="max-h-[400px] overflow-scroll">
        <img
          :src="state.previewImageUrl"
          class="h-[300px] w-full object-cover"
        />
        <button
          class="w-[40%] text-[#FFFD02] border-[#FFFD02] border float-right mt-2 p-2 rounded-lg"
        >
          Send File
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  reactive,
  onMounted,
  nextTick,
  ref,
  defineProps,
  onUnmounted,
} from "vue";

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
const popularEmojis = [
  "😂",
  "❤️",
  "😍",
  "🤣",
  "😊",
  "🙌",
  "💔",
  "😎",
  "🎉",
  "👍",
  "😢",
  "🔥",
  "😘",
  "💯",
  "🥰",
  "😡",
  "👀",
  "😭",
  "🤔",
  "🙏",
  "😜",
  "✨",
  "👏",
  "🤩",
  "😋",
  "😏",
  "😴",
  "🤷‍♀️",
  "😅",
  "😆",
  "🤗",
  "😇",
  "😐",
  "🤪",
  "👋",
  "🎶",
  "😬",
  "🤤",
  "💪",
  "💃",
  "😒",
  "👑",
  "😤",
  "🤞",
  "💥",
  "💀",
  "🖤",
  "😕",
  "🎂",
  "🤝",
];

const state = reactive({
  inputMess: "",
  messList: messList,
  isShowMenu: false,
  isShowEmoji: false,
  isShowPreviewImage: false,
  previewImageUrl: "",
});

const props = defineProps({
  chatSelected: Object,
});

const dropdownmenu = ref(null);
const dropdownemojis = ref(null);

const scrollContainer = ref(null);

const onUploadImageFile = (event) => {
  const file = event.target.files[0];
  if (file) {
    state.previewImageUrl = URL.createObjectURL(file);
    state.isShowPreviewImage = true;
  }
};

const scrollToBottom = () => {
  const container = scrollContainer.value;
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
};

const onShowMenuChat = () => {
  state.isShowMenu = !state.isShowMenu;
};

const onShowEmojis = () => {
  state.isShowEmoji = !state.isShowEmoji;
};
const onClosePreviewModal = () => {
  state.isShowPreviewImage = false;
  state.previewImageUrl = "";
};

const handleClickOutside = (event) => {
  if (dropdownmenu.value && !dropdownmenu.value.contains(event.target)) {
    state.isShowMenu = false;
  }
  if (dropdownemojis.value && !dropdownemojis.value.contains(event.target)) {
    state.isShowEmoji = false;
  }
};

const onSendMessage = () => {
  if (!state.inputMess) return;
  const item = {
    content: state.inputMess,
    sender: "you",
    date: "18:25",
  };
  state.inputMess = "";
  state.messList.push(item);

  nextTick(() => {
    scrollToBottom();
  });
};

onMounted(() => {
  nextTick(() => {
    scrollToBottom();
  });
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.chat-list-app {
  max-height: 75%;
  overflow: scroll;
}

.fade-enter-active,
.fade-leave-acitve {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

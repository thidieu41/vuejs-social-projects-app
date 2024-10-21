<template>
  <div
    class="bg-[#282828] p-5 rounded-lg overflow-x-hidden w-full border border-gray-700"
  >
    <!-- Tab Navigation -->
    <div class="text-left text-white font-bold">Notitficaiton</div>
    <div class="flex justify-between p-4 notification-actions">
      <div class="flex gap-5">
        <button
          :class="[
            'focus:outline-none font-bold whitespace-nowrap',
            state.currentTab === 1
              ? 'border-b-2 border-[#FFFD02] text-[#FFFD02]'
              : 'text-white',
          ]"
          @click="state.currentTab = 1"
        >
          To day's
        </button>
        <button
          :class="[
            'focus:outline-none font-bold whitespace-nowrap',
            state.currentTab === 2
              ? 'border-b-2 border-[#FFFD02] text-[#FFFD02]'
              : 'text-white',
          ]"
          @click="state.currentTab = 2"
        >
          Previous
        </button>
      </div>
      <div class="flex gap-8 justify-end">
        <button
          @click="onMarkasRead"
          class="font-bold text-blue-400 flex items-center gap-1 whitespace-nowrap"
        >
          <img src="/images/double_check.svg" class="h-[20px]" />
          Mark as read
        </button>
        <button
          class="font-bold text-red-500 whitespace-nowrap"
          @click="onClearAllNotification"
        >
          Clear all
        </button>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="lg:p-4 overflow-scroll tab-content-app">
      <div v-if="state.currentTab === 1" class="flex flex-col gap-3">
        <div v-if="state.listNotifications.length">
          <div
            v-for="(item, index) in state.listNotifications.concat(
              state.listNotifications
            )"
            :key="index"
          >
            <div
              role="button"
              :class="[
                ' gap-5 lg:py-2 lg:px-4 rounded-md w-full flex items-center justify-between gap-5 mt-1 hover:bg-[#4C4C4C]',
              ]"
              @click="handleSetCommentModal"
              @keypress.enter="handleSetCommentModal"
            >
              <img
                :src="item.user.avatar"
                class="h-[50px] rounded-lg"
                alt="user-avatar"
              />
              <div class="text-left flex-1 w-full overflow-x-hidden">
                <p class="project-content-style">
                  <span class="font-bold mr-1">{{ item.user.name }} </span
                  >{{ item.title }}
                </p>
                <p class="text-sm text-gray-300 project-content-style">
                  {{ item.content }}
                </p>
                <p class="text-gray-400 text-sm">{{ item.date }}</p>
              </div>
              <img
                src="/images/dot.svg"
                class="h-[10px] rounded-lg"
                alt="post"
                v-if="item.unread"
              />
            </div>
          </div>
        </div>

        <p v-if="state.listNotifications.length === 0">
          There is no notification
        </p>
      </div>
      <div v-if="state.currentTab === 2">
        <p>That's is notitfication for previes.</p>
      </div>
    </div>

    <PostViewDetailsComment
      :isOpenCommentModal="state.isOpenCommentModal"
      :handleSetCommentModal="handleSetCommentModal"
    />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import PostViewDetailsComment from "../PostDetails/PostViewDetails.vue";

const listNotifications = [
  {
    user: {
      name: "Jonh Mathe",
      avatar: "/images/avatar/A2.avif",
    },
    title: "shared the post",
    date: "1 hours",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVk04GbATmI6jgL6u8xBL_w-G3Jl02ts1oA&s",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    unread: true,
  },
  {
    user: {
      name: "Jonh Mathe",
      avatar: "/images/avatar/A1.jpg",
    },
    title: "shared the post",
    date: "1 hours",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVk04GbATmI6jgL6u8xBL_w-G3Jl02ts1oA&s",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    unread: false,
  },
  {
    user: {
      name: "Jonh Mathe",
      avatar: "/images/avatar/A5.jpeg",
    },
    title: "shared the post",
    date: "1 hours",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVk04GbATmI6jgL6u8xBL_w-G3Jl02ts1oA&s",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    unread: false,
  },
  {
    user: {
      name: "Jonh Mathe",
      avatar: "/images/avatar/A4.avif",
    },
    title: "shared the post",
    date: "1 hours",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVk04GbATmI6jgL6u8xBL_w-G3Jl02ts1oA&s",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    unread: true,
  },
];

const state = reactive({
  isOpenCommentModal: false,
  currentTab: 1,
  listNotifications: listNotifications,
});

const handleSetCommentModal = () => {
  state.isOpenCommentModal = !state.isOpenCommentModal;
};

const onMarkasRead = () => {
  state.listNotifications = state.listNotifications.map((item) => {
    return {
      ...item,
      unread: false,
    };
  });
};

const onClearAllNotification = () => {
  state.listNotifications = [];
};
</script>

<style scoped>
.project-content-style {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tab-content-app {
  height: 75vh;
}
@media (max-width: 425px) {
  .notification-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>

<template>
  <div class="bg-[#282828] rounded-lg border border-gray-700">
    <div class="p-5">
      <div class="flex justify-between">
        <div class="flex item-center gap-5">
          <img
            src="/images/avatar/A1.jpg"
            alt="avatar"
            class="w-[50px] rounded-lg"
          />
          <div class="text-left">
            <p class="text-md text-[#FFFD02] font-bold">John</p>
            <p class="text-xs text-grey mt-1">3 days</p>
          </div>
        </div>

        <PostMenu :classDots="``" />
      </div>

      <div class="mt-5 flex flex-col gap-5">
        <p class="text-left text-sm leading-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVk04GbATmI6jgL6u8xBL_w-G3Jl02ts1oA&s"
          class="w-full max-h-[250px] object-cover rounded-lg"
        />
      </div>
      <div
        class="mt-5 flex justify-between items-center md:flex-row flex-col gap-2"
      >
        <div class="flex gap-2 items-center">
          <div v-for="(action, index) in actions" :key="index">
            <button
              type="button"
              @click="action.function"
              class="rounded-lg p-2 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 p-2.5 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <img :src="action.url" :alt="action.alt" class="h-[15px]" />
            </button>
          </div>
        </div>
        <div class="flex gap-2 items-center">
          <div v-for="(item, index) in infor" :key="index">
            <a class="text-sm">
              <span class="text-[#FFFD02]">{{ item.number }}</span>
              {{ item.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PostViewDetailsComment
    :isOpenCommentModal="state.isOpenCommentModal"
    :handleSetCommentModal="handleSetCommentModal"
  />
  <SharePostModal
    :isOpenShareModal="state.isOpenShareModal"
    :hadleSetShareModal="hadleSetShareModal"
  />
</template>

<script setup>
import { reactive } from "vue";
import PostViewDetailsComment from "../PostDetails/PostViewDetails.vue";
import PostMenu from "../MenuPost/MenuPostVue.vue";
import SharePostModal from "../SharePost/SharePostView.vue";

const infor = [
  {
    number: "20",
    title: "Likes",
  },
  {
    number: "17",
    title: "Comments",
  },
  {
    number: "3",
    title: "Shared",
  },
];

const state = reactive({
  isOpenCommentModal: false,
  isOpenShareModal: false,
});

const handleSetCommentModal = () => {
  state.isOpenCommentModal = !state.isOpenCommentModal;
};

const hadleSetShareModal = () => {
  state.isOpenShareModal = !state.isOpenShareModal;
};

const handleLike = () => {
  console.log("like");
};

const actions = [
  { url: "/images/post_action/heart.svg", alt: "heart", function: handleLike },
  {
    url: "/images/post_action/comment.svg",
    alt: "comment",
    function: handleSetCommentModal,
  },
  {
    url: "/images/post_action/share.svg",
    alt: "share",
    function: hadleSetShareModal,
  },
];
</script>

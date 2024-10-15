<template>
  <div
    v-if="isOpenCommentModal"
    @click="handleSetCommentModal"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
  >
    <!-- Modal Content -->
    <div
      @click.stop
      class="bg-gray-700 rounded-lg p-6 shadow-lg max-w-lg w-full flex flex-col gap-4 overflow-scroll max-h-[90%]"
    >
      <!-- avatar -->
      <div class="flex justify-between">
        <div class="flex item-center gap-5">
          <img
            src="/images/avatar/A1.jpg"
            alt="avatar"
            class="w-[50px] rounded-full"
          />
          <div class="text-left">
            <p class="text-md text-[#FFFD02] font-bold">John</p>
            <p class="text-xs text-gray-300 mt-1">3 days</p>
          </div>
        </div>
        <div class="flex justify-end items-center gap-2">
          <button class="post-btn">
            <img src="/images/post_action/heart.svg" />
          </button>
          <button class="post-btn">
            <img src="/images/post_action/share.svg" />
          </button>
          <PostMenu :classDots="`post-btn`" />
        </div>
      </div>

      <!-- content -->
      <div class="mt-1 flex flex-col gap-5">
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

      <div class="flex justify-end gap-4">
        <p class="text-sm">
          <span class="text-[#FFFD02]">20</span>
          Likes
        </p>
        <p class="text-sm">
          <span class="text-[#FFFD02]">20</span>
          Shared
        </p>
        <p class="text-sm">
          <span class="text-[#FFFD02]">20</span>
          Comments
        </p>
      </div>

      <div>
        <textarea
          class="w-full resize-none"
          rows="3"
          placeholder="Write your comment"
        />
        <div class="mt-2 flex justify-end">
          <button class="p-2 rounded min-w-[200px] border">Comment</button>
        </div>
      </div>

      <div class="flex gap-4" v-for="(item, index) in listComment" :key="index">
        <img
          src="/images/avatar/A1.jpg"
          alt="avatar"
          class="w-[45px] max-h-[45px] rounded-lg"
        />

        <div class="flex flex-col flex-start">
          <p class="text-md text-[#FFFD02] font-bold text-left">John</p>
          <p class="text-sm text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div class="flex gap-2 mt-2">
            <p class="text-sm">3 days</p>
            <button class="text-sm text-blue-300">Thích</button>
            <button class="text-sm text-yellow-400">Phản hồi</button>
            <button class="text-sm text-red-400">Xoá</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import PostMenu from "../MenuPost/MenuPostVue.vue";
const props = defineProps({
  isOpenCommentModal: Boolean,
  handleSetCommentModal: Function,
});
const listComment = new Array(5).fill(0);
</script>

<style scoped>
.post-btn {
  border-radius: 6px;
  border: 1px solid gray;
  padding: 5px;
}
.post-btn img {
  height: 20px;
}
</style>

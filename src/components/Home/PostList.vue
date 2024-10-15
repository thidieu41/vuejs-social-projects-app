<template>
  <div>
    <CreatePost />
    <div class="overflow-scroll max-h-[630px] mt-5 flex flex-col gap-5">
      <div v-for="(post, index) in postList" :key="index">
        <PostDetails />
      </div>
    </div>
  </div>
</template>

<script setup>
import CreatePost from "../PostComp/CreatePost.vue";
import PostDetails from "../PostComp/PostDetail.vue";
const postList = new Array(5).fill(0);
</script>

<style scoped></style>

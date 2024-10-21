<template>
  <div>
    <CreatePost @on-add-new-post="onAddNewPost" />
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

const onAddNewPost = (data) => {
  console.log(data, "parent data in emit");
};
</script>

<style scoped></style>

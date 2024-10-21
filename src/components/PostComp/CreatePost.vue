<template>
  <div
    class="flex bg-[#282828] p-5 gap-4 rounded-lg items-center border border-gray-700"
  >
    <img
      src="/images/avatar/A1.jpg"
      alt="avatar"
      class="w-[50px] rounded-full"
    />
    <button
      class="w-full rounded-lg border bg-[#1a1a1a] p-2 text-left"
      @click="state.isOpen = true"
    >
      Tell your friends about your thoughts..
    </button>
  </div>

  <!-- modal create -->
  <div
    v-if="state.isOpen"
    @click="closeModal"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-10"
  >
    <!-- Modal Content -->
    <div
      @click.stop
      class="bg-gray-700 rounded-lg p-6 shadow-lg max-w-lg w-full flex flex-col gap-4"
    >
      <div class="flex justify-between items-center">
        <h2 class="text-left text-xl font-bold text-[#FFFD02]">NEW POST</h2>
        <button @click="closeModal">
          <img src="images/close.svg" alt="close" class="h-[30px]" />
        </button>
      </div>
      <textarea
        placeholder="What on your mind"
        rows="7"
        class="w-full"
        v-model="state.textInput"
      />

      <img
        :src="state.urlImage"
        v-if="state.urlImage"
        class="max-h-[200px] w-full object-cover rounded-lg"
      />

      <div class="flex justify-between items-center border rounded p-2">
        <p>Add to your post</p>
        <div class="flex gap-2">
          <div>
            <label for="fileInput" class="cursor-pointer">
              <img src="images/post_action/add_img.svg" class="h-[20px]" />
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              class="hidden"
              @change="onUploadFile"
            />
          </div>

          <!-- <button v-for="(item, index) in actionPost" :key="index">
            <img :src="item.url" class="h-[20px]" />
          </button> -->
        </div>
      </div>

      <button
        class="p-2 w-full rounded font-bold submit-create-post-btn"
        @click="onCreatePost"
      >
        CREATE
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from "vue";

const actionPost = [
  {
    url: "images/post_action/person.svg",
  },
  {
    url: "images/post_action/emojis.svg",
  },
  {
    url: "images/post_action/location.svg",
  },
  {
    url: "images/post_action/hor_3_dots.svg",
  },
];

const state = reactive({
  isOpen: false,
  urlImage: "",
  textInput: "",
});

const emit = defineEmits(["on-add-new-post"]);

function closeModal() {
  state.isOpen = false;
}

const onUploadFile = (e) => {
  const file = e.target.files[0];
  if (file) {
    state.urlImage = URL.createObjectURL(file);
  }
};

const onCreatePost = () => {
  if (!state.textInput) return;
  const data = {
    textInput: state.textInput,
    urlImage: state.urlImage,
  };
  emit("on-add-new-post", data);
};
</script>

<style scoped>
.submit-create-post-btn {
  background: #fffd02;
  color: black;
}
</style>

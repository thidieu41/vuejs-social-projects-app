<template>
  <div
    v-if="isOpenShareModal"
    @click="hadleSetShareModal"
    class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
  >
    <!-- Modal Content -->
    <div
      @click.stop
      class="bg-gray-700 rounded-lg p-6 shadow-lg max-w-lg w-full flex flex-col gap-4"
    >
      <div class="flex justify-between items-center">
        <h2 class="text-left text-xl font-bold text-[#FFFD02]">SHARE POST</h2>
        <button @click="hadleSetShareModal">
          <img src="images/close.svg" alt="close" class="h-[30px]" />
        </button>
      </div>
      <textarea placeholder="What on your mind..." rows="2" class="w-full" />
      <div class="flex justify-end">
        <button
          class="w-[40%] border rounded p-2 hover:border-[#FFFD02] hover:text-[#FFFD02]"
        >
          Share Now
        </button>
      </div>

      <div>
        <p class="text-left font-bold text-[#FFFD02] mb-1">
          Share to chat with Friends
        </p>
        <div class="flex gap-2 overflow-scroll">
          <div
            v-for="(item, key) in new Array(20).fill(0)"
            :key="key"
            class="w-[70px]"
          >
            <img
              src="/images/avatar/A1.jpg"
              alt="avatar"
              class="w-[50px] rounded-full"
            />
            <p
              class="whitespace-nowrap text-ellipsis overflow-hidden text-sm mt-1"
            >
              Trubel Theresa
            </p>
          </div>
        </div>
      </div>

      <button class="p-2 w-full rounded font-bold submit-create-post-btn">
        SEND
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  isOpenShareModal: Boolean,
  hadleSetShareModal: Function,
});
</script>

<style scoped>
.submit-create-post-btn {
  background: #fffd02;
  color: black;
}

textarea {
  resize: none;
}
</style>

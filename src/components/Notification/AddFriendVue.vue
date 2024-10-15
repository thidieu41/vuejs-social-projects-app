<template>
  <button @click="handleSetModal">
    <img src="/images/add_user.svg" class="h-[20px] w-[20px]" />
  </button>

  <div
    class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-10"
    v-if="state.isOpen"
    @click="handleSetModal"
  >
    <div
      @click.stop
      class="bg-gray-700 rounded-lg p-6 shadow-lg max-w-lg w-full flex flex-col gap-4"
    >
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold text-[#FFFD02]">ADD NEW FRIENDS</h2>
        <button @click="handleSetModal">
          <img src="images/close.svg" alt="close" class="h-[30px]" />
        </button>
      </div>

      <!-- Modal content -->
      <div class="max-h-[400px] overflow-scroll">
        <div class="flex input-search-box">
          <input class="w-full" placeholder="Search name or email..." />
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <div class="mt-4">
          <p class="text-left font-bold text-[#FFFD02]">Recommended account</p>
          <div v-for="(item, index) in listFriend" :key="index" class="mt-1">
            <div
              class="flex items-center justify-between hover:bg-[#4C4C4C] p-2 rounded-lg"
              role="button"
            >
              <div class="flex items-center gap-2">
                <div class="relative">
                  <img
                    :src="item.url"
                    alt="avatar"
                    :class="['h-[45px] w-[45px] rounded-full']"
                  />
                </div>
                <p>{{ item.name }}</p>
              </div>

              <button>
                <img src="/images/add_user.svg" class="h-[20px] w-[20px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineProps } from "vue";

const state = reactive({
  isOpen: false,
});

const props = defineProps({
  listFriend: Array,
});

const handleSetModal = () => {
  state.isOpen = !state.isOpen;
};
</script>

<style scoped>
.input-search-box {
  display: flex;
  align-items: center;
  border: 1px solid gray;
  border-radius: 6px;
  padding: 0px 10px;
}

.input-search-box input {
  background: none;
}
</style>

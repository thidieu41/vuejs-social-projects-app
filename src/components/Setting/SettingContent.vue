<template>
  <div
    class="bg-[#282828] rounded-lg p-5 flex-col flex gap-3 border border-gray-700"
  >
    <div class="flex gap-5">
      <button
        v-for="(item, index) in settings"
        :key="index"
        :class="[
          'font-bold whitespace-nowrap md:text-md text-sm',
          item.id === state.isOpen
            ? 'border-b-2 border-[#FFFD02] text-[#FFFD02]'
            : '',
        ]"
        @click="state.isOpen = item.id"
      >
        {{ item.name }}
      </button>
    </div>
    <div class="setting-content-app">
      <!-- Overview Content -->
      <div v-if="state.isOpen === 1" class="md:mt-5">
        <Overview />
      </div>
      <!-- Account setting -->
      <div v-if="state.isOpen === 2" class="md:mt-5">
        <AccountSetting />
      </div>
      <!-- Sign in method -->
      <div v-if="state.isOpen === 3"></div>
    </div>
  </div>
</template>

<script setup>
import Overview from "./OverviewContent.vue";
import AccountSetting from "./AccountSetting.vue";
import { reactive } from "vue";

const settings = [
  {
    name: "Basic Information",
    id: 1,
  },
  {
    name: "Account setitng",
    id: 2,
  },
  {
    name: "Sign in method",
    id: 3,
  },
];

const state = reactive({
  isOpen: 1,
});
</script>

<style scoped>
.setting-content-app {
  min-height: 86vh;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
}
</style>

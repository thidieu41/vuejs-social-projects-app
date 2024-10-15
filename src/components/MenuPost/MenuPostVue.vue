<template>
  <div class="relative inline-block text-left" ref="dropdown">
    <!-- Button to toggle the dropdown -->
    <div>
      <button type="button" @click="toggleDropdown" :class="classDots">
        <img src="/images/3dots.svg" class="h-[30px]" />
      </button>
    </div>

    <!-- Dropdown menu -->
    <transition name="fade">
      <div
        v-if="isDropdownOpen"
        class="absolute right-0 z-10 w-56 rounded-md shadow-lg bg-[#282828] ring-1 ring-gray-500"
      >
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            href="#"
            @click.prevent="selectOption('Profile')"
            class="block px-4 py-2 text-md text-white hover:bg-gray-700 hover:text-[#fffd02]"
            role="menuitem"
            v-for="(item, key) in listMenu"
            :key="key"
            >{{ item.name }}</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onUnmounted, onMounted, defineProps } from "vue";

// State management
const isDropdownOpen = ref(false);
const dropdown = ref(null);

const props = defineProps({
  classDots: String,
});

const listMenu = [
  {
    name: "Care",
    id: "care",
  },
  {
    name: "No care",
    id: "no-care",
  },
  {
    name: "Save post",
    id: "save-post",
  },
  {
    name: "Hide post",
    id: "hide-post",
  },
  {
    name: "Report image",
    id: "report-image",
  },
  {
    name: "Turn on notificaiton post",
    id: "notification",
  },
  {
    name: "Copy link",
    id: "copy-link",
  },
  {
    name: "Block page",
    id: "block-page",
  },
];

// Toggle the dropdown visibility
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Handle option selection
const selectOption = (option) => {
  console.log(`Selected: ${option}`);
  isDropdownOpen.value = false; // Close the dropdown after selection
};

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

// Set up event listener for clicks
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

// Clean up the event listener
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
/* Simple fade-in / fade-out transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.post-btn {
  border-radius: 6px;
  border: 1px solid gray;
  padding: 5px;
}
.post-btn img {
  height: 20px;
}
</style>

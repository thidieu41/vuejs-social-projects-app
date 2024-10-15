<template>
  <div class="mess-app">
    <ChatList />
    <MessList />
  </div>
</template>

<script setup>
import MessList from "@/components/Messages/MessageList.vue";
import ChatList from "@/components/Messages/ChatList.vue";
</script>

<style scoped>
.mess-app {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 20px;
}

@media (max-width: 425px) {
  .mess-app {
    grid-template-columns: auto;
  }
}
</style>

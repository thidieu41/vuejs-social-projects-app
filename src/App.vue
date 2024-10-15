<template>
  <div>
    <SideBar>
      <router-view />
    </SideBar>
  </div>
</template>

<script setup>
import SideBar from "./Layout/SidebarIndex.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>

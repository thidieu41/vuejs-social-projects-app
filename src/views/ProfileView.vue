<template>
  <div class="app-content">
    <ProfileContent />
    <ProjectList />
  </div>
</template>

<script setup>
import ProfileContent from "@/components/Profile/ProfileContent.vue";
import ProjectList from "@/components/Profile/ProjectList.vue";
</script>
<style scoped>
.profile-app {
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 20px;
  height: 90vh;
}
</style>

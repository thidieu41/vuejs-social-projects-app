<template>
  <div class="bg-[#282828] rounded-lg p-4 border border-gray-700">
    <div class="flex items-center justify-between">
      <p class="font-bold">Project List</p>
      <CreateProjectModal />
    </div>
    <div class="project-list-content mt-3">
      <div v-for="(item, index) in projectList" :key="index">
        <div class="text-left">
          <!-- Title -->
          <div
            class="flex justify-between bg-[#4C4C4C] p-2 rounded-lg"
            role="button"
            @click="onSetProjectOpen(item.id)"
          >
            <div class="flex items-center gap-3">
              <img
                :src="item.url"
                alt="project"
                class="h-[50px] w-[50px] rounded-lg"
              />
              <div>
                <p class="font-bold">{{ item.name }}</p>
                <p class="text-xs text-gray-400">{{ item.time }}</p>
              </div>
            </div>
            <button @click="onSetProjectOpen(item.id)">
              <img
                src="/images/expand_up.svg"
                class="h-[20px]"
                v-if="item.id === state.isProjectOpen"
              />
              <img
                src="/images/expand_down.svg"
                class="h-[20px]"
                v-if="item.id !== state.isProjectOpen"
              />
            </button>
          </div>

          <!-- content -->
          <div
            v-if="item.id === state.isProjectOpen"
            class="overflow-hidden transition-all duration-700 ease-in-out transform"
            :class="
              item.id === state.isProjectOpen
                ? 'opacity-100 translate-y-0'
                : ' opacity-0 -translate-y-4'
            "
          >
            <div class="flex gap-2 flex-wrap mt-4">
              <button
                class="border p-2 rounded-[5px] text-xs text-gray-500 hover:text-[#FFFD02]"
                v-for="(tech, indexTech) in item.tech"
                :key="indexTech"
              >
                {{ tech }}
              </button>
            </div>
            <div class="mt-2">
              <p class="font-bold text-sm">Main Features :</p>
              <ul class="flex flex-col gap-2 ml-5 my-2">
                <li
                  v-for="(feature, indexFeature) in item.main_features"
                  :key="indexFeature"
                  class="flex items-center text-white text-sm gap-2"
                >
                  <img src="/images/dot.svg" class="h-[5px]" />
                  {{ feature }}
                </li>
              </ul>
            </div>
            <p class="text-sm mt-2">
              Source code : <a href="/" class="text-blue-400">Link</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import CreateProjectModal from "./CreateProject.vue";

const projectList = [
  {
    id: 1,
    url: "/images/projects/shopping.svg",
    name: "Shopping  app",
    tech: ["HTML", "CSS", "Angular", "MUI angular", "Nodejs", "Reactjs"],
    time: "Apr 2023 - Jul 2023",
    main_features: [
      "Checkout shopping cart",
      "Add products to cart",
      "Apply method payment",
      "Login/Logout/Register",
    ],
    source: "",
  },
  {
    id: 2,
    url: "/images/projects/shopping.svg",
    name: "Shopping  app",
    tech: ["HTML", "CSS", "Angular", "MUI angular", "Nodejs"],
    time: "Apr 2023 - Jul 2023",
    main_features: [
      "Checkout shopping cart",
      "Add products to cart",
      "Apply method payment",
      "Login/Logout/Register",
    ],
    source: "",
  },
  {
    id: 3,
    url: "/images/projects/shopping.svg",
    name: "Shopping  app",
    tech: ["HTML", "CSS", "Angular", "MUI angular", "Nodejs"],
    time: "Apr 2023 - Jul 2023",
    main_features: [
      "Checkout shopping cart",
      "Add products to cart",
      "Apply method payment",
      "Login/Logout/Register",
    ],
    source: "",
  },
  {
    id: 4,
    url: "/images/projects/shopping.svg",
    name: "Shopping  app",
    tech: ["HTML", "CSS", "Angular", "MUI angular", "Nodejs"],
    time: "Apr 2023 - Jul 2023",
    main_features: [
      "Checkout shopping cart",
      "Add products to cart",
      "Apply method payment",
      "Login/Logout/Register",
    ],
    source: "",
  },
];

const state = reactive({
  isProjectOpen: 1,
});

const onSetProjectOpen = (projectId) => {
  state.isProjectOpen = projectId;
};
</script>

<style scoped>
.project-list-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 80vh;
  overflow: scroll;
}
</style>

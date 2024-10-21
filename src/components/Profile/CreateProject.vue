<template>
  <button @click="handleSetModal">
    <img src="/images/add_plus.svg" class="h-[20px] w-[20px]" />
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
        <h2 class="text-xl font-bold text-[#FFFD02]">NEW PROJECT</h2>
        <button @click="handleSetModal">
          <img src="images/close.svg" alt="close" class="h-[30px]" />
        </button>
      </div>

      <!-- Modal content -->
      <div>
        <form @submit.prevent="submitForm">
          <div class="flex flex-col gap-3 h-[560px] overflow-scroll">
            <div class="project-input-box">
              <label for="name">Project Name : </label>
              <input
                v-model="state.form.name"
                placeholder="Write project name..."
              />
            </div>
            <!-- <div class="flex justify-between"> -->
            <div class="project-input-box">
              <label for="name">Start Date : </label>
              <Datepicker
                v-model="state.form.start_date"
                :enable-time-picker="false"
              />
            </div>
            <div class="project-input-box">
              <label for="name">End Date : </label>
              <Datepicker
                v-model="state.form.end_date"
                :enable-time-picker="false"
              />
            </div>
            <!-- </div> -->
            <div class="project-input-box">
              <label for="name">Link : </label>
              <input v-model="state.form.name" placeholder="Write link..." />
            </div>

            <div class="project-input-box">
              <label>Select langues :</label>
              <div class="ml-2">
                <div class="flex items-center gap-2">
                  <button
                    @click="onSelectTabLanguges(1)"
                    class="text-sm"
                    :class="
                      state.isSelectTab === 1
                        ? ' selected-tab'
                        : 'text-gray-400'
                    "
                  >
                    Front End
                  </button>
                  <button
                    @click="onSelectTabLanguges(2)"
                    class="text-sm"
                    :class="
                      state.isSelectTab === 2
                        ? ' selected-tab'
                        : 'text-gray-400'
                    "
                  >
                    Back End
                  </button>
                  <button
                    @click="onSelectTabLanguges(3)"
                    class="text-sm"
                    :class="
                      state.isSelectTab === 3
                        ? ' selected-tab'
                        : 'text-gray-400'
                    "
                  >
                    Framwork more
                  </button>
                </div>
                <div class="flex flex-wrap gap-3 items-center mt-2">
                  <div
                    v-for="(item, index) in languages[state.isSelectTab]"
                    :key="index"
                    class="flex items-center gap-1"
                  >
                    <input
                      type="checkbox"
                      class="h-[30px]"
                      :id="item.name"
                      :name="item.name"
                    />
                    <label :for="item.name">{{ item.name }}</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-input-box">
              <label>Main Features : </label>
              <div class="flex justify-between items-center gap-2">
                <input
                  placeholder="Write main feature..."
                  v-model="state.mainFeatureInput"
                />
                <button
                  type="button"
                  class="border py-2 px-5 rounded-md"
                  @click="onAddMainFeature()"
                >
                  Add
                </button>
              </div>
              <ul
                v-for="(feature, index) in state.mainFeatures"
                :key="index"
                class="list-disc list-inside"
              >
                <li class="text-white text-xm text-left">{{ feature }}</li>
              </ul>
            </div>
          </div>
          <div class="mt-5">
            <button
              type="submit"
              class="border-[#FFFD02] w-full p-2 border rounded-md text-[#FFFD02]"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Datepicker from "@vuepic/vue-datepicker";

const languages = {
  1: [
    {
      name: "Reactjs",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "Javascript",
    },
    {
      name: "Vuejs",
    },
    {
      name: "Angular",
    },
  ],
  2: [
    {
      name: "Java",
    },
    {
      name: "Nodejs",
    },
    {
      name: "Python",
    },
  ],
  3: [
    {
      name: "Tailwindcss",
    },
    {
      name: "MUI",
    },
  ],
};

const state = reactive({
  isOpen: false,
  isSelectTab: 1,
  mainFeatures: [],
  mainFeatureInput: "",
  form: {
    name: "",
    start_date: "",
    end_date: "",
    languages: [],
  },
});

const handleSetModal = () => {
  state.isOpen = !state.isOpen;
};

const submitForm = () => {
  console.log(state.form);
};

const onSelectTabLanguges = (tabNumber) => {
  state.isSelectTab = tabNumber;
};

const onAddMainFeature = () => {
  if (!state.mainFeatureInput) {
    return;
  }
  console.log();
  state.mainFeatures.unshift(state.mainFeatureInput);
  state.mainFeatureInput = "";
};
</script>

<style scoped>
.project-input-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.project-input-box label {
  color: white;
  text-align: left;
  font-size: 15px;
}
/* datepicker */
::v-deep .dp__input {
  background-color: #1a1a1a;
  font-family: "Poppins", sans-serif; /* Custom font */
  width: 100%; /* Full width */
  padding: 5px 5px 5px 40px;
  border: none;
  color: white;
  height: 45px;
  border-radius: 6px;
}

.selected-tab {
  border-bottom: 1px solid #fffd02;
  color: #fffd02;
}
</style>

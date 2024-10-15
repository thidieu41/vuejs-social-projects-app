<template>
  <form @submit.prevent="submitForm">
    <div class="grid md:grid-cols-2 md:gap-5 grid-cols-1 mt-2">
      <div>
        <!-- avatar -->
        <div class="flex flex-col items-center p-6">
          <!-- Avatar preview -->
          <div class="relative">
            <img
              :src="avatarSrc"
              alt="User Avatar"
              class="w-32 h-32 rounded-full object-cover border-4 border-[#FFFD02]"
            />
            <!-- File input -->
            <label
              for="file-input"
              class="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </label>
            <input
              id="file-input"
              type="file"
              @change="onFileChange"
              accept="image/*"
              class="hidden"
            />
          </div>
        </div>

        <!-- left content -->
        <div class="mb-4 flex flex-col flex-start">
          <label for="name" class="block text-white text-left">Name:</label>
          <input
            type="text"
            id="name"
            v-model="state.formData.name"
            required
            class="mt-2"
            placeholder="Please enter your name"
          />
        </div>
        <div class="mb-4 flex flex-col flex-start">
          <label for="name" class="block text-white text-left">Email:</label>
          <input
            type="email"
            id="email"
            v-model="state.formData.email"
            class="mt-2"
            placeholder="Please enter your email"
            disabled
          />
        </div>
        <div class="mb-4 flex flex-col flex-start">
          <label for="name" class="block text-white text-left">Phone:</label>
          <input
            type="email"
            id="phone"
            v-model="state.formData.phone"
            required
            class="mt-2"
            placeholder="Please enter your phone"
          />
        </div>
      </div>
      <!-- right content -->
      <div>
        <div class="mb-4 flex flex-col flex-start">
          <label for="name" class="block text-white text-left">Job:</label>
          <input
            type="text"
            id="job"
            v-model="state.formData.job"
            required
            class="mt-2"
            placeholder="Please enter your job"
          />
        </div>
        <div class="mb-4 flex flex-col flex-start">
          <label for="name" class="block text-white text-left">Country:</label>
          <input
            type="text"
            id="country"
            v-model="state.formData.country"
            required
            class="mt-2"
            placeholder="Please enter your country"
          />
        </div>
        <div class="mb-4 flex flex-col flex-start">
          <label for="name" class="block text-white text-left">Status:</label>
          <textarea
            type="email"
            id="statu"
            v-model="state.formData.status"
            required
            class="mt-2"
            placeholder="Please enter your status"
            rows="8"
          />
        </div>
      </div>
    </div>
    <button
      class="border py-2 px-5 rounded-lg md:w-[20%] md:min-w-[150px] w-full float-right border-[#FFFD02] text-[#FFFD02]"
    >
      Submit
    </button>
  </form>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  formData: {
    name: "",
    email: "",
    status: "",
    phone: "",
    job: "",
    country: "",
  },
  avatarSrc: "https://via.placeholder.com/150", // Default avatar image
});

const onFileChange = (event) => {
  const file = event.target.files[0]; // Get the selected file
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader(); // Create a FileReader to read the file
    reader.onload = (e) => {
      state.avatarSrc = e.target.result; // Set the image URL to update the avatar
    };
    reader.readAsDataURL(file); // Convert the file to a data URL
  }
};

const submitForm = () => {
  // Handle form submission logic here (e.g., API call)
  console.log("Form data:", state.formData);
  // Reset form after submission
  state.formData = { name: "", email: "", message: "" };
};
</script>

<style scoped>
/* Optional styling for a better UI experience */
</style>

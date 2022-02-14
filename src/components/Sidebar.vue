<template>
  <div class="">
    <div class="flex p-4 mt-5 items-center">
      <img
        width="70"
        class="rounded-3xl"
        src="https://i.ibb.co/m69WY8S/download.png"
        alt=""
      />
      <h1 class="px-4 text-2xl font-bold">Digital Oma</h1>
    </div>
    <div>
      <ul class="font-bold text-lg">
        <router-link
          to="/"
          class="
            mt-10
            mb-3
            px-6
            flex
            items-center
            hover:bg-white
            rounded-full
            p-1.5
            hover:text-black
          "
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              /></svg
          ></span>
          Dashboard
        </router-link>

        <router-link
          to="/feedback"
          class="
            my-5
            mx-6
            flex
            items-center
            hover:bg-white
            rounded-full
            p-1.5
            hover:text-black
          "
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clip-rule="evenodd"
              /></svg
          ></span>
          Feedback
        </router-link>
        <router-link
          to="impact"
          class="
            my-5
            mx-6
            flex
            items-center
            hover:bg-white
            rounded-full
            p-1.5
            hover:text-black
          "
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clip-rule="evenodd"
              /></svg
          ></span>
          Impact
        </router-link>
        <router-link
          to="companies"
          class="
            my-5
            mx-6
            flex
            items-center
            hover:bg-white
            rounded-full
            p-1.5
            hover:text-black
          "
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
              <path
                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
              /></svg
          ></span>
          Companies
        </router-link>

        <router-link
          to="release"
          class="
            my-5
            mx-6
            flex
            items-center
            hover:bg-white
            rounded-full
            p-1.5
            hover:text-black
          "
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
              />
              <path
                fill-rule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clip-rule="evenodd"
              /></svg
          ></span>
          Release Notes
        </router-link>
        <div
          class="my-5 mx-6 hover:bg-white rounded-full p-1.5 hover:text-black"
        >
          <div class="flex items-center cursor-pointer" @click="open = !open">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                /></svg
            ></span>
            Contributors
            <svg
              v-if="open"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-if="!open"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div v-if="open" class="absolute bg-white rounded-lg mt-4">
            <router-link
              to="/admin"
              class="block text-gray-500 px-6 ml-4 text-end my-1"
              >Admin</router-link
            >
            <router-link
              to="user"
              class="text-gray-500 px-6 ml-4 text-end block my-1"
              >User</router-link
            >
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style>
</style>
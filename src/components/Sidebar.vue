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
      <ul class="font-semibold text-base">
        <router-link
          active-class="actives"
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
          active-class="active"
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
          active-class="active"
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
          active-class="active"
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
          active-class="active"
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
          <div
            class="flex items-center cursor-pointer"
            @click="open = !open"
            active-class="active"
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
          <div v-if="open" class="absolute bg-white rounded-lg mt-4 w-48">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-500 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                />
              </svg>
              <router-link
                active-class="sub-active"
                to="/admin"
                class="block text-gray-500 px-1 text-end my-1"
              >
                Admin</router-link
              >
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-500 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                /></svg
              ><router-link
                active-class="sub-active"
                to="/user"
                class="block text-gray-500 px-2 text-end my-1"
              >
                User</router-link
              >
            </div>
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
.active {
  background-color: white;
  color: #000;
}
.sub-active {
  background-color: wheat;
  width: 130px;
  border: 2px solid black;
  border-radius: 5px;
}
.actives {
  background-color: #7e93c7;
}
</style>
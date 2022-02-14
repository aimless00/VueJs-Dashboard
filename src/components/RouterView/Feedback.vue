<template>
  <div id="main-content" class="min-h-screen">
    <div class="bg-white shadow px-2 py-4">
      <h1 class="text-3xl px-4 font-bold">Feedback</h1>
    </div>
    <div class="bg-white shadow px-2 py-2 m-10 rounded-lg">
      <div class="flex items-center justify-between">
        <div class="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-10 rounded-lg bg-green-500 text-white p-1"
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
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-12 border rounded-lg mx-1 p-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-12 border rounded-lg mx-1 p-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>
        <input
          placeholder="Search Feednack entries by title"
          class="m-4 bg-white-500 border-4 w-8/12 h-10 rounded-md p-2"
          type="text"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-12 border rounded-lg mx-1 p-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-12 border rounded-lg mx-1 p-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </div>
    </div>
    <div id="feedback-view" class="bg-white m-10 rounded-lg">
      <div
        class="h-16 bg-neutral-300 shadow rounded-lg flex justify-between p-3"
      >
        <div class="flex">
          <h1 class="text-xl font-semibold mx-2">Rating</h1>
          <h1 class="text-xl font-semibold mx-20">Feedback</h1>
        </div>
        <div>
          <div class="flex">
            <h1 class="text-xl font-semibold mx-20">Rating</h1>
            <h1 class="text-xl font-semibold mx-2">Feedback</h1>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <img
          class="mx-auto h-64"
          src="https://i.ibb.co/ftmpCJk/feedback.png"
          alt=""
        />
      </div>
      <h1 class="text-2xl font-bold text-center">
        Upgrade Your Feedback Management!
      </h1>
      <p class="text-center">
        Create a feedback , share it through a new page and let your users
        validate your ideas.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feedback",
};
</script>
<style>
#feedback-view {
  height: 550px;
}
</style>

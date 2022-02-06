<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      <div class="text-xl bg-white h-96 p-3 rounded-lg">
        <div class="flex justify-between p-4">
          <h1 class="font-semibold">Latest feedback:</h1>
          <div class="flex justify-between border-2">
            <h1 class="px-4 text-lg">Enter project</h1>
            <div>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  /></svg
              ></span>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <img
          class="mx-auto mt-10"
          src="https://i.ibb.co/ftmpCJk/feedback.png"
          alt=""
        />
        <div class="text-center mt-4">
          <h1 class="text-2xl font-semibold text-gray-800">No feedback</h1>
          <p class="text-base text-gray-500">
            As soon as you create and manage feedback, this will fill up!
          </p>
        </div>
      </div>
      <div class="text-xl bg-white h-96 p-3 rounded-lg">
        <div class="flex justify-between p-4">
          <h1 class="font-semibold">Latest feedback:</h1>
          <div class="flex justify-between border-2">
            <h1 class="px-4 text-lg">Enter project</h1>
            <div>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  /></svg
              ></span>
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <img
          class="mx-auto mt-10"
          src="https://i.ibb.co/xsgsjq0/activity.png"
          alt=""
        />
        <div class="text-center mt-4">
          <h1 class="text-2xl font-semibold text-gray-800">No activity yet!</h1>
          <p class="text-base text-gray-500">
            As soon as you create and manage activity, this will fill up!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondContent",
};
</script>

<style>
</style>
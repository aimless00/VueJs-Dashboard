<template>
  <div id="main-content" class="min-h-screen">
    <div class="bg-white shadow px-2 py-4">
      <h1 class="text-3xl px-4 font-bold">Impact</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div id="impact-view" class="bg-white m-10 h-96 rounded-lg col-span-2">
        <div class="mt-20">
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
      <div id="impact-view" class="bg-white m-10 h-96 rounded-lg">
        <h1 class="text-xl p-10">Status List</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Impact",
};
</script>

<style>
#impact-view {
  height: 600px;
}
</style>
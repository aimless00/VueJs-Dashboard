<template>
  <div>
    <div class="flex-1">
      <div class="bg-white shadow px-2 py-4">
        <div class="flex items-center">
          <button class="md:hidden" @click="showSidebar = !showSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <Header />
        </div>
      </div>
      <div id="main-content" class="p-8 min-h-screen">
        <MainContent />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import MainContent from "./MainContent.vue";
export default {
  name: "Dashboard",
  components: {
    Header,
    MainContent,
  },
};
</script>

<style>
#main-content {
  background-color: #e4eaf0;
}
</style>
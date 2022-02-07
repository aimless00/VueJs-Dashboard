<template>
  <div class="relative flex min-h-screen">
    <div
      id="sidebar"
      class="
        absolute
        md:w-72
        rounded
        inset-y-0
        left-0
        md:relative md:-translate-x-0
        transform
        transition
        duration-200
        ease-in-out
      "
      :class="{
        'relative -translate-x-0 ': showSidebar,
        '-translate-x-full': !showSidebar,
      }"
    >
      <Sidebar />
    </div>
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
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import MainContent from "./MainContent.vue";
import { ref } from "vue";
export default {
  name: "Home",
  props: {
    msg: String,
  },
  components: {
    Sidebar,
    Header,
    MainContent,
  },
  setup() {
    const showSidebar = ref(false);
    return {
      showSidebar,
    };
  },
};
</script>
<style scoped>
#sidebar {
  background-color: #2d3b5e;
  color: white;
}
#main-content {
  background-color: #e4eaf0;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

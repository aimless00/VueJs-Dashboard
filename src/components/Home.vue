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
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
// import Dashboard from "./Dashboard.vue";
export default {
  name: "Home",
  props: {
    msg: String,
  },
  components: {
    Sidebar,
    // Dashboard,
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

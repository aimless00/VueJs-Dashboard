<template>
  <div class="relative flex min-h-screen">
    <div id="sidebar" class="w-14 md:w-72 rounded">
      <Sidebar />
    </div>
    <div class="flex-1">
      <div class="bg-white shadow px-2 py-4">
        <Header />
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

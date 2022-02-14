<template>
  <div>
    <Home />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  name: "MainRoute",
  components: {
    Home,
  },
};
</script>

<style>
</style>
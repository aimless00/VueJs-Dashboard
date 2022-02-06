<template>
  <div><FirstContent /></div>
  <div class="mt-8"><SecondContent /></div>
</template>

<script>
import FirstContent from "./FirstContent.vue";
import SecondContent from "./SecondContent.vue";
export default {
  name: "MainContent",
  components: {
    FirstContent,
    SecondContent,
  },
};
</script>

<style>
</style>
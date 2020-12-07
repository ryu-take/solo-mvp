<template>
  <div id="app">
    it's app
    <navbar />
    <money-card />
  </div>
</template>

<script>
import Navbar from "./components/Nabvar.vue";
import Cards from "./components/Cards.vue";
export default {
  name: "App",
  components: {
    navbar: Navbar,
    "money-card": Cards,
  },
};
</script>

<style></style>

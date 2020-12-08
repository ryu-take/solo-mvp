<template>
  <div id="app">
    <div class="title">Waste Checker</div>
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

<style>
.title {
  color: gold;
}
</style>

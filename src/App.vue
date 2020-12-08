<template>
  <div id="app">
    <div class="title">Money Tracker</div>
    <navbar :cards="cards" v-on:newCard="getNewCards" />
    <money-card :cards="cards" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Cards from "./components/Cards.vue";
import axios from "axios";
export default {
  name: "App",
  data: () => ({
    cards: [],
  }),
  components: {
    navbar: Navbar,
    "money-card": Cards,
  },
  methods: {
    getNewCards: function(cards) {
      console.log(cards);
      this.cards = cards;
    },
  },
  created: function() {
    const data = axios.get("/api/items").then((card) => {
      this.cards = card.data;
    });
  },
};
</script>

<style>
.title {
  color: gold;
}
</style>

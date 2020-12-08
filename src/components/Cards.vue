<template>
  <div class="Card">
    <template v-for="(card, index) in cards">
      <item :key="card.id" :card="card" :index="index" />
    </template>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "Cards",
  props: ["cards"],
  components: {
    item: Item,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

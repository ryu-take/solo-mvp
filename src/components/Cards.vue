<template>
  <div class="Cards">
    Card
    <item />
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "Cards",
  components: {
    item: Item,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

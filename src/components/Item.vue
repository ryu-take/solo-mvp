<template>
  <div class="item">
    <div class="item-index">{{ index + 1 }}</div>
    <div class="item-month">{{ card.item_month }}月</div>
    <div v-if="card.item_day" class="item-day">{{ card.item_day }}日</div>
    <div class="item-type">{{ card.tag_name }}</div>
    <div class="item-name">
      {{ card.item_name }}
    </div>
    <div class="price">{{ card.item_price }}円</div>
    <div class=""></div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["card", "index"],
};
</script>

<style>
.item-month {
  display: inline;
}
.item-day {
  display: inline;
}
.item {
  padding: 0.5em 1em;
  margin: 2em 0;
  color: #00bcd4;
  background: #e4fcff; /*背景色*/
  border-top: solid 6px #1dc1d6;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32); /*影*/
}
/* .box10 p {
  margin: 0;
  padding: 0;
} */
</style>

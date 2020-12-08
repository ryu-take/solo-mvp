<template>
  <div class="item">
    <div class="item-index">{{ index + 1 }}</div>
    <div class="item-month">{{ card.item_month }}月</div>
    <div class="item-day">{{ card.item_day }}日</div>
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
  width: 170px;
  height: 140px;
  border: 5px solid aquamarine;
}
</style>

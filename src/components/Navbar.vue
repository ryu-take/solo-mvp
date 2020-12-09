import axios
<template>
  <div class="Navbar">
    <div class="filter">
      買った日付でフィルターする
      <div class="month">
        月:
        <select name="月" class="selectmonth">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </div>
      <!-- <div class="Days"></div> -->
      <button type="button" class="filterbutton" @click="select">
        Go
      </button>
    </div>

    <form @submit.prevent class="add">
      買ったものを追加する
      <label class="addtextlabel">
        買ったものの名前(20文字以内):<input
          type="text"
          class="addtext"
          required
        />
      </label>
      <label class="addpricelabel">
        買ったものの値段(10桁まで):<input
          type="text"
          class="addprice"
          required
        />
      </label>
      <label class="addmonthdiv">
        買った月:<select class="addmonth">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </label>
      <label class="addtypediv">
        ジャンルは？:<select class="addtype">
          <option>生活費</option>
          <option>仕事</option>
          <option>趣味</option>
        </select>
      </label>
      <input type="submit" class="addbutton" @click="add" value="add" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  props: ["cards"],
  // data: () => {
  // items: [];
  // },
  methods: {
    select: function() {
      const month = document.querySelector(".selectmonth").value;
      let newCard;
      axios.get(`/api/items?month=${month}`).then((cards) => {
        newCard = cards.data;
        this.$emit("newCard", newCard);
      });
    },
    add: function() {
      const item_name = document.querySelector(".addtext").value;
      const item_price = document.querySelector(".addprice").value;
      const item_month = document.querySelector(".addmonth").value;
      const item_type = document.querySelector(".addtype").value;
      let tag_id = 0;
      if (item_type === "生活費") {
        tag_id = 1;
      } else if (item_type === "仕事") {
        tag_id = 2;
      } else if (item_type === "趣味") {
        tag_id = 3;
      }
      console.log(item_type, tag_id);
      console.log(item_name, item_price, item_month, "added!");
      axios
        .post("/api/items", {
          item_name,
          item_price,
          item_month,
          tag_id,
        })
        .then((data) => {
          console.log("data", data.data);
        });
      return false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.filter {
  display: inline;
}
.filterbutton {
  display: inline;
  margin-left: 2px;
}
.Navbar {
  padding: 10px;
  margin: 10px;
  border: 2px solid yellowgreen;
}
</style>

<template>
  <div class="Navbar">
    Navbar
    <form action="">
      月:
      <select name="月" class="months">
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
        <option>06</option>
        <option>07</option>
        <option>08</option>
        <option>09</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
      </select>
      <button type="button" @click="test">Go</button>
      <div class="Days"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  methods: {
    test: function() {
      console.log(document.querySelector(".months").value);
      // let month = document.querySelector(".months").value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>

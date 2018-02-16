<template>
  <div class="grid">
    <div class="item header">Header</div>
    <div class="item left">Left</div>
    <div class="item main">Main</div>
    <div class="item right">Right</div>
    <div class="item footer">Footer</div>
  </div>
</template>

<style scoped>
.grid {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "header header header header"
    "left main main right"
    "footer footer footer footer";
  color: white;
}
.item {
  padding: 20px;
}
.header {
  grid-area: header;
  background-color: red;
}
.left {
  grid-area: left;
  background-color: pink;
}
.main {
  grid-area: main;
  background-color: blue;
}
.right {
  grid-area: right;
  background-color: orange;
}
.footer {
  grid-area: footer;
  background-color: green;
}
</style>

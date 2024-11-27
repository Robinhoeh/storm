<script setup>
import StormNav from './components/NavBar/StormNav.vue';


</script>

<template>
  <div class="wrapper">
    <StormNav class="nav-bar" />

    <h2>Products</h2>
    <span>10 of 10</span>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Quantitit</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>stuff</td>
          <td>stuff 2</td>
          <td>stuff 3</td>
          <td>stuff 4</td>
          <td>stuff 5</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: $layout-padding-mobile;
  width: auto;
  // min-width: $layout-min-width;

  .nav-bar {
    margin: 40px 0 22px 0;
    max-width: 650px;
  }




}
</style>

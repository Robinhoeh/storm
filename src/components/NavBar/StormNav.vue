<script setup>
import IconStormLogo from '../icons/IconStormLogo.vue';
import IconStormHamburger from '../icons/IconHamburger.vue';



</script>

<template>
  <nav class="storm-nav">
    <div class="mobile-nav">
      <IconStormLogo />
      <IconStormHamburger />
    </div>
    <div>
      <form class="search-form" @submit.prevent="">
        <input class="search-input" type='text' placeholder="Search">
        <button class="button">Search</button>
      </form>
    </div>

  </nav>
</template>

<style lang="scss" scoped>
.storm-nav {
  display: flex;
  flex-direction: column;
  width: 100%;

  .mobile-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
}

.search-form {
  display: flex;
  justify-content: space-between;
  width: 100%;

  .search-input {
    padding: 10px 0 10px 16px;
    min-width: 100px;
    width: 300px;
    border-radius: 8px;
    border: none;
    border: 1px solid $input-border;
    margin-right: 25px;
  }

  input::placeholder {
    color: $input-placeholder;
  }

  .button {
    border: none;
    border-radius: 4px;
    color: $tertiary-text-color;
    font-size: $font-size-md;
    font-weight: $font-weight-medium;
    line-height: $line-height-sm;
    font-family: $secondary-font;
    background-color: $color-primary;
    padding: 12px 24px;
    width: 97px;
  }
}
</style>

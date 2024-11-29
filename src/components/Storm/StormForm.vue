<script setup>
import IconSearch from '../icons/IconSearch.vue';
import StormButton from '../Storm/StormButton.vue';
const searchModel = defineModel()
</script>

<template>
  <form class="form" @submit.prevent="">
    <IconSearch class="search-icon" />
    <input v-model="searchModel" class="search-input" type='text' placeholder="Search">
    <StormButton content="Search" role="primary"></StormButton>
  </form>
</template>

<style lang="scss" scoped>
.form {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: $primary-font;

  .search-icon {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-58%);
  }

  .search-input {
    padding: 12px 0 12px 48px;
    width: 100%;
    min-width: 100px;
    max-width: 220px;
    border-radius: 0 8px 8px 0;
    border: none;
    border: 1px solid $input-border;
    margin-right: 25px;

    @media screen and (min-width: 992px) {
      margin-right: 16px;
      min-width: 155px;
      max-width: 210px;
    }
  }

  input::placeholder {
    color: $input-placeholder;
    margin-left: 20px;
  }
}
</style>

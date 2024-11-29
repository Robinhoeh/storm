<script setup>
import IconSearch from '../icons/IconSearch.vue';
import IconClose from '../icons/IconClose.vue';
import StormButton from '../Storm/StormButton.vue';

const emit = defineEmits(['submit', 'clear-data'])
const searchModel = defineModel()
const handleSubmit = () => {
  emit('submit', searchModel.value)
}
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <IconSearch v-if="!searchModel" class="search-icon" />
    <IconClose v-else class="icon-close" @click="searchModel = '', $emit('clear-data')" />
    <input v-model="searchModel" class="search-input" type='text' placeholder="Search">
    <StormButton content="Search" role='primary' @handle-click="handleSubmit" />
  </form>
</template>

<style lang="scss" scoped>
.form {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: $primary-font;

  .search-icon,
  .icon-close {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-58%);
  }

  .icon-close {
    cursor: pointer;
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

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const emit = defineEmits(['hanldeClick']);
const props = defineProps({
  content: String,
  role: String
});

const colorMap = {
  'primary': props.role === 'primary',
  'secondary': props.role === 'secondary',
  'tertiary': props.role === 'tertiary',
  'utility': props.role === 'utility',
}

const backgroundStyles = computed(() => {
  return Object.keys(colorMap).find(key => colorMap[key]);
});
</script>

<template>
  <button class="button" :class="backgroundStyles" @click="emit('handleClick')">
    {{ props.content }}
  </button>
</template>

<style lang="scss" scoped>
.button {
  border: none;
  border-radius: 4px;
  color: $tertiary-text-color;
  font-size: $font-size-md;
  font-weight: $font-weight-medium;
  line-height: $line-height-sm;
  font-family: $secondary-font;
  padding: 12px 24px;
  width: 97px;
  transition: 0.3s;
  cursor: pointer;

  @media screen and (min-width: 1025px) {
    margin-right: 30px;
  }
}

.primary {
  background-color: $color-primary;

  &:hover {
    background-color: $color-secondary;
  }
}

.utility {
  background-color: $utility-color;
  color: $utility-text;

  &:hover {
    background-color: darken($utility-color, 8%);
    color: $color-primary;
  }
}
</style>

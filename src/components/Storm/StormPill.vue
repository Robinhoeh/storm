<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  title: String,
  status: Number,
})

const dynamicBackground = computed(() => {
  if (props.status < 50) {
    return 'light-red';
  } else if (props.status < 100) {
    return 'light-orange';
  } else if (props.status < 150) {
    return 'light-green';
  } else {
    return 'light-purple';
  }
});
</script>

<template>
  <div class="pill" :class="dynamicBackground">
    {{ props.title }}
  </div>
</template>

<style lang="scss" scoped>
.pill {
  padding: 4px 24px;
  border-radius: 12px;
  line-height: $line-height-sm;
  font-size: $font-size-sm;
  max-width: 83px;
  padding: 4px;

  &.light-red {
    background-color: $light-red;
    color: $pill-red-text;
  }

  &.light-orange {
    background-color: $light-orange;
    color: $pill-orange-text;
  }

  &.light-green {
    background-color: $light-green;
    color: $pill-green-text
  }

  &.light-purple {
    background-color: $light-purple;
    color: $pill-purple-text;
  }
}
</style>

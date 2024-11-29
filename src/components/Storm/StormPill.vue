<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  title: String,
  status: Number,
})

const statusMap = {
  'light-red': (status) => status < 50,
  'light-orange': (status) => status < 100,
  'light-green': (status) => status < 150,
  'light-purple': (status) => status >= 150,
};

const dynamicStyles = computed(() => {
  return Object.keys(statusMap).find(key => statusMap[key](props.status));
});
</script>

<template>
  <div class="pill" :class="[dynamicStyles]">
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

<script setup>
import IconClose from '../icons/IconClose.vue';
defineProps({
  displayMobileMenu: Boolean
})
</script>

<template>
  <div class="storm-hidden-menu" :class="['storm-hidden-nav', { visible: displayMobileMenu }]">
    <slot name="hamburger-content" />
    <IconClose class="close-icon" @click="$emit('close-menu')" />
  </div>
</template>

<style lang="scss" scoped>
.storm-hidden-menu {
  background: $utility-color;
  width: 100%;
  height: 100vh;
  top: -105px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  z-index: 9999;

  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
}

.storm-hidden-nav {
  display: none;

  &.visible {
    display: flex;
  }
}
</style>

<script setup>
import { defineEmits, defineModel, ref } from 'vue';
import { useWidth } from '@/composables/storm/useWidth';
import IconStormLogo from '../icons/IconStormLogo.vue';
import IconStormHamburger from '../icons/IconHamburger.vue';
import IconGear from '../icons/IconGear.vue';
import IconUser from '../icons/IconUser.vue';
import IconNotification from '../icons/IconNotification.vue';
import StormForm from '../Storm/StormForm.vue';
import StormHiddenNav from './StormHiddenNav.vue';

const emit = defineEmits(['submit', 'close-menu'])
const searchModel = defineModel()

const { windowWidth } = useWidth()

const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav class="storm-nav">
    <div class="nav-menu">
      <IconStormLogo />
      <IconStormHamburger class="hamburger" @click="toggleMobileMenu" />
    </div>
    <div class="nav-actions">
      <StormForm v-model="searchModel" @submit="emit('submit')" @clear-data="emit('clear-data')" />
      <div class="nav-actions-icons">
        <IconGear class="nav-icon" />
        <IconNotification class="nav-icon" />
        <IconUser />
      </div>
      <p class="user-name">Adriana Arias</p>
      <StormHiddenNav v-if="windowWidth < 992" @close-menu="closeMobileMenu" :display-mobile-menu="isMobileMenuOpen">
        <template #hamburger-content>
          <div class="mobile-nav-cont">
            <div class="">
              <IconGear class="nav-icon" />
              <IconNotification class="nav-icon" />
              <IconUser />
            </div>
            <p class="user-name">Adriana Arias</p>
          </div>
        </template>
      </StormHiddenNav>
    </div>

  </nav>
</template>

<style lang="scss" scoped>
.storm-nav {
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: $max-window-width;
    margin-bottom: 76px;
  }

  .nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    @media screen and (min-width: 992px) {
      margin-right: 25px;
      margin-bottom: 0;
    }

    .hamburger {
      cursor: pointer;
    }
  }

  .nav-actions {
    margin-bottom: 18px;

    @media screen and (min-width: 992px) {
      margin-bottom: 0;
      margin-right: 16px;
    }
  }

  .nav-actions-icons {
    display: none;

    .nav-icon {
      margin-right: 8px;
      width: 44px;
      height: 44px;
    }
  }

  .user-name {
    display: none;
    color: $color-primary;
    font-size: $font-size-md;
    font-weight: $font-weight-normal;
    line-height: $line-height-sm;
    font-family: $secondary-font;
    margin: 0;
    min-width: 85px;

  }

  .mobile-nav-cont {
    display: flex;
    align-items: center;
    margin-top: 100px;

    .user-name {
      display: flex
    }
  }

  @media screen and (min-width: 992px) {
    .nav-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-actions-icons {
      display: flex;
      align-items: center;
    }

    .user-name {
      display: block;
    }
  }

  @media screen and (min-width: 992px) {
    .hamburger {
      display: none;
    }
  }
}
</style>

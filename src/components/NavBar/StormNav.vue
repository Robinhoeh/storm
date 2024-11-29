<script setup>
import IconStormLogo from '../icons/IconStormLogo.vue';
import IconStormHamburger from '../icons/IconHamburger.vue';
import IconGear from '../icons/IconGear.vue';
import IconUser from '../icons/IconUser.vue';
import IconNotification from '../icons/IconNotification.vue';
import StormForm from '../Storm/StormForm.vue';
const emit = defineEmits(['submit'])

const searchModel = defineModel()
</script>

<template>
  <nav class="storm-nav">
    <div class="nav-menu">
      <IconStormLogo />
      <IconStormHamburger class="hamburger" />
    </div>
    <div class="nav-actions">
      <StormForm v-model="searchModel" @submit="emit('submit')" />
      <div class="nav-actions-icons">
        <IconGear class="nav-icon" />
        <IconNotification class="nav-icon" />
        <IconUser />
      </div>
      <p class="user-name">Adriana Arias</p>
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
    max-width: 1440px;
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
    display: none
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
      color: $color-primary;
      font-size: $font-size-md;
      font-weight: $font-weight-normal;
      line-height: $line-height-sm;
      font-family: $secondary-font;
      margin: 0;
      min-width: 85px;
    }
  }

  @media screen and (min-width: 992px) {
    .hamburger {
      display: none;
    }
  }
}
</style>

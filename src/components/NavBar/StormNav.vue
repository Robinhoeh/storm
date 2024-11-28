<script setup>
import IconStormLogo from '../icons/IconStormLogo.vue';
import IconStormHamburger from '../icons/IconHamburger.vue';
import IconGear from '../icons/IconGear.vue';
import IconUser from '../icons/IconUser.vue';
import IconNotification from '../icons/IconNotification.vue';
import IconSearch from '../icons/IconSearch.vue';
</script>

<template>
  <nav class="storm-nav">
    <div class="nav-menu">
      <IconStormLogo />
      <IconStormHamburger class="hamburger" />
    </div>
    <div class="nav-actions">
      <form class="search-form" @submit.prevent="">
        <!-- <div class="search-container"> -->
        <IconSearch class="search-icon" />
        <input class="search-input" type='text' placeholder="Search">
        <!-- </div> -->
        <button class="button">Search</button>
      </form>
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

  .search-form {
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


    // TODO: fix input sizing
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

      @media screen and (min-width: 1025px) {
        margin-right: 30px;

      }
    }
  }
}
</style>

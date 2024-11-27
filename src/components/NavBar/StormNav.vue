<script setup>
import IconStormLogo from '../icons/IconStormLogo.vue';
import IconStormHamburger from '../icons/IconHamburger.vue';
import IconGear from '../icons/IconGear.vue';
import IconUser from '../icons/IconUser.vue';
import IconNotification from '../icons/IconNotification.vue';
</script>

<template>
  <nav class="storm-nav">
    <div class="nav-menu">
      <IconStormLogo />
      <IconStormHamburger class="hamburger" />
    </div>
    <div class="nav-actions">
      <form class="search-form" @submit.prevent="">
        <input class="search-input" type='text' placeholder="Search">
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
    max-width: 1184px;
  }

  .nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    @media screen and (min-width: 992px) {
      margin-bottom: 0;
      margin-right: 25px;
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
    }
  }

  @media screen and (min-width: 992px) {
    .hamburger {
      display: none;
    }
  }

  .search-form {
    display: flex;
    justify-content: space-between;
    width: auto;


    // TODO: fix input sizing
    .search-input {
      padding: 10px 0 10px 16px;
      min-width: 100px;
      width: 220px;
      border-radius: 8px;
      border: none;
      border: 1px solid $input-border;
      margin-right: 25px;

      @media screen and (min-width: 992px) {
        margin-right: 16px;
        min-width: 155px;
        width: 260px;
      }
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

      @media screen and (min-width: 992px) {
        margin-right: 30px;

      }
    }
  }
}
</style>

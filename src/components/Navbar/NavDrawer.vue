<template>
  <div class="drawer">
    <div class="drawer-nav">
      <ul class="drawer-nav--links">
        <v-divider />
        <router-link to="/">
          <li>Features</li>
        </router-link>
        <v-divider />
        <router-link to="/">
          <li>Pricing</li>
        </router-link>
        <v-divider />

        <router-link to="/">
          <li>Contact</li>
        </router-link>
        <v-divider />

        <router-link to="/">
          <li class="drawer-nav--login">Login</li>
        </router-link>
      </ul>
    </div>
    <div class="drawer-socials">
      <ul class="icons">
        <router-link to="/">
          <v-icon class="fab fa-facebook-square" size="30px"></v-icon>
        </router-link>
        <router-link to="/">
          <v-icon class="fab fa-twitter" size="30px"></v-icon>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavDrawer",
};
</script>

<style lang="scss"></style>

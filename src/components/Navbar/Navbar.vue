<template>
  <div class="nav--container plr-2">
    <nav class="nav--container mobile" v-if="!drawer">
      <inline-svg
        :src="getImageUrl(`logo-bookmark.svg`)"
        alt="Bookmark Logo"
        class="logo"
      ></inline-svg>
      <v-btn dark icon small>
        <v-icon color="black" size="23px" @click="drawer = true"
          >fas fa-bars</v-icon
        >
      </v-btn>
    </nav>
    <nav class="nav--container desktop">
      <inline-svg
        :src="getImageUrl(`logo-bookmark.svg`)"
        alt="Bookmark Logo"
        class="logo"
      ></inline-svg>
      <ul class="nav--links">
        <router-link to="/">
          <li>Features</li>
        </router-link>
        <router-link to="/">
          <li>Pricing</li>
        </router-link>
        <router-link to="/">
          <li>Contact</li>
        </router-link>
        <router-link to="/">
          <li>Login</li>
        </router-link>
      </ul>
    </nav>
    <v-dialog
      content-class="navigation-drawer"
      v-model="drawer"
      transition="dialog-top-transition"
    >
      <header class="navigation-drawer--header plr-2">
        <inline-svg
          :src="getImageUrl(`logo-bookmark.svg`)"
          alt="Bookmark Logo"
          class="logo"
        ></inline-svg>
        <v-btn dark icon small>
          <v-icon size="20px" @click="drawer = false">fas fa-times</v-icon>
        </v-btn>
      </header>
      <NavDrawer />
    </v-dialog>
  </div>
</template>

<script>
import NavDrawer from "./NavDrawer.vue";
import "./_navbar.scss";
export default {
  name: "Navbar",
  components: { NavDrawer },
  data: () => ({
    drawer: false,
  }),
};
</script>

<style lang="scss"></style>

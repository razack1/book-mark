<template>
  <div class="footer-wrapper">
    <section class="app-footer plr-2">
      <div class="app-footer--container">
        <footer class="app-footer--header">
          <inline-svg
            :src="getImageUrl(`logo-bookmark.svg`)"
            alt="Bookmark Logo"
            class="logo"
          ></inline-svg>
        </footer>
        <ul class="app-footer--links">
          <router-link to="/">
            <li>Features</li>
          </router-link>
          <router-link to="/">
            <li>Pricing</li>
          </router-link>
          <router-link to="/">
            <li>Contact</li>
          </router-link>
        </ul>
        <div class="app-footer--socials">
          <ul class="icons">
            <v-icon class="fab fa-facebook-square"></v-icon>
            <v-icon class="fab fa-twitter"></v-icon>
          </ul>
        </div>
      </div>
    </section>
    <p class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">ZaZaGeek</a>.
    </p>
  </div>
</template>

<script>
import "./_footer.scss";
export default {
  name: "Footer",
};
</script>

<style lang="scss"></style>

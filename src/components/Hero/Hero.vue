<template>
  <section class="bookmark">
    <div class="hero">
      <div class="hero--elipse"></div>
      <div class="hero--wrapper">
        <div class="hero--right">
          <img
            src="../../assets/images/illustration-hero.svg"
            alt="Illustration Hero"
            class="hero-img"
          />
        </div>

        <div class="hero--left">
          <h1 class="hero--left--title">A Simple Bookmark Manager</h1>
          <p class="hero--left--paragraph plr-2">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div class="hero--left--btns">
            <button title="Get it on Chrome" class="btn chrome">
              Get it on Chrome
            </button>
            <button title="Get it on FireFox" class="btn firefox">
              Get it on FireFox
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "./_hero.scss";
export default {
  name: "Hero",
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>

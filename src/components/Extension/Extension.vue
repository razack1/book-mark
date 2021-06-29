<template>
  <section class="extention bookmark">
    <div class="extention--wrapper">
      <header class="extention--header">
        <h2 class="extention--title">Download the extension</h2>
        <p class="extention--paragraph plr-2">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </header>
      <div class="extention--cards">
        <UiCard v-for="card in cards" :key="card.browser">
          <div class="app--card--content">
            <img
              :src="getImageUrl(card.image)"
              :alt="`Browser ${card.browser}`"
            />
            <h3>Add to {{ card.browser }}</h3>
            <p>Minimum version {{ card.version }}</p>
          </div>
          <img src="./../../assets/images/bg-dots.svg" alt="dots" />
          <div class="app--card--footer">
            <button title="Add & Install Extension" class="btn chrome">
              Add & Install Extension
            </button>
          </div>
        </UiCard>
      </div>
    </div>
  </section>
</template>

<script>
import UiCard from "../Layouts/UI/Card/UiCard.vue";
import "./_extention.scss";
export default {
  components: { UiCard },
  name: "Extention",

  data() {
    return {
      cards: [
        {
          browser: "Chrome",
          version: "62",
          image: "logo-chrome.svg",
        },
        {
          browser: "FireFox",
          version: "55",
          image: "logo-firefox.svg",
        },
        {
          browser: "Opera",
          version: "46",
          image: "logo-opera.svg",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>

<template>
  <div class="tab-slide">
    <div class="tab-elipse"></div>
    <v-tabs
      :vertical="$vuetify.breakpoint.mobile"
      v-model="tabs"
      color="text_primary"
    >
      <v-tab v-for="title in titles" :key="title">
        {{ title }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabs" :vertical="$vuetify.breakpoint.mobile">
      <v-tab-item v-for="slide in slides" :key="slide.title" class="tabs">
        <div class="tabs--container">
          <div class="tabs--wrapper">
            <div class="tabs--wrapper__header">
              <img
                :src="getImageUrl(slide.image)"
                class="tabs-img"
                alt="features"
              />
            </div>
            <div class="tabs--wrapper__content plr2">
              <h1 class="tabs--wrapper--header">{{ slide.title }}</h1>
              <p>
                {{ slide.text }}
              </p>
              <router-link :to="`${slide.link}`">
                <button title="More Info" class="btn chrome">More Info</button>
              </router-link>
            </div>
          </div>
        </div>
      </v-tab-item>
    </v-tabs-items>
    <div class="elipse"></div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      tabs: null,
      titles: ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"],
      slides: [
        {
          image: "illustration-features-tab-1.svg",
          title: "Bookmark in one click",
          text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
          link: "/",
        },
        {
          image: "illustration-features-tab-2.svg",
          title: "Intelligent search",
          text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
          link: "/",
        },
        {
          image: "illustration-features-tab-3.svg",
          title: "Share your bookmarks",
          text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
          link: "/",
        },
      ],
    };
  },
  methods: {
    widthCheck(vertical) {
      if (this.$vuetify.breakpoint.mobile) {
        return vertical;
      }
    },
  },
};
</script>

<style lang="scss"></style>

<template>
  <v-app class="layout">
    <Layout />
  </v-app>
</template>

<script>
import "./styles/main.scss";

import Layout from "./components/Layouts/Layout.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "App",
  components: { Layout },
  metaInfo: {
    title: "Bookmark | FrontendMentor",
  },

  methods: {
    animate(selector, duration) {
      const sections = gsap.utils.toArray(selector);
      sections.forEach((section) => {
        const anim = gsap.fromTo(
          section,
          { autoAlpha: 0, y: 10 },
          { duration: duration, autoAlpha: 1, y: 0 }
        );

        ScrollTrigger.create({
          markers: false,
          start: "top bottom",
          trigger: section,
          animation: anim,
          toggleActions: "restart reverse restart reverse",
        });
      });
    },
  },

  mounted() {
    // this.animate(".bookmark", 1);
    this.animate(".hero--elipse ", 1.2);
    this.animate(".tab-elipse ", 1.2);
  },
};
</script>

<style lang="scss"></style>

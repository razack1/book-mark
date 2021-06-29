<template>
  <div>
    <Navbar />
    <Hero />
    <Features />
    <Extension />
    <Faq />
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar.vue";
import Hero from "../Hero/Hero.vue";
import Features from "../Features/Features.vue";
import Extension from "../Extension/Extension.vue";
import Faq from "../FAQ/Faq.vue";
import NewsLetter from "../NewsLetter/NewsLetter.vue";
import Footer from "../Footer/Footer.vue";
export default {
  components: { Navbar, Hero, Features, Extension, Faq, NewsLetter, Footer },
};
</script>

<style lang="scss"></style>

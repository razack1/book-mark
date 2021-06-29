<template>
  <section class="features bookmark">
    <div class="container">
      <h1 class="features--title">Features</h1>
      <p class="features--paragraph plr-2">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <Tabs />
    </div>
  </section>
</template>

<script>
import Tabs from "./Tabs.vue";
import "./_features.scss";
export default {
  components: { Tabs },
  name: "Features",
};
</script>

<style></style>

<template>
  <section class="news-letter">
    <div class="news-letter--container">
      <span>35,000+ already joined</span>
      <h3>Stay up-to-date with what we’re doing</h3>
    </div>
    <div class="news-letter--form">
      <Form />
    </div>
  </section>
</template>

<script>
import Form from "./Form.vue";
import "./_newsletter.scss";
export default {
  components: { Form },
  name: "NewsLetter",
};
</script>

<style lang="scss"></style>

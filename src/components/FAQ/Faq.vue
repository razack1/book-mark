<template>
  <section class="bookmark plr-2">
    <div class="faq">
      <h1 class="faq--title">Frequently Asked Questions</h1>
      <p class="faq--paragraph">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
    </div>
    <FaqPanel />
    <div class="faq--form">
      <button title="More Info" class="btn chrome">More Info</button>
    </div>
  </section>
</template>

<script>
import FaqPanel from "./FaqPanel";
import "./_faq.scss";
export default {
  components: { FaqPanel },
  name: "Faq",
};
</script>

<style lang="scss"></style>

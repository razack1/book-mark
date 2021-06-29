<template>
  <div class="app--card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiCard",
  props: {
    elevation: String,
    flex: {
      type: String,
      default: "column",
    },
  },
};
</script>

<style lang="scss">
.app--card {
  border-radius: 1rem;
  width: 100%;
  box-shadow: 0 5px 15px rgba(73, 93, 207, 0.103);

  &:focus::before {
    opacity: 0 !important;
  }
}
</style>

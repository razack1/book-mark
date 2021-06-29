<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    title="Bookmark News Letter"
  >
    <v-text-field
      v-model="email"
      :rules="emailRules"
      placeholder="Enter your email address"
      title="Email"
      background-color="white"
      validate-on-blur
      required
      :append-icon="appendIcon()"
    ></v-text-field>
    <button :disabled="!valid" class="btn submit" @click="validate">
      Contact Us
    </button>
  </v-form>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    valid: true,
    icons: ["fa-exclamation-circle", "fa-check-circle", "fa-envelope"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "Whoops, make sure it's an email",
    ],
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },

    appendIcon() {
      // checks if form valid if so append the correct icon.
      const checkInputCondition = !this.valid ? this.icons[0] : this.icons[1];
      if (!this.$refs.form) return this.icons[2];
      return checkInputCondition;
    },
  },
};
</script>

<style lang="scss">
.btn.submit {
  margin-top: 1rem !important;
  width: 100%;
}
</style>

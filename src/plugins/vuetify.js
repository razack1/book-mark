import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify, {
  iconfont: "fa",
});

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        text_primary: "#242a45",
        blue_app: "#5267df",
        red_app: "#fa5959",
        gray_app: "#9194a2",
        light_gray: "#f7f7f7",
      },
    },
  },
});

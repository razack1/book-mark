import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Plugins
import vuetify from "./plugins/vuetify";
// Mixins
import ImageUrlMixin from "./mixins/ImageUrlMixin";

import VueMeta from "vue-meta";
import InlineSvg from "vue-inline-svg";

// VueMeta Plugin
Vue.use(VueMeta);

Vue.mixin(ImageUrlMixin);
Vue.component("inline-svg", InlineSvg);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

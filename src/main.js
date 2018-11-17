import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo, {
  duration: 700,
  easing: "ease",
  offset: -100,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;
import { ref } from 'vue-demi'
console.log("🚀 ~ file: main.js:5 ~ ref:", ref)



new Vue({
  render: (h) => h(App),
}).$mount('#app');

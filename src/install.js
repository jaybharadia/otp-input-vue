import OtpInput from './components/OtpInput.vue';
import EventBus from './bus';
import { isVue2, isVue3 } from 'vue-demi'

const VueOtpInput = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
  console.log("🚀 ~ file: install.js:8 ~ install ~ Vue:", Vue)

  console.log('isVue3-->', isVue3);

  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html

  if( isVue2){
    Vue.component('otp-input', OtpInput);
    Vue.prototype.$vueOtpInput = {
      // methods:{
        resetOtp : () => {
          EventBus.$root.$emit('vue-otp-reset');
        }
      // }
    }

    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(VueOtpInput);
    }

    
  }
  },
};

// Automatic installation if Vue has been added to the global scope.


export default VueOtpInput;

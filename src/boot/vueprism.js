//import { boot } from 'quasar/wrappers';
import Vue from 'vue'
import VuePrism from '@aminoeditor/vue-prism';

// Use only the necessary languages or themes to reduce bundle size
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-javascript.min'

Vue.use(VuePrism)

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
//export default boot(async ({ app} ) => {
  // app.config.globalProperties.VuePrism = VuePrism;
//})

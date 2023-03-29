import { boot } from 'quasar/wrappers';
import VueHighlightJS from 'vue3-highlightjs'
// import 'highlight.js/styles/solarized-light.css'
import 'highlight.js/styles/vs2015.css'

export default boot(async ({ app} ) => {
    // something to do
    app.use(VueHighlightJS)
  })
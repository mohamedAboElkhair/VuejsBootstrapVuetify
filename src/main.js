import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import { loadFonts } from './plugins/webfontloader'
// Make Bootstrap
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
loadFonts()
// import User from './Helpers/User.js'
// window.User = User
// import Exception from './Helpers/Exception.js'
// window.Exception = Exception
// window.EventBus = new createApp();
createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import FormOverview from "@extendas/extendas-component-library/src/components/form-types/FormOverview"

loadFonts()

createApp(App).use(createPinia())
  .use(router)
  .use(vuetify)
    .use(FormOverview)
  .mount('#app')

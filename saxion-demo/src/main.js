import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import global from './assets/global.css'
import extCompLib from '@extendas/extendas-component-library'

loadFonts()

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(global)
app.use(extCompLib)
app.mount('#app')


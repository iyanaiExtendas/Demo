// Styles
import '@mdi/font/css/materialdesignicons.css'
import * as components from "vuetify/components";
import * as labsComponents from "vuetify/labs/components";
import 'vuetify/styles'


// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
    {
        components: {
            ...components,
            ...labsComponents
        }
    }


)

// Styles
import '@mdi/font/css/materialdesignicons.css'
import * as components from "vuetify/components";
import * as labsComponents from "vuetify/labs/components";
import 'vuetify/styles'
import '@extendas/extendas-component-library/dist/extendas-comp-lib.css'


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

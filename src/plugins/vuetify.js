import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
export default createVuetify({
    defaults: {
        global: {
            ripple: false
        },
        VSheet: {
            // elevation:
        }
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        }
    },
    theme: {
        themes: {
            defaultTheme: false,
            light: {
                colors: {
                    background: '#FFFFFF',
                    primary: '#4CAF50',
                    secondary: '#03DAC6',
                    error: '#B00020',
                    info: '#3265ba',
                    success: '#4CAF50',
                    warning: '#FB8C00'
                }
            },
            dark: {
                colors: {
                    background: '#FFFFFF',
                    primary: '#4CAF50',
                    secondary: '#03DAC6',
                    error: '#B00020',
                    info: '#3265ba',
                    success: '#4CAF50',
                    warning: '#FB8C00'
                }
            }
        }
    }
})

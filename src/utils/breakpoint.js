import vuetify from '../plugins/vuetify'

export function setBreakpoint(sm, md, lg, xl, xxl) {
    switch (vuetify.display.name) {
        case 'sm':
            return sm
        case 'md':
            return md
        case 'lg':
            return lg
        case 'xl':
            return xl
        case 'xxl':
            return xxl
    }
}
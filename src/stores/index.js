import {createPinia} from 'pinia'
import storage from 'pinia-plugin-persistedstate'

const store = createPinia()
store.use(storage)

export default store

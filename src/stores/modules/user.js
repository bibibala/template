import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
    persist: true,
    // persist: [
    //   {
    //     paths: ['count'],
    //     storage: localStorage,
    //   },
    //   {
    //     paths: ['count2'],
    //     storage: sessionStorage,
    //   },
    // ],
    state: () => {
    },
    actions: {},
    getters: {}
})

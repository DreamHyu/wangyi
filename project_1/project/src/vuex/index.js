import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        account: '',
        password: ''
    },
    mutations: {
        setTopTitle (state, account) {
            state.account = account
        },
        addThemeId (state, password) {
            state.password = password
        }
    }
})

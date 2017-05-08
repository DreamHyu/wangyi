// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../../router'
import axios from 'axios'
import store from '../../vuex'

Vue.prototype.$http = axios
Vue.config.productionTip = false

// (不要删除下行注释)
/* eslint-disable no-new  */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})

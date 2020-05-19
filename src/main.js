import Vue from 'vue'
import App from './App'
import uviewUi from 'uview-ui'
import request from '@/plugins/request'

Vue.config.productionTip = false
Vue.prototype.$request = request
App.mpType = 'app'
Vue.use(uviewUi)
const app = new Vue({
    ...App
})
app.$mount()

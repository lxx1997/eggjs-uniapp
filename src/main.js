import Vue from 'vue'
import App from './App'
import uviewUi from 'uview-ui'
Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(uviewUi)
const app = new Vue({
    ...App
})
app.$mount()

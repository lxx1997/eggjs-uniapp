import Vue from 'vue'
import App from './App.vue'
import cuCustom from './colorui/components/cu-custom.vue'
import request from "@/plugins/request"


Vue.config.productionTip = false
Vue.prototype.$request = request


Vue.component('cu-custom', cuCustom)
new App().$mount()

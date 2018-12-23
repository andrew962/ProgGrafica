import Vue from 'vue'
import App from './App.vue'
//firebase
import VueFire from 'vuefire'


Vue.config.productionTip = false
Vue.use(VueFire)

new Vue({
    render: h => h(App),
}).$mount('#app')
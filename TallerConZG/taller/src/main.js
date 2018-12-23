import Vue from 'vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
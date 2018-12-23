// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue';
import App from './App';
//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
//firebase
import VueFire from 'vuefire';

Vue.config.productionTip = false

//firebase
Vue.use(VueFire)

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
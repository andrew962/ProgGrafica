// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//este main.js es archivo que se carga con la pagina al principio
import Vue from 'vue';
import App from './App';

//firebase
import VueFire from 'vuefire';
Vue.use(VueFire);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
});
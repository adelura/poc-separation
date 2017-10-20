import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "./app.vue";
import Vegetables from "./vegetables/index.vue";

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Vegetables }
    ]
});

let app = new Vue({
    router,
    el: '#app',
    render: (h) => h(App)
});
import Vue from 'vue';
import router from './router/router.js'

import appComponent from './components/app/app.vue'


new Vue({
    el: '#app',
    router,
    render: h => h(appComponent)
})
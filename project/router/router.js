import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import homeComponent from '../components/home/home.vue'
import loginComponent from '../components/login/login.vue'
import indexComponent from '../components/index/index.vue'
import usersComponent from '../components/users/users.vue'
import goodslistComponent from '../components/goodslist/goodslist.vue'
import ordersComponent from '../components/orders/orders.vue'
import shoppingcarComponent from '../components/shoppingcar/shopping.vue'

const router = new VueRouter({
    routes: [
        {path: '/login', component: loginComponent, name: 'login'},
        {path: '/home', component: homeComponent, name: 'home',
            children: [
                {path: 'index', component: indexComponent, name: 'index'},
                {path: 'users', component: usersComponent, name: 'users'},
                {path: 'goodslist', component: goodslistComponent, name: 'goodslist'},
                {path: 'orders', component: ordersComponent, name: 'orders'},
                {path: 'shoppingcar', component: shoppingcarComponent, name: 'shoppingcar'},
                
            ]
        }

    ]
})
export default router;
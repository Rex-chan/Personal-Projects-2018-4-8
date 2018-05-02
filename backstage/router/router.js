import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import loginComponent from '../components/login/login'
import homeComponent from '../components/home/home'
import usersComponent from '../components/users/users'
import transitionComponent from '../components/transition/transition'
import addusersComponent from '../components/addusers/addusers'
import productsshowComponent from '../components/product/productsshow.vue'
import productsaddComponent from '../components/product/productsadd.vue'
import productsdeleteComponent from '../components/product/productsdelete.vue'
import productsupdateComponent from '../components/product/produsupdate.vue'
const router = new VueRouter({
    routes: [
        {path: '/login', component: loginComponent, name: 'login'},
        {path: '/home', component: homeComponent, name: 'home', children: [
            {path: 'users', component: usersComponent, name: 'users'},
            {path: 'transition', component: transitionComponent, name: 'transition'},
            {path: 'addusers', component: addusersComponent, name: 'addusers'},
            {path: 'productsshow', component: productsshowComponent, name: 'productsshow'},          
            {path: 'productsadd', component: productsaddComponent, name: 'productsadd'},
            {path: 'productsdelete', component: productsdeleteComponent, name: 'productsdelete'},
            {path: 'productsupdate', component: productsupdateComponent, name: 'productsupdate'},
        ]}
    ]
})

export default router;
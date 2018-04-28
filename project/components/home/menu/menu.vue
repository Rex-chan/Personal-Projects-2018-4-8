<template>
    <ul>
        <li v-for= "obj in menus" :key= "obj.path">
            <router-link :to="obj.path">{{obj.text}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                menus: [
                    {path: '/home/index', text: '首页'},
                    {path: '/home/goodslist', text: '菜单'},
                    {path: '/home/orders', text: '订单'},
                    {path: '/home/shoppingcar', text: '购物车'},
                    {path: '/home/users', text: '用户中心'},
                ]
            }
        }

    }

</script>
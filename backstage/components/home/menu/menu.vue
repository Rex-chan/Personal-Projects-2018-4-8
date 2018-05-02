<template>
    <ul>
        <li v-for="obj in menus" :key="obj.path">
            <router-link :to="obj.path">{{obj.text}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                menus: [
                    {path: '/home/users', text: '用户管理'},
                    {path: '/home/transition', text: '修改密码'},
                    {path: '/home/addusers', text: '添加用户'},
                    {path: '/home/productsshow', text: '商品列表'},
                    {path: '/home/productsadd', text: '添加商品'},
                    {path: '/home/productsdelete', text: '删除商品'},
                    {path: '/home/productsupdate', text: '商品修改'},
                ]
            }
        }
    }
</script>
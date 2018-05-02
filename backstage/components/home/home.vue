<template>
    <div>
        <div class="dk-header">
            <hd></hd>
        </div>
        <div class="dk-menu">
            <menus />
        </div>
        <div class="dk-body">
            <router-view></router-view>
        </div>
    </div>
</template>


<script>
    import './home.css'

    import hd from './header/header.vue'
    import menus from './menu/menu.vue'

    export default {
        components: {
            hd,
            menus
        }
    }
</script>
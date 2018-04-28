<template>
    <div>        
        <div class="jk-body">
            <router-view></router-view>
        </div>
        <div class="jk-menu">
            <menus></menus>

        </div>
    </div>

</template>
<script>
    import './home.css'
    
    import menus from './menu/menu.vue'
    
    export default {
        components: {
            
            menus
        }
    }
</script>  
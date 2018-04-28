<template>
    <div>
        <input type="text" v-model="data.username"/>
        <input type="text" v-model="data.pwd"/>
        <input type="button" value="Login" @click="login"/>
    </div>
</template>

<script>
    import http from '../../utils/httpclient.js'
    export default {
        data(){
            return {
                data: {
                    username: '',
                    pwd: ''
                }
            }
        },
        methods: {
            login(){
                http.post('login', this.data).then((res) => {
                    console.log(res);
                    if(res.status){
                        window.localStorage.setItem('token', res.data);
                        this.$router.push({name: 'home'});
                    }
                }) 
            }
        }
    }
</script>
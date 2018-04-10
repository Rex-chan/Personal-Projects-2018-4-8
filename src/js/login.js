require.config({
    // baseUrl:'lib',

    // 配置别名（虚拟路径）
    paths:{
        // 格式：别名:真实路径（基于baseUrl）
        jquery:'../lib/jquery-3.2.1',
        
        common:'common'
    },
});
require(['jquery','common'],function(){
    require(['jquery'],function($){
       let $username = $('#username');
        let $password = $('#password');
        let $btnReg = $('.submit');
        

        $btnReg.on('click',function(){
                let _username = $username.val().trim();
                let _password = $password.val().trim();
                ajax({
                    url:'../api/login.php',
                    data:{
                        username:_username,
                        password:_password,
                        
                    },
                    success:function(data){
                        console.log(data)
                        if(data == 'success'){
                            location.href = '../secooindex.html'

                        }
                    }
                })
        });
    })();
    
});

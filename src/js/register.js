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
        let $usernametext = $('.usernametext')
        let $passwordtext = $('.passwordtext')
        let $confirmpassword =$('#confirmpassword')
        $username.blur(function(){
            let _username = $username.val().trim();
            if(!/^[a-z][\w\-]{5,19}$/i.test(_username)){
            $usernametext.text( "用户名不合法")
            .css({"color": "red"});
            return false;
            }
            ajax({
                    url:'../api/register.php',
                    data:{username:_username},
                    success:function(data){
                        if(data === 'success'){
                            $usernametext.text("用户名可以使用！").css({
                                "color": "green"
                            });                           
                        }else{
                            $usernametext.text( "这个用户名太受欢迎了").css({
                                "color": "red"
                            });
                        }
                    }
                })
            
        })
        $btnReg.on('click',function(){
                let _username = $username.val().trim();
                let _password = $password.val().trim();
                let _confirmpassword = $confirmpassword.val().trim();
                
                if(_confirmpassword != _password){
                $passwordtext.text('两次输入密码不一致')
                .css({"color": "red"});
                return false;
                }
                ajax({
                    url:'../api/register.php',
                    data:{
                        username:_username,
                        password:_password,
                        type:'reg'
                    },
                    success:function(data){
                        console.log(data)
                        if(data == 'success'){
                            alert('注册成功，请登录')
                            location.href = '../html/login.html'

                        }
                    }
                })
        });
	})();
	
});


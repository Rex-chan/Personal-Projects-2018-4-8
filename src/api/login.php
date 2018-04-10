<?php
    /*
        注册验证用户有效性
     */
    
    require('connect.php');
 
    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;
    

    // 查找数据库判断用户名是否存在
    $sql_username = "select username from user where username='$username'"; 
    $sql_password = "select password from user where password='$password'";
    $result_username = $conn->query($sql_username);
    $result_password = $conn->query($sql_password);

    if($result_username->num_rows>0 || $result_username->num_rows>0 ){
        echo "success";
    }else{
        echo "fail";
    }

?>
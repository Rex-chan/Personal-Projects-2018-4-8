 <?php 
    require('connect.php');
    //获取前端数据
    $id = isset($_GET['id']) ? $_GET['id'] : Null;
   
    
    
    // //获取查询结果集（集合）
    
    $result = $conn->query("select * from secoogoods where id='$id'");
    // 获取数据（使用查询结果集）
    $content = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集，避免资源浪费
    $result->close();

    // 关闭数据库，避免资源浪费
    $conn->close();

    echo json_encode($content,JSON_UNESCAPED_UNICODE);

 ?>
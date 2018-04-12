 <?php 
    require('connect.php');

    // $id = isset($_GET['id']) ? $_GET['id'] : Null;
    // // 获取前端数据
    
    // $page = isset($_GET['page']) ? $_GET['page'] : 1;
    // $qty = isset($_GET['qty']) ? $_GET['qty'] : 64;
    // //获取查询结果集（集合）
    // $idx = ($page-1)*$qty;
    $result = $conn->query("select * from secoogoods ");

    // limit $idx,$qty

    // 获取数据（使用查询结果集）
    $content = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集，避免资源浪费
    $result->close();

    // 关闭数据库，避免资源浪费
    $conn->close();

    echo json_encode($content,JSON_UNESCAPED_UNICODE);


   


 ?>
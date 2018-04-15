require(['config'],function(){
    require(['jquery','xzoom'],function($){
        
        let params = decodeURI(location.search).slice(1);
        
        let id = params.split('=')[1];
        
        $.ajax({
            url: '../api/getdata.php',

            success:function(data){                
                let res = JSON.parse(data);
                console.log(typeof(res));
                let goods = res.filter(function(item){
                    return item.id  === id;                    
                });
                console.log(goods)
                let $details = $('.main_c_r');
                let content = goods.map(item=>{
                    return `<div>
                        <div class="descirbe">
                            <p>${item.descirbe}</p>
                        </div>
                        <div class="price">
                        寺库价<span>￥${item.price}</span>
                        </div>
                        <div>发货地<span>大陆有货预计5-10个工作日内送达</span></div>
                        <div>温馨提示<span>本商品无质量问题不支持退换货 </span></div>
                    </div>`
                })
                $details.html(content)
                $goods = $('.goods')
                $img = $goods.find('img');
                $smallImg = $goods.next().find('img').eq(0);
                console.log($smallImg);
                console.log(goods[0].url)
                $img.attr({'src':goods[0].url,'data-big':goods[0].url});
                $smallImg.prop({'src':goods[0].url})
                // $("#pic").css('src', 'img/f5/project.jpg')
                $goods.xZoom({
                    // wihtd:400,
                    // height:400,
                    // position:'right'
                    
                
                })
            }
        })
        
        
        
    })();
    
});
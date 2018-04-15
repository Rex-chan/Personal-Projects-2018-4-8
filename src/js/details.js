require(['config'],function(){
    require(['jquery','xzoom'],function($){
        
        let params = decodeURI(location.search).slice(1);
        
        let id = params.split('=')[1];
        let $ul = $('#s_nav').find('ul');
        console.log($ul);
        $ul.on('mouseover','li',function(){
            $(this).find('.show').show();
            
        });
        $ul.on('mouseleave','li',function(){
            $(this).find('.show').slideToggle(200);
        });
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
                        <div class="text">发货地<span>大陆有货预计5-10个工作日内送达</span></div>
                        <div class="text">温馨提示<span>本商品无质量问题不支持退换货 </span></div>
                        <div class="buy">
                            <button >立刻购买</button>
                            <button ><i  class="icon-gouwuche iconfont"></i>加入购物车</button>
                        </div>
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
                });
                
                console.log(goods);
                $buy = $('.buy')
                
                $buy.on('click','button',function(){
                   
                    let good_item = {
                        id:goods[0].id,
                        descirbe:goods[0].descirbe,
                        price:goods[0].price,
                        url:goods[0].url
                    }
                document.cookie = 'good_item'+JSON.stringify(good_item);
                });
                
                
            }
        })
        
        
        
    })();
    
});
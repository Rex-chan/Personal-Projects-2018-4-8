require(['config'],function(){
    require(['jquery','xzoom','common'],function($){
        
        let params = decodeURI(location.search).slice(1);
        
        let id = params.split('=')[1];
        let $ul = $('#s_nav').find('ul');
        console.log($ul);
        $ul.on('mouseover','li',function(){
            $(this).find('.show').show();
            
        });
        $ul.on('mouseleave','li',function(){
            $(this).find('.show').hide();
        });
        $.ajax({
            url: '../api/getdata.php',
            success:function(data){                
                let res = JSON.parse(data);
                ;
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
                        <button ><a href="../html/shoppingcar.html">立刻购买</a></button>
                            <button ><i  class="icon-gouwuche iconfont"></i>加入购物车</button>
                        <button ><a href="../html/goods.html">继续逛逛</a></button>
                        
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
                $buy = $('.buy')
                
                $buy.on('click','button',function(){

                let goodscookie=Cookie.get('goodscookie') || [];
                if(typeof goodscookie==='string'){
                goodscookie=JSON.parse(goodscookie);
                }
                console.log(goods)
                var idx;

                // 查找goodslist中是否已经添加过当前商品
                var has = goodscookie.some(function(g,i){//0，1，2，3，4
                  // 遍历goodscookie，当得到一个true时，终止遍历
                  idx = i;console.log(idx)
                  return g.id ===id;

                });

                if(has){
                  // 如果存在，则qty++
                  goodscookie[idx].qty++;
                }else{
                // 获取商品信息
        
                  let goodslist={
                  id:goods[0].id,
                  name:goods[0].name,
                  descirbe:goods[0].descirbe,
                  url:goods[0].url,
                  price:goods[0].price,
                  sold:goods[0].sold,
                  qty:1

                }
                goodscookie.push(goodslist);
                }
                console.log(goodscookie)
 

                var now=new Date();
                now.setDate(now.getDate()+7);
                document.cookie='goodscookie='+JSON.stringify(goodscookie)+';expires=' +now.toUTCString()+';path=/';  
                });
                
                
            }// suscss
            
        })// ajax

        
        
        
    })();
    
});
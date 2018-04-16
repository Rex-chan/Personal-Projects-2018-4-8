require(['config'],function(){
    require(['jquery','common'],function($){
        $list_main = $('.list_main');
        
        render();
        console.log(randomNumber(1,99))
        function render(){
            
           
            // 获取cookie
            goodslist = Cookie.get('goodscookie');
            console.log(goodslist)
            if(goodslist.length === 0){
                goodslist = [];
            }else{
                goodslist = JSON.parse(goodslist)
            }
            // 商品金额
            var total = 0;
            // 根据数据生成html结构
            
            let content = goodslist.map(function(item){
                // 计算总价
                total += item.price * item.qty*1;

                return `<li class="goodsitem"><span><input type="checkbox" /></span>
                        <span>
                            <img src="${item.url}" height="80" width="80"/>                           
                        </span> 
                        <span>${item.descirbe}</span>
                        <span>中国大陆</span>
                        <span>${item.price}</span>
                        <span>${item.qty}</span>
                        <span>${total}</span>
                        <span><button>&times;</button></span></li>`
            }).join('');

            // 写入前先清空
            $list_main.html('');
            $list_main.html(content);
            

            // 计算总价
            // subPrice.innerHTML = total.toFixed(2);
        }
        
        

    })();
    
});
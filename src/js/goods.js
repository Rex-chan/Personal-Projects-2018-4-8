require(['config'],function(){
    require(['jquery','common'],function($){
        let $ul = $('#s_nav').find('ul');
        console.log($ul);
        $ul.on('mouseover','li',function(){
            $(this).find('.show').show();            
        });
        $ul.on('mouseleave','li',function(){
            $(this).find('.show').hide();
        });
        ajax({
            url:'../api/getdata.php',
            success:function(data){
                    console.log(data);
                    output();
                    function output(){
                        var main_product = document.getElementById('main_product');
                        console.log(main_product); 
                        main_product.innerHTML = data.map(function(item){
                            return `<li class="product_item fl " data-id="${item.id}" ><a href="#">
                                <div class="photo">
                                    <img src="${item.url}"/>
                                </div>
                                <p class="descirbe">
                                    ${item.descirbe}
                                </p>        
                                <p class="detail">
                                    <span class="price">￥${item.price}</span>
                                    <span class="sold fr">销量：${item.sold}</span>
                                </p>
                                </a></li>`                       
                        }).join('');
                    };
                    transmission();
                    
                    
                    let $btn1 = $('button').eq(0)
                    console.log($btn1);
                    $btn1.click(function(){
                        pJiang();
                        output();
                        transmission();
                    })
                    let $btn2 = $('button').eq(1)
                    
                    $btn2.click(function(){
                        sJiang();
                        output();
                        transmission();
                    })
                    function pJiang(){
                        data.sort(function(a,b){
                            return b.price - a.price;
                        })
                    }
                    function sJiang(){
                        data.sort(function(a,b){
                            return b.sold - a.sold;
                        })
                    }
                    function transmission(){
                        var product_item = main_product.getElementsByTagName('li');
                        console.log(product_item);
                        for(var i=0;i<product_item.length;i++){
                            product_item[i].onclick = function(){
                                console.log(66)
                                var id = this.getAttribute('data-id');
                                console.log(id)
                                location.href = '../html/details.html?id='+id;
                            }
                        }
                    }
                                
            }
        })

        
        

    })();
    
});
require(['config'],function(){
    require(['jquery','common','xcarousel'],function($){
        $('#banner_focus').xCarousel({
                width:1200,height:500,                
                type:'fade',
                duration:1500,
                imgs:['img/banner1.jpg','img/banner2.jpg','img/banner3.jpg','img/banner4.jpg','img/banner5.jpg','img/banner6.jpg',]
        }); 
        console.log($)
        ajax({
            url:'api/getdata.php',
            success:function(data){
                    let res =data.slice(0, 20);
                    // console.log(res);
                    var ul = document.createElement('ul');
                    ul.classList.add('clearfix');
                    var main_focus = document.getElementById('main_focus')                  
                    ul.innerHTML = res.map(function(item){
                        item.url=item.url.replace('../','');
                        // console.log(item.url);
                        return `<a href="#" class="clearfix"><li>
                        <div class="photo"><img src="${item.url}"/></div>
                        <p class="descirbe">${item.descirbe}</p>
                        <p class="detail"><span class="price">￥${item.price}</span><span class="sold fr">销量：${item.sold}</span></p>
                        </li></a>`
                    }).join('');
                    main_focus.appendChild(ul);
                    let $main_focus = $('#main_focus');
                    console.log($main_focus)
                    let $turn = $('.turn');
                    let $left = $turn.children('.left');
                    let $right = $turn.children('.right');
                    let $ul = $main_focus.children('ul');
                    let $goods = $main_focus.find('a')  
                    console.log($goods)
                    let i1 = 0;
                    let i2 = 0;
                    $main_focus.on('mouseenter',$turn,function(){
                        $turn.show(300).css('color', '#fc0')
                    }).on('mouseleave',$turn,function(){
                        $turn.hide(1000)
                    })
                    $left.click(function(){
                         i1++;
                        $ul.animate({left: i1*-960+'px'}, "slow");
                    });
                    $right.click(function(){
                         i2++;
                        $ul.animate({left: i1*960+'px'}, "slow");
                    })
            }
        })
        let $ul = $('#s_nav').find('ul');
        console.log($ul);
        $ul.on('mouseover','li',function(){
            $(this).find('.show').show();
            
        });
        $ul.on('mouseleave','li',function(){
            $(this).find('.show').slideToggle(200);
        });
        
        
        
        

    })();
    
});
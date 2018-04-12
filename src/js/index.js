require(['config'],function(){
    require(['jquery','common','xcarousel'],function($){
        $('#banner_focus').xCarousel({
                width:1200,height:500,                
                type:'fade',
                imgs:['img/banner1.jpg','img/banner2.jpg','img/banner3.jpg','img/banner4.jpg','img/banner5.jpg','img/banner6.jpg',]
        });
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
                    // $goods.on(mouseover(()=>{
                    //     $turn.show(300).css({color:'#fc0'});
                    // });
                    // $ul.mouseout(function(){
                    //     $turn.stop().hide(1000);
                    // })
                    let i1 = 0;
                    let i2 = 0;
                    $main_focus.on('mouseenter',$turn,function(){
                        $turn.show(300).css('color', '#fc0')
                    }).on('mouseleave',$turn,function(){
                        $turn.hide(1000)
                    })
                    // $left.click(function(){
                    //      i1++;
                    //     $ul.animate({left: i1*-960+'px'}, "slow");
                    // })
                    // $right.click(function() {
                    //     i2++;
                        
                    //     $ul.animate({left: i2*960+'px'}, "slow");
                    // });
                    let len = $goods.length/4;
                    console.log(len)
                    let index = 0;
                    let $page = $('<div></div>').addClass('page').appendTo($main_focus);
                    for(let i=1; i<len;i++){
                        let $span= $('<p></p>')
                        if(i===1){
                            $span.addClass('active')
                        }
                        $span.appendTo($page);
                    }
                    let imgWidth = $goods.outerWidth(true)*4+'px';
                    console.log(imgWidth);
                    $main_focus.on('mouseenter',()=>{
                        clearInterval($main_focus.timer);
                    }).on('mouseleave',()=>{
                        move();
                    });
                    let move=()=>{
                        $main_focus.timer =setInterval(function(){
                            index++;
                            show();
                        })
                    };
                    let show = function(){
                        if(index >= len){
                            $ul.get(0).style.left = 0;
                            index = 1;
                        }
                        // animate(ul,{left:-imgWidth*index});
                        $ul.animate({left:-imgWidth*index});
                        for(let i=0;i<len-1;i++){//0,1,2,3
                            page.children[i].className = '';
                        }
                            if(index === len - 1){
                            page.children[0].className = 'active';
                        }else{
                            page.children[index].className = 'active'
                        }
                    }
            }
        })
            
        
        
        

    })();
    
});
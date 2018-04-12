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
                }
        })
        
        // $main_focus.ajaxComplete(function(){ //待请求完成时 执行
        // window.onload = function(){
            let $main_focus = $('#main_focus');
            console.log($main_focus)
            let $turn = $('.turn');
            let $left = $turn.children('.left');
            let $right = $turn.children('.right');
            let $ul = $main_focus.children('ul');
            console.log($ul)
            $main_focus.mouseover(()=>{
                $turn.show(300).css({color:'#fc0'});
            });
            // $main_focus.mouseout(function(){
            //     $turn.hide();
            // })
            $left.click(function(){

            });
        // }
            
        // });
        
        

    })();
    
});
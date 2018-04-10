require(['config'],function(){
    require(['jquery','common','xcarousel'],function($){
        $('#banner_focus').xCarousel({
                width:1200,height:500,                
                type:'fade',
                imgs:['img/banner1.jpg','img/banner2.jpg','img/banner3.jpg','img/banner4.jpg','img/banner5.jpg','img/banner6.jpg',]
            });
        
    })();
    
});
require(['config'],function(){
    require(['jquery','common','xcarousel'],function($){
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
require(['config'],function(){
    require(['jquery','common'],function($){
        let $ul = $('#s_nav').find('ul');
        console.log($ul);
        $ul.on('mouseover','li',function(){
            $(this).find('.show').show();            
        });
        $ul.on('mouseleave','li',function(){
            $(this).find('.show').slideToggle(200);
        });
        ajax({
            console.log(66)
            url:'../api/getdata.php',
            success:function(data){
                    console.log(data);
                    var ul = document.createElement('ul');
                                      
                    ul.innerHTML = res.map(function(item){
                        
                        
                    }).join('');
                    
            }
        })
        
        
        
        

    })();
    
});
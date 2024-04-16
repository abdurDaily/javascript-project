$( function(){
    let faqs = $('.faq .faq_header');
    
    faqs.on('click',function(){

        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }else{
            faqs.removeClass('active');
            $(this).addClass('active');
        }

    })
})
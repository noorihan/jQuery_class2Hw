$(function(){
    $(window).on('load',function(){
        
        $("#preloader").fadeOut();
    })
    $(window).scroll(function(){
        let scrTop = $(window).scrollTop();
        if(scrTop>900){
            $('nav').addClass('menuActive');
            $('.backTotopBtn').slideDown();

        }
        else{
            $('nav').removeClass('menuActive');
            $('.backTotopBtn').slideUp();
        }
    })

    $('.backTotopBtn').click(function(){
        $('html, body').animate({scrollTop:0},'1500');
    })
} )
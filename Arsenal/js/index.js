
$(function() {
    let header = $('.block-maxwidth-border');
    
    $(window).scroll(function() {
        if($(this).scrollTop() > 1) {
            header.addClass('header_fixed');
        } else {
        header.removeClass('header_fixed');
    }
    });
});

$(function() {
    let header = $('.block-maxwidth-border');
    let hederHeight = header.height(); // вычисляем высоту шапки
    
    $(window).scroll(function() {
        if($(this).scrollTop() > 1) {
        header.addClass('header_fixed');
        $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
        });
        } else {
            header.removeClass('header_fixed');
            $('body').css({
            'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
        })
        }
    });
});
$(function() {
    let header = $('.cart');
    
    $(window).scroll(function() {
        if($(this).scrollTop() > 1) {
            header.addClass('cart_fixed');
        } else {
        header.removeClass('cart_fixed');
    }
    });
});

$(function() {
    let header = $('.cart');
    let hederHeight = header.height(); // вычисляем высоту шапки
    
    $(window).scroll(function() {
        if($(this).scrollTop() > 1) {
        header.addClass('cart_fixed');
        $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
        });
        } else {
            header.removeClass('cart_fixed');
            $('body').css({
            'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
        })
        }
    });
});

$(document).ready(function Owl(){
    $('#banner-owl').owlCarousel({
        loop:true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 4000,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#logo-type-banner').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        dots: false,	
        nav: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            800:{
                items:4
            },
            1000:{
                items:7
            }
        }
    });
    $('#promotions-owl').owlCarousel({
        loop:true,
        autoplay: true,
        dots: false,	
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
});








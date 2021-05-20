
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
                items:1
            },
            350:{
                items:2
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




// Выберем кнопку и форму
const $btnLiTools = document.querySelector('.sale-of-tools-li');
const $blockTools = document.querySelector('.sale-of-tools');

// При клике на кнопку
$btnLiTools .addEventListener('click', e => {
  // Прокрутим страницу к форме 
    document.querySelector('.nav-menu-mobile').classList.toggle('display-block-nav');
    document.querySelector('.header_fixed').classList.toggle('bacground-mobile');

    $blockTools .scrollIntoView({ 
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно 
    });
});

const $btnFooter = document.querySelector('.footer-li');
const $footer = document.querySelector('footer');

// При клике на кнопку
$btnFooter .addEventListener('click', e => {
  // Прокрутим страницу к форме 
    document.querySelector('.nav-menu-mobile').classList.toggle('display-block-nav');
    document.querySelector('.header_fixed').classList.toggle('bacground-mobile');

    $footer .scrollIntoView({ 
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно 
    });
});

// Выберем кнопку и форму
const $btnLiServices = document.querySelector('.services-li');
const $blockServices = document.querySelector('.services');

// При клике на кнопку
$btnLiServices .addEventListener('click', e => {
  // Прокрутим страницу к форме 
    document.querySelector('.nav-menu-mobile').classList.toggle('display-block-nav');
    document.querySelector('.header_fixed').classList.toggle('bacground-mobile');

    $blockServices .scrollIntoView({ 
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно 
    });
});


// Выберем кнопку и форму
const $btnLiPromotions = document.querySelector('.promotions-li');
const $blockPromotions = document.querySelector('.promotions');

// При клике на кнопку
$btnLiPromotions .addEventListener('click', e => {
  // Прокрутим страницу к форме 
    document.querySelector('.nav-menu-mobile').classList.toggle('display-block-nav');
    document.querySelector('.header_fixed').classList.toggle('bacground-mobile');

    $blockPromotions .scrollIntoView({ 
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно 
    });
});


// Выберем кнопку и форму
const $btnLiNews = document.querySelector('.news-li');
const $blockNews = document.querySelector('.news-block');

// При клике на кнопку
$btnLiNews .addEventListener('click', e => {
  // Прокрутим страницу к форме 
    document.querySelector('.nav-menu-mobile').classList.toggle('display-block-nav');
    document.querySelector('.header_fixed').classList.toggle('bacground-mobile');

    $blockNews .scrollIntoView({ 
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно 
    });
});


// Выберем кнопку и форму
const $btnLiReviews = document.querySelector('.reviews-li');
const $blockReviews = document.querySelector('.reviews-block');

// При клике на кнопку
$btnLiReviews .addEventListener('click', e => {
  // Прокрутим страницу к форме 
    document.querySelector('.nav-menu-mobile').classList.toggle('display-block-nav');
    document.querySelector('.header_fixed').classList.toggle('bacground-mobile');

    $blockReviews .scrollIntoView({ 
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно 
    });
});


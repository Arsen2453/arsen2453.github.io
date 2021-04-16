$(function() {
    let header = $('.block_menu');
    
    $(window).scroll(function() {
        if($(this).scrollTop() > 1) {
            header.addClass('header_fixed');
        } else {
        header.removeClass('header_fixed');
    }
    });
});

$(function() {
    let header = $('.block_menu');
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


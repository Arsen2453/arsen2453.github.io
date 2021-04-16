$(document).ready(function(){

    $('#banner-owl').owlCarousel({
        loop:true,
        autoplay: true,
        dots: false,	
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('#collect-owl').owlCarousel({
        loop:true,
        autoplay: true,
        dots: false,	
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


});




let hour = -6;
let minute = -12;
let seconds = 25;
let totalSeconds = 0;


startTimer(-1000);
intervalId = setInterval(startTimer, 1000);
function startTimer() {
    --totalSeconds;
    hour = Math.floor(totalSeconds /3600);
    minute = Math.floor((totalSeconds - hour*3600)/60);
    seconds = totalSeconds - (hour*3600 + minute*60);

    document.getElementById("hour").innerHTML =hour;
    document.getElementById("minute").innerHTML =minute;
    document.getElementById("seconds").innerHTML =seconds;
}





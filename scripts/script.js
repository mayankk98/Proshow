$(document).ready(function() {

    var i = 0;

    $('#down').on('click', function(e) {
        e.preventDefault();
        // var i = $('.flex--active').data('slide');
        i = (((i + 1) % 5) + 5) % 5;
        $('.slider__wrapper').find('.flex__container[data-slide=' + i + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function() {
            $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
        // console.log(i);
    });

    $('#up').on('click', function(e) {
        e.preventDefault();
        // var i = $('.flex--active').data('slide');
        i = (((i - 1) % 5) + 5) % 5;
        $('.slider__wrapper').find('.flex__container[data-slide=' + i + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function() {
            $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
        // console.log(i);
    });

    // $(document).scroll(function(e) {
    //     e.preventDefault();

    //     $('.slider__wrapper').find('.flex__container[data-slide=' + (( % 5) + 1) + ']').addClass('flex--preStart');
    //     $('.flex--active').addClass('animate--end');
    //     setTimeout(function() {
    //         $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
    //         $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    //     }, 800);
    // })

    $(document).bind('mousewheel', function(e) {
        var now = Date.now();
        var nt = $(this).data("lasttime") || now;
        if (nt > now) return;
        $(this).data("lasttime", now + 500);
        var x = (e.originalEvent.wheelDelta > 0) ? 1 : -1;
        // var i = $('.flex--active').data('slide');
        i = (((i + x) % 5) + 5) % 5;
        $('.slider__wrapper').find('.flex__container[data-slide=' + i + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function() {
            $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
    });

    var treshold = document.documentElement.clientWidth / 3;
    var minDistance = document.documentElement.clientHeight / 4;

    var startX, startY;

    window.addEventListener('touchstart', function(e) {
        // console.log(e.changedTouches[0].pageY);
        startX = e.changedTouches[0].pageX;
        startY = e.changedTouches[0].pageY;
    });

    window.addEventListener('touchend', function(e) {
        // console.log(e.changedTouches[0].pageY);
        var endX = e.changedTouches[0].pageX;
        var endY = e.changedTouches[0].pageY;
        var disX = endX - startX;
        var disY = endY - startY;

        if (Math.abs(disX) < treshold && Math.abs(disY) > minDistance) {
            // console.log('b');
            var x = (disY < 0) ? 1 : -1;
            // i = (i + x) % 5
            // var i = $('.flex--active').data('slide');
            i = (((i + x) % 5) + 5) % 5;
            $('.slider__wrapper').find('.flex__container[data-slide=' + i + ']').addClass('flex--preStart');
            $('.flex--active').addClass('animate--end');
            setTimeout(function() {
                $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
                $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
            }, 800);
            // console.log(i);
        }
    });

    // $("#formBtn").on('click', function(e) 
    // {
    //     e.preventDefault();
    //     $("img.artist__img").animate({ bottom: "-300px" }, "slow", function() {
    //         $("img.artist__img").hide();
    //     });
    //     $("div.flex__item.flex__item--left").animate({ left: '-1000px' }, "slow", function() {
    //         $("div.flex__item.flex__item--left").hide();
    //     });
    //     $("div.flex__item.flex__item--right").animate({ right: '-1000px' }, "slow", function() {
    //         $("div.flex__item.flex__item--right").hide();
    //     });
    //     setTimeout(function() {
    //         $(".slider__wrapper").css({ "display": "none" });
    //     }, 800);
    // });

    $(function(){
        var hits = 0;

        $('#formBtn').click(function(){
            hits ^= 1;

            if  ( hits ) {
                $("img.artist__img").animate({ bottom: "-300px" }, "slow", function() {
                $("img.artist__img").hide();
                });
                $("div.flex__item.flex__item--left").animate({ left: '-1000px' }, "slow", function() {
                    $("div.flex__item.flex__item--left").hide();
                });
                $("div.flex__item.flex__item--right").animate({ right: '-1000px' }, "slow", function() {
                    $("div.flex__item.flex__item--right").hide();
                });
                $(".icon").hide();
                setTimeout(function() {
                $(".slider__wrapper").css({ "display": "none" });
                   
                }, 800);
            } 
            else {
                
                $(".slider__wrapper").css({ "display": "block" });   
                $("img.artist__img").animate({ bottom: "0px" }, "slow", function() {
                $("img.artist__img").fadeIn();
                });
                $("div.flex__item.flex__item--left").animate({ left: '0%' }, "slow", function() {
                    $("div.flex__item.flex__item--left").fadeIn();
                });
                $("div.flex__item.flex__item--right").animate({ right: '0%' }, "slow", function() {
                    $("div.flex__item.flex__item--right").fadeIn();
                });
                $(".icon").fadeIn();        
                
            }

            return false;
        });
    });


    $(".slide-nav").on('click', function(e)
    {
        $(event.target).addClass('borderclass');
        setTimeout(function()
        {
            $(this).removeClass('slide-nav');
        }, 1);
        // console.log($(event.target).text());
    });
});
$(document).ready(function() 
{
    userInfo = navigator.platform;
    //this should let us make different directions for scrolling on windows and linux

    /*********************************************/
    //scroll event for desktop view
    /*********************************************/

    var i = 0;
    $('.container').css({ "display": "none" });

    $(document).bind('mousewheel', function(e) 
    {
        e.preventDefault();
        e.stopPropagation();
        var now = Date.now();
        var nt = $(this).data("lasttime") || now;
        if (nt > now) return;
        $(this).data("lasttime", now + 1500);
        var x = (e.originalEvent.wheelDelta > 0) ? 1 : -1;
        i = (((i - x) % 9) + 9) % 9;
        $('.slider__wrapper').find('.flex__container[data-slide=' + i + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function() 
        {
            $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);

    });

    /*********************************************/
    //touch events for mobile
    /*********************************************/

    var treshold = document.documentElement.clientWidth / 3;
    var minDistance = document.documentElement.clientHeight / 4;

    var startX, startY;

    window.addEventListener('touchstart', function(e) 
    {
        startX = e.changedTouches[0].pageX;
        startY = e.changedTouches[0].pageY;
    });

    window.addEventListener('touchend', function(e) 
    {
        var endX = e.changedTouches[0].pageX;
        var endY = e.changedTouches[0].pageY;
        var disX = endX - startX;
        var disY = endY - startY;

        if (Math.abs(disX) < treshold && Math.abs(disY) > minDistance) 
        {
            var x = (disY < 0) ? 1 : -1;
            i = (((i + x) % 5) + 5) % 5;
            $('.slider__wrapper').find('.flex__container[data-slide=' + i + ']').addClass('flex--preStart');
            $('.flex--active').addClass('animate--end');
            setTimeout(function() 
            {
                $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
                $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
            }, 800);
        }
    });

    $(".slide-nav").on('click', function(e) {
        $(event.target).addClass('borderclass');
        setTimeout(function() {
            $(this).removeClass('slide-nav');
        }, 1);
    });

// ~~~~~~~~~~~~ignore iske neeche

    /************************************************************/
    //form visibility animation (being replaced with animate.css)
    /************************************************************/

    $(function() {
        var hits = 0;

        $('#formBtn').click(function() 
        {
            hits ^= 1;

            $("img.artist__img").addClass("animated");
            $("div.flex__item.flex__item--left").addClass("animated");
            $("div.flex__item.flex__item--right").addClass("animated");
            $(".icon").addClass("animated");

            if(hits) 
            {
                // $("img.artist__img").animate({ bottom: "-300px" }, "slow", function() {
                //     $("img.artist__img").hide();
                // });
                $("img.artist__img").addClass("fadeOutDown");
                // $("div.flex__item.flex__item--left").animate({ left: '-1000px' }, "slow", function() {
                //     $("div.flex__item.flex__item--left").hide();
                // });
                $("div.flex__item.flex__item--left").addClass("fadeOutLeft");
                // $("div.flex__item.flex__item--right").animate({ right: '-1000px' }, "slow", function() {
                //     $("div.flex__item.flex__item--right").hide();
                // });
                $("div.flex__item.flex__item--right").addClass("fadeOutRight");

                // $(".icon").hide();
                $(".icon").addClass("fadeOut");
                $('.container').css({ "display": "block" });
                // $(".fs-form li.fs-current").show();
                setTimeout(function() 
                {
                    $(".slider__wrapper").css({ "display": "none" });
                }, 800);
            }

            else 
            {
                $(".slider__wrapper").css({ "display": "block" });
                // $("img.artist__img").animate({ bottom: "0px" }, "slow", function() {
                //     $("img.artist__img").fadeIn();
                // });
                $("img.artist__img").removeClass("fadeOutDown").addClass("fadeInUp");
                // $("div.flex__item.flex__item--left").animate({ left: '0%' }, "slow", function() {
                //     $("div.flex__item.flex__item--left").fadeIn();
                // });
                $("div.flex__item.flex__item--left").removeClass("fadeOutLeft").addClass("bounceInLeft");
                // $("div.flex__item.flex__item--right").animate({ right: '0%' }, "slow", function() {
                //     $("div.flex__item.flex__item--right").fadeIn();
                // });
                $("div.flex__item.flex__item--right").removeClass("fadeOutRight").addClass("bounceInRight");
                // $(".icon").fadeIn();
                $(".icon").removeClass("fadeOut").addClass("fadeIn");
                // $(".fs-form li.fs-current").hide();
                setTimeout(function() 
                {
                    $("img.artist__img").removeClass("fadeInUp");
                    $("div.flex__item.flex__item--left").removeClass("bounceInLeft");
                    $("div.flex__item.flex__item--right").removeClass("bounceInRight");
                    $(".icon").removeClass("fadeIn");
                    $('.container').css({ "display": "none" });
                }, 800);
            }
        });
    });

    
});
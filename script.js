$(document).ready(function() {
    $('#down').on('click', function(e) {
        e.preventDefault();
        var current = $('.flex--active').data('slide');
        $('.slider__wrapper').find('.flex__container[data-slide=' + ((current % 5) + 1) + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function() {
            $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
    });

    $('#up').on('click', function(e) {
        e.preventDefault();
        var current = $('.flex--active').data('slide');
        next = current == 1 ? 5 : current - 1;
        $('.slider__wrapper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function() {
            $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
    });

    $(document).scroll(function(e){
        e.preventDefault();
        var current = $('.flex--active').data('slide');
        $('.slider__wrapper').find('.flex__container[data-slide=' + ((current % 5) + 1) + ']').addClass('flex--preStart');
        $('.flex--active').addClass('animate--end');
        setTimeout(function() {
            $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
            $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
        }, 800);
        console.log("scroll");
    })
    
    $("#formBtn").on('click', function(e){
        e.preventDefault();        
        $("img.artist__img").animate({bottom: "-300px"},"slow");
        $("div.flex__item.flex__item--left").animate({left : '-1000px'}, "slow");
        $("div.flex__item.flex__item--right").animate({right : '-1000px'}, "slow");
        $("body").css({"background-color": "grey", "opacity": "0.4", "overflow": "none"});
        console.log("show");
    });
   
});

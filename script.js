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
});
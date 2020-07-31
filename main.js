var width = $(window).width();
$(window).resize(function () {
    if (width <= '768') {
        $('.btn-mobile').addClass('btn-group-vertical');
    }
});
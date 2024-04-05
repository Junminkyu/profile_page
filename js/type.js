$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $('.title').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / elementHeight);
            return opacity;
        }
    });
});
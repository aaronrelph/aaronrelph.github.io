$(document).ready(function() {
var stickyNavTop = $('.features-nav').offset().top;

var stickyNav = function(){
var scrollTop = $(window).scrollTop();

if (scrollTop > stickyNavTop) {
    $('.features-nav').addClass('sticky');
} else {
    $('.features-nav').removeClass('sticky');
}
};

stickyNav();

$(window).scroll(function() {
    stickyNav();
});
});

$('#header-btn').on('click', function (e) {
    $('.header-nav').toggleClass('active');
    $('.nav-btn').toggleClass('active');
});

$('.dropdown-menu li').on('click', function (e) {
    $('.header-nav').removeClass('active');
    $('.nav-btn').removeClass('active');
});
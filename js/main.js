//sign
$(".reg_auth").click(function(){
    $("#fill").toggleClass("open");
    $("#modal").toggleClass("open");
});
$("#close-mod, #fill").click(function(){
    $("#fill").toggleClass("open");
    $("#modal").toggleClass("open");
   

});


// Fixed menu
$(document).scroll(function () {
    if ($(document).width() > 785) {
        if ($(document).scrollTop() > $("header").height() + 10)
            $("nav").addClass("fixed");
        else
            $("nav").removeClass("fixed");
    }
});
//mobile menu
$(".menu-on").click(function () {
    $(".mobail-menu").slideToggle();
});
Window.onresize = function (event) {
    $(".mobail-menu").hide();
};
// Наверх
$(function () {
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.scrollup').fadeIn();
    }
    else {
        $('.scrollup').fadeOut();
    }
});
//slider
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
//scroll nav
$("nav li a, .footer-menu a, .mobail-menu ").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 1500);
});





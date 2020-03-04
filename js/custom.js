$(document).ready(function () {

    $(window).scroll(function () {

        if ($(window).scrollTop() > 200) {
            $(".header-top--nav ul").css({ "width": "77.5%" });
            $(".header-top--nav ul").addClass("nav-scroll");
        }
        else {
            $(".header-top--nav ul").css({ "width": "50%" });
            $(".header-top--nav ul").removeClass("nav-scroll");
        }

    });


});
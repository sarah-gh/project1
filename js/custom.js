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

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }


});
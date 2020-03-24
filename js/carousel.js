
let sliders = [];
let delay = 4000;
let timerId;
let remaining;
let start;
let current_playing;

// let sliderImage = [];
// let item = 6;
// let value = 0
// sliderImage = document.getElementsByClassName("slider-img");
// sliderImage.forEach( Element => {
//     sliders.push({ html: this });
// });


$(".slider-img").each(function () {
    sliders.push({ html: this });
    console.log(sliders);
});

// document.getElementById("rotate-slider").addEventListener("mouseover", function () {
//     window.clearTimeout(timerId);
//     document.getElementById("slider-btn").style.display = "inherit";
//     document.getElementById("prev-btn").onclick = function () {
//         console.log(current_playing);
//         current_playing++;
//         console.log(current_playing);
//         slider_display(sliders, current_playing);
//     };
//     document.getElementById("next-btn").onclick = function () {
//         console.log(current_playing);
//         current_playing--;
//         console.log(current_playing);
//         slider_display(sliders, current_playing);
//     };
// })
// document.getElementById("rotate-slider").addEventListener("mouseout", function () {
//     slider_loop(sliders, current_playing, remaining);
//     document.getElementById("slider-btn").style.display = "none";
//     document.getElementById("prev-btn").removeEventListener("click", prev);
//    document.getElementById("next-btn").removeEventListener("click", next);
// })

document.getElementById("rotate-slider").addEventListener("mouseover", function () {
    window.clearTimeout(timerId);
    document.getElementById("slider-btn").style.display = "inherit";
    document.getElementById("prev-btn").addEventListener("click", prev);
    document.getElementById("next-btn").addEventListener("click", next);
});
document.getElementById("rotate-slider").addEventListener("mouseout", function () {
    slider_loop(sliders, current_playing, remaining);
    document.getElementById("slider-btn").style.display = "none";
    document.getElementById("prev-btn").removeEventListener("click", prev);
    document.getElementById("next-btn").removeEventListener("click", next);
});
function prev() {
    console.log(current_playing);
    current_playing++;
    console.log(current_playing);
    slider_display_prev(sliders, current_playing);
};
function next() {
    console.log(current_playing);
    current_playing--;
    console.log(current_playing);
    slider_display(sliders, current_playing);
};

function slider_init() {
    document.getElementById("rotate-slider").style.display = "block";
    slider_display(sliders, 0);
    slider_loop(sliders, -1, delay);
}
function slider_display(A, i) {
    if (i < 0) {
        i = A.length - 1;
    }
    current_playing = i;
    A[(i + A.length + 3) % A.length].html.className += " slider-hide";
    A[(i + A.length) % A.length].html.className = "slider-middle";
    A[(i + A.length - 1) % A.length].html.className = "slider-left-1";
    A[(i + A.length - 2) % A.length].html.className = "slider-left-2";
    A[(i + A.length + 1) % A.length].html.className = "slider-right-1";
    A[(i + A.length + 2) % A.length].html.className = "slider-right-2";

}
function slider_display_prev(A, i) {
    if (i < 0) {
        i = A.length - 1;
    }
    current_playing = i;
    A[(i + A.length + 3) % A.length].html.className += " slider-hide";
    A[(i + A.length) % A.length].html.className = "slider-middle_prev";
    A[(i + A.length - 1) % A.length].html.className = "slider-left-1";
    A[(i + A.length - 2) % A.length].html.className = "slider-left-2";
    A[(i + A.length + 1) % A.length].html.className = "slider-right-1";
    A[(i + A.length + 2) % A.length].html.className = "slider-right-2";

}
function slider_loop(A, i, remaining) {
    start = new Date();
    if (i < 0) {
        i = A.length - 1;
    }
    timerId = setTimeout(function () {
        slider_display(A, i);
        slider_loop(A, i - 1, delay);
    }, remaining);
}

slider_init();

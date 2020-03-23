
    let sliders = [];
    let delay = 4000;
    let timerId;
    let remaining;
    let start;
    let current_playing;
    // let img = document.getElementsByClassName("slider-img");
    // for(let i=0 ; i < img.length ; i++){
    //     img[i].className += " slider-hide";
    //     sliders.push({ html: this })
    // };
    $("#rotate-slider").find("img").each(function () {
        this.className += " slider-hide";
        sliders.push({ html: this })
    });
    
    document.getElementById("rotate-slider").addEventListener("mouseover",function (){
        window.clearTimeout(timerId);
        document.getElementById("slider-btn").style.display = "inherit";
        document.getElementById("prev-btn").addEventListener("click",function () {
            current_playing++;
            slider_display(sliders, current_playing);
        });
        document.getElementById("next-btn").addEventListener("click",function () {
            current_playing--;
            slider_display(sliders, current_playing);
        });
    })
    document.getElementById("rotate-slider").addEventListener( "mouseout" , function (){
        slider_loop(sliders, current_playing, remaining);
        document.getElementById("slider-btn").style.display = "none";
        $("#slider-btn .prev-btn").unbind("click");
        $("#slider-btn .next-btn").unbind("click");
    })

    // $("#rotate-slider").hover(function () {
    //     window.clearTimeout(timerId);
    //     remaining = delay - (new Date() - start);
    //     $("#slider-btn").show();
    //     $("#slider-btn #prev-btn").click(function () {
    //         current_playing++;
    //         slider_display(sliders, current_playing);
    //     });
    //     $("#slider-btn #next-btn").click(function () {
    //         current_playing--;
    //         slider_display(sliders, current_playing);
    //     });
    // }, function () {
    //     slider_loop(sliders, current_playing, remaining);
    //     $("#slider-btn").hide();
    //     $("#slider-btn .prev-btn").unbind("click");
    //     $("#slider-btn .next-btn").unbind("click");
    // });


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

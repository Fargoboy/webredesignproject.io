
    $(window).on("load", function() {
        "use strict";
        $(".loader").fadeOut(800);
    });
    
    jQuery(function($) {
    "use strict";

    var amountScrolled = 700;
    var backBtn = $("a.back-to");
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > amountScrolled) {
            backBtn.fadeIn("slow");
        } else {
            backBtn.fadeOut("slow");
        }
    });
    backBtn.on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
        return false;
    });
    
     var revapi = jQuery("#rev_slider_3").revolution({
        sliderType: "standard",
        sliderLayout: "fullwidth",
        scrollbarDrag: "true",
        spinner: "on",
        delay: 3000,
        navigation: {
            arrows: {
                enable: true
            }
        },
        touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
        },
        responsiveLevels: [1240, 1024, 778, 480],
        gridwidth: [1170, 992, 767, 480],
        gridheight: [750, 700, 650, 500],
    });
	
});
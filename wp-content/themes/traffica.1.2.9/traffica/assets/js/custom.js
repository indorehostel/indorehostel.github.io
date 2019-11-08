
$ = jQuery;

/**
 * Initializing Menu 
 */

ddsmoothmenu.init({
    mainmenuid: "menu", //menu DIV id
    orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
    classname: 'ddsmoothmenu', //class added to menu's outer DIV
    //customtheme: ["#1c5a80", "#18374a"],
    contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
});

//Flexslider
//<![CDATA[
jQuery.noConflict();
jQuery("document").ready(function () {

    /**
     * Normal Flexslider JS 
     */

    jQuery('.flexslider').flexslider({
        animation: "slide", //String: Select your animation type, "fade" or "slide"
        slideDirection: "horizontal", //String: Select the sliding direction, "horizontal" or "vertical"
        slideshow: true, //Boolean: Animate slider automatically
        slideshowSpeed: jQuery("#txt_slidespeed").val(), //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationDuration: 5000, //Integer: Set the speed of animations, in milliseconds
        smoothHeight: true, //Boolean: Animate the height of the slider smoothly for slides of varying height.
        directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
        controlNav: true, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        keyboardNav: true, //Boolean: Allow slider navigating via keyboard left/right keys
        mousewheel: false, //Boolean: Allow slider navigating via mousewheel
        prevText: "Previous", //String: Set the text for the "previous" directionNav item
        nextText: "Next", //String: Set the text for the "next" directionNav item
        pausePlay: false, //Boolean: Create pause/play dynamic element
        pauseText: 'Pause', //String: Set the text for the "pause" pausePlay item
        playText: 'Play', //String: Set the text for the "play" pausePlay item
        randomize: false, //Boolean: Randomize slide order
        slideToStart: 0, //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        animationLoop: true, //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        pauseOnAction: true, //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: true
    });

    /**
     * Accordion JS 
     */

    jQuery('#buttons').akordeon();
    jQuery('#button-less').akordeon({buttons: false, toggle: true, collapsible: true, itemsOrder: [2, 0, 1]});

    /**
     * Mean Menu JS
     */

    jQuery('#menu').meanmenu({
        meanScreenWidth: "767"
    });

    /**
     * Feature Box JS 
     */

    resize_feature_box();

    /**
     * Carousel JS
     */

    jQuery('#mycarousel').jcarousel({
        wrap: 'both',
        scroll: 1,
        auto: 1,
        animation: 500,
        initCallback: mycarousel_initCallback
    });
});


/**
 * Carousel Callback function
 */

jQuery.noConflict();
function mycarousel_initCallback(carousel)
{
    // Disable autoscrolling if the user clicks the prev or next button.
    carousel.buttonNext.bind('click', function () {
        carousel.startAuto(0);
    });

    carousel.buttonPrev.bind('click', function () {
        carousel.startAuto(0);
    });

    // Pause autoscrolling if the user moves with the cursor over the clip.
    carousel.clip.hover(function () {
        carousel.stopAuto();
    }, function () {
        carousel.startAuto();
    });
}
;

/**
 * Resize Feature Box
 */

function resize_feature_box() {
    $ = jQuery;
    // Select and loop the container element of the elements you want to equalise
    $('.flip-container .flipper').each(function () {

        // Cache the highest
        var highestBox = 0;

        // Select and loop the elements you want to equalise
        $('.front', this).each(function () {

            // If this box is higher than the cached highest then store it
            if ($(this).height() > highestBox) {
                highestBox = $(this).outerHeight();
            }

        });
        // Select and loop the elements you want to equalise
        $('.back', this).each(function () {

            // If this box is higher than the cached highest then store it
            if ($(this).height() > highestBox) {
                highestBox = $(this).outerHeight();
            }

        });

        // Set the height of all those children to whichever was highest 
        $(this).height(highestBox);
//        $('.back,.front').height(highestBox);
    });
    
    var highestBox = 0;
      $('.feature_box .col-md-4').each(function () {

        // Cache the highest
        
            // If this box is higher than the cached highest then store it
            if ($(this).height() > highestBox) {
                highestBox = $(this).outerHeight();
            } 
    });
    // Set the height of all those children to whichever was highest 
        $('.feature_box .col-md-4').height(highestBox);
        $('.feature_box .col-md-4').css({'margin-bottom':'20px'});
    
}

/**
 * Resize Feature Box On Resizing the window.
 */

jQuery(window).resize(function () {
    resize_feature_box();
});


jQuery.noConflict();
jQuery('.carousel-text a').hover(function () {
    jQuery(this).removeClass('bounceInUp');
});



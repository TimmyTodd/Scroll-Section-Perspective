var topPos = $( ".current" ).scrollTop(),
rotate = topPos + "deg",
opac = 0,
lastScrollTop = 0,
stopScroll = 0,
dir = 0,
animTime = 400;

function init() {
	$( "body,.content" ).css({ "height" : $(window).height(), "width" : $(window).width() });

	$( ".content:nth-child(1)" ).css( "top", "0" );
    
    if ( stopScroll == 0 ) {
	   $( ".content:nth-child(2)" ).css( "top", $(window).height() );
    } else {
    }
}

function AnimateRotate(angle) {

    // caching the object for performance reasons
    var $elem = $( ".current .inner" );

    // we use a pseudo object for the animation
    // (starts from `0` to `angle`), you can name it as you want
    $({deg: dir}).animate({deg: angle}, {
        duration: animTime,
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $elem.css({
                transform: 'rotateX(-' + now + 'deg)'
            });
        }
    });
}

$( document ).ready(function() {
	init()
})

$( window ).resize(function() {
	init()
}).load(function() {
	init()
})

$("button").click(function() {

	/*var $testElem = document.querySelector( "div:nth-child(3)" );
	console.log( $testElem.dataset.view );*/

    /*var scrol_pos = $(window).scrollTop();
    console.log( scrol_pos );*/

    /*$( ".current" ).css( "margin-top", windowTop / 2 + "px");
    $( ".current" ).css( "margin-bottom", "-" + windowTop / 2 + "px");*/

    if ( stopScroll == 0 ) {

        dir = 0
        AnimateRotate(90)

        $( ".current .grad" ).fadeIn(animTime)

        $( ".content:nth-child(2)" ).animate({ 
            "top": "10%"
        }, animTime, function() {
            // after
        })

        $( this ).html("Go Up");

        stopScroll = 1

    } else if ( stopScroll == 1 ) {

        dir = 90
        AnimateRotate(0)

        $( ".current .grad" ).fadeOut(animTime)

        $( ".content:nth-child(2)" ).animate({ 
            "top": $(window).height()
        }, animTime, function() {
            // after
        })

        $( this ).html("Go Down");

        stopScroll = 0

    } else {
    }

    $( ".content" ).css({ "height" : $(window).height(), "width" : $(window).width() });

});
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

    $({deg: dir}).animate({deg: angle}, {
        duration: animTime,
        step: function(now) {
            $elem.css({
                transform: 'rotateX(-' + now + 'deg)'
            });
        }
    });
}

$( document )
    .ready(function() {
    	init()
    })

$( window )
    .resize(function() {
    	init()
    })
    .load(function() {
    	init()
    })

function goingDown() {
    dir = 0
    AnimateRotate(90)

    $( ".current .grad" ).fadeIn(animTime)

    $( ".content:nth-child(2)" ).animate({ 
        "top": "10%"
    }, animTime, function() {
        // after
    })

    $( "button" ).html("Go Up");

    stopScroll = 1
}
function goingUp() {
    dir = 90
    AnimateRotate(0)

    $( ".current .grad" ).fadeOut(animTime)

    $( ".content:nth-child(2)" ).animate({ 
        "top": $(window).height()
    }, animTime, function() {
        // after
    })

    $( "button" ).html("Go Down");

    stopScroll = 0
}

$("button")
    .click(function() {

        if ( stopScroll == 0 )
            goingDown()
        else if ( stopScroll == 1 )
            goingUp()
    });


// detect mouswheel direction
var loghandle = function(event, delta) {

    if (delta > 0 && stopScroll == 1) { // scrolling up
        goingUp()
        console.log("up")
    }
    else if (delta < 0 && stopScroll == 0 ) { // scrolling down
        goingDown()
        console.log("down")
    } else {}
};

$(document)
    .mousewheel(function(event, delta) {
        loghandle(event, delta);
    });
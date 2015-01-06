var topPos = $( ".current" ).scrollTop(),
rotate = topPos + "deg",
opac = 0,
lastScrollTop = 0,
stopScroll = 0;

function init() {
	$( ".content" ).css({ "height" : $(window).height(), "width" : $(window).width() });

	$( ".content:nth-child(1)" ).css( "top", "0" );
	$( ".content:nth-child(2)" ).css( "top", $(window).height() );
	//$( ".content:nth-child(3)" ).css( "top", $(window).height() * 2 );
	//$( ".content:nth-child(4)" ).css( "top", $(window).height() * 3 );
};

$( document ).ready(function() {
	init()
});
$( window ).resize(function() {
	init()
}).load(function() {
	init()
});

$(window).scroll(function() {

    var st = $(this).scrollTop();

	/*var $testElem = document.querySelector( "div:nth-child(3)" );
	console.log( $testElem.dataset.view );*/

	windowTop = st;
	//console.log(windowTop);
    
    topPos = Math.round( windowTop / $(window).height() * 90 ); // get percentage of top position vs current window height

    opacTopPos = Math.round(windowTop / $(window).height() * 10) / 10; // get percentage of top position vs current window height

    /*var scrol_pos = $(window).scrollTop();
    console.log( scrol_pos );*/

    /*$( ".current" ).css( "margin-top", windowTop / 2 + "px");
    $( ".current" ).css( "margin-bottom", "-" + windowTop / 2 + "px");*/

    if ( lastScrollTop > st) {
        console.log("last: "+lastScrollTop+" current: "+st)
    }
    else if ( stopScroll == 0 && st > 30 ) {

        
    	/*rotate = "rotateX( -" + topPos + "deg)";
    	$( ".current .inner" ).css({"-moz-transform" : rotate, "-webkit-transform" : rotate});

    	opac = opacTopPos;
    	$( ".current .grad" ).css({"opacity" : opac});*/


        $( ".content:nth-child(2)" ).animate({ 
            "top": "0px"
        }, 800, function() {
            // after
        })


        rotate = "rotateX( -90deg)";
        $( ".current .inner" ).animate({ 
            "-moz-transform" : rotate,
            "-webkit-transform" : rotate
        }, 1300, function() {
            // after
        })

        stopScroll = 1

    } /*else if () {
    	rotate = "rotateX( -90deg)";
    	$( ".current .inner" ).css({"-moz-transform" : rotate, "-webkit-transform" : rotate});
    	opac = 1;
    }*/ else {

    }

    $( ".content" ).css({ "height" : $(window).height(), "width" : $(window).width() });

    lastScrollTop = st;

});
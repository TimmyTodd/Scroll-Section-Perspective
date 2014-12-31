var topPos = $( ".current" ).scrollTop(),
rotate = topPos + "deg",
opac = 0;

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

	/*var $testElem = document.querySelector( "div:nth-child(3)" );
	console.log( $testElem.dataset.view );*/

	windowTop = $(window).scrollTop();
	console.log(windowTop);
    
    topPos = Math.round( windowTop / $(window).height() * 90 ); // get percentage of top position vs current window height

    opacTopPos = Math.round(windowTop / $(window).height() * 10) / 10; // get percentage of top position vs current window height

    /*var scrol_pos = $(window).scrollTop();
    console.log( scrol_pos );*/

    /*$( ".current" ).css( "margin-top", windowTop / 2 + "px");
    $( ".current" ).css( "margin-bottom", "-" + windowTop / 2 + "px");*/

    if ( topPos <= 90 ) {
    	rotate = "rotateX( -" + topPos + "deg)";
    	$( ".current .inner" ).css({"-moz-transform" : rotate, "-webkit-transform" : rotate});

    	opac = opacTopPos;
    	$( ".current .grad" ).css({"opacity" : opac});
    } else {
    	rotate = "rotateX( -90deg)";
    	$( ".current .inner" ).css({"-moz-transform" : rotate, "-webkit-transform" : rotate});
    	opac = 1;
    }

});
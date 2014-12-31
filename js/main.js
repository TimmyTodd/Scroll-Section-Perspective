var topPos = $( ".current" ).scrollTop();

function init() {
	$( "div" ).css( "height", $(window).height() );
	$( "div.current" ).css( "top", "0" );
	$( "div:nth-child(2)" ).css( "top", $(window).height() );
	$( "div:nth-child(3)" ).css( "top", $(window).height() * 2 );
	$( "div:nth-child(4)" ).css( "top", $(window).height() * 3 );
};

$( document ).ready(function() {
	init()
});
$( window ).resize(function() {
	init()
});

$(window).scroll(function() {

	/*var $testElem = document.querySelector( "div:nth-child(3)" );
	console.log( $testElem.dataset.view );*/

	windowTop = $(window).scrollTop();
    
    topPos = Math.round( windowTop / $(window).height() * 90 ); // get percentage of top position vs current window height

    /*var scrol_pos = $(window).scrollTop();
    console.log( scrol_pos );*/

    /*$( ".current" ).css( "margin-top", windowTop / 2 + "px");
    $( ".current" ).css( "margin-bottom", "-" + windowTop / 2 + "px");*/

    var rotate = "rotateX( -" + topPos + "deg)";
    $( ".current" ).css({"-moz-transform" : rotate, "-webkit-transform" : rotate});

});
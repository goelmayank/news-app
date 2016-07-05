$(document).ready(function($) {

	$('.card__share > a').on('click', function(e){ 
		e.preventDefault() // prevent default action - hash doesn't appear in url
   		$(this).parent().find( 'div' ).toggleClass( 'card__social--active' );
		$(this).toggleClass('share-expanded');
    });
  
});
var $mainButton = $(".main-button"),
    $closeButton = $(".close-button"),
    $buttonWrapper = $(".button-wrapper"),
    $ripple = $(".ripple"),
    $layer = $(".layered-content");

$mainButton.on("click", function(){
    $ripple.addClass("rippling");
    $buttonWrapper.addClass("clicked").delay(1500).queue(function(){
        $layer.addClass("active");
    });
});

$closeButton.on("click", function(){
    $buttonWrapper.removeClass("clicked");
    $ripple.removeClass("rippling");
    $layer.removeClass("active");
});

// copy
balapaCop("Material Overlay Animation", "#777");
// ----------------------------------------
// Duotone: JS > header-feature JS
// ----------------------------------------

// Feature parallax fade effect.

function parallaxFade() {
	scrollPos = $(this).scrollTop();
	$('.feature__background-image').css({
		'top': (scrollPos/2)+"px"
	});
	$('.feature__content-wrap').css({
		'margin-bottom': (-scrollPos/4)+"px",
		'opacity': 1-(scrollPos/500)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		parallaxFade();
	});
});
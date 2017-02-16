// ----------------------------------------
// Duotone: JS > Navigation
// ----------------------------------------

$(document).ready(function(){
	$('a[href*=#]').bind('click', function(e) {
		e.preventDefault();

		var target = $(this).attr("href");

		$('html, body').stop().animate({ scrollTop: $(target).offset().top}, 1000, function() {
			location.hash = target;
		});

		return false;
	});
});
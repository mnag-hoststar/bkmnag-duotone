// ----------------------------------------
// Duotone: JS > Navigation
// ----------------------------------------
	
// Change navigation if it matches tablet size.

var tablet = '(max-width: 768px)';
var mq = window.matchMedia(tablet);

if (mq.matches) {
	// Toggles class open to display/hide the whole navigation.

	$('.extendednavigation__navigation-toggle').click(function() {
		$('#page-zones__template-widgets__extendednavigation-extendednavigation').toggleClass('open');
	});

	// Toggles class open to display/hide folders.

	$('.navigation-item.folder').each(function() {
		$(this).click(function() {
			$(this).parent('.navigation-item.folder').toggleClass('open');
		});
	});
} else {
  // Toggle Menu becomes a normal menu.
}

// Changes to the header when it's not at the top of the page.

var $output = $('#output');
$(window).on('scroll', function () {
	var scrollTop = $(window).scrollTop()

	if (scrollTop > 100) {
		$('.template__header').addClass('template__header--small');
	} else {
		$('.template__header').removeClass('template__header--small');
	}
});
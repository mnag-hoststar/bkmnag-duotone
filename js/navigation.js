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

// Change the top padding of the content depending on how high
// the navigation header and footer is.

var headerHeight;
var footerHeight;

if ($(window).width() < 720) {
	var headerHeight = $('.template__header').outerHeight()+20;
	var footerHeight = $('.template__footer').outerHeight()+30;
} else {
	var headerHeight = $('.template__header').outerHeight()+30;
	var footerHeight = $('.template__footer').outerHeight()+60;
}

$('.template__content').css('padding-top', headerHeight +'px');
$('.default section.page').css('padding-bottom', footerHeight +'px');

$(window).resize(function() {
	if ($(window).width() < 720) {
		var headerHeight = $('.template__header').outerHeight()+20;
		var footerHeight = $('.template__footer').outerHeight()+20;
	} else {
		var headerHeight = $('.template__header').outerHeight()+30;
		var footerHeight = $('.template__footer').outerHeight()+60;
	}
	
	$('.template__content').css('padding-top', headerHeight +'px');
	$('.default section.page').css('padding-bottom', footerHeight +'px');
});
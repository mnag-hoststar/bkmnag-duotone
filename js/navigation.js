// ----------------------------------------
// Duotone: JS > Navigation
// ----------------------------------------

$( document ).ready(function() {
	
	// Change navigation if it matches tablet size.
	
	var tablet = '(max-width: 768px)';
	var mq = window.matchMedia(tablet);

	if (mq.matches) {
		// Toggles class open to display/hide the whole navigation.

		$('.navigation-toggle').click(function() {
			$('.widget[data-widget-type="extendednavigation"]').toggleClass('open');
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
		var scrollTop = $(window).scrollTop();

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

	function resizeHeaderFooter() {
		if ($(window).width() < 720) {
			headerHeight = $('.template__header').outerHeight()+20;
			footerHeight = $('.template__footer').outerHeight()+30;
		} else {
			headerHeight = $('.template__header').outerHeight()+30;
			footerHeight = $('.template__footer').outerHeight()+60;
		}

		return headerHeight, footerHeight;
	}

	resizeHeaderFooter();
	$('.template__content').css('padding-top', headerHeight +'px');
	$('.default section.page').css('padding-bottom', footerHeight +'px');

	$(window).resize(function() {
		resizeHeaderFooter();
		$('.template__content').css('padding-top', headerHeight +'px');
		$('.default section.page').css('padding-bottom', footerHeight +'px');
	});



	// Feature Overlay Corrections
	// The overlay of the feature should be below the header.
	
	var headerHeight = $('.template__header').outerHeight();
	var featureOverlayTopDistance = $('.widget[data-widget-type="feature"] .widget-overlay').attr('style', 'top: ' + headerHeight + 'px');

	$(window).resize(function() {
		var headerHeight = $('.template__header').outerHeight();
		var featureOverlayTopDistance = $('.widget[data-widget-type="feature"] .widget-overlay').attr('style', 'top: ' + headerHeight + 'px');
	});
});
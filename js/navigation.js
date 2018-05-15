// ----------------------------------------
// Duotone: JS > Navigation
// ----------------------------------------

$(document).ready(function() {
	
	// ------------------------------
	// Change navigation if it matches tablet size.
	// ------------------------------
	
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
	
	// ------------------------------
	// Changes to the header when it's not at the top of the page.
	// ------------------------------

	$(window).on('scroll', function () {
		var scrollTop = $(window).scrollTop();

		if (scrollTop > 100) {
			$('.template__header').addClass('template__header--small');
		} else {
			$('.template__header').removeClass('template__header--small');
		}
	});
	
	// ------------------------------
	// Changes to the header when a language selector is present.
	// ------------------------------
	
	function languageSelector() {
    	if ($('.language-selector')) {
    	    var languageSelectorHeight = $('.language-selector').outerHeight();
    	    
			$('section.page').css('margin-top', languageSelectorHeight+'px');
			$('.template__header').css('margin-top', languageSelectorHeight+'px');
			$('.header-feature').css('padding-bottom', languageSelectorHeight+'px');
			$('.feature__background-image').css('min-height', 'calc(95vh - '+languageSelectorHeight+'px'));
    	}
	}
	
	languageSelector();

	// ------------------------------
	// Change the top padding of the content depending on how high
	// the navigation header and footer is.
	// ------------------------------

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
	
	function resizeContent() {
		$('.template__content').css('padding-top', headerHeight +'px');
		$('.default section.page').css('padding-bottom', footerHeight +'px');
	}
	
	resizeHeaderFooter();
	resizeContent();

	$(window).resize(function() {
		resizeHeaderFooter();
		resizeContent();
	});
	
	// ------------------------------
	// Feature Overlay Corrections
	// The overlay of the feature should be below the header.
	// ------------------------------
	
	function resizeHeaderHeight() {
    	var headerHeight = $('.template__header').outerHeight();
    	var featureOverlayTopDistance = $('.widget[data-widget-type="feature"]').attr('style', 'top: ' + headerHeight + 'px');
	}

	$(window).resize(function() {
		resizeHeaderHeight();
	});
    
	// ------------------------------
    // Hides other submenus when a main menu point with a submenu is clicked.
	// ------------------------------
    
    $(".navigation-item").click(function(){
        $(this).siblings(".navigation-item").removeClass("folder-open open");
    });

	// ------------------------------
    // Changes by the editor are saved in the style elmement with the class js-compiled-styles.
	// ------------------------------
	
    $(document).bind("DOMSubtreeModified",function(){
        languageSelector();
		resizeHeaderHeight();
    });
});
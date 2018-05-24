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
    	    var navigationHeight = $('.template__header').outerHeight();
    	    var footerHeight = $('.template__footer').outerHeight();
    	    
    	    if (languageSelectorHeight==undefined) {
    	        var languageAndNavigationHeight = navigationHeight;
    	    } else {
    	        var languageAndNavigationHeight = languageSelectorHeight+navigationHeight;
    	    }
    	    
			$('.template__header').css('margin-top', languageSelectorHeight+'px');
			$('.template__content').css('margin-top', languageAndNavigationHeight+'px');
			$('.page').css('margin-bottom', footerHeight+'px');
    	}
	}
	
	languageSelector();
	
    $(document).bind("DOMSubtreeModified",function(){
        languageSelector();
		$(window).resize(function() {
			languageSelector();
		});
    });
    
	// ------------------------------
    // Hides other submenus when a main menu point with a submenu is clicked.
	// ------------------------------
    
    $(".navigation-item").click(function(){
        $(this).siblings(".navigation-item").removeClass("folder-open open");
    });
});
// ----------------------------------------
// Duotone: JS > Navigation
// ----------------------------------------


var tablet = "(max-width: 768px)";
var mq = window.matchMedia(tablet);



if (mq.matches) {
	
	// Toggles class open to display/hide the whole navigation.

	$(".extendednavigation__navigation-toggle").click(function() {
		$("#page-zones__template-widgets__extendednavigation-extendednavigation").toggleClass("open");
	});


	// Toggles class open to display/hide folders.
	
	$(".navigation-item.folder").each(function() {
		$(this).click(function() {
			$(this).parent(".navigation-item.folder").toggleClass("open");
		});
	});
} else {
  // Toggle Menu becomes a normal menu.
}
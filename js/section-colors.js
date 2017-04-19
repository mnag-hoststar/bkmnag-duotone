// ----------------------------------------
// Duotone: JS > Section Colors
// ----------------------------------------

// Changes the background color of the content
// widget above certain elements,
// so they have the same background color
// as those elements.

contentWidgetBackgroundColor('signupform');
contentWidgetBackgroundColor('contactform');
contentWidgetBackgroundColor('advancedcontactform');
contentWidgetBackgroundColor('image');
contentWidgetBackgroundColor('gallery');
contentWidgetBackgroundColor('twitter');

function contentWidgetBackgroundColor(widgetName) {
	$('.widget[data-name="' + widgetName + '"]').prev('.widget[data-name="content"]').addClass('widget--' + widgetName + '-background');

	$('.widget[data-widget-type="' + widgetName + '"]').prev('.widget[data-widget-type="content"]').addClass('widget--' + widgetName + '-background');
}

// Changes the background color of a responsive
// column set when it contains a form.

columnWidgetBackgroundColor('signupform');
columnWidgetBackgroundColor('contactform');
columnWidgetBackgroundColor('advancedcontactform');

function columnWidgetBackgroundColor(widgetName) {
	$('.widget[data-name="responsivecolumns"]')
		.has('.widget[data-name="' + widgetName + '"]')
		.addClass('responsivecolumns--color');
}
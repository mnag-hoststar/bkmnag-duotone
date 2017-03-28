// ----------------------------------------
// Duotone: JS > Section Colors
// ----------------------------------------

// Change the background color of the content
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
}
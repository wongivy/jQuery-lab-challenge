// Challenge summary:
// You will be implementing a simple image gallery slideshow.
// When user clicks on the button associated with each image,
// that image should fade into frame.

// First, take a look at the index.html file to see the items you
// will need to work with.


$(function() {
	generateButtons();

	// Grab all the buttons.
	var buttons = $(':button');

	// Apply the same function and effect to each button.
	$.each(buttons, function() {
		var button = $(this);
		button.click(function() {
			setButtonStyle(button, buttons);
			moveImageIntoFrame(button);	
		});
	});
});


// Hint: apply default styling to all buttons, and then apply 'active'
// styling to the selected button.
function setButtonStyle(selectedButton, buttons) {

}

/*
	Hints:
		-- To start, get the button's value and look for the associated image in the images object.
		-- Look up syntax for $.each (foreach function in jQuery).
		-- Use jQuery fadeIn/fadeOut.
		-- Remember you can pass in a function to fadeIn/fadeOut. Use it to set attributes during transition.
*/
function moveImageIntoFrame(button) {

}


// HTML output example: 	<button type='button' class='btn btn-primary' value='Skyline'>Skyline</button>
// 'Active' button has 'btn-danger' instead.
function generateButtons() {
	var idx;
	var button; var buttonStyle;
	var field = $('#controls');	// Grab the element to append buttons to.
	var textValue;

	// Loop through images object and create a button for each image.
	for (idx = 0; idx < images.length; idx++) {
		button = $(document.createElement('button'));

		// Ternary to switch the first button to 'active'
		buttonStyle = (idx == 0 ? 'btn btn-danger' : 'btn btn-primary');

		textValue = images[idx].val;

		// Apply attributes to button.
		button.attr({
			'type'	: 'button',
			'class' : buttonStyle,
			'value'	: textValue
		});

		button.text(textValue);
		button.appendTo(field);
	}
}
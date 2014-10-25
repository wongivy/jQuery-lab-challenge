// Challenge summary:
// You will be implementing a simple carousel image gallery.
// When user clicks on the button associated with each image,
// that image should transition into the frame.

// First, take a look at the index.html file to see the items you
// will need to work with.
// The basic structure is that all images are lined up on one
// row (each 800px) wide. Overflow:hidden was applied so that you can't 
// see image that is not in the frame. Essentially, the approach is to
// move the image into frame.


$(function() {
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


function moveImageIntoFrame(image) {
	// Hint: use button id to calculate how many pixels to move image by.
	// Remember each image is 800px apart, also to parse input before doing arithmetic.


	// Hint: use translateX('0px') to move image.
}
$(document).ready(function () {
	$(document).foundation();

	$(document).on('open', '#Model1', function () {
		// create a div for the modal
		var modal1 = $('<div>');
		// add class and ID for modal1
		$(modal1).addClass('reveal revealStyle');
		$(modal1).attr('id', 'Modal2');
		$(modal1).attr('data-reveal', '');
		// append the modal1 div to mainbody
		$('#mainBody').append(modal1);

		// create a h1 for the div
		var modal1h1 = $('<h1>');
		// add text for the h1 tag
		$(modal1h1).text('Welcome!');
		// append the modal1h1 to the div
		$(modal1).append(modal1h1);

		// create the close button
	});
});

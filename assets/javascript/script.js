$(document).ready(function () {
	$(document).foundation();
	$('#Modal1').foundation('open');

	$('#toModal2').click(function () {
		event.preventDefault();

		// create a div for the modal
		var modal2 = $('<div>');
		// add class and ID for modal1
		$(modal2).addClass('reveal revealStyle');
		$(modal2).attr('id', 'Modal2');
		$(modal2).attr('data-reveal', '');
		// append the modal1 div to mainbody
		$('#mainBody').append(modal2);

		// create a h1 for the div
		var modal2h1 = $('<h1>');
		// add text for the h1 tag
		$(modal2h1).text('Step 1 : Genetate a Name');
		// append the modal1h1 to the div
		$(modal2).append(modal2h1);

		// create a div tag for the div
		var modal2p1 = $('<p>');
		// var randomName = generateName();
		console.log(generateName());
		// console.log(randomName);
		// add html for the p tag
		$(modal2p1).text('We have random pick a name for you');

		// close modal1
		$('#Modal1').foundation('close');
		// reload the foundation and open the modal2
		$(document).foundation();
		$('#Modal2').foundation('open');
	});

	function generateName() {
		var queryURL =
			'https://cors-anywhere.herokuapp.com/https://uzby.com/api.php?min=3&max=8';
		let x = '';

		$.ajax({
			url: queryURL,
			async: false,
			method: 'GET',
		}).then(
			(x = function (response) {
				console.log(response);
				console.log(typeof response);
				return response;
			})
		);
		console.log(x);
	}

	generateName();
});

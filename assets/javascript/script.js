$(document).ready(function () {
	var playerSelection = [];
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
		$(modal2h1).text('Step 1 : Choose a Gender');
		// append the modal1h1 to the div
		$(modal2).append(modal2h1);

		// create a button tag for the answers
		var modal2b1 = $('<button>');
		// add the class and ID for the button
		$(modal2b1).addClass('button toModal3');
		$(modal2b1).attr('id', 'maleBtn');
		// add the data value for the button
		$(modal2b1).attr('dataValue', 'male');
		// add value for the button
		$(modal2b1).text('Male');
		// append the button to the div
		$(modal2).append(modal2b1);

		// create a button tag for the answers
		var modal2b2 = $('<button>');
		// add the class and ID for the button
		$(modal2b2).addClass('button toModal3');
		$(modal2b2).attr('id', 'femaleBtn');
		// add the data value for the button
		$(modal2b2).attr('dataValue', 'female');
		// add value for the button
		$(modal2b2).text('Female');
		// append the button to the div
		$(modal2).append(modal2b2);

		// close modal1
		$('#Modal1').foundation('close');
		// reload the foundation and open the modal2
		$(document).foundation();
		$('#Modal2').foundation('open');
	});

	$('#closeM1').click(function () {
		event.preventDefault();

		// close modal1
		$('#Modal1').foundation('close');
	});

	$(document).on('click', '.toModal3', function () {
		event.preventDefault();
		gender = $(this).attr('dataValue');
		playerSelection.push(gender);

		// create a div for the modal3
		var modal3 = $('<div>');
		// add class and ID for modal3
		$(modal3).addClass('reveal revealStyle');
		$(modal3).attr('id', 'Modal3');
		$(modal3).attr('data-reveal', '');
		// append the modal1 div to mainbody
		$('#mainBody').append(modal3);

		// create a h1 for the div
		var modal3h1 = $('<h1>');
		// add text for the h1 tag
		$(modal3h1).text('Step 2 : Choose a Races');
		// append the modal1h1 to the div
		$(modal3).append(modal3h1);

		// create a p tag for the div
		var modal3p1 = $('<p>');
		// add class and ID for modal3
		$(modal3p1).addClass('lead');
		// add text for the h1 tag
		$(modal3p1).text('Select one of the folloiing options');
		// append the modal1h1 to the div
		$(modal3).append(modal3p1);

		// create a button tag for the answers
		var modal3b1 = $('<button>');
		// add the class and ID for the button
		$(modal3b1).addClass('button toModal4');
		// add the data value for the button
		$(modal3b1).attr('dataValue', 'Dwarf');
		// add value for the button
		$(modal3b1).text('Dwarf');
		// append the button to the div
		$(modal3).append(modal3b1);

		// create a button tag for the answers
		var modal3b2 = $('<button>');
		// add the class and ID for the button
		$(modal3b2).addClass('button toModal4');
		// add the data value for the button
		$(modal3b2).attr('dataValue', 'Elf');
		// add value for the button
		$(modal3b2).text('Elf');
		// append the button to the div
		$(modal3).append(modal3b2);

		// create a button tag for the answers
		var modal3b3 = $('<button>');
		// add the class and ID for the button
		$(modal3b3).addClass('button toModal4');
		// add the data value for the button
		$(modal3b3).attr('dataValue', 'Human');
		// add value for the button
		$(modal3b3).text('Human');
		// append the button to the div
		$(modal3).append(modal3b3);

		// close modal2
		$('#Modal2').foundation('close');
		// reload the foundation and open the modal3
		$(document).foundation();
		$('#Modal3').foundation('open');
	});

	$(document).on('click', '.toModal4', function () {
		event.preventDefault();
		race = $(this).attr('dataValue');
		playerSelection.push(race);
		console.log(playerSelection);

		// create a div for the modal4
		var modal4 = $('<div>');
		// add class and ID for modal4
		$(modal4).addClass('reveal revealStyle');
		$(modal4).attr('id', 'Modal4');
		$(modal4).attr('data-reveal', '');
		// append the modal1 div to mainbody
		$('#mainBody').append(modal4);

		// create a h1 for the div
		var modal4h1 = $('<h1>');
		// add text for the h1 tag
		$(modal4h1).text('Step 3 : Pick the attack distance');
		// append the modal1h1 to the div
		$(modal4).append(modal4h1);

		// create a p tag for the div
		var modal4p1 = $('<p>');
		// add class and ID for modal3
		$(modal4p1).addClass('lead');
		// add text for the h1 tag
		$(modal4p1).text('Do you want to attack from up close or from a distance?');
		// append the modal4h1 to the div
		$(modal4).append(modal4p1);

		// create a button tag for the answers
		var modal4b1 = $('<button>');
		// add the class and ID for the button
		$(modal4b1).addClass('button toModal5');
		// add the data value for the button
		$(modal4b1).attr('dataValue', 'Close');
		// add value for the button
		$(modal4b1).text('Close');
		// append the button to the div
		$(modal4).append(modal4b1);

		// create a button tag for the answers
		var modal4b2 = $('<button>');
		// add the class and ID for the button
		$(modal4b2).addClass('button toModal5');
		// add the data value for the button
		$(modal4b2).attr('dataValue', 'Far');
		// add value for the button
		$(modal4b2).text('Far');
		// append the button to the div
		$(modal4).append(modal4b2);

		// create a button tag for the answers
		var modal4b3 = $('<button>');
		// add the class and ID for the button
		$(modal4b3).addClass('button toModal5');
		// add the data value for the button
		$(modal4b3).attr('dataValue', 'Either');
		// add value for the button
		$(modal4b3).text('Either');
		// append the button to the div
		$(modal4).append(modal4b3);

		// close modal3
		$('#Modal3').foundation('close');
		// reload the foundation and open the modal4
		$(document).foundation();
		$('#Modal4').foundation('open');
	});

	$(document).on('click', '.toModal5', function () {
		event.preventDefault();
		console.log('to modal 5');
		attackMode = $(this).attr('dataValue');
		playerSelection.push(attackMode);
		console.log(playerSelection);

		// create a div for the modal5
		var modal5 = $('<div>');
		// add class and ID for modal5
		$(modal5).addClass('reveal revealStyle');
		$(modal5).attr('id', 'Modal5');
		$(modal5).attr('data-reveal', '');
		// append the modal5 div to mainbody
		$('#mainBody').append(modal5);

		// create a h1 for the div
		var modal5h1 = $('<h1>');
		// add text for the h1 tag
		$(modal5h1).text('Step 4 : Weapons or Spells');
		// append the modal5h1 to the div
		$(modal5).append(modal5h1);

		// create a p tag for the div
		var modal5p1 = $('<p>');
		// add class and ID for modal5
		$(modal5p1).addClass('lead');
		// add text for the h1 tag
		$(modal5p1).text('Do you prefer weapons or spells?');
		// append the modal5h1 to the div
		$(modal5).append(modal5p1);

		// create a button tag for the answers
		var modal5b1 = $('<button>');
		// add the class and ID for the button
		$(modal5b1).addClass('button toModal6');
		// add the data value for the button
		$(modal5b1).attr('dataValue', 'Weapons');
		// add value for the button
		$(modal5b1).text('Weapons');
		// append the button to the div
		$(modal5).append(modal5b1);

		// create a button tag for the answers
		var modal5b2 = $('<button>');
		// add the class and ID for the button
		$(modal5b2).addClass('button toModal6');
		// add the data value for the button
		$(modal5b2).attr('dataValue', 'Spell');
		// add value for the button
		$(modal5b2).text('Spell');
		// append the button to the div
		$(modal5).append(modal5b2);

		// close modal4
		$('#Modal4').foundation('close');
		// reload the foundation and open the modal5
		$(document).foundation();
		$('#Modal5').foundation('open');
	});

	function generateName() {
		var queryURL =
			'https://cors-anywhere.herokuapp.com/https://uzby.com/api.php?min=3&max=8';

		$.ajax({
			url: queryURL,
			method: 'GET',
		}).then(function (response) {
			console.log(response);
			$('#nameResult').val(response);
		});
	}
	generateName();
});

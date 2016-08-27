//function to initialize and reset game
//global variables to the runtime application
	//random value between 19 and 120 chosen by computer.  This is target that player must match
	var randomNumber = 0;

	//running sum total of player's attempt to match randomNumber
	var userNumber = 0; 

	//gem stone color assigned a random value between 1 and 12
	var blueNumber = 0;	
	var redNumber = 0;
	var yellowNumber = 0;
	var greenNumber = 0;

	var wins = 0;				//running sum total of player's wins over multiple plays
	var losses=0;				//running sum total of player's losses over multiple plays

function gameStart() {

	userNumber = 0;
	$('#yourScore').empty();


	randomNumber = Math.floor(Math.random() * 102 + 19);
	$('#randomNumber').text(randomNumber);
	//document.getElementbyId("randomNumber").innerhtml = "randomNumber";

	blueNumber = Math.floor(Math.random() * 12 + 1);
	redNumber = Math.floor(Math.random() * 12 + 1);	
	yellowNumber = Math.floor(Math.random() * 12 + 1);	
	greenNumber = Math.floor(Math.random() * 12 + 1);	

}


function winner () {
	wins++;
	alert("Winner, Winner");
	$('#wins').html(wins);
	gameStart();
}

function loser () {
	losses++;
	$('#losses').html(losses);
	alert("Ooops.  You Lost");
	gameStart();
}

$(document ).ready(function() {
	console.log ("Ready!");



gameStart();


$('#red').on('click', function () {
	userNumber += redNumber;
	$('#yourScore').text(userNumber);
	if (userNumber === randomNumber) {
		winner();
	}  if (userNumber > randomNumber) {
		loser();
	}
	
})

$('#blue').on('click', function () {
	userNumber += blueNumber;
	$('#yourScore').text(userNumber);
	$('#yourScore').text(userNumber);
	if (userNumber === randomNumber) {
		winner();
	} if (userNumber > randomNumber) {
		loser ();
	}
})

$('#yellow').on('click', function () {
	userNumber += yellowNumber;
	$('#yourScore').text(userNumber);
	$('#yourScore').text(userNumber);
	if (userNumber === randomNumber) {
		winner();
	} if (userNumber > randomNumber) {
		loser ();
	}
})

$('#green').on('click', function () {
	userNumber += greenNumber;
	$('#yourScore').text(userNumber);
	$('#yourScore').text(userNumber);
	if (userNumber === randomNumber) {
		winner();
	} if (userNumber > randomNumber) {
		loser ();
	}
})



})

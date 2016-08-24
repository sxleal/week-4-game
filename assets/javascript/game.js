
$( document ).ready(function() {
	console.log ("Ready!");

//global variables to the runtime application
var randomNumber, userNumber, blueNumber, redNumber,yellowNumber,greenNumber,wins,losses;

//function to initialize and reset game
function initializeGame () {
	userNumber = "";
	blueNumber = "";
	redNumber = "";
	yellowNumber = "";

	$('#randomNumber,#userNumber').empty();
}

//Create random value assignments

	//randomNumber should be between 19 and 120
	//function randomIntFromInterval(min,max) {
	//	return Math.floor(math.random()*(max-Min+1)+min);
	//}
	randomNumber = Math.floor(Math.random() * 102 + 19);
	console.log("random is " + randomNumber);

	//crystal's numbers should be between 1 -12
	redNumber = Math.floor(Math.random() * 12 + 1);
	console.log("red is " + redNumber);

	blueNumber = Math.floor(Math.random() * 12 + 1);
	console.log("blue is " + blueNumber);

	yellowNumber = Math.floor(Math.random() * 12 + 1);
	console.log("yellow is "+ yellowNumber);

	greenNumber = Math.floor(Math.random() * 12 + 1);
	console.log("green is " + greenNumber);






})

//var
var bounty = {
	jango:
	{
		name: "Jango",
		value: 0
	},
	stormTrooper:
	{
		name: "StormTrooper",
		value: 0
	},
	boba:
	{
		name: "Boba",
		value: 0
	},
	darth:
	{
		name: "Darth",
		value: 0
	},
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;




//funtions
var getRandom = function (min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}

var startGame = function() {

	currentScore = 0;
	
	targetScore = getRandom(19, 120);

	bounty.jango.value = getRandom (1, 14);
	bounty.boba.value = getRandom (1, 14);
	bounty.darth.value = getRandom (1, 14);
	bounty.stormTrooper.value = getRandom (1, 14);

	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);



console.log("Target Score : " + targetScore);
console.log("Jango: " + bounty.jango.value + "| Darth: " + bounty.darth.value + "|Boba: " + bounty.boba.value + "| Storm Trooper: " + bounty.stormTrooper.value);
}




var addValues = function (bounty) {

	currentScore = currentScore + bounty.value;
	$("#yourScore").html(currentScore);
	checkWin();
	console.log("Your Score: " + currentScore);
}

var checkWin = function() {

	if(currentScore > targetScore) {
		alert("You lose!");
		lossCount ++;
		$("#lossCount").html(lossCount)

		startGame();
	}
	else if (currentScore == targetScore ) {
		alert("You win!");
		winCount ++;
		$("#winCount").html(winCount)

		startGame();
	}

}



//main porcess
startGame();

$("#jango").click(function() {
	addValues(bounty.jango);
});

$("#darth").click(function() {
	addValues(bounty.darth);
});

$("#stormTrooper").click(function() {
	addValues(bounty.stormTrooper);
});

$("#boba").click(function() {
	addValues(bounty.boba);
});

$(document).ready(function(){

var player;
var computer;

var comChoice;

var winningArray = [[1,5,9], [3,5,7], [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9]];
var score = [];

var gameOn = false;
var gameOn = true;

count = 0;
count++; //to keep track, there can be a max of 9 turns 

//WINNING 
//AFTER 3 TURNS FOR 1 PLAYER, START CHECKING IF ANYONE HAS WON
//need to check at every point if anyone has won 
//need to constantly check each player's score (after they have 3 or more turns made)
//if their score matches any of the winningArray

// function computersTurn(){
// 	var taken = false;
// 	while (taken === false && count !== 5){ //this is to break out of infinite loop, max count can be 5 or 4
// 		var computersMove = (Math.random()*10.toFixed());
// 	}
// }

// function playerTurn(turn, id){
// 	var spotTaken = $("#"+ id).text();
// 	if (spotTaken === #){
// 		turns[id] = turn;
// 		$("#"+id).text(turn);
// 	}
// }

// $(".tic").click(function(){
// 	var slot = $(this).attr("id");
// 	playerTurn(turn, slot);
// });

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!

$("#generate").click(function getRandom() {
  var min = 1, max =9;
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  //console.log(random);
}); //but it also repeats numbers, NO ZERO though!

//I will get an array 
//there might be a random "undefined", which I would need to skip
//I can use this array for computer turns ?
//but I would also need to check if the spot is taken or not 

	// numbers = [1,2,3,4,5,6,7,8,9];
	// 	var arr = [];
	// while(arr.length < 9){
	// 	var random = numbers[Math.floor(Math.random()*10)]; //prints a num between 0 and 9
	// if(arr.indexOf(random) > -1) continue;
 //    	arr[arr.length] = random;
	// }
	// 	console.log(arr);

	//NEED TO ENSURE THAT THE COMPUTER DOESN'T REPEAT THE NUMBERS
	//do like an array and then change the index to -1 of the taken num?

//PLAYER CHOOSES X:

	$("#x").click(function(){
		player = $("#x");
		computer = $("#o");
		$(".choose-xo").hide();

		//numbers clicks:

		$("#1").one("click", function(e){
			e.preventDefault();
			$("#1").html(player).text("X");
			score.push(1);
			console.log(score); 
		})

		$("#2").one("click", function(e){
			e.preventDefault();
			$("#2").html(player).text("X");
			score.push(2);
			console.log(score); 
		})

		$("#3").one("click", function(e){
			e.preventDefault();
			$("#3").html(player).text("X");
			score.push(3);
			console.log(score);
		})

		$("#4").one("click", function(e){
			e.preventDefault();
			$("#4").html(player).text("X");
			score.push(4);
			console.log(score);
		})


		$("#5").one("click", function(e){
			e.preventDefault();
			$("#5").html(player).text("X");
			score.push(5);
			console.log(score);
		})


		$("#6").one("click", function(e){
			e.preventDefault();
			$("#6").html(player).text("X");
			score.push(6);
			console.log(score);
		})


		$("#7").one("click", function(e){
			e.preventDefault();
			$("#7").html(player).text("X");
			score.push(7);
			console.log(score);
		})


		$("#8").one("click", function(e){
			e.preventDefault();
			$("#8").html(player).text("X");
			score.push(8);
			console.log(score);
		})


		$("#9").one("click", function(e){
			e.preventDefault();
			$("#9").html(player).text("X");
			score.push(9);
			console.log(score);
		})

		//COMPUTER'S LOGIC:

		//this actually selects a random number slot 	wow	
		//$("#"+random).html(computer);
		// $("#7").html(computer);
		$("#generate").click(function getRandom() {

		numbers = [1,2,3,4,5,6,7,8,9];
			var arr = [];
		while(arr.length < 9){
			var random = numbers[Math.floor(Math.random()*10)]; //prints a num between 0 and 9
		if(arr.indexOf(random) > -1) continue;
	    	arr[arr.length] = random;
		}
			console.log(random);

  		// console.log(random !== score);

  		//THIS HELPED! Now computer CAN'T override mine,
  		//but I can still override computer's ...which is ..hmm... I shouldn't do that 
  		if (score.includes(random) === false) { 
  		$("#"+random).html(computer).text("O");
  		} 
  		//this makes computer go, anytime I click the "Computer"
  		//ISSUES: computer still can generate the same numbers, so I might need more clicks

  		// var randoms = [];
  		// randoms.push(random);
  		// console.log(randoms);
  		//this only generates one time, not the previous times
  		//I need to be able to get an array, so that I can check if computer's won
  		//Can I check what spots are covered with Os? 

}); //random num function


	});

//PLAYER CHOOSES O:

	$("#o").click(function(){
		player = $("#o");
		computer = $("#x");
		$(".choose-xo").hide();

		//numbers clicks:

		$("#1").one("click", function(e){
			e.preventDefault();
			$("#1").html(player).text("O");
			score.push(1);
			console.log(score); 
		})

		$("#2").one("click", function(e){
			e.preventDefault();
			$("#2").html(player).text("O");
			score.push(2);
			console.log(score); 
		})

		$("#3").one("click", function(e){
			e.preventDefault();
			$("#3").html(player).text("O");
			score.push(3);
			console.log(score); 
		})

				$("#4").one("click", function(e){
			e.preventDefault();
			$("#4").html(player).text("O");
			score.push(4);
			console.log(score);
		})


		$("#5").one("click", function(e){
			e.preventDefault();
			$("#5").html(player).text("O");
			score.push(5);
			console.log(score);
		})


		$("#6").one("click", function(e){
			e.preventDefault();
			$("#6").html(player).text("O");
			score.push(6);
			console.log(score);
		})


		$("#7").one("click", function(e){
			e.preventDefault();
			$("#7").html(player).text("O");
			score.push(7);
			console.log(score);
		})


		$("#8").one("click", function(e){
			e.preventDefault();
			$("#8").html(player).text("O");
			score.push(8);
			console.log(score);
		})


		$("#9").one("click", function(e){
			e.preventDefault();
			$("#9").html(player).text("O");
			score.push(9);
			console.log(score);
		})


	});


	//RESULTS:
	//I also need to SORT the array from smallest to the largest
	//remove doubles 
	//or filter score so it only contains one of each number 
	//then filter winningArray if it matches score or if it includes score?

	// score = [4,5,6];

	// console.log(winningArray[2]);
	// console.log(score);

	//i iterates through winningArray, and checks for score, returns many falses and a true 
	//what to do next?
	for (var i=0; i < winningArray.length; i++){
		// console.log(JSON.stringify(winningArray[i])==JSON.stringify(score));
		if (JSON.stringify(winningArray[i]).includes(JSON.stringify(score))){
			// console.log("yes");
			// console.log(JSON.stringify(score));
		}
		// else {
		// 	console.log("no");
		// }
	}

	//console.log(JSON.stringify(winningArray[i])==JSON.stringify(score));


	

}); //doc ready ends
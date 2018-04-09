
$(document).ready(function(){

var player;
var computer;

//var winningArray = [[1,2,3], [1,4,7], [1,5,9], [2,5,8], [3,5,7], [3,6,9], [4,5,6], [7,8,9]]
var score = [];

var compScore = [];     //global variable to keep track of randoms
var uniqueComp = [];

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
			score.sort();
			console.log(score); 
			checkScore();
		})

		$("#2").one("click", function(e){
			e.preventDefault();
			$("#2").html(player).text("X");
			score.push(2);
			score.sort();
			console.log(score); 
			checkScore();
		})

		$("#3").one("click", function(e){
			e.preventDefault();
			$("#3").html(player).text("X");
			score.push(3);
			score.sort();
			console.log(score);
			checkScore();
		})

		$("#4").one("click", function(e){
			e.preventDefault();
			$("#4").html(player).text("X");
			score.push(4);
			score.sort();
			console.log(score);
			checkScore();
		})

		$("#5").one("click", function(e){
			e.preventDefault();
			$("#5").html(player).text("X");
			score.push(5);
			score.sort();
			console.log(score);
			checkScore();
		})

		$("#6").one("click", function(e){
			e.preventDefault();
			$("#6").html(player).text("X");
			score.push(6);
			score.sort();
			console.log(score);
			checkScore();
		})

		$("#7").one("click", function(e){
			e.preventDefault();
			$("#7").html(player).text("X");
			score.push(7);
			score.sort();
			console.log(score);
			checkScore();
		})

		$("#8").one("click", function(e){
			e.preventDefault();
			$("#8").html(player).text("X");
			score.push(8);
			score.sort();
			console.log(score);
			checkScore();
		})

		$("#9").one("click", function(e){
			e.preventDefault();
			$("#9").html(player).text("X");
			score.push(9);
			score.sort();
			console.log(score);
			checkScore();
		})

	//COMPUTER'S LOGIC:

		//this actually selects a random number slot 	wow	
		//$("#"+random).html(computer);
		// $("#7").html(computer);
	
    $("#generate").click(function getRandom() {

		numbers = [1,2,3,4,5,6,7,8,9];
			var arr = [];
		while(arr.length < 9){
			var random = numbers[Math.floor(Math.random()*10)]; //gets a num between 0 and 9
		if(arr.indexOf(random) > -1) continue;
	    	arr[arr.length] = random;
		}
		compScore.push(random);

		compScore = compScore.filter(Number); //removes undefined

		//removes doubles:
		var uniqueComp = compScore.filter(function(elem, index, self){
			return index == self.indexOf(elem);
		});

		uniqueComp.sort();  //sorts from lowest to highest
		console.log(uniqueComp);

		//removes positions the same as score's:
		for (var i =0; i < uniqueComp.length; i++){
			for (var k =0; k < score.length; k++){
			if (uniqueComp[i] === score[k]){
				index = uniqueComp.indexOf(score[k]);
				while (index > -1){
					uniqueComp.splice(index, 1);
					console.log(uniqueComp);
					break;
				}
			}
		  }
		}

  		//THIS HELPED! Now computer CAN'T override mine,
  		//but I can still override computer's ...which is ..hmm... I shouldn't do that 
  		if (score.includes(random) === false) { 
  		$("#"+random).html(computer).text("O");
  		} 

//[[1,2,3], [1,4,7], [1,5,9], [2,5,8], [3,5,7], [3,6,9], [4,5,6], [7,8,9]]

  		//console.log(uniqueComp.indexOf(1));
  		//CHECKING IF COMPUTER HAS WON:

  		if (uniqueComp.indexOf(1) > -1 && uniqueComp.indexOf(2) > -1 && uniqueComp.indexOf(3) > -1){
  			console.log("computer has won!");
  		}
  		if (uniqueComp.indexOf(1) > -1 && uniqueComp.indexOf(4) > -1 && uniqueComp.indexOf(7) > -1){
  			console.log("computer has won!");
  		}
  		if (uniqueComp.indexOf(1) > -1 && uniqueComp.indexOf(5) > -1 && uniqueComp.indexOf(9) > -1){
  			console.log("computer has won!");
  		}
  		if (uniqueComp.indexOf(2) > -1 && uniqueComp.indexOf(5) > -1 && uniqueComp.indexOf(8) > -1){
  			console.log("computer has won!");
  		}
  		if (uniqueComp.indexOf(3) > -1 && uniqueComp.indexOf(5) > -1 && uniqueComp.indexOf(7) > -1){
  			console.log("computer has won!");
  		}
  		if (uniqueComp.indexOf(3) > -1 && uniqueComp.indexOf(6) > -1 && uniqueComp.indexOf(9) > -1){
  			console.log("computer has won!");
  		}
  		if (uniqueComp.indexOf(4) > -1 && uniqueComp.indexOf(5) > -1 && uniqueComp.indexOf(6) > -1){
  			console.log("computer has won!");
  		}
  		if (uniqueComp.indexOf(7) > -1 && uniqueComp.indexOf(8) > -1 && uniqueComp.indexOf(9) > -1){
  			console.log("computer has won!");
  		}

	}); //random num function

}); //player chooses x func end

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
			score.sort();
			console.log(score);
			checkScore();
		})

		$("#2").one("click", function(e){
			e.preventDefault();
			$("#2").html(player).text("O");
			score.push(2);
			score.sort();
			console.log(score);
			checkScore();
		})

		$("#3").one("click", function(e){
			e.preventDefault();
			$("#3").html(player).text("O");
			score.push(3);
			score.sort();
			console.log(score);
			checkScore();
		})

		$("#4").one("click", function(e){
			e.preventDefault();
			$("#4").html(player).text("O");
			score.push(4);
			score.sort();
			console.log(score);
			checkScore();
		})

		$("#5").one("click", function(e){
			e.preventDefault();
			$("#5").html(player).text("O");
			score.push(5);
			score.sort();
			console.log(score);
			checkScore();
		})

		$("#6").one("click", function(e){
			e.preventDefault();
			$("#6").html(player).text("O");
			score.push(6);
			score.sort();
			console.log(score);
			checkScore();
		})

		$("#7").one("click", function(e){
			e.preventDefault();
			$("#7").html(player).text("O");
			score.push(7);
			score.sort();
			console.log(score);
			checkScore();
		})

		$("#8").one("click", function(e){
			e.preventDefault();
			$("#8").html(player).text("O");
			score.push(8);
			score.sort();
			console.log(score);
			checkScore();
		})

		$("#9").one("click", function(e){
			e.preventDefault();
			$("#9").html(player).text("O");
			score.push(9);
			score.sort();
			console.log(score);
			checkScore();
		})

	//COMPUTER'S LOGIC:

		//this actually selects a random number slot 	wow	
		//$("#"+random).html(computer);
		// $("#7").html(computer);

	$("#generate").click(function getRandom() {

		numbers = [1,2,3,4,5,6,7,8,9];
			var arr = [];
		while(arr.length < 9){
			var random = numbers[Math.floor(Math.random()*10)]; //gets a num between 0 and 9
		if(arr.indexOf(random) > -1) continue;
	    	arr[arr.length] = random;
		}
		compScore.push(random);

		compScore = compScore.filter(Number); //removes undefined

		//removes doubles:
		var uniqueComp = compScore.filter(function(elem, index, self){
			return index == self.indexOf(elem);
		});

		uniqueComp.sort();  //sorts from lowest to highest
		console.log(uniqueComp);

		//removes positions the same as score's:
		for (var i =0; i < uniqueComp.length; i++){
			for (var k =0; k < score.length; k++){
			if (uniqueComp[i] === score[k]){
				index = uniqueComp.indexOf(score[k]);
				while (index > -1){
					uniqueComp.splice(index, 1);
					console.log(uniqueComp);
					break;
				}
			}
		  }
		}

  		//THIS HELPED! Now computer CAN'T override mine,
  		//but I can still override computer's ...which is ..hmm... I shouldn't do that 
  		if (score.includes(random) === false) { 
  		$("#"+random).html(computer).text("X");
  		} 

//[[1,2,3], [1,4,7], [1,5,9], [2,5,8], [3,5,7], [3,6,9], [4,5,6], [7,8,9]]

  		//console.log(uniqueComp.indexOf(1));
  		//CHECKING IF COMPUTER HAS WON:

  		if (uniqueComp.indexOf(1) > -1 && uniqueComp.indexOf(2) > -1 && uniqueComp.indexOf(3) > -1){
  			console.log("computer has won!");
  		}
  		if (uniqueComp.indexOf(1) > -1 && uniqueComp.indexOf(4) > -1 && uniqueComp.indexOf(7) > -1){
  			console.log("computer has won!");
  		}
  		if (uniqueComp.indexOf(1) > -1 && uniqueComp.indexOf(5) > -1 && uniqueComp.indexOf(9) > -1){
  			console.log("computer has won!");
  		}
  		if (uniqueComp.indexOf(2) > -1 && uniqueComp.indexOf(5) > -1 && uniqueComp.indexOf(8) > -1){
  			console.log("computer has won!");
  		}
  		if (uniqueComp.indexOf(3) > -1 && uniqueComp.indexOf(5) > -1 && uniqueComp.indexOf(7) > -1){
  			console.log("computer has won!");
  		}
  		if (uniqueComp.indexOf(3) > -1 && uniqueComp.indexOf(6) > -1 && uniqueComp.indexOf(9) > -1){
  			console.log("computer has won!");
  		}
  		if (uniqueComp.indexOf(4) > -1 && uniqueComp.indexOf(5) > -1 && uniqueComp.indexOf(6) > -1){
  			console.log("computer has won!");
  		}
  		if (uniqueComp.indexOf(7) > -1 && uniqueComp.indexOf(8) > -1 && uniqueComp.indexOf(9) > -1){
  			console.log("computer has won!");
  		}

}); //random num function

}); //player chooses o func end

	//CHECKING IF PLAYER HAS WON:
  	function checkScore(){

		if (score.indexOf(1) > -1 && score.indexOf(2) > -1 && score.indexOf(3) > -1){
  			console.log("You won!");
  		}
  		if (score.indexOf(1) > -1 && score.indexOf(4) > -1 && score.indexOf(7) > -1){
  			console.log("You won!");
  		}
  		if (score.indexOf(1) > -1 && score.indexOf(5) > -1 && score.indexOf(9) > -1){
  			console.log("You won!");
  		}
  		if (score.indexOf(2) > -1 && score.indexOf(5) > -1 && score.indexOf(8) > -1){
  			console.log("You won!");
  		}
  		if (score.indexOf(3) > -1 && score.indexOf(5) > -1 && score.indexOf(7) > -1){
  			console.log("You won!");
  		}
  		if (score.indexOf(3) > -1 && score.indexOf(6) > -1 && score.indexOf(9) > -1){
  			console.log("You won!");
  		}
  		if (score.indexOf(4) > -1 && score.indexOf(5) > -1 && score.indexOf(6) > -1){
  			console.log("You won!");
  		}
  		if (score.indexOf(7) > -1 && score.indexOf(8) > -1 && score.indexOf(9) > -1){
  			console.log("You won!");
  		}
  	}

}); //doc ready ends

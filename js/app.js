console.log('konnektd')

$(document).ready(function() {

//Arrays and World Variables
	var squareDivArray = [
	['7',1],['6',1],['5',1],['4',1],['3',1],['2',1],['1',1],
	['7',2],['6',2],['5',2],['4',2],['3',2],['2',2],['1',2],
	['7',3],['6',3],['5',3],['4',3],['3',3],['2',3],['1',3],
	['7',4],['6',4],['5',4],['4',4],['3',4],['2',4],['1',4],
	['7',5],['6',5],['5',5],['4',5],['3',5],['2',5],['1',5],
	['7',6],['6',6],['5',6],['4',6],['3',6],['2',6],['1',6],
	];

	var boardDiv = ['board-0','board-1','board-2','board-3'];

	var pOneArray = [];

	var pTwoArray = [];

//Start Button toggles Game Board and prompts P1 Name Submit
	$('#start-button').one('click', function() {
		$('#start-button').fadeToggle(250);//Start is hidden
		$('.game-board').fadeToggle(1500);//Game Board is active
		$('.player-one').fadeToggle(1500);//Player 1 Name is active
		$('.drop-button').fadeToggle(1500);//Toggles drop buttons on
	});

//Loop to generate Square Divs and Board Divs
	$.each(boardDiv, function(i) {
		var $createDiv = $('<div>')
		$($createDiv).prependTo('.game-board').addClass('board-borders').attr('id', boardDiv[i])
	})

	$.each(squareDivArray, function(i) {
		var $createDiv = $('<div>')
		$($createDiv).prependTo('.game-board').addClass('game-square').attr('id', squareDivArray[i][0]+squareDivArray[i][1]).attr('data-x', squareDivArray[i][0]).attr('data-y', squareDivArray[i][1])
	})

//Player One Name
	$('#player-one-button').one('click', function(event) {
		event.preventDefault()
		var $playerOneName = $('#player-one-input').val();
		$('#p-one-name').html('<span>player one:</span> ' + $playerOneName);
		$('.player-one').fadeToggle(1500);//Player 1 Name is hidden
		$('.player-two').fadeToggle(1500);//Player 2 Name is active
		$('#p-one-name').fadeToggle(1500);//Player 1 Name tracker is active
	});

//Player Two Name
	$('#player-two-button').one('click', function(event) {
		event.preventDefault()
		var $playerTwoName = $('#player-two-input').val();
		$('#p-two-name').html('<span>player two:</span> ' + $playerTwoName);
		$('.player-two').fadeToggle(1500);//Player 2 Name is hidden
		$('#p-two-name').fadeToggle(1500);//Player 2 Name tracker is active
		connectFour.addClickCoin();
		connectFour.playerOneBold();
		connectFour.playerTwoBold();
	});


//GAME START
	var connectFour = {

	turnPlayer: function() {
		return (connectFour.turn & 1) ? 'player2' : 'player1';
	},

	turn: 0,

	//Sets up click events on Drop Buttons
	addClickCoin: function() {

		$('#row-a').on('click', function(turn) {
			connectFour.rowA(turn);
			console.log('p1: ' + pOneArray)
			console.log('p2: ' + pTwoArray)
		})
		$('#row-b').on('click', function(turn) {
			connectFour.rowB(turn);
			console.log('p1: ' + pOneArray)
			console.log('p2: ' + pTwoArray)
		})
		$('#row-c').on('click', function(turn) {
			connectFour.rowC(turn);
			console.log('p1: ' + pOneArray)
			console.log('p2: ' + pTwoArray)
		})
		$('#row-d').on('click', function(turn) {
			connectFour.rowD(turn);
			console.log('p1: ' + pOneArray)
			console.log('p2: ' + pTwoArray)
		})
		$('#row-e').on('click', function(turn) {
			connectFour.rowE(turn);
			console.log('p1: ' + pOneArray)
			console.log('p2: ' + pTwoArray)
		})
		$('#row-f').on('click', function(turn) {
			connectFour.rowF(turn);
			console.log('p1: ' + pOneArray)
			console.log('p2: ' + pTwoArray)
		})
		$('#row-g').on('click', function(turn) {
			connectFour.rowG(turn);
			console.log('p1: ' + pOneArray)
			console.log('p2: ' + pTwoArray)
		})
	},

	rowA: function() {

		var turnCoin = function(turn) {
			turn = connectFour.turn;
			return (turn & 1) ? 'img/bitcoin-img.png' : 'img/dogecoin-img.png';
		}

		$('#p-one-name').toggleClass('player-bold'); //disables active, enables inactive
		$('#p-two-name').toggleClass('player-bold');
		$('#bit-flash').toggleClass('hide'); //disables flashing coin notifier
		$('#doge-flash').toggleClass('show');
		connectFour.turn ++;
		
		if ($('#16').children().length > 0) {
			return false;
		} 
		else if ($('#15').children().length > 0) {
			$('<img>').appendTo('#16').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#16').attr('id')) : pOneArray.push($('#16').attr('id'))
		} 
		else if ($('#14').children().length > 0) {
			$('<img>').appendTo('#15').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#15').attr('id')) : pOneArray.push($('#15').attr('id'))
		} 
		else if ($('#13').children().length > 0) {
			$('<img>').appendTo('#14').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#14').attr('id')) : pOneArray.push($('#14').attr('id'))
		} 
		else if ($('#12').children().length > 0) {
			$('<img>').appendTo('#13').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#13').attr('id')) : pOneArray.push($('#13').attr('id'))
		} 
		else if ($('#11').children().length > 0) {
			$('<img>').appendTo('#12').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#12').attr('id')) : pOneArray.push($('#12').attr('id'))
		} 
		else if ($('#11').children().length <= 0) {
			$('<img>').appendTo('#11').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#11').attr('id')) : pOneArray.push($('#11').attr('id'))
		} 
	},

	rowB: function() {
		var turnCoin = function(turn) {
			turn = connectFour.turn;
			return (turn & 1) ? 'img/bitcoin-img.png' : 'img/dogecoin-img.png';
		}

		$('#p-one-name').toggleClass('player-bold'); //disables active, enables inactive
		$('#p-two-name').toggleClass('player-bold');
		$('#bit-flash').toggleClass('hide'); //disables flashing coin notifier
		$('#doge-flash').toggleClass('show');
		connectFour.turn ++;

		if ($('#26').children().length > 0) {
			return false;
		} 
		else if ($('#25').children().length > 0) {
			$('<img>').appendTo('#26').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#26').attr('id')) : pOneArray.push($('#26').attr('id'))
		} 
		else if ($('#24').children().length > 0) {
			$('<img>').appendTo('#25').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#25').attr('id')) : pOneArray.push($('#25').attr('id'))
		} 
		else if ($('#23').children().length > 0) {
			$('<img>').appendTo('#24').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#24').attr('id')) : pOneArray.push($('#24').attr('id'))
		} 
		else if ($('#22').children().length > 0) {
			$('<img>').appendTo('#23').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#23').attr('id')) : pOneArray.push($('#23').attr('id'))
		} 
		else if ($('#21').children().length > 0) {
			$('<img>').appendTo('#22').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#22').attr('id')) : pOneArray.push($('#22').attr('id'))
		} 
		else if ($('#21').children().length <= 0) {
			$('<img>').appendTo('#21').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#21').attr('id')) : pOneArray.push($('#21').attr('id'))
		} 
	},

	rowC: function() {
		var turnCoin = function(turn) {
			turn = connectFour.turn;
			return (turn & 1) ? 'img/bitcoin-img.png' : 'img/dogecoin-img.png';
		}

		$('#p-one-name').toggleClass('player-bold'); //disables active, enables inactive
		$('#p-two-name').toggleClass('player-bold');
		$('#bit-flash').toggleClass('hide'); //disables flashing coin notifier
		$('#doge-flash').toggleClass('show');
		connectFour.turn ++;

		if ($('#36').children().length > 0) {
			return false;
		} 
		else if ($('#35').children().length > 0) {
			$('<img>').appendTo('#36').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#36').attr('id')) : pOneArray.push($('#36').attr('id'))
		} 
		else if ($('#34').children().length > 0) {
			$('<img>').appendTo('#35').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#35').attr('id')) : pOneArray.push($('#35').attr('id'))
		} 
		else if ($('#33').children().length > 0) {
			$('<img>').appendTo('#34').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#34').attr('id')) : pOneArray.push($('#34').attr('id'))
		} 
		else if ($('#32').children().length > 0) {
			$('<img>').appendTo('#33').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#33').attr('id')) : pOneArray.push($('#33').attr('id'))
		} 
		else if ($('#31').children().length > 0) {
			$('<img>').appendTo('#32').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#32').attr('id')) : pOneArray.push($('#32').attr('id'))
		} 
		else if ($('#31').children().length <= 0) {
			$('<img>').appendTo('#31').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#31').attr('id')) : pOneArray.push($('#31').attr('id'))
		} 
	},

	rowD: function() {
		var turnCoin = function(turn) {
			turn = connectFour.turn;
			return (turn & 1) ? 'img/bitcoin-img.png' : 'img/dogecoin-img.png';
		}

		$('#p-one-name').toggleClass('player-bold'); //disables active, enables inactive
		$('#p-two-name').toggleClass('player-bold');
		$('#bit-flash').toggleClass('hide'); //disables flashing coin notifier
		$('#doge-flash').toggleClass('show');
		connectFour.turn ++;

		if ($('#d6').children().length > 0) {
			return false;
		} 
		else if ($('#45').children().length > 0) {
			$('<img>').appendTo('#46').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#46').attr('id')) : pOneArray.push($('#46').attr('id'))
		} 
		else if ($('#44').children().length > 0) {
			$('<img>').appendTo('#45').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#45').attr('id')) : pOneArray.push($('#45').attr('id'))
		} 
		else if ($('#43').children().length > 0) {
			$('<img>').appendTo('#44').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#44').attr('id')) : pOneArray.push($('#44').attr('id'))
		} 
		else if ($('#42').children().length > 0) {
			$('<img>').appendTo('#43').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#43').attr('id')) : pOneArray.push($('#43').attr('id'))
		} 
		else if ($('#41').children().length > 0) {
			$('<img>').appendTo('#42').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#42').attr('id')) : pOneArray.push($('#42').attr('id'))
		} 
		else if ($('#41').children().length <= 0) {
			$('<img>').appendTo('#41').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#41').attr('id')) : pOneArray.push($('#41').attr('id'))
		} 
	},

	rowE: function() {
		var turnCoin = function(turn) {
			turn = connectFour.turn;
			return (turn & 1) ? 'img/bitcoin-img.png' : 'img/dogecoin-img.png';
		}

		$('#p-one-name').toggleClass('player-bold'); //disables active, enables inactive
		$('#p-two-name').toggleClass('player-bold');
		$('#bit-flash').toggleClass('hide'); //disables flashing coin notifier
		$('#doge-flash').toggleClass('show');
		connectFour.turn ++;

		if ($('#56').children().length > 0) {
			return false;
		} 
		else if ($('#55').children().length > 0) {
			$('<img>').appendTo('#56').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#56').attr('id')) : pOneArray.push($('#56').attr('id'))
		} 
		else if ($('#54').children().length > 0) {
			$('<img>').appendTo('#55').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#55').attr('id')) : pOneArray.push($('#55').attr('id'))
		} 
		else if ($('#53').children().length > 0) {
			$('<img>').appendTo('#54').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#54').attr('id')) : pOneArray.push($('#54').attr('id'))
		} 
		else if ($('#52').children().length > 0) {
			$('<img>').appendTo('#53').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#53').attr('id')) : pOneArray.push($('#53').attr('id'))
		} 
		else if ($('#51').children().length > 0) {
			$('<img>').appendTo('#52').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#52').attr('id')) : pOneArray.push($('#52').attr('id'))
		} 
		else if ($('#51').children().length <= 0) {
			$('<img>').appendTo('#51').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#51').attr('id')) : pOneArray.push($('#51').attr('id'))
		} 
	},

	rowF: function() {
		var turnCoin = function(turn) {
			turn = connectFour.turn;
			return (turn & 1) ? 'img/bitcoin-img.png' : 'img/dogecoin-img.png';
		}

		$('#p-one-name').toggleClass('player-bold'); //disables active, enables inactive
		$('#p-two-name').toggleClass('player-bold');
		$('#bit-flash').toggleClass('hide'); //disables flashing coin notifier
		$('#doge-flash').toggleClass('show');
		connectFour.turn ++;

		if ($('#66').children().length > 0) {
			return false;
		} 
		else if ($('#65').children().length > 0) {
			$('<img>').appendTo('#66').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#66').attr('id')) : pOneArray.push($('#66').attr('id'))
		} 
		else if ($('#64').children().length > 0) {
			$('<img>').appendTo('#65').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#65').attr('id')) : pOneArray.push($('#65').attr('id'))
		} 
		else if ($('#63').children().length > 0) {
			$('<img>').appendTo('#64').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#64').attr('id')) : pOneArray.push($('#64').attr('id'))
		} 
		else if ($('#62').children().length > 0) {
			$('<img>').appendTo('#63').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#63').attr('id')) : pOneArray.push($('#63').attr('id'))
		} 
		else if ($('#61').children().length > 0) {
			$('<img>').appendTo('#62').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#62').attr('id')) : pOneArray.push($('#62').attr('id'))
		} 
		else if ($('#61').children().length <= 0) {
			$('<img>').appendTo('#61').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#61').attr('id')) : pOneArray.push($('#61').attr('id'))
		} 
	},

		rowG: function() {
		var turnCoin = function(turn) {
			turn = connectFour.turn;
			return (turn & 1) ? 'img/bitcoin-img.png' : 'img/dogecoin-img.png';
		}

		$('#p-one-name').toggleClass('player-bold'); //disables active, enables inactive
		$('#p-two-name').toggleClass('player-bold');
		$('#bit-flash').toggleClass('hide'); //disables flashing coin notifier
		$('#doge-flash').toggleClass('show');
		connectFour.turn ++;

		if ($('#76').children().length > 0) {
			return false;
		} 
		else if ($('#75').children().length > 0) {
			$('<img>').appendTo('#76').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#76').attr('id')) : pOneArray.push($('#76').attr('id'))
		} 
		else if ($('#74').children().length > 0) {
			$('<img>').appendTo('#75').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#75').attr('id')) : pOneArray.push($('#75').attr('id'))
		} 
		else if ($('#73').children().length > 0) {
			$('<img>').appendTo('#74').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#74').attr('id')) : pOneArray.push($('#74').attr('id'))
		} 
		else if ($('#72').children().length > 0) {
			$('<img>').appendTo('#73').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#73').attr('id')) : pOneArray.push($('#73').attr('id'))
		} 
		else if ($('#71').children().length > 0) {
			$('<img>').appendTo('#72').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#72').attr('id')) : pOneArray.push($('#72').attr('id'))
		} 
		else if ($('#71').children().length <= 0) {
			$('<img>').appendTo('#71').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#71').attr('id')) : pOneArray.push($('#71').attr('id'))
		} 
	},

	// newGame: function(clickedHere) { 
	// 	if ($(clickedHere).attr('data-x') === 'g') {
	// 		console.log('has g for data x');
	// 		if ($(clickedHere).has('img')) {
	// 			console.log('has img');
	// 			var aboveCircleY = $(clickedHere)[0].attributes[3].value;
	// 			var aboveCircleX = $(clickedHere)[0].attributes[2].value;
	// 			aboveCircleY++;
	// 			$('<img>').appendTo('#' + aboveCircleX + aboveCircleY).attr('src', 'img/bitcoin-img.png').attr('id', 'coin-drop')
	// 		} else {
	// 			console.log('no img');
	// 			$('<img>').appendTo('#g1').attr('src', 'img/bitcoin-img.png').attr('id', 'coin-drop')
	// 		}
	// 	}
	// },

//P1 Name bold for initial move
	playerOneBold: function() {
		var $bitImgTurn = $('<img>')
		$($bitImgTurn).prependTo('.container').attr('src', 'img/bitcoin-img.png').attr('id', 'bit-flash')
		$('#p-one-name').toggleClass('player-bold');
	},

//P2 Name bold for initial move
	playerTwoBold: function() {
		var $dogeImgTurn = $('<img>')
		$($dogeImgTurn).prependTo('.container').attr('src', 'img/dogecoin-img.png').attr('id', 'doge-flash')
	},

//Attach to next function: flash screen, animation drop, assign turn, notify of turn




	}
})
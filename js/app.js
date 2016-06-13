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

// //NEW DIV CREATION
// 	for (var i = 0; i < squareDivArrayTwo.length; i++) {
// 		for (var j = 0; j < squareDivArrayTwo[i].length; j++) {
// 			var $createDiv = $('<div>')
// 			$($createDiv).prependTo('.game-board').addClass('game-square').attr('id', squareDivArrayTwo[i][j]).attr('data-value', 0)
// 		}
// 	}

//Loop to generate Square Divs and Board Divs
	$.each(boardDiv, function(i) {
		var $createDiv = $('<div>')
		$($createDiv).prependTo('.game-board').addClass('board-borders').attr('id', boardDiv[i])
	})

	$.each(squareDivArray, function(i) {
		var $createDiv = $('<div>')
		$($createDiv).prependTo('.game-board').addClass('game-square').attr('id', squareDivArray[i][0]+squareDivArray[i][1]).attr('data-a', squareDivArray[i][0]).attr('data-b', squareDivArray[i][1])
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
			console.log(pOneArray);
			console.log(pTwoArray);
			connectFour.checkPlayerOne();

		})
		$('#row-b').on('click', function(turn) {
			connectFour.rowB(turn);
			console.log(pOneArray);
			console.log(pTwoArray);
			connectFour.checkPlayerOne();

		})
		$('#row-c').on('click', function(turn) {
			connectFour.rowC(turn);
			console.log(pOneArray);
			console.log(pTwoArray);
			connectFour.checkPlayerOne();

		})
		$('#row-d').on('click', function(turn) {
			connectFour.rowD(turn);
			console.log(pOneArray);
			console.log(pTwoArray);
			connectFour.checkPlayerOne();

		})
		$('#row-e').on('click', function(turn) {
			connectFour.rowE(turn);
			console.log(pOneArray);
			console.log(pTwoArray);
			connectFour.checkPlayerOne();

		})
		$('#row-f').on('click', function(turn) {
			connectFour.rowF(turn);
			console.log(pOneArray);
			console.log(pTwoArray);
			connectFour.checkPlayerOne();

		})
		$('#row-g').on('click', function(turn) {
			connectFour.rowG(turn);
			console.log(pOneArray);
			console.log(pTwoArray);
			connectFour.checkPlayerOne();

		})
	},

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

//Bitwise used to determine odd/even, ternary to shorten the if/else, spread operator
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
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#16')[0].attributes[2].value, $('#16')[0].attributes[3].value])) : (pOneArray.push([$('#16')[0].attributes[2].value, $('#16')[0].attributes[3].value]));
		} 
		else if ($('#14').children().length > 0) {
			$('<img>').appendTo('#15').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#15')[0].attributes[2].value, $('#15')[0].attributes[3].value])) : (pOneArray.push([$('#15')[0].attributes[2].value, $('#15')[0].attributes[3].value]));
		} 
		else if ($('#13').children().length > 0) {
			$('<img>').appendTo('#14').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#14')[0].attributes[2].value, $('#14')[0].attributes[3].value])) : (pOneArray.push([$('#14')[0].attributes[2].value, $('#14')[0].attributes[3].value]));
		} 
		else if ($('#12').children().length > 0) {
			$('<img>').appendTo('#13').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#13')[0].attributes[2].value, $('#13')[0].attributes[3].value])) : (pOneArray.push([$('#13')[0].attributes[2].value, $('#13')[0].attributes[3].value]));
		} 
		else if ($('#11').children().length > 0) {
			$('<img>').appendTo('#12').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#12')[0].attributes[2].value, $('#12')[0].attributes[3].value])) : (pOneArray.push([$('#12')[0].attributes[2].value, $('#12')[0].attributes[3].value]));
		} 
		else if ($('#11').children().length <= 0) {
			$('<img>').appendTo('#11').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#11')[0].attributes[2].value, $('#11')[0].attributes[3].value])) : (pOneArray.push([$('#11')[0].attributes[2].value, $('#11')[0].attributes[3].value]));
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
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#26')[0].attributes[2].value, $('#26')[0].attributes[3].value])) : (pOneArray.push([$('#26')[0].attributes[2].value, $('#26')[0].attributes[3].value]));
		} 
		else if ($('#24').children().length > 0) {
			$('<img>').appendTo('#25').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#25')[0].attributes[2].value, $('#25')[0].attributes[3].value])) : (pOneArray.push([$('#25')[0].attributes[2].value, $('#25')[0].attributes[3].value]));
		} 
		else if ($('#23').children().length > 0) {
			$('<img>').appendTo('#24').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#24')[0].attributes[2].value, $('#24')[0].attributes[3].value])) : (pOneArray.push([$('#24')[0].attributes[2].value, $('#24')[0].attributes[3].value]));
		} 
		else if ($('#22').children().length > 0) {
			$('<img>').appendTo('#23').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#23')[0].attributes[2].value, $('#23')[0].attributes[3].value])) : (pOneArray.push([$('#23')[0].attributes[2].value, $('#23')[0].attributes[3].value]));
		} 
		else if ($('#21').children().length > 0) {
			$('<img>').appendTo('#22').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#22')[0].attributes[2].value, $('#22')[0].attributes[3].value])) : (pOneArray.push([$('#22')[0].attributes[2].value, $('#22')[0].attributes[3].value]));
		} 
		else if ($('#21').children().length <= 0) {
			$('<img>').appendTo('#21').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#21')[0].attributes[2].value, $('#21')[0].attributes[3].value])) : (pOneArray.push([$('#21')[0].attributes[2].value, $('#21')[0].attributes[3].value]));
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
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#36')[0].attributes[2].value, $('#36')[0].attributes[3].value])) : (pOneArray.push([$('#36')[0].attributes[2].value, $('#36')[0].attributes[3].value]));
		} 
		else if ($('#34').children().length > 0) {
			$('<img>').appendTo('#35').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#35')[0].attributes[2].value, $('#35')[0].attributes[3].value])) : (pOneArray.push([$('#35')[0].attributes[2].value, $('#35')[0].attributes[3].value]));
		} 
		else if ($('#33').children().length > 0) {
			$('<img>').appendTo('#34').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#34')[0].attributes[2].value, $('#34')[0].attributes[3].value])) : (pOneArray.push([$('#34')[0].attributes[2].value, $('#34')[0].attributes[3].value]));
		} 
		else if ($('#32').children().length > 0) {
			$('<img>').appendTo('#33').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#33')[0].attributes[2].value, $('#33')[0].attributes[3].value])) : (pOneArray.push([$('#33')[0].attributes[2].value, $('#33')[0].attributes[3].value]));
		} 
		else if ($('#31').children().length > 0) {
			$('<img>').appendTo('#32').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#32')[0].attributes[2].value, $('#32')[0].attributes[3].value])) : (pOneArray.push([$('#32')[0].attributes[2].value, $('#32')[0].attributes[3].value]));
		} 
		else if ($('#31').children().length <= 0) {
			$('<img>').appendTo('#31').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#31')[0].attributes[2].value, $('#31')[0].attributes[3].value])) : (pOneArray.push([$('#31')[0].attributes[2].value, $('#31')[0].attributes[3].value]));
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

		if ($('#46').children().length > 0) {
			return false;
		}
		else if ($('#45').children().length > 0) {
			$('<img>').appendTo('#46').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#46')[0].attributes[2].value, $('#46')[0].attributes[3].value])) : (pOneArray.push([$('#46')[0].attributes[2].value, $('#46')[0].attributes[3].value]));
		} 
		else if ($('#44').children().length > 0) {
			$('<img>').appendTo('#45').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#45')[0].attributes[2].value, $('#45')[0].attributes[3].value])) : (pOneArray.push([$('#45')[0].attributes[2].value, $('#45')[0].attributes[3].value]));
		} 
		else if ($('#43').children().length > 0) {
			$('<img>').appendTo('#44').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#44')[0].attributes[2].value, $('#44')[0].attributes[3].value])) : (pOneArray.push([$('#44')[0].attributes[2].value, $('#44')[0].attributes[3].value]));
		} 
		else if ($('#42').children().length > 0) {
			$('<img>').appendTo('#43').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#43')[0].attributes[2].value, $('#43')[0].attributes[3].value])) : (pOneArray.push([$('#43')[0].attributes[2].value, $('#43')[0].attributes[3].value]));
		} 
		else if ($('#41').children().length > 0) {
			$('<img>').appendTo('#42').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#42')[0].attributes[2].value, $('#42')[0].attributes[3].value])) : (pOneArray.push([$('#42')[0].attributes[2].value, $('#42')[0].attributes[3].value]));
		} 
		else if ($('#41').children().length <= 0) {
			$('<img>').appendTo('#41').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#41')[0].attributes[2].value, $('#41')[0].attributes[3].value])) : (pOneArray.push([$('#41')[0].attributes[2].value, $('#41')[0].attributes[3].value]));
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
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#56')[0].attributes[2].value, $('#56')[0].attributes[3].value])) : (pOneArray.push([$('#56')[0].attributes[2].value, $('#56')[0].attributes[3].value]));
		} 
		else if ($('#54').children().length > 0) {
			$('<img>').appendTo('#55').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#55')[0].attributes[2].value, $('#55')[0].attributes[3].value])) : (pOneArray.push([$('#55')[0].attributes[2].value, $('#55')[0].attributes[3].value]));
		} 
		else if ($('#53').children().length > 0) {
			$('<img>').appendTo('#54').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#54')[0].attributes[2].value, $('#54')[0].attributes[3].value])) : (pOneArray.push([$('#54')[0].attributes[2].value, $('#54')[0].attributes[3].value]));
		} 
		else if ($('#52').children().length > 0) {
			$('<img>').appendTo('#53').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#53')[0].attributes[2].value, $('#53')[0].attributes[3].value])) : (pOneArray.push([$('#53')[0].attributes[2].value, $('#53')[0].attributes[3].value]));
		} 
		else if ($('#51').children().length > 0) {
			$('<img>').appendTo('#52').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#52')[0].attributes[2].value, $('#52')[0].attributes[3].value])) : (pOneArray.push([$('#52')[0].attributes[2].value, $('#52')[0].attributes[3].value]));
		} 
		else if ($('#51').children().length <= 0) {
			$('<img>').appendTo('#51').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#51')[0].attributes[2].value, $('#51')[0].attributes[3].value])) : (pOneArray.push([$('#51')[0].attributes[2].value, $('#51')[0].attributes[3].value]));
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
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#66')[0].attributes[2].value, $('#66')[0].attributes[3].value])) : (pOneArray.push([$('#66')[0].attributes[2].value, $('#66')[0].attributes[3].value]));
		} 
		else if ($('#64').children().length > 0) {
			$('<img>').appendTo('#65').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#65')[0].attributes[2].value, $('#65')[0].attributes[3].value])) : (pOneArray.push([$('#65')[0].attributes[2].value, $('#65')[0].attributes[3].value]));
		} 
		else if ($('#63').children().length > 0) {
			$('<img>').appendTo('#64').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#64')[0].attributes[2].value, $('#64')[0].attributes[3].value])) : (pOneArray.push([$('#64')[0].attributes[2].value, $('#64')[0].attributes[3].value]));
		} 
		else if ($('#62').children().length > 0) {
			$('<img>').appendTo('#63').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#63')[0].attributes[2].value, $('#63')[0].attributes[3].value])) : (pOneArray.push([$('#63')[0].attributes[2].value, $('#63')[0].attributes[3].value]));
		} 
		else if ($('#61').children().length > 0) {
			$('<img>').appendTo('#62').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#62')[0].attributes[2].value, $('#62')[0].attributes[3].value])) : (pOneArray.push([$('#62')[0].attributes[2].value, $('#62')[0].attributes[3].value]));
		} 
		else if ($('#61').children().length <= 0) {
			$('<img>').appendTo('#61').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#61')[0].attributes[2].value, $('#61')[0].attributes[3].value])) : (pOneArray.push([$('#61')[0].attributes[2].value, $('#61')[0].attributes[3].value]));
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
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#76')[0].attributes[2].value, $('#76')[0].attributes[3].value])) : (pOneArray.push([$('#76')[0].attributes[2].value, $('#76')[0].attributes[3].value]));
		} 
		else if ($('#74').children().length > 0) {
			$('<img>').appendTo('#75').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#75')[0].attributes[2].value, $('#75')[0].attributes[3].value])) : (pOneArray.push([$('#75')[0].attributes[2].value, $('#75')[0].attributes[3].value]));
		} 
		else if ($('#73').children().length > 0) {
			$('<img>').appendTo('#74').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#74')[0].attributes[2].value, $('#74')[0].attributes[3].value])) : (pOneArray.push([$('#74')[0].attributes[2].value, $('#74')[0].attributes[3].value]));
		} 
		else if ($('#72').children().length > 0) {
			$('<img>').appendTo('#73').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#73')[0].attributes[2].value, $('#73')[0].attributes[3].value])) : (pOneArray.push([$('#73')[0].attributes[2].value, $('#73')[0].attributes[3].value]));
		} 
		else if ($('#71').children().length > 0) {
			$('<img>').appendTo('#72').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#72')[0].attributes[2].value, $('#72')[0].attributes[3].value])) : (pOneArray.push([$('#72')[0].attributes[2].value, $('#72')[0].attributes[3].value]));
		} 
		else if ($('#71').children().length <= 0) {
			$('<img>').appendTo('#71').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push([$('#71')[0].attributes[2].value, $('#71')[0].attributes[3].value])) : (pOneArray.push([$('#71')[0].attributes[2].value, $('#71')[0].attributes[3].value]));
		}
	},


//Function to sort integers
	sortInt: function(a,b) {
		return a[0]-b[0];
	},

//if array has b-1,b-2,b-3 && a === a
	//then winner W-E

//if array has a-1,a-2,a-3 && b === b
	//then winner N-S

//if array has a-1,a-2,a-3 && b-1,b-2,b-3
	//then winner NE-SW

//if array has a-1,a-2,a-3 && b+1,b+2,b+3
	//then winner NW-SE

//Parse P1 Array
	checkPlayerOne: function() {
		// var resultOne = pOneArray.map(function(x) {
		// 	return parseInt(x, 10);
		// });

		var sortedOne = pOneArray.sort(connectFour.sortInt);
		//var sortedOneSlice = sortedOne.slice(sortedOne.length-4, sortedOne.length)

		for (var i = 0; i < sortedOne.length; i++) {
			var sortedOneY = sortedOne[i];
			for (var j = 0; j < sortedOneY.length; j++) {
				if (sortedOneY[i][1] - sortedOneY[i++][1] === '1' && sortedOneY[i][1] - sortedOneY[i++][1] === '2' && sortedOneY[i][1] - sortedOneY[i++][1] === '3' && sortedOneY[i][0] - sortedOneY[i++][0] === '0') {
					console.log('win W-E')
				} else if (sortedOneY[i][0] - sortedOneY[i++][0] === '1' && sortedOneY[i][0] - sortedOneY[i++][0] === '2' && sortedOneY[i][0] - sortedOneY[i++][0] === '3' && sortedOneY[i][1] - sortedOneY[i++][1] === '0') {
					console.log('win N-S')
				} else if (sortedOneY[i][0] - sortedOneY[i++][0] === '1' && sortedOneY[i][0] - sortedOneY[i++][0] === '2' && sortedOneY[i][0] - sortedOneY[i++][0] === '3' && sortedOneY[i][1] - sortedOneY[i++][1] === '1' && sortedOneY[i][1] - sortedOneY[i++][1] === '2' && sortedOneY[i][1] - sortedOneY[i++][1] === '3') {
					console.log('win NE-SW')
				}
			}
		}
	},

// //Parse P2 Array
// 	checkPlayerTwo: function() {
// 		var resultTwo = pTwoArray.map(function(x) {
// 			return parseInt(x, 10);
// 		});

// 		var sortedTwo = resultTwo.sort(connectFour.sortInt);
// 		var sortedTwoSlice = sortedTwo.slice(sortedTwo.length-4, sortedTwo.length)

// 		if (sortedTwoSlice.length >= 4)  {

// 			if (Math.max(sortedTwo) - Math.min(sortedTwo) === 30) {
// 				console.log('p2 winner W-E');
// 			}

// 			else if (Math.max(sortedTwo) - Math.min(sortedTwo) === 3) {
// 				console.log('p2 winner N-S');
// 			}
			
// 			else if (Math.max(sortedTwo) - Math.min(sortedTwo) === 27) {
// 				console.log('p2 winner NW-SE');
// 			}

// 			else if (Math.max(sortedTwo) - Math.min(sortedTwo) === 33) {
// 				console.log('p2 winner NE-SW');
// 			}
// 		}
// 	},

}
})
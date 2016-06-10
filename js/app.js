console.log('konnektd')

$(document).ready(function() {

//Arrays and World Variables
	var squareDivArray = [
	['g',1],['f',1],['e',1],['d',1],['c',1],['b',1],['a',1],
	['g',2],['f',2],['e',2],['d',2],['c',2],['b',2],['a',2],
	['g',3],['f',3],['e',3],['d',3],['c',3],['b',3],['a',3],
	['g',4],['f',4],['e',4],['d',4],['c',4],['b',4],['a',4],
	['g',5],['f',5],['e',5],['d',5],['c',5],['b',5],['a',5],
	['g',6],['f',6],['e',6],['d',6],['c',6],['b',6],['a',6],
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

		$('#row-a').on('click', function() {
			connectFour.rowA();
			console.log('p1' + pOneArray)
			console.log('p2' + pTwoArray)
		})
		$('#row-b').on('click', function() {
			connectFour.rowB();
			console.log('p1' + pOneArray)
			console.log('p2' + pTwoArray)
		})
		$('#row-c').on('click', function() {
			connectFour.rowC();
			console.log('p1' + pOneArray)
			console.log('p2' + pTwoArray)
		})
		$('#row-d').on('click', function() {
			connectFour.rowD();
			console.log('p1' + pOneArray)
			console.log('p2' + pTwoArray)
		})
		$('#row-e').on('click', function() {
			connectFour.rowE();
			console.log('p1' + pOneArray)
			console.log('p2' + pTwoArray)
		})
		$('#row-f').on('click', function() {
			connectFour.rowF();
			console.log('p1' + pOneArray)
			console.log('p2' + pTwoArray)
		})
		$('#row-g').on('click', function() {
			connectFour.rowG();
			console.log('p1' + pOneArray)
			console.log('p2' + pTwoArray)
		})
	},

	rowA: function() {

		var turnCoin = function(turn) {
			turn = connectFour.turn;
			return (turn & 1) ? 'img/dogecoin-img.png' : 'img/bitcoin-img.png' ;
		}

		$('#p-one-name').toggleClass('player-bold'); //disables active, enables inactive
		$('#p-two-name').toggleClass('player-bold');
		$('#bit-flash').toggleClass('hide'); //disables flashing coin notifier
		$('#doge-flash').toggleClass('show');
		connectFour.turn ++;
		
		if ($('#a6').children().length > 0) {
			return false;
		} 
		else if ($('#a5').children().length > 0) {
			$('<img>').appendTo('#a6').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#a6').attr('id')) : pOneArray.push($('#a6').attr('id'))
		} 
		else if ($('#a4').children().length > 0) {
			$('<img>').appendTo('#a5').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#a5').attr('id')) : pOneArray.push($('#a5').attr('id'))
		} 
		else if ($('#a3').children().length > 0) {
			$('<img>').appendTo('#a4').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#a4').attr('id')) : pOneArray.push($('#a4').attr('id'))
		} 
		else if ($('#a2').children().length > 0) {
			$('<img>').appendTo('#a3').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#a3').attr('id')) : pOneArray.push($('#a3').attr('id'))
		} 
		else if ($('#a1').children().length > 0) {
			$('<img>').appendTo('#a2').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#a2').attr('id')) : pOneArray.push($('#a2').attr('id'))
		} 
		else if ($('#a1').children().length <= 0) {
			$('<img>').appendTo('#a1').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#a1').attr('id')) : pOneArray.push($('#a1').attr('id'))
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

		if ($('#b6').children().length > 0) {
			return false;
		} 
		else if ($('#b5').children().length > 0) {
			$('<img>').appendTo('#b6').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#b6').attr('id')) : pOneArray.push($('#b6').attr('id'))
		} 
		else if ($('#b4').children().length > 0) {
			$('<img>').appendTo('#b5').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#b5').attr('id')) : pOneArray.push($('#b5').attr('id'))
		} 
		else if ($('#b3').children().length > 0) {
			$('<img>').appendTo('#b4').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#b4').attr('id')) : pOneArray.push($('#b4').attr('id'))
		} 
		else if ($('#b2').children().length > 0) {
			$('<img>').appendTo('#b3').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#b3').attr('id')) : pOneArray.push($('#b3').attr('id'))
		} 
		else if ($('#b1').children().length > 0) {
			$('<img>').appendTo('#b2').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#b2').attr('id')) : pOneArray.push($('#b2').attr('id'))
		} 
		else if ($('#b1').children().length <= 0) {
			$('<img>').appendTo('#b1').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#b1').attr('id')) : pOneArray.push($('#b1').attr('id'))
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

		if ($('#c6').children().length > 0) {
			return false;
		} 
		else if ($('#c5').children().length > 0) {
			$('<img>').appendTo('#c6').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#c6').attr('id')) : pOneArray.push($('#c6').attr('id'))
		} 
		else if ($('#c4').children().length > 0) {
			$('<img>').appendTo('#c5').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#c5').attr('id')) : pOneArray.push($('#c5').attr('id'))
		} 
		else if ($('#c3').children().length > 0) {
			$('<img>').appendTo('#c4').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#c4').attr('id')) : pOneArray.push($('#c4').attr('id'))
		} 
		else if ($('#c2').children().length > 0) {
			$('<img>').appendTo('#c3').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#c3').attr('id')) : pOneArray.push($('#c3').attr('id'))
		} 
		else if ($('#c1').children().length > 0) {
			$('<img>').appendTo('#c2').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#c2').attr('id')) : pOneArray.push($('#c2').attr('id'))
		} 
		else if ($('#c1').children().length <= 0) {
			$('<img>').appendTo('#c1').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#c1').attr('id')) : pOneArray.push($('#c1').attr('id'))
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
		else if ($('#d5').children().length > 0) {
			$('<img>').appendTo('#d6').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#d6').attr('id')) : pOneArray.push($('#d6').attr('id'))
		} 
		else if ($('#d4').children().length > 0) {
			$('<img>').appendTo('#d5').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#d5').attr('id')) : pOneArray.push($('#d5').attr('id'))
		} 
		else if ($('#d3').children().length > 0) {
			$('<img>').appendTo('#d4').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#d4').attr('id')) : pOneArray.push($('#d4').attr('id'))
		} 
		else if ($('#d2').children().length > 0) {
			$('<img>').appendTo('#d3').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#d3').attr('id')) : pOneArray.push($('#d3').attr('id'))
		} 
		else if ($('#d1').children().length > 0) {
			$('<img>').appendTo('#d2').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#d2').attr('id')) : pOneArray.push($('#d2').attr('id'))
		} 
		else if ($('#d1').children().length <= 0) {
			$('<img>').appendTo('#d1').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#d1').attr('id')) : pOneArray.push($('#d1').attr('id'))
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

		if ($('#e6').children().length > 0) {
			return false;
		} 
		else if ($('#e5').children().length > 0) {
			$('<img>').appendTo('#e6').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#e6').attr('id')) : pOneArray.push($('#e6').attr('id'))
		} 
		else if ($('#e4').children().length > 0) {
			$('<img>').appendTo('#e5').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#e5').attr('id')) : pOneArray.push($('#e5').attr('id'))
		} 
		else if ($('#e3').children().length > 0) {
			$('<img>').appendTo('#e4').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#e4').attr('id')) : pOneArray.push($('#e4').attr('id'))
		} 
		else if ($('#e2').children().length > 0) {
			$('<img>').appendTo('#e3').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#e3').attr('id')) : pOneArray.push($('#e3').attr('id'))
		} 
		else if ($('#e1').children().length > 0) {
			$('<img>').appendTo('#e2').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#e2').attr('id')) : pOneArray.push($('#e2').attr('id'))
		} 
		else if ($('#e1').children().length <= 0) {
			$('<img>').appendTo('#e1').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#e1').attr('id')) : pOneArray.push($('#e1').attr('id'))
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

		if ($('#f6').children().length > 0) {
			return false;
		} 
		else if ($('#f5').children().length > 0) {
			$('<img>').appendTo('#f6').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#f6').attr('id')) : pOneArray.push($('#f6').attr('id'))
		} 
		else if ($('#f4').children().length > 0) {
			$('<img>').appendTo('#f5').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#f5').attr('id')) : pOneArray.push($('#f5').attr('id'))
		} 
		else if ($('#f3').children().length > 0) {
			$('<img>').appendTo('#f4').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#f4').attr('id')) : pOneArray.push($('#f4').attr('id'))
		} 
		else if ($('#f2').children().length > 0) {
			$('<img>').appendTo('#f3').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#f3').attr('id')) : pOneArray.push($('#f3').attr('id'))
		} 
		else if ($('#f1').children().length > 0) {
			$('<img>').appendTo('#f2').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#f2').attr('id')) : pOneArray.push($('#f2').attr('id'))
		} 
		else if ($('#f1').children().length <= 0) {
			$('<img>').appendTo('#f1').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#f1').attr('id')) : pOneArray.push($('#f1').attr('id'))
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

		if ($('#g6').children().length > 0) {
			return false;
		} 
		else if ($('#g5').children().length > 0) {
			$('<img>').appendTo('#g6').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#g6').attr('id')) : pOneArray.push($('#g6').attr('id'))
		} 
		else if ($('#g4').children().length > 0) {
			$('<img>').appendTo('#g5').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#g5').attr('id')) : pOneArray.push($('#g5').attr('id'))
		} 
		else if ($('#g3').children().length > 0) {
			$('<img>').appendTo('#g4').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#g4').attr('id')) : pOneArray.push($('#g4').attr('id'))
		} 
		else if ($('#g2').children().length > 0) {
			$('<img>').appendTo('#g3').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#g3').attr('id')) : pOneArray.push($('#g3').attr('id'))
		} 
		else if ($('#g1').children().length > 0) {
			$('<img>').appendTo('#g2').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#g2').attr('id')) : pOneArray.push($('#g2').attr('id'))
		} 
		else if ($('#g1').children().length <= 0) {
			$('<img>').appendTo('#g1').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? pTwoArray.push($('#g1').attr('id')) : pOneArray.push($('#g1').attr('id'))
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
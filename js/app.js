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

	var pOneArrayY = [];

	var pTwoArrayY = [];

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
			connectFour.checkPlayerOne();
			connectFour.checkPlayerTwo();
			console.log('1x: '+pOneArray);
			console.log('1y: '+pOneArrayY);
			console.log('2x: '+pTwoArray);
			console.log('2y: '+pTwoArrayY);
		})
		$('#row-b').on('click', function(turn) {
			connectFour.rowB(turn);
			connectFour.checkPlayerOne();
			connectFour.checkPlayerTwo();
			console.log('1x: '+pOneArray);
			console.log('1y: '+pOneArrayY);
			console.log('2x: '+pTwoArray);
			console.log('2y: '+pTwoArrayY);
		})
		$('#row-c').on('click', function(turn) {
			connectFour.rowC(turn);
			connectFour.checkPlayerOne();
			connectFour.checkPlayerTwo();
			console.log('1x: '+pOneArray);
			console.log('1y: '+pOneArrayY);
			console.log('2x: '+pTwoArray);
			console.log('2y: '+pTwoArrayY);
		})
		$('#row-d').on('click', function(turn) {
			connectFour.rowD(turn);
			connectFour.checkPlayerOne();
			connectFour.checkPlayerTwo();
			console.log('1x: '+pOneArray);
			console.log('1y: '+pOneArrayY);
			console.log('2x: '+pTwoArray);
			console.log('2y: '+pTwoArrayY);
		})
		$('#row-e').on('click', function(turn) {
			connectFour.rowE(turn);
			connectFour.checkPlayerOne();
			connectFour.checkPlayerTwo();
			console.log('1x: '+pOneArray);
			console.log('1y: '+pOneArrayY);
			console.log('2x: '+pTwoArray);
			console.log('2y: '+pTwoArrayY);
		})
		$('#row-f').on('click', function(turn) {
			connectFour.rowF(turn);
			connectFour.checkPlayerOne();
			connectFour.checkPlayerTwo();
			console.log('1x: '+pOneArray);
			console.log('1y: '+pOneArrayY);
			console.log('2x: '+pTwoArray);
			console.log('2y: '+pTwoArrayY);
		})
		$('#row-g').on('click', function(turn) {
			connectFour.rowG(turn);
			connectFour.checkPlayerOne();
			connectFour.checkPlayerTwo();
			console.log('1x: '+pOneArray);
			console.log('1y: '+pOneArrayY);
			console.log('2x: '+pTwoArray);
			console.log('2y: '+pTwoArrayY);
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
			return (connectFour.turn & 1) ? (pTwoArray.push($('#16').attr('data-x')), pTwoArrayY.push($('#16').attr('data-y'))) : (pOneArray.push($('#16').attr('data-x')), pOneArrayY.push($('#16').attr('data-y')))
		} 
		else if ($('#14').children().length > 0) {
			$('<img>').appendTo('#15').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#15').attr('data-x')), pTwoArrayY.push($('#15').attr('data-y'))) : (pOneArray.push($('#15').attr('data-x')), pOneArrayY.push($('#15').attr('data-y')))
		} 
		else if ($('#13').children().length > 0) {
			$('<img>').appendTo('#14').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#14').attr('data-x')), pTwoArrayY.push($('#14').attr('data-y'))) : (pOneArray.push($('#14').attr('data-x')), pOneArrayY.push($('#14').attr('data-y')))
		} 
		else if ($('#12').children().length > 0) {
			$('<img>').appendTo('#13').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#13').attr('data-x')), pTwoArrayY.push($('#13').attr('data-y'))) : (pOneArray.push($('#13').attr('data-x')), pOneArrayY.push($('#13').attr('data-y')))
		} 
		else if ($('#11').children().length > 0) {
			$('<img>').appendTo('#12').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#12').attr('data-x')), pTwoArrayY.push($('#12').attr('data-y'))) : (pOneArray.push($('#12').attr('data-x')), pOneArrayY.push($('#12').attr('data-y')))
		} 
		else if ($('#11').children().length <= 0) {
			$('<img>').appendTo('#11').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#11').attr('data-x')), pTwoArrayY.push($('#11').attr('data-y'))) : (pOneArray.push($('#11').attr('data-x')), pOneArrayY.push($('#11').attr('data-y')))
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
			return (connectFour.turn & 1) ? (pTwoArray.push($('#26').attr('data-x')), pTwoArrayY.push($('#26').attr('data-y'))) : (pOneArray.push($('#26').attr('data-x')), pOneArrayY.push($('#26').attr('data-y')))
		} 
		else if ($('#24').children().length > 0) {
			$('<img>').appendTo('#25').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#25').attr('data-x')), pTwoArrayY.push($('#25').attr('data-y'))) : (pOneArray.push($('#25').attr('data-x')), pOneArrayY.push($('#25').attr('data-y')))
		} 
		else if ($('#23').children().length > 0) {
			$('<img>').appendTo('#24').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#24').attr('data-x')), pTwoArrayY.push($('#24').attr('data-y'))) : (pOneArray.push($('#24').attr('data-x')), pOneArrayY.push($('#24').attr('data-y')))
		} 
		else if ($('#22').children().length > 0) {
			$('<img>').appendTo('#23').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#23').attr('data-x')), pTwoArrayY.push($('#23').attr('data-y'))) : (pOneArray.push($('#23').attr('data-x')), pOneArrayY.push($('#23').attr('data-y')))
		} 
		else if ($('#21').children().length > 0) {
			$('<img>').appendTo('#22').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#22').attr('data-x')), pTwoArrayY.push($('#22').attr('data-y'))) : (pOneArray.push($('#22').attr('data-x')), pOneArrayY.push($('#22').attr('data-y')))
		} 
		else if ($('#21').children().length <= 0) {
			$('<img>').appendTo('#21').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#21').attr('data-x')), pTwoArrayY.push($('#21').attr('data-y'))) : (pOneArray.push($('#21').attr('data-x')), pOneArrayY.push($('#21').attr('data-y')))
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
			return (connectFour.turn & 1) ? (pTwoArray.push($('#36').attr('data-x')), pTwoArrayY.push($('#36').attr('data-y'))) : (pOneArray.push($('#36').attr('data-x')), pOneArrayY.push($('#36').attr('data-y')))
		} 
		else if ($('#34').children().length > 0) {
			$('<img>').appendTo('#35').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#35').attr('data-x')), pTwoArrayY.push($('#35').attr('data-y'))) : (pOneArray.push($('#35').attr('data-x')), pOneArrayY.push($('#35').attr('data-y')))
		} 
		else if ($('#33').children().length > 0) {
			$('<img>').appendTo('#34').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#34').attr('data-x')), pTwoArrayY.push($('#34').attr('data-y'))) : (pOneArray.push($('#34').attr('data-x')), pOneArrayY.push($('#34').attr('data-y')))
		} 
		else if ($('#32').children().length > 0) {
			$('<img>').appendTo('#33').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#33').attr('data-x')), pTwoArrayY.push($('#33').attr('data-y'))) : (pOneArray.push($('#33').attr('data-x')), pOneArrayY.push($('#33').attr('data-y')))
		} 
		else if ($('#31').children().length > 0) {
			$('<img>').appendTo('#32').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#32').attr('data-x')), pTwoArrayY.push($('#32').attr('data-y'))) : (pOneArray.push($('#32').attr('data-x')), pOneArrayY.push($('#32').attr('data-y')))
		} 
		else if ($('#31').children().length <= 0) {
			$('<img>').appendTo('#31').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#31').attr('data-x')), pTwoArrayY.push($('#31').attr('data-y'))) : (pOneArray.push($('#31').attr('data-x')), pOneArrayY.push($('#31').attr('data-y')))
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
			return (connectFour.turn & 1) ? (pTwoArray.push($('#46').attr('data-x')), pTwoArrayY.push($('#46').attr('data-y'))) : (pOneArray.push($('#46').attr('data-x')), pOneArrayY.push($('#46').attr('data-y')))
		} 
		else if ($('#44').children().length > 0) {
			$('<img>').appendTo('#45').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#45').attr('data-x')), pTwoArrayY.push($('#45').attr('data-y'))) : (pOneArray.push($('#45').attr('data-x')), pOneArrayY.push($('#45').attr('data-y')))
		} 
		else if ($('#43').children().length > 0) {
			$('<img>').appendTo('#44').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#44').attr('data-x')), pTwoArrayY.push($('#44').attr('data-y'))) : (pOneArray.push($('#44').attr('data-x')), pOneArrayY.push($('#44').attr('data-y')))
		} 
		else if ($('#42').children().length > 0) {
			$('<img>').appendTo('#43').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#43').attr('data-x')), pTwoArrayY.push($('#43').attr('data-y'))) : (pOneArray.push($('#43').attr('data-x')), pOneArrayY.push($('#43').attr('data-y')))
		} 
		else if ($('#41').children().length > 0) {
			$('<img>').appendTo('#42').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#42').attr('data-x')), pTwoArrayY.push($('#42').attr('data-y'))) : (pOneArray.push($('#42').attr('data-x')), pOneArrayY.push($('#42').attr('data-y')))
		} 
		else if ($('#41').children().length <= 0) {
			$('<img>').appendTo('#41').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#41').attr('data-x')), pTwoArrayY.push($('#41').attr('data-y'))) : (pOneArray.push($('#41').attr('data-x')), pOneArrayY.push($('#41').attr('data-y')))
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
			return (connectFour.turn & 1) ? (pTwoArray.push($('#56').attr('data-x')), pTwoArrayY.push($('#56').attr('data-y'))) : (pOneArray.push($('#56').attr('data-x')), pOneArrayY.push($('#56').attr('data-y')))
		} 
		else if ($('#54').children().length > 0) {
			$('<img>').appendTo('#55').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#55').attr('data-x')), pTwoArrayY.push($('#55').attr('data-y'))) : (pOneArray.push($('#55').attr('data-x')), pOneArrayY.push($('#55').attr('data-y')))
		} 
		else if ($('#53').children().length > 0) {
			$('<img>').appendTo('#54').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#54').attr('data-x')), pTwoArrayY.push($('#54').attr('data-y'))) : (pOneArray.push($('#54').attr('data-x')), pOneArrayY.push($('#54').attr('data-y')))
		} 
		else if ($('#52').children().length > 0) {
			$('<img>').appendTo('#53').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#53').attr('data-x')), pTwoArrayY.push($('#53').attr('data-y'))) : (pOneArray.push($('#53').attr('data-x')), pOneArrayY.push($('#53').attr('data-y')))
		} 
		else if ($('#51').children().length > 0) {
			$('<img>').appendTo('#52').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#52').attr('data-x')), pTwoArrayY.push($('#52').attr('data-y'))) : (pOneArray.push($('#52').attr('data-x')), pOneArrayY.push($('#52').attr('data-y')))
		} 
		else if ($('#51').children().length <= 0) {
			$('<img>').appendTo('#51').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#51').attr('data-x')), pTwoArrayY.push($('#51').attr('data-y'))) : (pOneArray.push($('#51').attr('data-x')), pOneArrayY.push($('#51').attr('data-y')))
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
			return (connectFour.turn & 1) ? (pTwoArray.push($('#66').attr('data-x')), pTwoArrayY.push($('#66').attr('data-y'))) : (pOneArray.push($('#66').attr('data-x')), pOneArrayY.push($('#66').attr('data-y')))
		} 
		else if ($('#64').children().length > 0) {
			$('<img>').appendTo('#65').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#65').attr('data-x')), pTwoArrayY.push($('#65').attr('data-y'))) : (pOneArray.push($('#65').attr('data-x')), pOneArrayY.push($('#65').attr('data-y')))
		} 
		else if ($('#63').children().length > 0) {
			$('<img>').appendTo('#64').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#64').attr('data-x')), pTwoArrayY.push($('#64').attr('data-y'))) : (pOneArray.push($('#64').attr('data-x')), pOneArrayY.push($('#64').attr('data-y')))
		} 
		else if ($('#62').children().length > 0) {
			$('<img>').appendTo('#63').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#63').attr('data-x')), pTwoArrayY.push($('#63').attr('data-y'))) : (pOneArray.push($('#63').attr('data-x')), pOneArrayY.push($('#63').attr('data-y')))
		} 
		else if ($('#61').children().length > 0) {
			$('<img>').appendTo('#62').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#62').attr('data-x')), pTwoArrayY.push($('#62').attr('data-y'))) : (pOneArray.push($('#62').attr('data-x')), pOneArrayY.push($('#62').attr('data-y')))
		} 
		else if ($('#61').children().length <= 0) {
			$('<img>').appendTo('#61').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#61').attr('data-x')), pTwoArrayY.push($('#61').attr('data-y'))) : (pOneArray.push($('#61').attr('data-x')), pOneArrayY.push($('#61').attr('data-y')))
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
			return (connectFour.turn & 1) ? (pTwoArray.push($('#76').attr('data-x')), pTwoArrayY.push($('#76').attr('data-y'))) : (pOneArray.push($('#76').attr('data-x')), pOneArrayY.push($('#76').attr('data-y')))
		} 
		else if ($('#74').children().length > 0) {
			$('<img>').appendTo('#75').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#75').attr('data-x')), pTwoArrayY.push($('#75').attr('data-y'))) : (pOneArray.push($('#75').attr('data-x')), pOneArrayY.push($('#75').attr('data-y')))
		} 
		else if ($('#73').children().length > 0) {
			$('<img>').appendTo('#74').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#74').attr('data-x')), pTwoArrayY.push($('#74').attr('data-y'))) : (pOneArray.push($('#74').attr('data-x')), pOneArrayY.push($('#74').attr('data-y')))
		} 
		else if ($('#72').children().length > 0) {
			$('<img>').appendTo('#73').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#73').attr('data-x')), pTwoArrayY.push($('#73').attr('data-y'))) : (pOneArray.push($('#73').attr('data-x')), pOneArrayY.push($('#73').attr('data-y')))
		} 
		else if ($('#71').children().length > 0) {
			$('<img>').appendTo('#72').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#72').attr('data-x')), pTwoArrayY.push($('#72').attr('data-y'))) : (pOneArray.push($('#72').attr('data-x')), pOneArrayY.push($('#72').attr('data-y')))
		} 
		else if ($('#71').children().length <= 0) {
			$('<img>').appendTo('#71').attr('src', turnCoin).attr('id', 'coin-drop')
			return (connectFour.turn & 1) ? (pTwoArray.push($('#71').attr('data-x')), pTwoArrayY.push($('#71').attr('data-y'))) : (pOneArray.push($('#71').attr('data-x')), pOneArrayY.push($('#71').attr('data-y')))
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

//Function to sort integers
	sortInt: function(a,b) {
		return a-b;
	},

//Parse P1 Array
	checkPlayerOne: function() {
		var resultOne = pOneArray.map(function(x) {
			return parseInt(x, 10);
		});

		var sortedOne = resultOne.sort(connectFour.sortInt);
		var sortedOneSlice = sortedOne.slice(sortedOne.length-4, sortedOne.length)

		if (sortedOneSlice.length >= 4)  {

			if (Math.max(...sortedOne) - Math.min(...sortedOne) === 30) {
				console.log('p1 winner W-E');
			}

			else if (Math.max(...sortedOne) - Math.min(...sortedOne) === 3) {
				console.log('p1 winner N-S');
			}
			
			else if (Math.max(...sortedOne) - Math.min(...sortedOne) === 27) {
				console.log('p1 winner NW-SE');
			}

			else if (Math.max(...sortedOne) - Math.min(...sortedOne) === 33) {
				console.log('p1 winner NE-SW');
			}
		}
	},

//Parse P2 Array
	checkPlayerTwo: function() {
		var resultTwo = pTwoArray.map(function(x) {
			return parseInt(x, 10);
		});

		var sortedTwo = resultTwo.sort(connectFour.sortInt);
		var sortedTwoSlice = sortedTwo.slice(sortedTwo.length-4, sortedTwo.length)

		if (sortedTwoSlice.length >= 4)  {

			if (Math.max(sortedTwo) - Math.min(sortedTwo) === 30) {
				console.log('p2 winner W-E');
			}

			else if (Math.max(sortedTwo) - Math.min(sortedTwo) === 3) {
				console.log('p2 winner N-S');
			}
			
			else if (Math.max(sortedTwo) - Math.min(sortedTwo) === 27) {
				console.log('p2 winner NW-SE');
			}

			else if (Math.max(sortedTwo) - Math.min(sortedTwo) === 33) {
				console.log('p2 winner NE-SW');
			}
		}
	},

}
})
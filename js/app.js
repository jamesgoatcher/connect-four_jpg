console.log('konnektd')

$(document).ready(function() {

//Arrays and World Variables
	var squareDiv = [
	'g6','f6','e6','d6','c6','b6','a6','g5','f5',
	'e5','d5','c5','b5','a5','g4','f4','e4','d4','c4','b4',
	'a4','g3','f3','e3','d3','c3','b3','a3','g2','f2',
	'e2','d2','c2','b2','a2','g1','f1','e1','d1','c1',
	'b1','a1'
	];
	var boardDiv = ['board-0','board-1','board-2','board-3'];

//Start Button toggles Game Board and prompts P1 Name Submit
	$('#start-button').one('click', function() {
		$('#start-button').fadeToggle(250);//Start is hidden
		$('.game-board').fadeToggle(1500);//Game Board is active
		$('.player-one').fadeToggle(1500);//Player 1 Name is active
	});

//Loop to generate Square Divs and Board Divs
	$.each(boardDiv, function(i) {
		var $createDiv = $('<div>')
		$($createDiv).prependTo('.game-board').addClass('board-borders').attr('id', boardDiv[i])
	})

	$.each(squareDiv, function(i) {
		var $createDiv = $('<div>')
		$($createDiv).prependTo('.game-board').addClass('game-square').attr('id', squareDiv[i])
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

	turn: 0,

	addClickCoin: function() {

		for (var i = 0; i < squareDiv.length; i++) {
			var $findCoinDiv = $('#' + squareDiv[i]);
			$($findCoinDiv).one('click', function(event) {
				$('<img>').appendTo(event.target).attr('src', 'img/bitcoin-img.png').attr('id', 'coin-drop')
				$('#p-one-name').toggleClass('player-bold'); //disables active, enables inactive
				$('#p-two-name').toggleClass('player-bold');
				$('#bit-flash').toggleClass('hide'); //disables flashing coin notifier
				$('#doge-flash').toggleClass('show');
				//connectFour.newGame(event.target);
			})
		}
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

//Attach to next function: flash screen, animation drop, assign turn, notify of turn




	}
})
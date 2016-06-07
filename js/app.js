console.log('konnektd')

$(document).ready(function() {

	var squareDiv = [
	1,2,3,4,5,6,7,8,9,10,
	11,12,13,14,15,16,17,18,19,20,
	21,22,23,24,25,26,27,28,29,30,
	31,32,33,34,35,36,37,38,39,40,
	41,42
	];
	var boardDiv = ['board-0','board-1','board-2','board-3'];

	//Start Button toggles Game Board
	$('#start-button').on('click', function() {
		$('.game-board').fadeToggle(1500)
	});

	//Loop to generate Square Divs and Board Divs

	$.each(boardDiv, function(i) {
		var $createDiv = $('<div>')
		$($createDiv).prependTo('.game-board').addClass('board-borders').attr('id', boardDiv[i])
	})

	$.each(squareDiv, function(i) {
		var $createDiv = $('<div>')
		$($createDiv).prependTo('.game-board').addClass('game-square').attr('id', 'square' + i)
	})











})
(function() {
	'use strict';

	changePositionButton();

	function changeImgLink(selector) {
		$(selector).on('click', function(e) {				
			var linkLargeImg = $(e.target).attr('src').replace(/small/, 'large');
			$('#large-img').attr('src', linkLargeImg);
			show();	
		});
	}

	changeImgLink('.gallery-1 img');
	changeImgLink('.gallery-2 img');

	$('.close-button').on('click', function() {
		hide();
	});

	$(window).resize(changePositionButton);

	function changePositionButton () {
		var img = $('#large-img');
		var shiftRight = (img.parent().width() - img.width()) / 2;
		console.log('right', shiftRight);
		$('.close-button').css('right', shiftRight);
	}

	function show() {
		$(".large-img").show();		
	}

	function hide() {
		$(".large-img").hide();
	}
}());
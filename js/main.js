	// $('.grid').masonry({
	//   itemSelector: '.grid-item',
	//   columnWidth: 317
	// });


$(document).ready(function() {
	$('.grid-item:lt(2)').click(function() {
		$(this).toggleClass('active');
	});

	$('.grid-item:lt(2)').hover(function() {
		if ( !$(this).hasClass('active')) {
			$(this).toggleClass('wobble');
		};
	});


});
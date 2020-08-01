jQuery(function( $ ){

	$('.open-inline-modal').magnificPopup({type:'inline', midClick: true});
	
	// Run when page is loaded.
	$(document).ready( function() {

		// Run 0.25 seconds after document ready for any instances viewable on load.
		setTimeout( function() {
			animateObject();
		}, 250);

	});

	$( window ).scroll( function() {

		animateObject();

	});
	
	// Helper function to animate hidden object in with a fadeUp effect.
	function animateObject() {

		// Define your object via class.
		var object = $( '.section' );

		// Exit early if no objects on page.
		if ( object.length == 0 ) {
			return;
		}

		// Loop through each object in the array.
		$.each( object, function() {

			var windowHeight = $(window).height(),
				offset 		 = $(this).offset().top,
				top			 = offset - $(document).scrollTop(),
				percent 	 = Math.floor( top / windowHeight * 150 );

			if ( percent < 60 ) {

				$(this).addClass( 'animate' );

			}
		});
	}
	
});

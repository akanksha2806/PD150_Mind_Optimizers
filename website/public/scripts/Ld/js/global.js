jQuery(function( $ ){

   	// Make sure JS class is added.
	document.documentElement.className = "js";
	
    $.localScroll({
    	duration: 500
    });

    retinajs();

	//* Match height
	$('.col-match-height').matchHeight();

	//* FAQ
    /*$('.faq-list .question').click( function(){
		$(this).parent().find('.answer').slideToggle('fast');
		$(this).toggleClass('on');
		return false;
	});*/

});

$( document ).ready(function() {
	// smooth scrolling to anchors
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top - 40
	    }, 500);
	    return false;
	});
});
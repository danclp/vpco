jQuery(document).ready(function($) {

	$('.more').hide();

	$('.morebtn a').click(function(e) {
		e.preventDefault();
		$('.more').slideToggle('slow');
		$('.morebtn').hide();
	});

});
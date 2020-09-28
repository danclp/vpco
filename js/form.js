jQuery(document).ready(function($) {

	$('.inactive a').click(function(el) {
		el.preventDefault();
	});

	$('.more').hide();

	$('.morebtn a').click(function(e) {
		e.preventDefault();
		$('.more').slideToggle('slow');
		$('.morebtn').hide();
	});

});
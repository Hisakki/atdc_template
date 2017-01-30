$(document).ready(function() {
	
	var $main = $('#main');
	var $sidebar = $('#sidebar');
	var $hamburger = $('#hamburger');

	// Open the sidebar
	$hamburger.on('click', function(event) {
		event.preventDefault();
		$sidebar.hasClass('active') ? $sidebar.removeClass('active') : $sidebar.addClass('active')
	});

});
// Main map file

function initWaypoints() {
	$('.postcard').waypoint(function() {
		$('section.active').removeClass('active');
		$(this).addClass('active');

		$('body').attr('class', '');
		var city = 'animate-' + $(this).attr('data-city');
		$('body').addClass(city);
	}, { offset: 250 });

	$('.postcard').click(function() {
		$('body').attr('class', '');
		var city = 'animate-' + $(this).attr('data-city');
		$('body').addClass(city);
	});
}

function addMarkers() {

}

function initMap() {
	initWaypoints();
}
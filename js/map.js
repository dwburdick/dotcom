var map
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 39.754574, lng: -104.991754},
		zoom: 8
	});
}
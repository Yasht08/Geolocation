var map;
function initMap() {
    map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: 'YOUR_BING_MAPS_API_KEY'
    });

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            var center = new Microsoft.Maps.Location(lat, lon);
            map.setView({ center: center, zoom: 13 });

            var pushpin = new Microsoft.Maps.Pushpin(center);
            map.entities.push(pushpin);
        });
    } else {
        console.log("Geolocation is not available.");
    }
}

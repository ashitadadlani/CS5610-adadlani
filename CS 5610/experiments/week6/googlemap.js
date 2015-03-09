var geo;
var map;

$("document").ready(function () {

    geo = new google.maps.Geocoder();
    var latlong = new google.maps.LatLng(42, -73);
    var mapOptions = {
        zoom: 8,
        center: latlong
    }
    map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);


});
function codeAddress() {
    var address = document.getElementById('address').value;
    geo.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode unsuccessful for the following reason: ' + status);
        }
    });
}
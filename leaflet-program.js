$(document).ready(function(){
    var mymap = L.map('map');

    mymap.setView([40.2838, -3.8215], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    L.marker([40.2838, -3.8215]).addTo(mymap)
    .bindPopup('URJC, Aulario III')
    .openPopup();

    mymap.on('click', function(e){
        L.popup()
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(mymap);
    });

    function onLocationFound(e) {
        var radius = e.accuracy / 2;
        L.circle(e.latlng, radius)
        .addTo(mymap);
    }

    function onLocationError(e){
        console.log("Location not found:" + e);
    }

    mymap.on('locationfound', onLocationFound);
    mymap.on('locationerror', onLocationError);
    mymap.locate({setView: true, maxZoom:16})
});

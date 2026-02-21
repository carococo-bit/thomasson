var map = L.map('map').setView([41.87672, -87.62798], 13);
var marker = L.marker([41.880997, -87.625902]).addTo(map);

var circle = L.circle([41.895351, -87.663659], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [41.84712, -87.64249],
    [41.84073, -87.63167],
    [41.84028, -87.64609]
]).addTo(map).bindPopup("Not sure where this Thomasson is hmmm");

var greenIcon = L.icon({
    iconUrl: 'gary-thomasson.png',
    iconSize: [57, 65], // size of the icon
    iconAnchor: [30, 64], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
});

var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap.HOT": osmHOT
};

var layerControl = L.control.layers(baseMaps).addTo(map);

marker.bindPopup("Not a Thomasson this is just <b>SAIC</b>");
circle.bindPopup("Secret Thomasson somewhere here");
L.marker([41.864673, -87.618231], { icon: greenIcon }).addTo(map).bindPopup("Gary Thomasson");
L.marker([41.858313, -87.676215]).addTo(map).bindPopup("<h1>Hello</h1> <p>Here is a Thomasson I found</p> <img src='./images/thomasson1.jpg'>");
L.marker([41.8616, -87.6857], { icon: greenIcon }).addTo(map).bindPopup("Another one");

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


map.on("click", function (e) {
    var marker = new L.marker([e.latlng.lat, e.latlng.lng]).addTo(map).bindPopup("New Entry").openPopup();
    marker.on('popupclose', function () { // later add a function to only delete the marker if user doesnt submit or save form
        map.removeLayer(marker);
    });
})

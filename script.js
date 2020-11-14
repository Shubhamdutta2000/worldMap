mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1YmhhbWR1dHRhMjAwMCIsImEiOiJja2hmczE3bGUwN3FkMzNwOXFieTF4c3pzIn0.hg5VzFtkWwC-6KrvgDonGg';
var map = new mapboxgl.Map({
     container: 'map',
     style: 'mapbox://styles/mapbox/streets-v11',
     center: [78.9629, 20.5937], // starting position
     zoom: 5
});

// Add geolocate control to the map. (for current location)
map.addControl(
     new mapboxgl.GeolocateControl({
          positionOptions: {
               enableHighAccuracy: true
          },
          trackUserLocation: true
     }),
     "bottom-left"
);


// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), "bottom-left");

// driving direction
map.addControl(
     new MapboxDirections({
          accessToken: mapboxgl.accessToken
     }),
     'top-left'
);


var layerList = document.getElementById('menu');
var button = layerList.getElementsByTagName('button');

console.log(button.length);

function switchLayer(layer) {
     var layerId = layer.target.id;
     map.setStyle('mapbox://styles/mapbox/' + layerId);
}

for (var i = 0; i < button.length; i++) {
     button[i].onclick = switchLayer;
}
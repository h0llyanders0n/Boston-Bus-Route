// Access token 
mapboxgl.accessToken = 'pk.eyJ1IjoiaDBsbHlhbmRlcnMwbiIsImEiOiJja3k5aWZ3YmIwNmt1MnVwZHB1dzRwcG1zIn0.l-FNLkEtdSDEeIJG3D4e1A';

// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// Map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/h0llyanders0n/ckycdnyo018l415o8ty3alm6s',
  center: [-71.104081, 42.365554],
  zoom: 13.5
});

// Marks MIT
var marker = new mapboxgl.Marker()
    .setLngLat([-71.101,42.358])
    .addTo(map);

// Marks Harvard
var marker = new mapboxgl.Marker()
    .setLngLat([-71.1167, 42.3772])
    .addTo(map);

// Represents the index of the current bus stop
let counter = 0;
function move() {
  // Moves the marker on the map every 1000ms
    setTimeout(()=>{
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }

if (typeof module !== 'undefined') {
  module.exports = { move };
}

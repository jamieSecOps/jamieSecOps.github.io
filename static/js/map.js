const map = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
    .addTo(map);

let bounds = [];
console.log('All markers data:', markers);

for (let i = 0; i < markers.length; i++) {
    const marker = L.marker([markers[i].latitude, markers[i].longitude]).addTo(map);
    marker.bindPopup(markers[i].name);
    bounds.push([markers[i].latitude, markers[i].longitude]);
    }
    if (bounds.length > 0) {
    map.fitBounds(bounds);
    }
    else {
    console.log('No valid markers to display.');
}

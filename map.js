// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 50.344, lng: -1.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 3,
    center: position,
    mapId: "Map",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "here",
  });
}

initMap();
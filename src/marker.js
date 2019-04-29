const mapboxgl = require("mapbox-gl");
// const map = require("./index");

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const markerDomHotel = document.createElement("div"); // Create a new, detached DIV
markerDomHotel.style.width = "32px";
markerDomHotel.style.height = "39px";
markerDomHotel.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

const markerDomRes = document.createElement("div"); // Create a new, detached DIV
markerDomRes.style.width = "32px";
markerDomRes.style.height = "39px";
markerDomRes.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";

const markerDomAct = document.createElement("div"); // Create a new, detached DIV
markerDomAct.style.width = "32px";
markerDomAct.style.height = "39px";
markerDomAct.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";



const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const marker = new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago

const buildMarker = function(type, coords) {
  if (type === "activity") {
    const marker = new mapboxgl.Marker(markerDomAct).setLngLat(coords);
  }
  return marker
}

 module.exports = { buildMarker }

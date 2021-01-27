//customizing the map
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWhellZoom: false,
  zoomControl: false,
};

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

//create map and defined position
const map = L.map("mapid", options).setView([lat, lng], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker
L.marker([lat, lng], { icon }).addTo(map);

//image galery
function selectImage(event) {
  const button = event.currentTarget;

  //remove all .active classes
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass); 

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  //select the clicked image
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  //update the image container
  imageContainer.src = image.src;

  //add the .active class to the clicked button
  button.classList.add("active");
}

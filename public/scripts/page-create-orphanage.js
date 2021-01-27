//create map
const map = L.map("mapid").setView([-23.5403449, -46.6755264], 15);

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
});

//create and add marker
let marker;
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  //taking the hidden selector and passing the values according to their variables
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer - add the marker by passing the lat and long, and placing the marker in such
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//add the photo field
function addPhotoField() {
  //pick up the #images photo container
  const container = document.querySelector("#images");

  //get the container to duplicate .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //clone the last image added
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //check if the field is empty, if yes, do not add it to the image container
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    alert("Ops! Você esqueceu de adicionar uma imagem.");
    return;
  }

  //clear the field before adding it to the image container
  input.value = "";

  //add the clone to the image container - add a child(newFieldContainer)
  container.appendChild(newFieldContainer);

  console.log("Container clonado");
}

function deleteField(event) {
  //console.log(event.currentTarget)
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  //if there is only one input then clear only the field value
  fieldsContainer.length < 2 ? span.parentNode.children[0].value = "" : span.parentNode.remove();  

}

//select yes or no - button
function toggleSelect(event) {
  //remove the .active class (from the buttons)
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  //put the .active class on that clicked button
  const button = event.currentTarget;
  button.classList.add("active");

  //update my hidden input with the selected value
  const input = document.querySelector("[name=open_on_weekends]");

  //check if yes or no and pass the value to variable
  input.value = button.dataset.value;

  function validate(event) {
    //validate if lat and lng are filled
    const needsLatAndLng = false;
    if (needsLatAndLng) {
      event.preventDefault()
      alert("Selecione um ponto no mapa")
    }
    
  }
}

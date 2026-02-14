const place = JSON.parse(localStorage.getItem("place"));
const costPerPerson = document.getElementById("costPerPerson");
const travelCount = document.getElementById("travelCount");
const totalCost = document.getElementById("totalCost");

document.getElementById("placeTitle").innerText =
  place.name + ", " + localStorage.getItem("country");

costPerPerson.innerText = "₹" + place.price;
travelCount.innerText = "x 1";
totalCost.innerText = "₹" + place.price;

document.getElementById("people").addEventListener("input", function(){
  const people = this.value;
  travelCount.innerText = "x " + people;
  totalCost.innerText = "₹" + (place.price * people);
});

document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const startDate = document.getElementById("startDate").value;
  const days = document.getElementById("days").value;
  const people = document.getElementById("people").value;

  document.getElementById("popupMessage").innerText =
    "Thank you, " + name + "! Your trip has been booked.";

  document.getElementById("popDest").innerText = place.name;
  document.getElementById("popTrav").innerText = people;
  document.getElementById("popDate").innerText = startDate;
  document.getElementById("popDur").innerText = days;
  document.getElementById("popTotal").innerText = totalCost.innerText;

  document.getElementById("confirmPopup").style.display = "flex";
});

function closePopup(){
  window.location.href = "home.html";
}


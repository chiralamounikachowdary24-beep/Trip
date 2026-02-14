// Load updated data from localStorage
let storedCountries = localStorage.getItem("countries");
let storedPlaces = localStorage.getItem("places");

if (storedCountries) {
  countries = JSON.parse(storedCountries);
}

if (storedPlaces) {
  places = JSON.parse(storedPlaces);
}

// Get selected country
const country = localStorage.getItem("country");

// Select elements properly
const countryTitle = document.getElementById("countryTitle");
const placeList = document.getElementById("placeList");

// Safety check
if (!countryTitle || !placeList) {
  console.log("Required elements not found");
} else {

  countryTitle.innerText = country;

  // If no places exist
  if (!places[country] || places[country].length === 0) {
    placeList.innerHTML = "<p>No places available.</p>";
  } 
  else {

    placeList.innerHTML = ""; // clear old data

    places[country].forEach(p => {

      const div = document.createElement("div");
      div.className = "place-card";

      div.innerHTML = `
        <div class="card-image">
          <img src="${p.images[0]}" alt="${p.name}">
        </div>

        <div class="card-content">
          <h3>${p.name}</h3>
        </div>

        <div class="card-bottom">
          <span>From ₹${p.price}</span>
          <span class="arrow">›</span>
        </div>
      `;

      div.onclick = () => {
        localStorage.setItem("place", JSON.stringify(p));
        window.location.href = "details.html";
      };

      placeList.appendChild(div);
    });
  }
}

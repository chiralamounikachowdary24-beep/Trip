if (localStorage.getItem("countries")) {
  countries = JSON.parse(localStorage.getItem("countries"));
}

if (localStorage.getItem("places")) {
  places = JSON.parse(localStorage.getItem("places"));
}
const countryList = document.getElementById("countryList");

// Safety check
if (!countryList) {
  console.error("countryList div not found!");
}

if (typeof countries === "undefined") {
  console.error("countries array not loaded. Check data.js");
}

countries.forEach(c => {

  const div = document.createElement("div");
  div.className = "place-card";

  div.innerHTML = `
    <div class="image-box">
      <img src="${c.image}" alt="${c.name}">
    </div>

    <div class="country-content">
      <h3>${c.name}</h3>
      <p class="places-count">${c.places} Places</p>
    </div>

    <div class="price-box">
      <span>Explore Now</span>
      <span class="arrow">›</span>
    </div>
  `;

  div.onclick = () => {
    localStorage.setItem("country", c.name);
    window.location.href = "places.html";
  };

  countryList.appendChild(div);
});

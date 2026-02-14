
let storedCountries = localStorage.getItem("countries");
let storedPlaces = localStorage.getItem("places");

if (storedCountries) {
  countries = JSON.parse(storedCountries);
}

if (storedPlaces) {
  places = JSON.parse(storedPlaces);
}

const place = JSON.parse(localStorage.getItem("place"));

const placeImage = document.getElementById("placeImage");
const placeName = document.getElementById("placeName");
const placeDesc = document.getElementById("placeDesc");
const priceBreakdown = document.getElementById("priceBreakdown");
const totalPrice = document.getElementById("totalPrice");

placeImage.src = place.images[0];
placeName.innerText = place.name;

placeDesc.innerText =
  place.name + " is one of the most beautiful tourist destinations. Enjoy unforgettable experience with amazing views and culture.";

const travel = Math.floor(place.price * 0.7);
const stay = Math.floor(place.price * 0.2);
const food = Math.floor(place.price * 0.1);

priceBreakdown.innerHTML = `
  <p>Travel Cost: ₹${travel}</p>
  <p>Stay Cost: ₹${stay}</p>
  <p>Food Cost: ₹${food}</p>
`;

totalPrice.innerText = "₹" + place.price;
function goBooking() {
  window.location.href = "booking.html";
}
function goBack() {
  window.location.href = "places.html";
}
// WEATHER API
async function loadWeather(city) {
  const apiKey = "7ec16e7d7801f0e61c15b4fc16f28d05";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    const data = await response.json();

    // 🔥 Check if API returned error
    if (data.cod !== 200) {
      document.getElementById("weatherInfo").innerText =
        "Weather not available for " + city;
      return;
    }

    document.getElementById("weatherInfo").innerText =
      data.main.temp + "°C | " + data.weather[0].description;

  } catch (error) {
    document.getElementById("weatherInfo").innerText =
      "Weather data not available.";
  }
}

loadWeather(place.city);


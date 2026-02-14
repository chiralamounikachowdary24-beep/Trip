if (localStorage.getItem("countries")) {
  countries = JSON.parse(localStorage.getItem("countries"));
}

if (localStorage.getItem("places")) {
  places = JSON.parse(localStorage.getItem("places"));
}
// Navigate to countries page

document.addEventListener("DOMContentLoaded", function () {
  const exploreBtn = document.getElementById("exploreBtn");

  exploreBtn.addEventListener("click", function () {
    window.location.href = "countries.html";
  });
});

// Logout function
function logout() {
  localStorage.removeItem("role");
  localStorage.removeItem("userEmail");
  window.location.href = "index.html";
}


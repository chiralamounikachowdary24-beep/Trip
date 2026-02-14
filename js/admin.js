if (localStorage.getItem("countries")) {
  countries = JSON.parse(localStorage.getItem("countries"));
}

if (localStorage.getItem("places")) {
  places = JSON.parse(localStorage.getItem("places"));
}

// 2. Select DOM Elements
const destinationList = document.getElementById("destinationList");
const countrySelect = document.getElementById("countrySelect");

// 3. Tab Switching Logic
window.switchTab = function(tab) {
  const countryForm = document.getElementById('countryForm');
  const placeForm = document.getElementById('placeForm');
  const countryTab = document.getElementById('countryTab');
  const placeTab = document.getElementById('placeTab');

  if (tab === 'country') {
    countryForm.style.display = 'block';
    placeForm.style.display = 'none';
    countryTab.style.background = '#2d4a7d';
    placeTab.style.background = 'transparent';
  } else {
    countryForm.style.display = 'none';
    placeForm.style.display = 'block';
    placeTab.style.background = '#2d4a7d';
    countryTab.style.background = 'transparent';
    renderCountryDropdown(); // Update dropdown whenever switching to Place tab
  }
};

// 4. Render Country Dropdown
function renderCountryDropdown() {
  if (!countrySelect) return;
  countrySelect.innerHTML = '<option value="">Choose a country</option>';
  countries.forEach(c => {
    const option = document.createElement("option");
    option.value = c.name;
    option.textContent = c.name;
    countrySelect.appendChild(option);
  });
}

// 5. Add Country Function
window.addCountry = function() {
  const name = document.getElementById("countryName").value.trim();
  const image = document.getElementById("countryImage").value.trim();

  if (!name || !image) {
    alert("Please fill all fields");
    return;
  }

  // Prevent duplicates
  if (countries.find(c => c.name.toLowerCase() === name.toLowerCase())) {
    alert("Country already exists!");
    return;
  }

  const newCountry = { name: name, image: image };
  countries.push(newCountry);
  places[name] = []; // Initialize empty places array for this country

  // Save to LocalStorage
  localStorage.setItem("countries", JSON.stringify(countries));
  localStorage.setItem("places", JSON.stringify(places));

  alert("Country Added Successfully!");

  document.getElementById("countryName").value = "";
  document.getElementById("countryImage").value = "";

  renderCountryDropdown();
  renderDestinations();
};

// 6. Add Place Function
window.addPlace = function() {
  const countryName = countrySelect.value;
  const name = document.getElementById("placeName").value.trim();
  const desc = document.getElementById("description").value.trim();
  const img1 = document.getElementById("image1").value.trim();
  const img2 = document.getElementById("image2").value.trim();
  const travel = parseInt(document.getElementById("travel").value) || 0;
  const stay = parseInt(document.getElementById("stay").value) || 0;
  const food = parseInt(document.getElementById("food").value) || 0;

  if (!countryName || !name || !img1) {
    alert("Please fill required fields (Country, Name, Image URL 1)");
    return;
  }

  const newPlace = {
    name: name,
    description: desc,
    images: [img1, img2 || img1],
    price: travel + stay + food
  };

  if (!places[countryName]) {
    places[countryName] = [];
  }

  places[countryName].push(newPlace);

  // Save to LocalStorage
  localStorage.setItem("places", JSON.stringify(places));

  alert("Place Added Successfully!");

  // Clear fields
  document.getElementById("placeName").value = "";
  document.getElementById("description").value = "";
  document.getElementById("image1").value = "";
  document.getElementById("image2").value = "";
  document.getElementById("travel").value = "";
  document.getElementById("stay").value = "";
  document.getElementById("food").value = "";

  renderDestinations();
};

// 7. Render Destinations (Preview List)
function renderDestinations() {
  if (!destinationList) return;
  destinationList.innerHTML = "";

  countries.forEach(country => {
    const countryPlaces = places[country.name] || [];
    const box = document.createElement("div");
    box.style.border = "1px solid #444";
    box.style.padding = "10px";
    box.style.margin = "10px 0";
    box.style.borderRadius = "8px";
    box.style.background = "#1e1e1e";

    box.innerHTML = `
      <div style="display:flex;align-items:center;gap:15px; color: white;">
        <img src="${country.image}" style="width:50px;height:50px;border-radius:5px;object-fit:cover;">
        <div>
          <h3 style="margin:0;">${country.name}</h3>
          <p style="margin:0; font-size:12px; color:#aaa;">${countryPlaces.length} places</p>
          <div style="margin-top:5px;">
            ${countryPlaces.map(p => `<span style="background:#2d4a7d; padding:2px 6px; border-radius:4px; font-size:10px; margin-right:4px;">${p.name}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
    destinationList.appendChild(box);
  });
}

// 8. Logout Function
function logout() {
  localStorage.removeItem("role");
  localStorage.removeItem("userEmail");
  window.location.href = "index.html";
}


// Run initialization
renderCountryDropdown();
renderDestinations();
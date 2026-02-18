function login(event) {
  event.preventDefault();

  let role = document.getElementById("loginRole").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // ✅ ADMIN LOGIN (Fixed Credentials)
  if (role === "admin") {

    // 🔐 Your fixed admin credentials
    const adminEmail = "admin@worldvista.com";
    const adminPassword = "admin12345";

    if (email === adminEmail && password === adminPassword) {

      sessionStorage.setItem("role", "admin");
      sessionStorage.setItem("userEmail", email);

      let redirectPage = sessionStorage.getItem("redirectPage");

      if (redirectPage) {
        window.location.href = redirectPage;
      } else {
        window.location.href = "admin.html";
      }

    } else {
      alert("Invalid Admin Email or Password");
    }

    return; // stop here
  }

  // ✅ USER LOGIN (your original logic)
  if (email && password.length >= 8) {

    sessionStorage.setItem("role", "user");
    sessionStorage.setItem("userEmail", email);

    let redirectPage = sessionStorage.getItem("redirectPage");

    if (redirectPage) {
      window.location.href = redirectPage;
    } else {
      window.location.href = "home.html";
    }

  } else {
    alert("Invalid login credentials");
  }
}

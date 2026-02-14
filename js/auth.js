function login(event) {
  event.preventDefault();

  let role = document.getElementById("loginRole").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Simple validation (you can improve later)
  if (email && password.length >= 8) {

    // Save session data (NOT localStorage)
    sessionStorage.setItem("role", role);
    sessionStorage.setItem("userEmail", email);

    // Redirect to previously opened page
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

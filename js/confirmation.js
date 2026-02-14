const b = JSON.parse(localStorage.getItem("booking"));

msg.innerText = `Thank you, ${b.name}! Your trip has been booked.`;
d.innerText = b.place;
c.innerText = b.country;
t.innerText = b.travelers;
total.innerText = b.total;

function home() {
  window.location.href = "home.html";
}

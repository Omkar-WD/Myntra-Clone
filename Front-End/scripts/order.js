import appendDatao from "../components/scripto.js";
import header from "../components/header.js";
import footer from "../components/footer.js";
document.querySelector(".footer").innerHTML = footer();

document.querySelector(".header").innerHTML = header();
document.querySelector("#menuIcon").addEventListener("click", function () {
  let x = document.getElementById("myLinks");
  let w, h;
  setInterval(() => {
    w = window.innerWidth;
    if (w > 768) {
      x.style.display = "none";
    }
  }, 500);

  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
});

let cont = document.getElementById("rightdiv");

let newToken = localStorage.getItem("userToken");
async function gettingHistoryData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${newToken}`,
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
appendDatao(gettingHistoryData, cont);

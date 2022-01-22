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

let orderarr = JSON.parse(localStorage.getItem("orderArr")) || [];
let orderDateArr = JSON.parse(localStorage.getItem("orderDateArr")) || [];
if (orderarr.length !== 0) {
  appendDatao(orderarr, orderDateArr, cont);
} else {
  cont.innerHTML = "";
  let dummyimage = document.createElement("img");
  dummyimage.setAttribute(
    "src",
    "https://myntraweb.blob.core.windows.net/selfserveui/assets/images/cards@2x.png"
  );
  dummyimage.setAttribute("class", "dummyimage");
  cont.append(dummyimage);
}

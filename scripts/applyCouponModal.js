let btn = document.getElementById("openApplyCouponModal");
let modal = document.getElementById("applyCoupon");
btn.onclick = function () {
  document.querySelector("#applyCouponContainer").innerHTML = `<h1>Omkar</h1>`;
  modal.style.display = "block";
};
let span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function applyCouponDesign() {
  return `<div>
    <div class="modal-name bottom-line themeColor">
      <h3>APPLY COUPON</h3>
    </div>
    <div class="enter-coupon-code bottom-line">
      <input type="text" id="coupon-code" placeholder="Enter Coupon Code"/>
    </div>
    <div class="available-coupon">
      <h3 class="themeColor bottom-line available-coupon-heading">Available Coupons</h3>
      <div class="coupon-1 bottom-line">
        <div class="themeColor coupon-1-heading"> 
          <h3>MYNTRA30</h3>   
        </div>
        <h4>* Flat 30% Off</h4>
        <h4>* Expires in 2 days!!!</h4>
      </div>
    </div>
  </div>`;
}

let btn = document.getElementById("openApplyCouponModal");
let modal = document.getElementById("applyCoupon");
btn.onclick = function () {
  document.querySelector("#applyCouponContainer").innerHTML =
    applyCouponDesign();
  modal.style.display = "block";
  let coupon = document.getElementById("coupon-code");
  coupon.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      if (coupon.value == "MYNTRA30") {
        localStorage.setItem("isCouponApplied", "true");
        window.location.href = "";
      } else {
        localStorage.setItem("isCouponApplied", "false");
        alert("Invalid Coupon");
      }
    }
  });
  console.log(coupon.value);
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

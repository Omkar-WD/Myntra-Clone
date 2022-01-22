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
      <div class="coupon-2 bottom-line">
        <div class="coupon-2-heading">
          <h3>HELLO10</h3>
        </div>
        <h4>* Save Rs.32</h4>
        <h4>* 10% Off upto Rs.100</h4>
        <h4>* Expired</h4>
      </div>
    </div>
  </div>`;
}
let couponSpan = document.getElementsByClassName("close");
let couponModal;
setTimeout(function () {
  let couponBtn = document.getElementById("openApplyCouponModal");
  let couponModal = document.getElementById("applyCoupon");
  couponBtn.onclick = function () {
    document.querySelector("#applyCouponContainer").innerHTML =
      applyCouponDesign();
    couponModal.style.display = "block";
    let coupon = document.getElementById("coupon-code");
    coupon.addEventListener("keypress", function (e) {
      if (e.key == "Enter") {
        if (coupon.value == "MYNTRA30") {
          localStorage.setItem("isCouponApplied", "true");
          window.location.href = "";
        } else {
          localStorage.setItem("isCouponApplied", "false");
          alert("Invalid Coupon!!!");
        }
      }
    });
    console.log(coupon.value);
  };
  for (let i = 0; i < couponSpan.length; i++) {
    couponSpan[i].addEventListener("click", function () {
      couponModal.style.display = "none";
    });
  }
  // window.onclick = function (event) {
  //   if (event.target == couponModal) {
  //     couponModal.style.display = "none";
  //   }
  // };
}, 2000);

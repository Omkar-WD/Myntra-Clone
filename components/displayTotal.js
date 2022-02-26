function displayTotal(totalItems, cartTotal, couponVar) {
  let isCouponApplied = couponVar == "true" ? "Coupon Applied" : "Apply Coupon";
  let discount = couponVar == "true" ? Math.floor(cartTotal * 0.3) : 0;
  let finalTotalObj = {
    totalItems: totalItems,
    cartTotal: cartTotal,
    discount: discount,
    finalTotal: cartTotal - discount + 99,
  };
  localStorage.setItem("finalTotalObj", JSON.stringify(finalTotalObj));
  console.log(
    totalItems,
    cartTotal,
    discount,
    "finalTotal:",
    cartTotal - discount + 99
  );
  return `<h4>PRICE DETAILS (<span>${totalItems}</span> Item)</h4>
  <div>
    <p>Total MRP</p>
    <p>Rs.${cartTotal}</p>
  </div>
  <div>
    <p>Discount on MRP</p>
    <p>-Rs.${discount}</p>
  </div>
  <div>
    <p>Coupon Discount</p>
    <p class="themeColor">${isCouponApplied}</p>
  </div>
  <div>
    <p>Convenience Fee <span class="themeColor">Know More</span></p>
    <p>Rs.99</p>
  </div>
  <div>
    <p>Total Amount</p>
    <p>Rs.${cartTotal - discount + 99}</p>
  </div>
  <button class="btnStyle" id="remove-coupon">Remove Coupon</button> <button class="btnStyle" id="place-order-btn">PLACE ORDER</button>`;
}

export default displayTotal;

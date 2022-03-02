import header from "../components/header.js";
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
function showMore() {
  var dots = document.getElementById("tca");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    moreText.style.display = "inline";
  }
}

document.getElementById("child1").addEventListener("click", paydata);
document.getElementById("child2").addEventListener("click", cartdata);
document.getElementById("child3").addEventListener("click", upidata);

var append = document.getElementById("paymentcont2");

function cartdata() {
  append.innerHTML = "";
  append.innerHTML = `     <div>
    <h4>CREDIT/DEBIT CARD</h4><br><br>
    <form id="cardform">
    <input class="cardinput"  type="number" placeholder="Card Number" required><br><br>
    <input class="cardinput" type="text" placeholder="Name on card" required><br><br>
    <input class="cardinput" id="cardvalid"  type="number" placeholder="Valid Thru (MM/YY)" required>
    <input class="cardinput" id="cardcvv" type="number" placeholder="CVV" required ><br><br>
    <input  type="checkbox"> <label>Save this card for faster payments </label><br><br>

    <input type="submit" id="paynowbut" value="PAY NOW">
    </form>

</div>`;
  document
    .querySelector("#cardform")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("order sussesfull");
    });
}

function paydata() {
  append.innerHTML = "";

  append.innerHTML = `    <div id="cashondiv">
    <h3>Pay On delivery </h3>
    <div class="captcha">
       <div class="imgdiv"> <img src="data:image/jpeg;base64,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"
            alt=""></div>
        <div class="changeimgdiv">change Image</div>
    </div>
    <input class="inputdiv" type="text" placeholder="Enetr code shown in above image*">
    <p class="onlyp">You can pay via Cash/Card or UPI enabled app at the time of delivery.
        Ask your delivery executive for these option.
    </p>
    <button id="butplaceorder">PLACE ORDER</button>
</div>

</div>`;
  var placeorderbut = document.getElementById("butplaceorder");
  placeorderbut.addEventListener("click", cashonDel);

  function cashonDel() {
    var inputData = document.querySelector(".inputdiv").value;
    console.log(inputData);
    if (inputData == "1738") {
      window.location.href = "./success.html";
    } else {
      alert("please enter correct captcha");
    }
  }
}
function upidata() {
  append.innerHTML = "";

  append.innerHTML = `   <h3>Pay using UPI</h3>
    <div class="upidiv">
        <div id="circlediv1" class="circle"><i class="far fa-circle"></i></div>
        <div class="upiimgdiv">
            <img
                src="data:image/jpeg;base64,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"
                alt=""></div>
        <div class="textdiv">PhonePe</div>
    </div>
    <div id="appendupiId1">
      
    </div>
    <div class="upidiv">
        <div id="circlediv2" class="circle"><i class="far fa-circle"></i></div>
        <div class="upiimgdiv"><img
                src="data:image/png;base64,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"
                alt=""></div>
        <div class="textdiv">Google Pay</div>
    </div>
    <div id="appendupiId2"></div>
    <div class="upidiv">
        <div id="circlediv3" class="circle"><i class="far fa-circle"></i></div>
        <div class="upiimgdiv"><img
                src="data:image/png;base64,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"
                alt=""></div>
        <div class="textdiv">Enter UPI ID</div>
    </div>
    <div id="appendupiId3"></div>`;
  var circlediv1 = document.getElementById("circlediv1");
  var appendupiId1 = document.getElementById("appendupiId1");
  var circlediv2 = document.getElementById("circlediv2");
  var appendupiId2 = document.getElementById("appendupiId2");
  var circlediv3 = document.getElementById("circlediv3");
  var appendupiId3 = document.getElementById("appendupiId3");

  circlediv1.addEventListener("click", appendData);
  circlediv2.addEventListener("click", appendData1);
  circlediv3.addEventListener("click", appendData2);
}

function appendData() {
  // appendupiId1.innerHTML=""
  appendupiId2.innerHTML = "";
  appendupiId3.innerHTML = "";
  appendupiId1.innerHTML = `
  <input id="upiIdinput" type="text" placeholder="Enter UPI ID here"><br><br>
  <button id="upiIdbutton">PAY NOW</button>
  `;
  var upiIdbut = document.getElementById("upiIdbutton");
  upiIdbut.addEventListener("click", alertData);
}
function appendData1() {
  appendupiId1.innerHTML = "";
  // appendupiId2.innerHTML="";
  appendupiId3.innerHTML = "";
  appendupiId2.innerHTML = `
   <input id="upiIdinput" type="text" placeholder="Enter UPI ID here"><br><br>
   <button id="upiIdbutton">PAY NOW</button>
   `;
  var upiIdbut = document.getElementById("upiIdbutton");
  upiIdbut.addEventListener("click", alertData);
}
function appendData2() {
  appendupiId1.innerHTML = "";
  appendupiId2.innerHTML = "";
  // appendupiId3.innerHTML="";
  appendupiId3.innerHTML = `
   <input id="upiIdinput" type="text" placeholder="Enter UPI ID here"><br><br>
   <button id="upiIdbutton">PAY NOW</button>
   `;
  var upiIdbut = document.getElementById("upiIdbutton");
  upiIdbut.addEventListener("click", alertData);
}

let newToken = localStorage.getItem("userToken");
async function gettingOTP(url = "", data = {}) {
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${newToken}`,
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function alertData() {
  let systemOTP;
  gettingOTP(`${localhost}/gettingPaymentOTP`).then((data) => {
    systemOTP = data.otp;
    console.log("Otp", systemOTP);
    let userOTP = prompt("Please enter your OTP:", "");
    if (userOTP == systemOTP) {
      window.location.href = "./success.html";
    } else {
      alert("Invalid OTP!!!");
      window.location.href = "";
    }
  });
}

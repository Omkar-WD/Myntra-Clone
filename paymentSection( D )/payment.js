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

  document.getElementById("child2").addEventListener("click",cartdata)
  document.getElementById("child1").addEventListener("click",paydata)

  var append=document.getElementById("paymentcont2")

  function cartdata(){
    append.innerHTML="";
    append.innerHTML=`     <div>
    <h4>CREDIT/DEBIT CARD</h4><br><br>
    <input class="cardinput"  type="number" placeholder="Card Number"><br><br>
    <input class="cardinput" type="text" placeholder="Name on card"><br><br>
    <input class="cardinput" id="cardvalid"  type="number" placeholder="Valid Thru (MM/YY)">
    <input class="cardinput" id="cardcvv" type="number" placeholder="CVV" ><br><br>
    <input  type="checkbox"> <label>Save this card for faster payments </label><br><br>

    <button id="paynowbut">PAY NOW</button>
    

</div>`
  }
  function paydata(){
    append.innerHTML="";

    append.innerHTML=`    <div id="cashondiv">
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

</div>`

  }
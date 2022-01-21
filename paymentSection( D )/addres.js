document.querySelector("#container1").innerHTML = `<div id="main1">
<form id="get-address">
  <div class="forpadding">
    <div class="formdiv contact">
      <h3>CONTACT DETAILS</h3>
      <br />
      <input
        id="name"
        class="input1"
        type="text"
        placeholder="Name*"
      /><br /><br />
      <input
        id="mobile"
        class="input1"
        type="number"
        placeholder="Mobile No*"
      /><br /><br />
    </div>

    <div class="formdiv Addres">
      <h3>ADDRESS</h3>
      <br />
      <input
        id="pin"
        class="input1"
        type="number"
        placeholder="Pin Code*"
      /><br /><br />
      <input
        id="add"
        class="input1"
        type="text"
        placeholder="Addres (House No,Building,Street,Area)*"
      /><br /><br />
      <input
        id="town"
        class="input1"
        type="text"
        placeholder="Locality/Town*"
      /><br /><br />
      <input
        id="dist"
        class="input2"
        type="text"
        placeholder="City/District*"
      />
      <input
        id="state"
        class="input2"
        type="text"
        placeholder="State*"
      />
    </div>
    <br />
    <div class="formdiv saveaddress">
      <h3>SAVE ADDRESS AS</h3>
      <br />
      <button class="button1 homebutton">Home</button>
      <button class="button1 workbutton">Work</button><br /><br /><br />

      <input type="checkbox" name="" id="" />
      <label class="checkbox">Make this my default address</label>
    </div>
  </div>
  <div class="formdiv addaddres">
    <button class="button2">ADD ADDRESS</button>
  </div>
</form>
</div>
<div id="main2">
<div class="submain2div1">
  <h4>PRICE DETAILS</h4>
  <p>Total MRP</p>
  <p>Discount on MRP</p>
  <p>Convenience Fee</p>
  <h4>Total Amount</h4>
</div>
<div class="submain2div2">
  <p>(1 Items)</p>
  <p>899</p>
  <p>630</p>
  <p>99</p>
  <h4>269</h4>
</div>
</div>`;

let getForm = document.querySelector("#get-address");
getForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let name1 = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let pin = document.getElementById("pin").value;
  let add = document.getElementById("add").value;
  let town = document.getElementById("town").value;
  let dist = document.getElementById("dist").value;
  let state = document.getElementById("state").value;
  console.log(name1, mobile, pin, add, town, dist, state);
});

document.getElementById("formdata").addEventListener("submit", addData);
var adData = JSON.parse(localStorage.getItem("addressData")) || [];
function addData(event) {
  event.preventDefault();
  var name1 = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value;
  var pin = document.getElementById("pin").value;
  var add = document.getElementById("add").value;
  var town = document.getElementById("town").value;
  var dist = document.getElementById("dist").value;
  var state = document.getElementById("state").value;

  obj = {
    name1,
    mobile,
    pin,
    add,
    town,
    dist,
    state,
  };
  
  for (x in obj) {
    if (obj[x].length === 0) {
      alert("Please fill empty field");
      return;
    } 
      adData.push(obj);
      localStorage.setItem("addressData", JSON.stringify(adData));
      window.location.href = "address1.html";
      return;
  
  }
}




var localData=JSON.parse(localStorage.getItem("addressData"))

var name=document.getElementById("h31")


function appendAdd(){
   
  var appendObj=localData[localData.length-1]

  var name=document.getElementById("h31")
  var District=document.getElementById("span2")
  var  State=document.getElementById("span3")
  var pincode=document.getElementById("span4")
  var address=document.getElementById("span1")
  var mobile=document.getElementById("span5")



  name.innerText=appendObj.name1
  District.textContent=appendObj.dist
  State.textContent=appendObj.state
  pincode.textContent=appendObj.pin
  address.textContent=appendObj.add
  mobile.textContent=appendObj.mobile


}

appendAdd();
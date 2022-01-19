

document.getElementById("formdata").addEventListener("submit",addData)
var adData=JSON.parse(localStorage.getItem("addressData"))||[];
function addData(event){
    event.preventDefault()
    let name1=document.getElementById("name").value
    let mobile=document.getElementById("mobile").value
    let pin=document.getElementById("pin").value
    let add=document.getElementById("add").value
    let town=document.getElementById("town").value
    let dist=document.getElementById("dist").value
    let state=document.getElementById("state").value

    obj={
        name1,
        mobile,
        pin,
        add,
        town,
        dist,
        state
    }
    adData.push(obj)
    localStorage.setItem("addressData",JSON.stringify(adData))
  
    for (x in obj) {
        if (obj[x].length === 0) {
            alert("Please fill all feilds")
            return;
        }
        else{

            window.location.href = "address1.html"
        }
    }
}





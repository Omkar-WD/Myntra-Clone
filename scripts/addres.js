// document.getElementById("formdata").addEventListener("submit", addData);
// var adData = JSON.parse(localStorage.getItem("addressData")) || [];
// function addData(event) {
//   event.preventDefault();
//   var name1 = document.getElementById("name").value;
//   var mobile = document.getElementById("mobile").value;
//   var pin = document.getElementById("pin").value;
//   var add = document.getElementById("add").value;
//   var town = document.getElementById("town").value;
//   var dist = document.getElementById("dist").value;
//   var state = document.getElementById("state").value;

//   obj = {
//     name1,
//     mobile,
//     pin,
//     add,
//     town,
//     dist,
//     state,
//   };
  
//   for (x in obj) {
//     if (obj[x].length === 0) {
//       alert("Please fill empty field");
//       return;
//     } 
//       adData.push(obj);
//       localStorage.setItem("addressData", JSON.stringify(adData));
//       window.location.href = "address1.html";
//       return;
  
//   }
// }



document.getElementById("formdata").addEventListener("submit",address)


async function address(event){
        event.preventDefault()
   
   let data={
    
       name:document.getElementById("name").value,
       mobileNo:document.getElementById("mobile").value,
       pincode:document.getElementById("pin").value,
       address:document.getElementById("add").value,
       town:document.getElementById("town").value,
       city:document.getElementById("dist").value,
       state:document.getElementById("state").value,

       
       
   }
   for (x in data) {
    if (data[x].length === 0) {
      alert("Please fill empty field");
      return;
    } 
     }

  
   data=JSON.stringify(data);

   let responce=await fetch("http://127.0.0.1:2345/address",{

       method:"POST",
       body:data,
       headers:{
           "Content-Type":"application/json"
       }
   })

   let data1= await responce.json();
   window.location.href = "address1.html";
  console.log(data1)

    
}
function useradd(){
    return data1;
}

module.exports=useradd;

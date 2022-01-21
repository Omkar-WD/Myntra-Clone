function appendDatao(orderdata,loco){
    orderdata.forEach(function(ele){
 
 let carddiv=document.createElement("div");
 carddiv.setAttribute("id","carddiv");
 
 let carddivposterimage=document.createElement("div");
 carddivposterimage.setAttribute("id","carddivposterimage");
 
 let imagediv=document.createElement("div");
 imagediv.setAttribute("id","imagediv");
 let image=document.createElement("img");
 image.src=ele.url;
 imagediv.append(image);
 
 let descriptondiv=document.createElement("div");
 descriptondiv.setAttribute("id","descriptondiv");
 let name=document.createElement("p");
 name.textContent=`Product :${ele. productname}`;
 let size=document.createElement("p")
 size.textContent=`Size:${ele.size}`;
 let date=document.createElement("p")
 date.textContent=new Date;
 descriptondiv.append(name,size,date);
  carddivposterimage.append(imagediv,descriptondiv);
  let buttondiv=document.createElement("div");
  buttondiv.setAttribute("id","buttondiv");
  let butt1=document.createElement("button");
  butt1.textContent="Cancel"
 
  let butt2=document.createElement("button");
  butt2.textContent="Track"
  buttondiv.append(butt1,butt2);
  carddiv.append(carddivposterimage,buttondiv);
  loco.append(carddiv);
 
  
 
 
 
 
 
 
 
 
 
 
 
 
    })
 
}
export default appendDatao;
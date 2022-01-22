import appendDatao from "../components/scripto.js";
import header from "../components/header.js";
document.querySelector(".header").innerHTML = header();

let cont = document.getElementById("rightdiv");

console.log(appendDatao);
let cartdata = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogIW3H4yInOm6C8GtTt_tyw9zrXZS7iymOw&usqp=CAU",
    productname: "woman green Ethnic Motifs Panelled",
    size: "s",
  },
];

let orderarr = [
  {
    url: "https://5.imimg.com/data5/JE/BY/MY-53691563/aks-printed-kurti-500x500.jpg",
    productname: "Sangaria",
    size: "s",
  },
  {
    url: "https://m.media-amazon.com/images/I/81P4lN2QyiL._UY550_.jpg",
    productname: "Sangaria",
    size: "s",
  },
];

let paymentDone = "true";
console.log(paymentDone);
// true payment
if (paymentDone === "true") {
  orderarr.push(cartdata.pop());
  appendDatao(orderarr, cont);
  console.log(orderarr);
} else {
  cont.innerHTML = "";
  let dummyimage = document.createElement("img");
  dummyimage.setAttribute(
    "src",
    "https://myntraweb.blob.core.windows.net/selfserveui/assets/images/cards@2x.png"
  );
  dummyimage.setAttribute("class", "dummyimage");
  cont.append(dummyimage);
}

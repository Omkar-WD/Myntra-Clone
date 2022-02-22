function appendSuggestionData(data) {
  document.querySelector(".suggetion-container-items").innerHTML = "";
  data.forEach(({ title, img, desc, price, maxprice, discount }) => {
    let maindiv = document.createElement("div");
    let imgdiv = document.createElement("div");
    let textdiv = document.createElement("div");
    let pricediv = document.createElement("div");
    let imgVar = document.createElement("img");
    imgVar.src = img;
    let titleVar = document.createElement("h4");
    titleVar.textContent = title;
    let priceVar = document.createElement("span");
    priceVar.textContent = price;
    let maxpriceVar = document.createElement("span");
    maxpriceVar.textContent = "Rs: " + maxprice;
    let discountVar = document.createElement("span");
    discountVar.textContent = `${discount}`;
    let descVar = document.createElement("p");
    descVar.textContent = desc;
    let btn = document.createElement("button");
    btn.setAttribute("class", "btnStyle");
    btn.setAttribute("id", "addToCart");
    btn.textContent = "Add to Bag";
    imgdiv.append(imgVar);
    textdiv.append(titleVar, descVar, pricediv);
    pricediv.append(priceVar, maxpriceVar, discountVar);
    maindiv.append(imgdiv, textdiv, btn);
    document.querySelector(".suggetion-container-items").append(maindiv);
  });
}
function appendCartData(data) {
  let x = ``;
  document.querySelector(".bag-lists").innerHTML = "";
  data.forEach(({ title, img, desc, price, maxprice, discount }) => {
    x += `<div id="bag-item">
              <img src="${img}" />
              <div>
                <h4>${title}</h4>
                <p>${desc}</p>
                <div class="select-options">
                  <select class="btnStyle" id="item-size">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                  <select class="btnStyle" id="item-qty">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <h4>
                  ${price} <span class="line-through">${maxprice}</span>
                  <span class="discount">${discount}</span>
                </h4>
                <button class="btnStyle" id="removeFromCart">Remove From Bag</button>
              </div>
            </div>`;
  });
  document.querySelector(".bag-lists").innerHTML = x;
}
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

function displayNameAndAddress(name, address, pincode) {
  let addressVar = address ? address : "";
  let pincodeVar = pincode ? ", " + pincode : "";
  document.querySelector(
    ".bag-container-left-change-address"
  ).innerHTML = `<div>
      <h4>Deliver to : ${name} ${pincodeVar}</h4>
      <h5>${addressVar}</h5>
    </div>`;
}

// function suggetionDataAddedToLocalStorage() {
//   let suggestionData = [
//     {
//       title: "MANCODE",
//       img: "https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2021/3/18/9d72cd96-4288-457d-bfd1-fd85b904a7fd1616054183218-1.jpg",
//       desc: "Men Pre-Shave Balm",
//       price: "Rs: 249",
//       maxprice: 350,
//       discount: "Rs.101 OFF",
//     },
//     {
//       title: "Fantraa",
//       img: "https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2021/5/25/d8b0685c-08e8-425f-972d-2871793024a01621931515125-1.jpg",
//       desc: "Activated Charcoal Facewash",
//       price: "Rs: 200",
//       maxprice: 250,
//       discount: "20% OFF",
//     },
//     {
//       title: "Fantraa",
//       img: "https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2021/6/15/5a1c276a-c581-47e9-95cd-f2e74cef48d21623755631551-1.jpg",
//       desc: "Men Beard & Hair Fragrance...",
//       price: "Rs: 227",
//       maxprice: 350,
//       discount: "35% OFF",
//     },
//     {
//       title: "Jewel Junction",
//       img: "https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2019/6/12/c2685f41-3d68-4c64-9918-5c0aa223c63e1560313429001-1.jpg",
//       desc: "Geometric Cufflinks",
//       price: "Rs: 413",
//       maxprice: 1799,
//       discount: "77% OFF",
//     },
//     {
//       title: "Romeo Rossi",
//       img: "https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/productimage/2019/7/24/887fec3a-87fb-44f0-82dc-7126c58408af1563914904029-1.jpg",
//       desc: "Pack of 3 Ankle-length Socks",
//       price: "Rs: 315",
//       maxprice: 450,
//       discount: "30% OFF",
//     },
//     {
//       title: "UrbanMooch",
//       img: "https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/15039506/2021/8/5/3ec9a2da-45ca-4043-add0-d8f7afff72511628151732763ArganShampoo100ml1.jpg",
//       desc: "Argan Shampoo 100ml",
//       price: "Rs: 224",
//       maxprice: 350,
//       discount: "36% OFF",
//     },
//     {
//       title: "Tistabene",
//       img: "https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/12078638/2020/7/17/4617e9ea-849a-438d-9635-b86422fe95051594993966934-Swag-Vala-Bhai-Hindi-English-Design-Name-Rakhi-3161594993965-1.jpg",
//       desc: "Swag Wala Bhai Rakhi",
//       price: "Rs: 399",
//       maxprice: "",
//       discount: "",
//     },
//     {
//       title: "Jewel Junction",
//       img: "https://assets.myntassets.com/q_95,w_172,c_limit,f_webp,fl_progressive/assets/images/7056275/2018/7/31/9a004784-430d-4bec-9b93-4ba1e421dbf31533019910542-na-8551533019910409-1.jpg",
//       desc: "Round Cufflinks",
//       price: "Rs: 383",
//       maxprice: 1599,
//       discount: "76% OFF",
//     },
//   ];
//   localStorage.setItem("suggetionArr", JSON.stringify(suggestionData));
// }
export {
  appendSuggestionData,
  appendCartData,
  showMore,
  displayNameAndAddress,
  // suggetionDataAddedToLocalStorage,
};

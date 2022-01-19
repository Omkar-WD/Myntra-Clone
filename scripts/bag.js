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
    priceVar.textContent = "Rs: " + Math.round(price);
    let maxpriceVar = document.createElement("span");
    maxpriceVar.textContent = "Rs: " + maxprice;
    let discountVar = document.createElement("span");
    discountVar.textContent = `${discount}`;
    let descVar = document.createElement("p");
    descVar.textContent = desc;
    let btn = document.createElement("button");
    btn.setAttribute("class", "btnStyle");
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
  data.forEach(({ title, img, soldBy, desc, price, maxprice, discount }) => {
    x += `<div id="bag-item">
              <img src="${img}" alt="" />
              <div>
                <h4>${title}</h4>
                <p>${desc}</p>
                <h5>Sold by: ${soldBy}</h5>
                <div class="select-options">
                  <select class="btnStyle"id="">
                    <option value="">Size</option>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                    <option value="">XXL</option>
                  </select>
                  <select class="btnStyle" id="">
                    <option value="">Qty</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                  </select>
                </div>
                <h4>
                  Rs: ${price} <span class="line-through"> Rs: ${maxprice}</span>
                  <span class="discount">${discount}</span>
                </h4>
                <button class="btnStyle">Remove From Bag</button>
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
  document.querySelector(
    ".bag-container-left-change-address"
  ).innerHTML = `<div>
      <h4>Deliver to : ${name} , ${pincode}</h4>
      <h5>${address}</h5>
    </div>
    <div><button class="btnStyle">Change Address</button></div>`;
}

export {
  appendSuggestionData,
  appendCartData,
  showMore,
  displayNameAndAddress,
};

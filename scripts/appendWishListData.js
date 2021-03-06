let token = localStorage.getItem("userToken");
async function settingCartItem(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function appendWishListData(data, animationForConfirmation) {
  document.querySelector("#products_div").innerHTML = "";
  if (data.length !== 0) {
    data.forEach((elem, i) => {
      let maindiv = document.createElement("div");
      let imgdiv = document.createElement("div");
      let textdiv = document.createElement("div");
      let pricediv = document.createElement("div");
      let img = document.createElement("img");
      img.src = elem.img;
      let rating = document.createElement("h6");
      rating.textContent = elem.rating;
      let vote = document.createElement("h6");
      vote.textContent = elem.votes;
      let ratingdiv = document.createElement("div");
      ratingdiv.append(rating, " " + " " + "|" + " " + " ", vote);
      ratingdiv.setAttribute("id", "ratingol");
      let title = document.createElement("h3");
      title.textContent = elem.title;
      let price = document.createElement("span");
      price.textContent = elem.price;
      let maxprice = document.createElement("span");
      maxprice.textContent = elem.maxprice;
      let discount = document.createElement("span");
      discount.setAttribute("class", "themeColor");
      discount.textContent = elem.discount;
      let desc = document.createElement("p");
      desc.textContent = elem.desc;
      let movetobagbutton = document.createElement("button");
      movetobagbutton.textContent = "ADD TO BAG";
      movetobagbutton.setAttribute("id", "moveToBagBtn");
      movetobagbutton.setAttribute("class", "btnStyle");
      movetobagbutton.addEventListener("click", function () {
        let cartData = {
          productId: elem._id,
        };
        settingCartItem(`${localhost}/cart`, cartData).then((cartData) => {
          console.log("cartData:", cartData);
          animationForConfirmation("Added To Bag");
        });
      });
      imgdiv.append(img, ratingdiv);
      textdiv.append(title, desc, pricediv);
      pricediv.append(price, maxprice, discount);
      maindiv.append(imgdiv, textdiv, movetobagbutton);
      imgdiv.addEventListener("click", () => {
        let prodobj = {
          img: elem.img,
          rating: rating.textContent,
          votes: vote.textContent,
          title: title.textContent,
          price: price.textContent,
          maxprice: maxprice.textContent,
          discount: discount.textContent,
          desc: desc.textContent,
        };
        localStorage.setItem("prodobj", JSON.stringify(prodobj));
        window.location.href = "../productSection( P )/productdetails.html";
      });
      textdiv.addEventListener("click", () => {
        let prodobj = {
          img: elem.img,
          rating: rating.textContent,
          votes: vote.textContent,
          title: title.textContent,
          price: price.textContent,
          maxprice: maxprice.textContent,
          discount: discount.textContent,
          desc: desc.textContent,
        };
        localStorage.setItem("prodobj", JSON.stringify(prodobj));
        window.location.href = "../productSection( P )/productdetails.html";
      });
      document.querySelector("#products_div").append(maindiv);
    });
  } else {
    document.querySelector("#products_div").innerHTML =
      "<h1>Empty WishList</h1>";
  }
}

export default appendWishListData;

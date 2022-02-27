function dropDown1() {
  let content = document.querySelector(".dropdown-content1");

  content.addEventListener("mouseover", function () {
    let menu = document.querySelector(".dropdown-menu1");
    menu.style.display = "block";
  });

  let menu = document.querySelector(".dropdown-menu1");
  menu.addEventListener("mouseover", function () {
    menu.style.display = "block";
    menu.addEventListener("mouseout", function () {
      menu.style.display = "none";
    });
  });

  content.addEventListener("mouseout", function () {
    let menu = document.querySelector(".dropdown-menu1");
    menu.style.display = "none";
  });
}

function dropDown2() {
  let content = document.querySelector(".dropdown-content2");

  content.addEventListener("mouseover", function () {
    let menu = document.querySelector(".dropdown-menu2");
    menu.style.display = "block";
  });

  let menu = document.querySelector(".dropdown-menu2");
  menu.addEventListener("mouseover", function () {
    menu.style.display = "block";
    menu.addEventListener("mouseout", function () {
      menu.style.display = "none";
    });
  });

  content.addEventListener("mouseout", function () {
    let menu = document.querySelector(".dropdown-menu2");
    menu.style.display = "none";
  });
}

function dropDown3() {
  let content = document.querySelector(".dropdown-content3");

  content.addEventListener("mouseover", function () {
    let menu = document.querySelector(".dropdown-menu3");
    menu.style.display = "block";
  });

  let menu = document.querySelector(".dropdown-menu3");
  menu.addEventListener("mouseover", function () {
    menu.style.display = "block";
    menu.addEventListener("mouseout", function () {
      menu.style.display = "none";
    });
  });

  content.addEventListener("mouseout", function () {
    let menu = document.querySelector(".dropdown-menu3");
    menu.style.display = "none";
  });
}

function dropDown4() {
  let content = document.querySelector(".dropdown-content4");

  content.addEventListener("mouseover", function () {
    let menu = document.querySelector(".dropdown-menu4");
    menu.style.display = "block";
  });

  let menu = document.querySelector(".dropdown-menu4");
  menu.addEventListener("mouseover", function () {
    menu.style.display = "block";
    menu.addEventListener("mouseout", function () {
      menu.style.display = "none";
    });
  });

  content.addEventListener("mouseout", function () {
    let menu = document.querySelector(".dropdown-menu4");
    menu.style.display = "none";
  });
}

function dropDown5() {
  let content = document.querySelector(".dropdown-content5");

  content.addEventListener("mouseover", function () {
    let menu = document.querySelector(".dropdown-menu5");
    menu.style.display = "block";
  });

  let menu = document.querySelector(".dropdown-menu5");
  menu.addEventListener("mouseover", function () {
    menu.style.display = "block";
    menu.addEventListener("mouseout", function () {
      menu.style.display = "none";
    });
  });

  content.addEventListener("mouseout", function () {
    let menu = document.querySelector(".dropdown-menu5");
    menu.style.display = "none";
  });
}
let token;

async function gettingCartItem(url = "") {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function gettingWishListItem(url = "") {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function userLogout() {
  let url = `http://44.203.71.82:2345/user/logout`;
  try {
    let responce = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await responce.json();
    console.log("user logout", data);
  } catch (err) {
    console.log(err);
  }
}

let userData;
async function gettingUserData() {
  let url = `http://44.203.71.82:2345/user/login`;
  try {
    let responce = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await responce.json();
    userData = data;
    console.log("userData", userData);
    let login = document.querySelector("#loginMenubar");
    let signup = document.querySelector("#signupMenubar");
    let fullname = document.querySelector("#fullname");
    let profile = document.querySelector("#profile");
    let orders = document.querySelector("#orders");
    let logout = document.querySelector("#logout");

    if (userData.isLogin == true) {
      login.style.display = "none";
      signup.style.display = "none";
      fullname.style.display = "block";
      fullname.innerHTML = `<h4>${userData.user.fullName}</h4>`;
      profile.style.display = "block";
      orders.style.display = "block";
      logout.style.display = "block";
      profile.innerHTML = `<li id="profile"><a href="../historySection( S )/profile.html">Profile</a></li>`;
      orders.innerHTML = `<li id="orders"><a href="../historySection( S )/order.html">Orders</a></li>`;
      logout.innerHTML = `<li id="logout"><a href="">Logout</a></li>`;
      profile.addEventListener("click", () => {
        window.location.href = "../historySection( S )/profile.html";
      });
      orders.addEventListener("click", () => {
        window.location.href = "../historySection( S )/order.html";
      });
      logout.addEventListener("click", () => {
        localStorage.setItem("userToken", "");
        userLogout();
        window.location.href = "";
      });
    } else {
      login.style.display = "block";
      signup.style.display = "block";
      fullname.style.display = "none";
      profile.style.display = "none";
      orders.style.display = "none";
      logout.style.display = "none";
    }
  } catch (err) {
    console.log(err);
  }
}

setInterval(() => {
  token = localStorage.getItem("userToken");
  let wishlistItems = document.querySelector("#wishlist-items");
  let bagItems = document.querySelector("#bag-items");
  let cartarr;
  let wishlistarrarr;
  if (token) {
    gettingCartItem("http://44.203.71.82:2345/cart/arraylength").then(
      (cartData) => {
        cartarr = cartData.cartArrayLength;
        bagItems.innerHTML = cartarr;
      }
    );
    gettingWishListItem("http://44.203.71.82:2345/wishList/arraylength").then(
      (wishListData) => {
        wishlistarrarr = wishListData.wishListArrayLength;
        wishlistItems.innerHTML = wishlistarrarr;
      }
    );
  } else {
    bagItems.innerHTML = 0;
    wishlistItems.innerHTML = 0;
  }
}, 1000);
setTimeout(() => {
  token = localStorage.getItem("userToken");
  document.querySelector("#wishlist_div").addEventListener("click", () => {
    window.location.href = "../wishList( O )/wishList.html";
  });
  document.querySelector("#bagdiv").addEventListener("click", () => {
    window.location.href = "../bagSection( O )/bag.html";
  });
  dropDown1();
  dropDown2();
  dropDown3();
  dropDown4();
  dropDown5();
  if (token != "") {
    gettingUserData();
  }
}, 1000);

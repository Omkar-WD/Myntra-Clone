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

async function gettingCartItem(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

setInterval(() => {
  let bagItems = document.querySelector("#bag-items");
  //let cartarr = JSON.parse(localStorage.getItem("cartarr")) || [];
  let cartarr;
  gettingCartItem("http://localhost:2345/cart/arraylength", { userId: 1 }).then(
    (cartData) => {
      cartarr = cartData.cartArrayLength;
      bagItems.innerHTML = cartarr;
      //console.log("cartarr:", cartarr);
    }
  );
  let wishlistItems = document.querySelector("#wishlist-items");
  let wishlistarrarr = JSON.parse(localStorage.getItem("wisharr")) || [];
  //console.log("cartarr 2nd", cartarr);
  wishlistItems.innerHTML = wishlistarrarr.length;
}, 1000);
setTimeout(() => {
  let isLogin = localStorage.getItem("isUserLogin") || "false";
  document.querySelector("#wishlist_div").addEventListener("click", () => {
    if (isLogin == "false") {
      alert("please login to continue!!!");
    } else {
      window.location.href = "../wishList( O )/wishList.html";
    }
  });
  document.querySelector("#bagdiv").addEventListener("click", () => {
    if (isLogin == "false") {
      alert("please login to continue!!!");
    } else {
      window.location.href = "../bagSection( O )/bag.html";
    }
  });

  dropDown1();
  dropDown2();
  dropDown3();
  dropDown4();
  dropDown5();
  let login = document.querySelector("#loginMenubar");
  let signup = document.querySelector("#signupMenubar");
  let fullname = document.querySelector("#fullname");
  let profile = document.querySelector("#profile");
  let orders = document.querySelector("#orders");
  let logout = document.querySelector("#logout");
  let { Fullname } = JSON.parse(localStorage.getItem("signUpData")) || {};
  let isUserLogin = localStorage.getItem("isUserLogin") || "false";
  if (isUserLogin == "true") {
    login.style.display = "none";
    signup.style.display = "none";
    fullname.style.display = "block";
    fullname.innerHTML = `<h4>${Fullname}</h4>`;
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
      localStorage.setItem("isUserLogin", "false");
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
}, 1000);

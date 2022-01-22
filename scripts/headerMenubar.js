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

setTimeout(() => {
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
  let { Fullname } = JSON.parse(localStorage.getItem("signUpData"));
  let isUserLogin = localStorage.getItem("isUserLogin") || "true";
  if (isUserLogin == "true") {
    login.style.display = "none";
    signup.style.display = "none";
    fullname.style.display = "block";
    fullname.innerHTML = `<h4>${Fullname}</h4>`;
    profile.style.display = "block";
    profile.addEventListener("click", () => {
      window.location.href = "../historySection( S )/profile.html";
    });
    orders.style.display = "block";
    orders.addEventListener("click", () => {
      window.location.href = "../historySection( S )/order.html";
    });
    logout.style.display = "block";
    logout.addEventListener("click", () => {
      localStorage.setItem("isUserLogin", "false");
      window.location.href = "./index.html";
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

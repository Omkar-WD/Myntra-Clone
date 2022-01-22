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

setTimeout(() => {
  dropDown1();
  dropDown2();
  dropDown3();
  dropDown4();
}, 2000);

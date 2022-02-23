function loginDesign() {
  return `
      <img id="logo" src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-icon-logo.png" alt="logo" />
      <div class="login_container">
        <form id="login">
          <h1>Login</h1>
          <label>Email Id</label>
          <input
            type="text"
            placeholder="enter email id"
            id="login_data"
            required
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="At least 6 characters"
            id="password"
            required
          />
          <input id="loginButton2" type="submit" value="Login" />
        </form>
      </div>
      <!--  <a id="signupButton2" href="">
         <button>Click here for Signup</button>
       </a> -->
    `;
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

let loginSpan = document.getElementsByClassName("close");
setTimeout(function () {
  let loginBtn = document.getElementById("loginModal");
  let loginModal = document.getElementById("openLoginPage");
  loginBtn.onclick = function () {
    document.querySelector("#loginContainer").innerHTML = loginDesign();
    loginModal.style.display = "block";
    let loginButton = document.querySelector("#login");
    loginButton.addEventListener("submit", function (event) {
      event.preventDefault();
      let loginData = {
        email: document.querySelector("#login_data").value,
        password: document.querySelector("#password").value,
      };
      postData("http://localhost:2345/login", loginData).then((data) => {
        console.log(data, data.token);
        if (data.message === "success") {
          localStorage.setItem("userToken", data.token);
          alert("Login Successfull!!!");
        } else {
          alert("Login Failed , email id or password does not exists!!!");
        }
      });
      document.querySelector("#loginContainer").style.display = "none";
      loginModal.style.display = "none";
    });
  };
  for (let i = 0; i < loginSpan.length; i++) {
    loginSpan[i].addEventListener("click", function () {
      loginModal.style.display = "none";
    });
  }
}, 1000);

// let loginSpan = document.getElementsByClassName("close");
// setTimeout(function () {
//   let loginBtn = document.getElementById("loginModal");
//   let loginModal = document.getElementById("openLoginPage");
//   loginBtn.onclick = function () {
//     document.querySelector("#loginContainer").innerHTML = loginDesign();
//     loginModal.style.display = "block";
//     let loginButton = document.querySelector("#login");
//     loginButton.addEventListener("submit", function (event) {
//       event.preventDefault();
//       let signuparr = JSON.parse(localStorage.getItem("signuparr")) || [];
//       let isLogin = "false";
//       let incorrectPassword = "false";
//       signuparr.forEach((elem) => {
//         if (
//           elem.Email == document.querySelector("#login_data").value ||
//           elem.Mobile == document.querySelector("#login_data").value
//         ) {
//           if (elem.password == document.querySelector("#password").value) {
//             localStorage.setItem("signUpData", JSON.stringify(elem));
//             isLogin = "true";
//             return;
//           } else {
//             incorrectPassword = "true";
//           }
//         }
//       });
//       if (isLogin == "true") {
//         localStorage.setItem("isUserLogin", "true");
//         window.location.href = "";
//         alert("login successful");
//       } else if (incorrectPassword == "true") {
//         alert("Incorrect Password");
//       } else {
//         localStorage.setItem("isUserLogin", "false");
//         alert("user not signed up");
//       }
//     });
//   };
//   for (let i = 0; i < loginSpan.length; i++) {
//     loginSpan[i].addEventListener("click", function () {
//       loginModal.style.display = "none";
//     });
//   }
// }, 1000);

function loginDesign() {
  return `
      <div class="login_container">
        <form id="login">
          <h4>Continue With</h4>
          <img id="googleLogo" src="../images/google.png" alt="logo" />
          <img id="githubLogo" src="../images/github.png" alt="logo" />
          <img id="facebookLogo" src="../images/facebook.png" alt="logo" />
          <img id="twitterLogo" src="../images/twitter1.png" alt="logo" />
          <h3>OR</h3>
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

    document
      .querySelector("#googleLogo")
      .addEventListener("click", function () {
        // console.log("clicked");
        window.location.href = `${localhost}/auth/google`;
      });

    let loginButton = document.querySelector("#login");
    loginButton.addEventListener("submit", function (event) {
      event.preventDefault();
      let loginData = {
        email: document.querySelector("#login_data").value,
        password: document.querySelector("#password").value,
      };
      postData(`${localhost}/login`, loginData).then((data) => {
        if (data.message === "success") {
          localStorage.setItem("userToken", data.token);
          alert("Login Successfull!!!");
          console.log(data);
          window.location.href = "";
        } else {
          alert("Login Failed , email id or password does not exists!!!");
        }
      });
      loginModal.style.display = "none";
    });
  };
  for (let i = 0; i < loginSpan.length; i++) {
    loginSpan[i].addEventListener("click", function () {
      loginModal.style.display = "none";
    });
  }
}, 1000);

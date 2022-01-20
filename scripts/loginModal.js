function loginDesign() {
  return `
      <img id="logo" src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-icon-logo.png" alt="logo" />
      <div class="login_container">
        <form id="login">
          <h1>Login</h1>
          <label>Email or Mobile</label>
          <input
            type="text"
            placeholder="enter email or mobile"
            id="username"
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
      <a id="signupButton2" href="">
        <button>Click here for Signup</button>
      </a>
    `;
}
let loginSpan = document.getElementsByClassName("close");

setTimeout(function () {
  let loginBtn = document.getElementById("loginModal");
  let loginModal = document.getElementById("openLoginPage");
  loginBtn.onclick = function () {
    document.querySelector("#loginContainer").innerHTML = loginDesign();
    loginModal.style.display = "block";
  };
  for (let i = 0; i < loginSpan.length; i++) {
    loginSpan[i].addEventListener("click", function () {
      loginModal.style.display = "none";
    });
  }
}, 1000);

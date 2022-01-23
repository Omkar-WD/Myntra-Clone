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
      let signuparr = JSON.parse(localStorage.getItem("signuparr")) || [];
      let isLogin = "false";
      let incorrectPassword = "false";
      signuparr.forEach((elem) =>{
        if(elem.Email == document.querySelector("#login_data").value || elem.Mobile == document.querySelector("#login_data").value){
          if(elem.password == document.querySelector("#password").value){
            localStorage.setItem("signUpData", JSON.stringify(elem));
            isLogin = "true";
            return;
          }else{
            incorrectPassword = "true";
            
            
            
          }
        }
        
      })
      if(isLogin == "true"){
        localStorage.setItem("isUserLogin", "true");
      window.location.href = "";
        alert("login successful");
      }
      else if(incorrectPassword == "true"){
        alert("Incorrect Password");
      }
      else{
        localStorage.setItem("isUserLogin", "false");
        alert("user not signed up");
      }
      // let loginData = {
      //   login_input: document.querySelector("#login_data").value,
      //   password: document.querySelector("#password").value,
      // };
      // console.log(loginData);
      // localStorage.setItem("loginData", JSON.stringify(loginData));
      
    });
  };
  for (let i = 0; i < loginSpan.length; i++) {
    loginSpan[i].addEventListener("click", function () {
      loginModal.style.display = "none";
    });
  }
}, 1000);

function signUpDesign() {
  return `
        <img id="logo" src="https://logosarchive.com/wp-content/uploads/2021/12/Myntra-icon-logo.png" alt="logo" />
        <div class="signUp_container">
          <form id="signUp">
            <h1>SignUp</h1>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="enter full name"
              id="full_name"
              required
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="enter email"
              id="email"
              required
            />
            <label>Mobile</label>
            <input
              type="number"
              placeholder="enter mobile"
              id="mobile"
              required
            />
            <label>Password</label>
            <input
              type="text"
              placeholder="At least 6 characters"
              id="signup_password"
              required
            />
            <input id="signupButton1" type="submit" value="SignUp" />
          </form>
        </div>
        <!-- <a id="loginButton1" href="">
          <button>Click here for Login</button>
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

let signUpSpan = document.getElementsByClassName("close");
setTimeout(function () {
  let signUpBtn = document.getElementById("signUpModal");
  let signUpModal = document.getElementById("openSignUpPage");
  signUpBtn.onclick = function () {
    document.querySelector("#signUpContainer").innerHTML = signUpDesign();
    signUpModal.style.display = "block";
    let submitButton = document.querySelector("#signUp");
    submitButton.addEventListener("submit", function (event) {
      event.preventDefault();
      let signUpData = {
        fullName: document.querySelector("#full_name").value,
        email: document.querySelector("#email").value,
        mobile: document.querySelector("#mobile").value,
        password: document.querySelector("#signup_password").value,
      };
      postData("http://localhost:2345/register", signUpData).then((data) => {
        console.log(data);
        if (data.message === "success") {
          alert("Signup Successfull!!!");
        } else {
          alert("Signup Failed , email id already exists!!!");
        }
      });
      document.querySelector("#signUpContainer").style.display = "none";
      signUpModal.style.display = "none";
    });
  };
  for (let i = 0; i < signUpSpan.length; i++) {
    signUpSpan[i].addEventListener("click", function () {
      signUpModal.style.display = "none";
    });
  }
}, 500);

// let signUpSpan = document.getElementsByClassName("close");
// let signuparr = JSON.parse(localStorage.getItem("signuparr")) || [];
// setTimeout(function () {
//   let signUpBtn = document.getElementById("signUpModal");
//   let signUpModal = document.getElementById("openSignUpPage");
//   signUpBtn.onclick = function () {
//     document.querySelector("#signUpContainer").innerHTML = signUpDesign();
//     signUpModal.style.display = "block";
//     let submitButton = document.querySelector("#signUp");
//     submitButton.addEventListener("submit", function (event) {
//       event.preventDefault();
//       let isPresent = "false";
//       signuparr.forEach((elem) => {
//         if (
//           elem.Email == document.querySelector("#email").value ||
//           elem.Mobile == document.querySelector("#mobile").value
//         ) {
//           isPresent = "true";
//         }
//       });
//       if (isPresent == "false") {
//         let signUpData = {
//           Fullname: document.querySelector("#full_name").value,
//           Email: document.querySelector("#email").value,
//           Mobile: document.querySelector("#mobile").value,
//           password: document.querySelector("#signup_password").value,
//         };

//         console.log(signUpData);

//         signuparr.push(signUpData);

//         localStorage.setItem("signuparr", JSON.stringify(signuparr));
//         alert("Sign Up successful, please login");
//         document.querySelector("#signUpContainer").style.display = "none";
//         signUpModal.style.display = "none";
//       } else {
//         alert("User already Exists!!!");
//       }
//     });
//   };
//   for (let i = 0; i < signUpSpan.length; i++) {
//     signUpSpan[i].addEventListener("click", function () {
//       signUpModal.style.display = "none";
//     });
//   }
// }, 2000);

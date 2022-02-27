let newToken = localStorage.getItem("userToken");
async function gettingUserPersonalData() {
  let url = `https://masai-myntra-clone.herokuapp.com/user/login`;
  try {
    let responce = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${newToken}`,
      },
    });
    let data = await responce.json();
    console.log("User Personal Data", data);
    let profileObject = {
      Fullname: data.user.fullName,
      Mobile: data.user.mobile,
      Email: data.user.email,
    };
    profile(profileObject);
  } catch (err) {
    console.log(err);
  }
}

gettingUserPersonalData();

async function settingUserData(userDataToSave) {
  let url = `https://masai-myntra-clone.herokuapp.com/user/`;
  try {
    let responce = await fetch(url, {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userDataToSave), // body data type must match "Content-Type" header
    });
    let data = await responce.json();
    let profileObject = {
      Fullname: data.user.fullName,
      Mobile: data.user.mobile,
      Email: data.user.email,
    };
    profile(profileObject);
    console.log("userData", data);
    window.location.href = "";
  } catch (err) {
    console.log(err);
  }
}
function profile(profiledata) {
  document.querySelector("#profilecenterdiv").innerHTML = `<table>
    <tbody>
      <tr>
        <td>Fullname</td>
        <td id="details_full_name"></td>
      </tr>
      <tr>
        <td>Mobile Number</td>
        <td id="details_mobile"></td>
      </tr>
      <tr>
        <td>Email</td>
        <td id="details_email"></td>
      </tr>
      <tr>
        <td colspan="2">
          <button id="editbutt">EDIT</button>
        </td>
      </tr>
    </tbody>
  </table>`;
  document.querySelector("#details_full_name").textContent =
    profiledata.Fullname;
  document.querySelector("#details_mobile").textContent = profiledata.Mobile;
  document.querySelector("#details_email").textContent = profiledata.Email;

  document.querySelector("#editbutt").addEventListener("click", () => {
    document.querySelector("#profilecenterdiv").innerHTML = `<table>
              <tbody>
                <tr>
                  <td>Fullname</td>
                  <td><input type="text" id="edited_full_name" /></td>
                </tr>
                <tr>
                  <td>Mobile Number</td>
                  <td><input type="number" id="edited_mobile"/></td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td><input type="email" id="edited_email" /></td>
                </tr>
                <tr>
                  <td colspan="2"><button id="savebutt">SAVE</button></td>
                </tr>
              </tbody>
            </table>`;
    document.querySelector("#savebutt").addEventListener("click", () => {
      let editedFullName = document.querySelector("#edited_full_name").value;
      let editedMobile = document.querySelector("#edited_mobile").value;
      let editedEmail = document.querySelector("#edited_email").value;
      let profileObject = {
        fullName: editedFullName ? editedFullName : profiledata.Fullname,
        mobile: editedMobile ? editedMobile : profiledata.Mobile,
        email: editedEmail ? editedEmail : profiledata.Email,
      };
      settingUserData(profileObject);
    });
  });
}

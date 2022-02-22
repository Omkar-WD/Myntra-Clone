let profileObject = {
  Fullname: signUpData.Fullname,
  Mobile: signUpData.Mobile,
  Email: signUpData.Email,
};

profile(profiledata);

localStorage.setItem("profileDetails", JSON.stringify(profileObject));

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
}
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

    profileObject = {
      Fullname: editedFullName ? editedFullName : signUpData.Fullname,
      Mobile: editedMobile ? editedMobile : signUpData.Mobile,
      Email: editedEmail ? editedEmail : signUpData.Email,
    };
    localStorage.setItem("profileDetails", JSON.stringify(profileObject));
    localStorage.setItem("signUpData", JSON.stringify(profileObject));
    window.location.href = "";
  });
});

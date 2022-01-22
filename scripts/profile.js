let rightdiv = document.getElementById("rightdiv");
let profilediv = document.getElementById("profilediv");
let profilecenterdiv = document.getElementById("profilecenterdiv");

let profiledata = JSON.parse(localStorage.getItem("profileDetails"));
let signUpData = JSON.parse(localStorage.getItem("signUpData"));

profile(profiledata);

let profileObject = {
  Fullname: signUpData.Fullname,
  Mobile: signUpData.Mobile,
  Email: signUpData.Email,
  Gender: "N/A",
  DOB: "N/A",
  Location: "N/A",
  Alternate_Mobile: "N/A",
  Hint_Name: "N/A",
};
localStorage.setItem("profileDetails", JSON.stringify(profileObject));

function profile(profiledata) {
  if (profiledata != null) {
    let tablee = document.createElement("table");
    let tr1 = document.createElement("tr");
    let Fullname = document.createElement("td");
    Fullname.textContent = "Fullname   ";

    let Fullnamedata = document.createElement("td");
    Fullnamedata.textContent = profiledata.Fullname;
    //   console.log(Fullnamer);
    tr1.append(Fullname, Fullnamedata);

    let tr2 = document.createElement("tr");
    let mobile = document.createElement("td");
    mobile.textContent = "Mobile Number    ";

    let number = document.createElement("td");
    number.textContent = profiledata.Mobile;
    tr2.append(mobile, number);

    let tr3 = document.createElement("tr");

    let email = document.createElement("td");
    email.textContent = "Email";
    let emailContent = document.createElement("td");
    emailContent.textContent = profiledata.Email;
    tr3.append(email, emailContent);

    let tr4 = document.createElement("tr");
    let gender = document.createElement("td");
    gender.textContent = "Gender";
    let gendercontent = document.createElement("td");
    gendercontent.textContent = profiledata.Gender;
    tr4.append(gender, gendercontent);

    let tr5 = document.createElement("tr");
    let dob = document.createElement("td");
    dob.textContent = "Date of Birth";
    let dobcontent = document.createElement("td");
    dobcontent.textContent = profiledata.DOB;
    tr5.append(dob, dobcontent);
    let tr6 = document.createElement("tr");
    let Location = document.createElement("td");
    Location.textContent = "Location ";

    let locationcontent = document.createElement("td");
    locationcontent.textContent = profiledata.Location;
    tr6.append(Location, locationcontent);

    let tr7 = document.createElement("tr");
    let alternamobile = document.createElement("td");
    alternamobile.textContent = "Alternate Mobile";

    let alternatemobcon = document.createElement("td");
    alternatemobcon.textContent = profiledata.Alternate_Mobile;
    tr7.append(alternamobile, alternatemobcon);
    let tr8 = document.createElement("tr");
    let hintname = document.createElement("td");
    hintname.textContent = "Hint Name ";
    let hintnameContent = document.createElement("td");
    hintnameContent.textContent = profiledata.Hint_Name;
    tr8.append(hintname, hintnameContent);

    let editbutt = document.createElement("button");
    editbutt.setAttribute("id", "editbutt");
    editbutt.textContent = "EDIT";
    editbutt.addEventListener("click", editfun);

    tablee.append(tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8);
    profilecenterdiv.append(tablee, editbutt);
  } else {
    let mystr = "N/A";
    let tablee = document.createElement("table");
    let tr1 = document.createElement("tr");
    let Fullname = document.createElement("td");
    Fullname.textContent = "Fullname   ";

    let Fullnamedata = document.createElement("td");
    Fullnamedata.textContent = mystr;
    //   console.log(Fullnamer);
    tr1.append(Fullname, Fullnamedata);

    let tr2 = document.createElement("tr");
    let mobile = document.createElement("td");
    mobile.textContent = "Mobile Number    ";

    let number = document.createElement("td");
    number.textContent = mystr;
    tr2.append(mobile, number);

    let tr3 = document.createElement("tr");

    let email = document.createElement("td");
    email.textContent = "Email";
    let emailContent = document.createElement("td");
    emailContent.textContent = mystr;
    tr3.append(email, emailContent);

    let tr4 = document.createElement("tr");
    let gender = document.createElement("td");
    gender.textContent = "Gender";
    let gendercontent = document.createElement("td");
    gendercontent.textContent = mystr;
    tr4.append(gender, gendercontent);

    let tr5 = document.createElement("tr");
    let dob = document.createElement("td");
    dob.textContent = "Date of Birth";
    let dobcontent = document.createElement("td");
    dobcontent.textContent = mystr;
    tr5.append(dob, dobcontent);
    let tr6 = document.createElement("tr");
    let Location = document.createElement("td");
    Location.textContent = "Location ";

    let locationcontent = document.createElement("td");
    locationcontent.textContent = mystr;
    tr6.append(Location, locationcontent);

    let tr7 = document.createElement("tr");
    let alternamobile = document.createElement("td");
    alternamobile.textContent = "Alternate Mobile";

    let alternatemobcon = document.createElement("td");
    alternatemobcon.textContent = mystr;
    tr7.append(alternamobile, alternatemobcon);
    let tr8 = document.createElement("tr");
    let hintname = document.createElement("td");
    hintname.textContent = "Hint Name ";
    let hintnameContent = document.createElement("td");
    hintnameContent.textContent = mystr;
    tr8.append(hintname, hintnameContent);

    let editbutt = document.createElement("button");
    editbutt.setAttribute("id", "editbutt");
    editbutt.textContent = "EDIT";
    editbutt.addEventListener("click", editfun);

    tablee.append(tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8);
    profilecenterdiv.append(tablee, editbutt);
  }
}

function editfun() {
  rightdiv.innerHTML = " ";

  let editdiv = document.createElement("div");
  editdiv.setAttribute("id", "editdiv");
  rightdiv.append(editdiv);

  let editdetail = document.createElement("h3");
  editdetail.textContent = "Edit Details";
  editdetail.setAttribute("id", "editdetail");
  editdiv.append(editdetail);
  let horizontal = document.createElement("hr");
  horizontal.setAttribute("id", "horizontal");
  editdiv.append(horizontal);

  let fullnamediv = document.createElement("div");
  fullnamediv.setAttribute("class", "mobileditdiv");

  editdiv.append(fullnamediv);

  let fullnamelabel = document.createElement("p");
  fullnamelabel.textContent = "Full Name";

  let fullnameediit = document.createElement("input");
  fullnameediit.setAttribute("type", "text");
  fullnameediit.setAttribute("id", "alternatemobiledetail");
  fullnameediit.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      n = fullnameediit.value;
    }
  });

  fullnamediv.append(fullnamelabel, fullnameediit);

  // mobile

  let mobileditdiv = document.createElement("div");
  mobileditdiv.setAttribute("class", "mobileditdiv");

  editdiv.append(mobileditdiv);

  let mobile = document.createElement("p");
  mobile.textContent = "Mobile NUMBER";
  let mobiledetail = document.createElement("input");

  mobiledetail.setAttribute("type", "text");
  mobileditdiv.setAttribute("id", "editedmodiledata");
  mobiledetail.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      x = mobiledetail.value;
      if (x.length < 10) {
        alert("Input correct Number");
        mobiledetail.value = "";
      } else {
        x = mobiledetail.value;
        console.log(x);
      }
    }
  });

  mobileditdiv.append(mobile, mobiledetail);

  let emaileditdiv = document.createElement("div");
  emaileditdiv.setAttribute("class", "mobileditdiv");

  let emaillabel = document.createElement("p");
  emaillabel.textContent = "EMAIL";

  let emailedit = document.createElement("input");
  emailedit.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      y = emailedit.value;
      console.log(y);
    }
  });

  emaileditdiv.append(emaillabel, emailedit);

  editdiv.append(emaileditdiv);

  // alternate mobileno

  let alternatemobileditdiv = document.createElement("div");
  alternatemobileditdiv.setAttribute("class", "mobileditdiv");

  editdiv.append(alternatemobileditdiv);

  let alternatemobilelabel = document.createElement("p");
  alternatemobilelabel.textContent = " Alternate Mobile NUMBER";

  let alternatemobiledetail = document.createElement("input");
  alternatemobiledetail.setAttribute("type", "text");
  alternatemobiledetail.setAttribute("id", "alternatemobiledetail");
  alternatemobiledetail.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      x = alternatemobiledetail.value;
      if (x.length < 10) {
        alert("Input correct Number");
        alternatemobiledetail.value = "";
      } else {
        z = alternatemobiledetail.value;
        console.log(z);
      }
    }
  });

  alternatemobileditdiv.append(alternatemobilelabel, alternatemobiledetail);
  editdiv.append(alternatemobileditdiv);

  // dobdiv

  let dobdiv = document.createElement("div");
  dobdiv.setAttribute("class", "mobileditdiv");

  editdiv.append(dobdiv);

  let doblabel = document.createElement("p");
  doblabel.textContent = "DOB";

  let dobeediit = document.createElement("input");
  dobeediit.setAttribute("type", "text");
  dobeediit.setAttribute("id", "alternatemobiledetail");
  dobeediit.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      d = dobeediit.value;
      console.log(d);
    }
  });

  dobdiv.append(doblabel, dobeediit);

  // locationedit

  let locationdiv = document.createElement("div");
  locationdiv.setAttribute("class", "mobileditdiv");
  editdiv.append(locationdiv);

  let locationlabel = document.createElement("p");
  locationlabel.textContent = "Location";

  let locationediit = document.createElement("input");
  locationediit.setAttribute("type", "text");
  locationediit.setAttribute("id", "alternatemobiledetail");
  locationediit.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      l = locationediit.value;
      console.log(l);
    }
  });

  locationdiv.append(locationlabel, locationediit);

  //   hintname
  let hintdiv = document.createElement("div");
  hintdiv.setAttribute("class", "mobileditdiv");
  editdiv.append(hintdiv);

  let hintlabel = document.createElement("p");
  hintlabel.textContent = "Hint-Name";

  let hintediit = document.createElement("input");
  hintediit.setAttribute("type", "text");
  hintediit.setAttribute("id", "alternatemobiledetail");
  hintediit.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      hn = hintediit.value;
      console.log(hn);
    }
  });

  hintdiv.append(hintlabel, hintediit);

  let edituserdetailbutt = document.createElement("button");
  edituserdetailbutt.textContent = "Save Changes";
  edituserdetailbutt.setAttribute("id", "savechange");
  editdiv.append(edituserdetailbutt);
  edituserdetailbutt.addEventListener("click", function () {
    if (profiledata !== null) {
      profiledata.Mobile = mobiledetail.value || profiledata.Mobile;
      profiledata.Email = emailedit.value || profiledata.Email;
      profiledata.Alternate_Mobile =
        alternatemobiledetail.value || profiledata.Alternate_Mobile;
      profiledata.Hint_Name = hintediit.value || profiledata.Hint_Name;
      profiledata.Fullname = fullnameediit.value || profiledata.Fullname;
      profiledata.DOB = dobeediit.value || profiledata.DOB;
      profiledata.Location = locationediit.value || profiledata.Location;

      signUpData.Mobile = mobiledetail.value || profiledata.Mobile;
      signUpData.Email = emailedit.value || profiledata.Email;
      profiledata.Alternate_Mobile =
        alternatemobiledetail.value || profiledata.Alternate_Mobile;
      profiledata.Hint_Name = hintediit.value || profiledata.Hint_Name;
      signUpData.Fullname = fullnameediit.value || profiledata.Fullname;
      profiledata.DOB = dobeediit.value || profiledata.DOB;
      profiledata.Location = locationediit.value || profiledata.Location;

      console.log(profiledata);
      console.log(signUpData);
      localStorage.setItem("profileDetails", JSON.stringify(profiledata));
      localStorage.setItem("signUpData", JSON.stringify(signUpData));

      // again calling profile page
      window.location.href = "";
    } else {
      let profileObject = {
        Fullname: fullnameediit.value,
        Mobile: mobiledetail.value,
        Email: emailedit.value,
        Gender: "N/A",
        DOB: dobeediit.value,
        Location: locationediit.value,
        Alternate_Mobile: alternatemobiledetail.value,
        Hint_Name: hintediit.value,
      };
      localStorage.setItem("profileDetails", JSON.stringify(profileObject));
      // again calling profile page
      window.location.href = "";
    }
  });
}

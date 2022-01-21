function animationForConfirmation(msg) {
  document.querySelector("#pop-up").style.display = "block";
  document.querySelector(".container").innerHTML = `<h3>${msg}</h3>`;
  const box = document.querySelector("#pop-up");
  box.addEventListener("animationend", function () {
    setTimeout(function () {
      document.querySelector("#pop-up").style.display = "none";
    }, 800);
  });
}

export default animationForConfirmation;

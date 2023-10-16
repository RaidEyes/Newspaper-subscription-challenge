// Making the animation for the modal
const modal = document.querySelector("#dialog");
const submitButton = document.querySelector(".submit-btn");
const errorText = document.querySelector(".error");
const inputEmail = document.querySelector("#email-box");
const closeButton = document.querySelector(".success-btn");
const emailName = document.querySelector(".email-name");

// Use validity.valid to check the input of the user
inputEmail.addEventListener("input", () => {
  const validEmail = inputEmail.validity.valid ? noError() : showError();
  console.log(inputEmail.validity.valid);
});
// This function show error message
function showError() {
  inputEmail.classList.add("error-background");
  errorText.innerHTML = "Invalid Email Address";
}
// This function remove the error message
function noError() {
  inputEmail.classList.remove("error-background");
  errorText.innerHTML = "";
}
// When clicking the subscribe button, use preventDefault() to stop submitting and let the
// modal show
submitButton.addEventListener("click", async (event) => {
  if (!inputEmail.validity.valid) {
    showError();
    event.preventDefault();
  } else {
    console.log(inputEmail.value);
    emailName.innerHTML = inputEmail.value; // Put the user email in the modal
    showModal();
    event.preventDefault();
  }
});

function showModal() {
  modal.classList.add("modal-animation");
}
// This function close the modal when click the dismiss message
closeButton.addEventListener("click", () => {
  modal.animate(
    [
      { transition: "all ease 1s" },
      { opacity: "0" },
      { transform: "translateY(-50%)" },
    ],
    {
      duration: 1000,
      iteration: 1,
      fill: "backwards",
    }
  );
  setTimeout(() => {
    modal.classList.remove("modal-animation");
  }, 500);
});

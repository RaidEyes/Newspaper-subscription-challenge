const modal = document.querySelector("#dialog");
const submitButton = document.querySelector(".submit-btn");
const errorText = document.querySelector(".error");
const inputEmail = document.querySelector("#email-box");
const emailForm = document.querySelector(".email-input");
const closeButton = document.querySelector(".success-btn");
const mainSection = document.querySelector("#main-section:not(dialog)");

inputEmail.addEventListener("input", () => {
  const validEmail = inputEmail.validity.valid ? noError() : showError();
  console.log(inputEmail.validity.valid);
});

function showError() {
  inputEmail.classList.add("error-background");
  errorText.innerHTML = "Invalid Email Address";
}

function noError() {
  inputEmail.classList.remove("error-background");
  errorText.innerHTML = "";
}

submitButton.addEventListener("click", async (event) => {
  if (!inputEmail.validity.valid) {
    showError();
    event.preventDefault();
  } else {
    showModal();
    event.preventDefault();
  }
});

function showModal() {
  modal.classList.add("modal-animation");
}

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

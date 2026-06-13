const user = {
  email: "hasan@webluna.org",
  pass: "hasan12345",
};

const form = document.getElementsByTagName("form")[0];
const emailInput = document.getElementsByClassName("form-control")[0];
const passwordInput = document.getElementsByClassName("form-control")[1];
const myAlert = document.getElementsByClassName("my-alert")[0];

const submitForm = (e) => {
  e.preventDefault();

  if (!emailInput.value || !passwordInput.value) {
    myAlert.innerHTML =
      '<div class="alert alert-warning">Please, fill inputs.</div>';
  } else {
    if (user.email === emailInput.value && user.pass === passwordInput.value) {
      myAlert.innerHTML =
        '<div class="alert alert-success">Login successfull!</div>';
    } else {
      myAlert.innerHTML =
        '<div class="alert alert-danger">Email or password is wrong!</div>';
    }
  }
};
form.addEventListener("submit", submitForm);

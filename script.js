AOS.init();
const label_user = document.getElementsByTagName("label")[0];
const label_password = document.getElementsByTagName("label")[1];
const input_username = document.getElementById("username");
const input_password = document.getElementById("password");

let filled_name, filled_password;

function addErrorStyle(input) {
  const haveError = {
    username: () => {
      input.classList.add("error");
    },
    password: () => {
      input.classList.add("error");
    },
  };
  return haveError[input.id]();
}

input_username.addEventListener("input", (e) => {
  filled_name = e.target.value;
  if (filled_name) {
    return label_user.classList.add("has-value");
  }
  return label_user.classList.remove("has-value");
});

input_password.addEventListener("input", (e) => {
  filled_password = e.target.value;
  if (filled_password) {
    return label_password.classList.add("has-value");
  }

  return label_password.classList.remove("has-value");
});

input_username.addEventListener("focus", (e) => {
  input_username.classList.remove("error");
  return input_username.classList.add("isFocus");
});

input_username.addEventListener("blur", (e) => {
  return input_username.classList.remove("isFocus");
});

input_password.addEventListener("focus", (e) => {
  input_password.classList.remove("error");
  return input_password.classList.add("isFocus");
});

input_password.addEventListener("blur", (e) => {
  return input_password.classList.remove("isFocus");
});

function checkUserCredentials() {
  if (!filled_name || filled_name !== "admin") {
    addErrorStyle(input_username);
  }
  if (!filled_password || filled_password !== "admin") {
    addErrorStyle(input_password);
  }
}

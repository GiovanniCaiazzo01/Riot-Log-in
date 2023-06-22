const username = document.getElementsByTagName("input")[0];
const password = document.getElementsByTagName("input")[1];
const label_user = document.getElementsByTagName("label")[0];
const label_password = document.getElementsByTagName("label")[1];
const input_username = document.getElementById("username");
const input_password = document.getElementById("password");

let filled_name, filled_password;

username.addEventListener("input", (e) => {
  filled_name = e.target.value;

  if (filled_name) {
    return label_user.classList.add("has-value");
  }
  return label_user.classList.remove("has-value");
});

password.addEventListener("input", (e) => {
  filled_password = e.target.value;
  if (filled_password) {
    return label_password.classList.add("has-value");
  }
  return label_password.classList.remove("has-value");
});

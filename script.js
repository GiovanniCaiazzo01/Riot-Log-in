const username = document.getElementsByTagName("input")[0];
const password = document.getElementsByTagName("input")[1];
const label_user = document.getElementsByTagName("label")[0];
const label_password = document.getElementsByTagName("label")[1];

username.addEventListener("input", (e) => {
  if (e.target.value) {
    return label_user.classList.add("has-value");
  }
  return label_user.classList.remove("has-value");
});

password.addEventListener("input", (e) => {
  if (e.target.value) {
    return label_password.classList.add("has-value");
  }
  return label_password.classList.remove("has-value");
});

AOS.init({
  once: true,
  duration: 700,
  easing: "ease-out-cubic",
});

const DEMO_CREDENTIALS = {
  username: "admin",
  password: "admin",
};

const backgrounds = [
  "./img/breach-dark.jpg",
  "./img/not-official-jet.png",
  "./img/viper-dark.jpg",
];

const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const togglePasswordBtn = document.getElementById("togglePassword");
const heroSection = document.getElementById("game-img-container");
const statusMessage = document.getElementById("statusMessage");
const submitButton = document.getElementById("footer-button-container");

function setRandomBackground() {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  heroSection.style.backgroundImage = `url("${backgrounds[randomIndex]}")`;
}

function setError(input, message = "") {
  const group = input.closest(".input-group");
  group.classList.add("error");
  input.setAttribute("aria-invalid", "true");
  group.classList.remove("shake");
  void group.offsetWidth;
  group.classList.add("shake");

  if (message) {
    showStatus(message, "error");
  }
}

function clearError(input) {
  const group = input.closest(".input-group");
  group.classList.remove("error");
  group.classList.remove("shake");
  input.setAttribute("aria-invalid", "false");
}

function showStatus(message, type = "") {
  statusMessage.textContent = message;
  statusMessage.className = "status-message";
  if (type) {
    statusMessage.classList.add(type);
  }
}

function validateFields() {
  let isValid = true;

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  clearError(usernameInput);
  clearError(passwordInput);
  showStatus("");

  if (!username) {
    setError(usernameInput, "Please enter your username.");
    isValid = false;
  }

  if (!password) {
    if (isValid) {
      showStatus("Please enter your password.", "error");
    }
    setError(passwordInput);
    isValid = false;
  }

  if (!isValid) return false;

  if (username !== DEMO_CREDENTIALS.username) {
    setError(usernameInput, "Username or password is incorrect.");
    isValid = false;
  }

  if (password !== DEMO_CREDENTIALS.password) {
    setError(passwordInput, "Username or password is incorrect.");
    isValid = false;
  }

  return isValid;
}

function handleLogin(event) {
  event.preventDefault();

  const isValid = validateFields();

  if (!isValid) return;

  submitButton.disabled = true;
  showStatus("Signing you in...", "success");

  setTimeout(() => {
    showStatus("Demo sign-in successful. Replace this with your real backend flow.", "success");
    submitButton.disabled = false;
  }, 900);
}

function togglePasswordVisibility() {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  togglePasswordBtn.textContent = isPassword ? "Hide" : "Show";
  togglePasswordBtn.setAttribute(
    "aria-label",
    isPassword ? "Hide password" : "Show password"
  );
}

[usernameInput, passwordInput].forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value.trim()) {
      clearError(input);
      if (!statusMessage.classList.contains("success")) {
        showStatus("");
      }
    }
  });

  input.addEventListener("focus", () => {
    clearError(input);
  });
});

togglePasswordBtn.addEventListener("click", togglePasswordVisibility);
form.addEventListener("submit", handleLogin);

setRandomBackground();

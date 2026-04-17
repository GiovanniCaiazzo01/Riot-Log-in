const heroSlides = [
  {
    image: "./img/breach-dark.jpg",
    eyebrow: "VALORANT // BREACH",
    title: "Break open the round.",
    text: "Fast entry, heavy pressure, and a login screen that feels closer to a real game launcher."
  },
  {
    image: "./img/not-official-jet.png",
    eyebrow: "VALORANT // JETT",
    title: "Move quick. Hit clean.",
    text: "Sharper interactions, better spacing, and a more premium Riot-inspired look from top to bottom."
  },
  {
    image: "./img/viper-dark.jpg",
    eyebrow: "VALORANT // VIPER",
    title: "Stay cold. Stay precise.",
    text: "A stronger front-end structure with clearer validation, polished states, and better mobile behavior."
  }
];

const DEMO_CREDENTIALS = {
  username: "admin",
  password: "admin"
};

const visualPanel = document.getElementById("visualPanel");
const heroEyebrow = document.getElementById("heroEyebrow");
const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");

const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameField = document.getElementById("usernameField");
const passwordField = document.getElementById("passwordField");
const togglePasswordBtn = document.getElementById("togglePassword");
const submitBtn = document.getElementById("submitBtn");
const statusMessage = document.getElementById("statusMessage");

let currentSlideIndex = Math.floor(Math.random() * heroSlides.length);

function setHeroSlide(index) {
  const slide = heroSlides[index];
  visualPanel.style.backgroundImage = `url("${slide.image}")`;
  heroEyebrow.textContent = slide.eyebrow;
  heroTitle.textContent = slide.title;
  heroText.textContent = slide.text;
}

function cycleHeroSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
  setHeroSlide(currentSlideIndex);
}

function showStatus(message, type = "") {
  statusMessage.textContent = message;
  statusMessage.className = "status-message";
  if (type) statusMessage.classList.add(type);
}

function clearFieldError(field, input) {
  field.classList.remove("error", "shake");
  input.setAttribute("aria-invalid", "false");
}

function setFieldError(field, input) {
  field.classList.remove("shake");
  void field.offsetWidth;
  field.classList.add("error", "shake");
  input.setAttribute("aria-invalid", "true");
}

function clearAllErrors() {
  clearFieldError(usernameField, usernameInput);
  clearFieldError(passwordField, passwordInput);
}

function validateForm() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  clearAllErrors();
  showStatus("");

  let valid = true;

  if (!username) {
    setFieldError(usernameField, usernameInput);
    showStatus("Enter your username.", "error");
    valid = false;
  }

  if (!password) {
    setFieldError(passwordField, passwordInput);
    if (valid) showStatus("Enter your password.", "error");
    valid = false;
  }

  if (!valid) return false;

  if (username !== DEMO_CREDENTIALS.username || password !== DEMO_CREDENTIALS.password) {
    setFieldError(usernameField, usernameInput);
    setFieldError(passwordField, passwordInput);
    showStatus("Invalid username or password.", "error");
    return false;
  }

  return true;
}

function handleSubmit(event) {
  event.preventDefault();

  if (!validateForm()) return;

  submitBtn.disabled = true;
  showStatus("Signing you in...", "success");

  setTimeout(() => {
    showStatus("Demo login successful. Connect this form to a real backend next.", "success");
    submitBtn.disabled = false;
  }, 900);
}

function togglePasswordVisibility() {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePasswordBtn.textContent = isHidden ? "Hide" : "Show";
  togglePasswordBtn.setAttribute(
    "aria-label",
    isHidden ? "Hide password" : "Show password"
  );
}

[usernameInput, passwordInput].forEach((input) => {
  input.addEventListener("input", () => {
    const field = input.closest(".field");
    field.classList.remove("error", "shake");
    input.setAttribute("aria-invalid", "false");

    if (statusMessage.classList.contains("error")) {
      showStatus("");
    }
  });

  input.addEventListener("focus", () => {
    const field = input.closest(".field");
    field.classList.remove("error", "shake");
    input.setAttribute("aria-invalid", "false");
  });
});

togglePasswordBtn.addEventListener("click", togglePasswordVisibility);
form.addEventListener("submit", handleSubmit);

setHeroSlide(currentSlideIndex);
setInterval(cycleHeroSlide, 7000);

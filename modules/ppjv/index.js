const body = document.body;
const openNavbarctn = document.querySelector("#openNavbarctn");
const closeNavbarctn = document.querySelector("#closeNavbarctn");
const toggleTheme = document.querySelector(".toggle-theme");
const navbarctn = document.querySelector(".navbarctn");
const overlay = document.querySelector(".overlay");
const light = toggleTheme.children[0];
const dark = toggleTheme.children[1];

// ******* OUVERTURE / FERMETURE NAVBAR CONTAINER *************
openNavbarctn?.addEventListener("click", () => {
  navbarctn.style.right = "0%";
  overlay.classList.add("active");
});

closeNavbarctn?.addEventListener("click", () => {
  navbarctn.style.right = "-100%";
  overlay.classList.remove("active");
});

overlay?.addEventListener("click", () => {
  navbarctn.style.right = "-100%";
  overlay.classList.remove("active");
});

toggleTheme?.addEventListener("click", changeTheme);

function changeTheme() {
  if (body.classList.contains("dark-mode")) {
    lightMode();
  } else {
    darkMode();
  }
}

// Appliquer le mode clair par défaut si le système l’utilise
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  lightMode();
}

function lightMode() {
  body.classList.remove("dark-mode");
  light.classList.add("active");
  dark.classList.remove("active");
}

function darkMode() {
  body.classList.add("dark-mode");
  light.classList.remove("active");
  dark.classList.add("active");
}

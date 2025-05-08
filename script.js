// Toggle theme and save preference
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

// Load saved theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }
};

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Save preference
  const isDark = body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Animate the button
  themeBtn.classList.add("animate");
  setTimeout(() => {
    themeBtn.classList.remove("animate");
  }, 500);
});

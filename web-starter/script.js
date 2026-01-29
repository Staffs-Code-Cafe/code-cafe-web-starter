const button = document.getElementById("changeTextBtn");
const text = document.getElementById("text");

button.addEventListener("click", () => {
  text.textContent = "JavaScript just changed this text";
});
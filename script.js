// Buttons alert placeholder
document.querySelectorAll(".category-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert(`You clicked "${button.textContent.trim()}"!`);
  });
});

console.log("Vidspire is loading... ready to inspire!");

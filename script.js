document.querySelectorAll(".gradient-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert(`You clicked "${button.textContent.trim()}"!`);
  });
});

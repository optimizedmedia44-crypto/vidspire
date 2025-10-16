// Rainbow buttons click feedback
document.querySelectorAll(".rainbow-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert(`You clicked "${button.textContent.trim()}"!`);
  });
});

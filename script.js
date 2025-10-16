document.querySelectorAll(".gradient-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert(`You clicked "${button.textContent.trim()}"!`);
  });
});

document.querySelector(".chatbot-icon").addEventListener("click", () => {
  alert("Chatbot coming soon!");
});

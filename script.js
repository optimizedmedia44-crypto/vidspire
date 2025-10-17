// Buttons alert (you can replace with real functionality later)
document.querySelectorAll(".rainbow-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert(`You clicked "${button.textContent.trim()}"!`);
  });
});

document.querySelector(".chat-icon").addEventListener("click", () => {
  alert("Chatbox clicked! Open chat here.");
});

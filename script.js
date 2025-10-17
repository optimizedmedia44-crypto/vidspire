// Rainbow buttons click alert
document.querySelectorAll(".rainbow-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert(`You clicked "${button.textContent.trim()}"!`);
  });
});

// Chat icon click placeholder
const chatIcon = document.querySelector(".chat-icon");
if (chatIcon) {
  chatIcon.addEventListener("click", () => {
    alert("Chat feature coming soon!");
  });
});

// Optional: You could also add folder-card click events
document.querySelectorAll(".folder-card").forEach(card => {
  card.addEventListener("click", () => {
    alert(`You clicked on "${card.querySelector('p').textContent}" folder!`);
  });
});

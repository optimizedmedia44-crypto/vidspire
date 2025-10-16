// Example interactivity for nav buttons
document.querySelectorAll(".nav-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert(`You clicked "${button.textContent.trim()}"!`);
  });
});

// Chat button alert (placeholder)
document.getElementById("chat-btn").addEventListener("click", () => {
  alert("Chat feature coming soon!");
});

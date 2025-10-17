// Rainbow button clicks
document.querySelectorAll(".nav-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert(`You clicked "${button.textContent.trim()}"!`);
  });
});

// Chat button click
document.querySelector(".chat-btn").addEventListener("click", () => {
  alert("Chat feature coming soon!");
});

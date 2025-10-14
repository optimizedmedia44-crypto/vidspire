// Folder modal
const modal = document.getElementById("folderModal");
const folderElements = document.querySelectorAll(".folder");
const closeBtn = document.querySelector(".close");

folderElements.forEach(folder => {
  folder.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Chatbot
const chatbotTab = document.getElementById("chatbotTab");
const chatbotWindow = document.getElementById("chatbotWindow");
const closeChat = document.getElementById("closeChat");

chatbotTab.addEventListener("click", () => {
  chatbotWindow.style.display = "block";
});

closeChat.addEventListener("click", () => {
  chatbotWindow.style.display = "none";
});

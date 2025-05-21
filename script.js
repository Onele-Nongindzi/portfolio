// Toggle chatbox visibility
function toggleChat() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = (chatbox.style.display === "block") ? "none" : "block";
}

// Append a message to the chatbox
function appendMessage(sender, text, className) {
    const chatMessages = document.getElementById("chat-messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(className);
    messageDiv.textContent = `${sender}: ${text}`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to latest
}

// Generate bot response based on input
function generateResponse(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput.includes("hi") || userInput.includes("hello")) {
        return "Hi! How can I assist you?";
    } else if (userInput.includes("your name")) {
        return "My name is Onele's Portfolio Assistant!";
    } else if (userInput.includes("what do you do")) {
        return "I help you explore Onele Nongindzi's portfolio. Ask me about skills, experience, or projects!";
    } else if (userInput.includes("skills")) {
        return "Onele is skilled in HTML, CSS, JavaScript, React, Node.js, and MySQL.";
    } else if (userInput.includes("experience")) {
        return "Onele is currently a Full Stack Developer Intern at CAPACITI, working on web development projects.";
    } else if (userInput.includes("projects")) {
        return "Onele has worked on multiple web applications. Check the portfolio section for more details.";
    } else if (userInput.includes("contact")) {
        return "You can contact Onele via email at onelenongindzi@gmail.com or phone at +27783056329.";
    } else {
        return "I'm not sure about that. Try asking about Onele's skills, experience, or projects!";
    }
}

// Send message & get bot response
function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value.trim();
    if (!message) return;

    appendMessage("You", message, "user-message");

    const botResponse = generateResponse(message);

    setTimeout(() => {
        appendMessage("Bot", botResponse, "bot-message");
    }, 500); // Simulate delay

    input.value = "";
}

// Listen for Enter key to send message
document.getElementById("chat-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// Initial message
appendMessage("Bot", "Hi! How can I assist you?", "bot-message");
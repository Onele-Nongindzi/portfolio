// Toggle chatbox visibility
function toggleChat() {
    const chatbox = document.getElementById('chatbox');
    chatbox.style.display = (chatbox.style.display === 'block') ? 'none' : 'block';
}

// Send message and add it to chat
function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (message) {
        const chatMessages = document.getElementById('chat-messages');
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);

        // Clear input after sending message
        input.value = '';

        // Auto-scroll to the bottom of the chatbox
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
window.addEventListener("scroll"), function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("fix");
    } else {
        navbar.classList.remove("fix");
    }
}
// .timeline h4 {
//     font-size: 22px;
//     font-weight: 700;
//     color: #fff;
//     display: flex;
//     align-items: center;
// }

// .timeline h4 i {
//     margin-right: 10px;
//     color: #ff8c05; /* Matches your theme gradient */
// }

// .timeline span {
//     font-size: 16px;
//     color: #ddd;
//     margin-left: 32px;
// }
// Function to toggle the chatbox visibility
function toggleChat() {
    const chatbox = document.getElementById('chatbox');
    chatbox.style.display = (chatbox.style.display === 'block') ? 'none' : 'block';
}

// Function to send a message
function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message) {
        // Create a new message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.innerText = message;
        
        // Append the message to the chat-messages container
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.appendChild(messageElement);
        
        // Clear the input field after sending the message
        input.value = '';
        
        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Optional: Listen for "Enter" key to send the message
document.getElementById('chat-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
// Function to toggle the chatbox visibility
function toggleChat() {
    var chatbox = document.getElementById("chatbox");
    chatbox.style.display = (chatbox.style.display === "none" || chatbox.style.display === "") ? "block" : "none";
}

// Function to send a message and generate a response
function sendMessage() {
    var input = document.getElementById("chat-input");
    var message = input.value.trim();
    if (message === "") return;

    var chatMessages = document.getElementById("chat-messages");

    // Append user message
    appendMessage("You", message, "user-message");

    // Generate bot response
    var botResponse = generateResponse(message);
    setTimeout(() => {
        appendMessage("Bot", botResponse, "bot-message");
    }, 500); // Delay to simulate typing

    // Clear input field
    input.value = "";
}

// Function to append a message to the chatbox
function appendMessage(sender, text, className) {
    var chatMessages = document.getElementById("chat-messages");

    var messageDiv = document.createElement("div");
    messageDiv.classList.add(className);
    messageDiv.textContent = `${sender}: ${text}`;

    chatMessages.appendChild(messageDiv);

    // Auto-scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to generate a response based on user input
function generateResponse(userInput) {
    userInput = userInput.toLowerCase();

    // Predefined responses
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
// Function to toggle the chatbox visibility
function toggleChat() {
    var chatbox = document.getElementById("chatbox");
    chatbox.style.display = (chatbox.style.display === "none" || chatbox.style.display === "") ? "block" : "none";
}

// Function to send a message and generate a response
function sendMessage() {
    var input = document.getElementById("chat-input");
    var message = input.value.trim();
    if (message === "") return;

    var chatMessages = document.getElementById("chat-messages");

    // Append user message
    appendMessage("You", message, "user-message");

    // Generate bot response
    var botResponse = generateResponse(message);
    setTimeout(() => {
        appendMessage("Bot", botResponse, "bot-message");
    }, 500); // Delay to simulate typing

    // Clear input field
    input.value = "";
}

// Function to append a message to the chatbox
function appendMessage(sender, text, className) {
    var chatMessages = document.getElementById("chat-messages");

    var messageDiv = document.createElement("div");
    messageDiv.classList.add(className);
    messageDiv.textContent = `${sender}: ${text}`;

    chatMessages.appendChild(messageDiv);

    // Auto-scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to generate a response based on user input
function generateResponse(userInput) {
    userInput = userInput.toLowerCase();

    // Predefined responses
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



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

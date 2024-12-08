// Select elements
const chatForm = document.getElementById('chat-form');
const messagesDiv = document.getElementById('messages');

// Mock user names
let userToggle = true;

// Listen for form submission
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input message
    const msgInput = document.getElementById('msg');
    const message = msgInput.value.trim();

    if (message === '') return;

    // Add the message to the chat
    addMessage(message, userToggle ? 'user' : 'bot');

    // Clear input
    msgInput.value = '';
    userToggle = !userToggle;
});

// Add a message to the chat
function addMessage(message, userClass = 'user') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${userClass}`;
    messageDiv.textContent = message;

    messagesDiv.appendChild(messageDiv);

    // Scroll to the latest message
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

const socket = io();

// Listen for chat messages
socket.on('chatMessage', (msg) => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = msg;
    document.getElementById('messages').appendChild(messageDiv);
});

// Send message
function sendMessage() {
    const input = document.getElementById('messageInput');
    if (input.value.trim()) {
        socket.emit('chatMessage', input.value);
        input.value = ''; // Clear input after sending
    }
}

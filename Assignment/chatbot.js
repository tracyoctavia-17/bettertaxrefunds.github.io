function toggleChatbot() {
    const chatbox = document.getElementById("chatbox");
    if (chatbox.style.display === "none" || chatbox.style.display === "") {
        chatbox.style.display = "flex"; // Show chatbox
    } else {
        chatbox.style.display = "none"; // Hide chatbox
    }
}

function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value;
    const messages = document.querySelector(".chat-body .messages");

    if (message.trim() !== "") {
        const userMessage = document.createElement("div");
        userMessage.textContent = "You: " + message;
        messages.appendChild(userMessage);

        // Simulate a response
        const botMessage = document.createElement("div");
        botMessage.textContent = "Bot: Thanks for reaching out!";
        setTimeout(() => messages.appendChild(botMessage), 1000);

        input.value = "";
    }
}

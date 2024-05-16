// script.js

function upload() {
    var text = document.getElementById("uploadText").value;
    // Send text to backend for upload
    fetch('/api/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(text),
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Redirect to chat interface page after upload
        window.location.href = "chat.html";
    })
    .catch(error => console.error('Error:', error));
}

function chat() {
    var prompt = document.getElementById("userInput").value;
    // Send prompt to backend for chat response
    fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(prompt),
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("chat").innerHTML += "<p>User: " + prompt + "</p>";
        document.getElementById("chat").innerHTML += "<p>Chatbot: " + data + "</p>";
    })
    .catch(error => console.error('Error:', error));
}

const socket = io();

function sendMessage(inputId) {
    const input = document.getElementById(inputId);
    const message = input.value;
    input.value = '';
    socket.emit('message', message);
}

socket.on('message', (data) => {
    const messages1 = document.getElementById('messages1');
    messages1.innerHTML += `<p>Server2: ${data}</p>`;
});
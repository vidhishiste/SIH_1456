const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const transcriptionText = document.getElementById('transcriptionText');

// Initialize the SpeechRecognition API
const recognition = new window.SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;

recognition.onstart = () => {
    console.log('Recording started');
};

recognition.onresult = (event) => {
    const result = event.results[event.results.length - 1];
    const transcript = result[0].transcript;
    transcriptionText.textContent = transcript;
};

recognition.onend = () => {
    console.log('Recording stopped');
};

startButton.addEventListener('click', () => {
    recognition.start();
    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    recognition.stop();
    startButton.disabled = false;
    stopButton.disabled = true;
});

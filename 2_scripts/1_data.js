// DATA LAYER: Holds state and Speech Recognition initialization

const appState = {
    isListening: false,
    finalTranscript: '',
    interimTranscript: '',
    recognition: null
};

// Initialize SpeechRecognition if supported
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        return { supported: false, instance: null };
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    return { supported: true, instance: recognition };
}

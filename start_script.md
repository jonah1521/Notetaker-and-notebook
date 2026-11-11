// APPLICATION ENTRY POINT: Connects events and starts the app

document.addEventListener('DOMContentLoaded', () => {
    const speechSetup = initSpeechRecognition();
    
    if (!speechSetup.supported) {
        updateStatusMessage('Web Speech API is not supported in this browser. Please use Google Chrome or MS Edge.', true);
        document.getElementById('start-btn').disabled = true;
        return;
    }

    appState.recognition = speechSetup.instance;

    // Speech Recognition Event Handlers
    appState.recognition.onstart = () => {
        appState.isListening = true;
        setControlsState(true);
        updateStatusMessage('Listening...');
    };

    appState.recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        updateStatusMessage(`Error: ${event.error}`, true);
    };

    appState.recognition.onend = () => {
        if (appState.isListening) {
            // Restart if stopped unexpectedly while active
            appState.recognition.start();
        } else {
            setControlsState(false);
            updateStatusMessage('Stopped');
        }
    };

    appState.recognition.onresult = (event) => {
        let interim = '';
        let final = appState.finalTranscript;

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final += event.results[i][0].transcript + ' ';
            } else {
                interim += event.results[i][0].transcript;
            }
        }

        appState.finalTranscript = final;
        appState.interimTranscript = interim;

        const formatted = formatTranscript(appState.finalTranscript, appState.interimTranscript);
        updateCaptionDisplay(formatted);
    };

    // Button Event Listeners
    document.getElementById('start-btn').addEventListener('click', () => {
        appState.isListening = true;
        appState.recognition.start();
    });

    document.getElementById('stop-btn').addEventListener('click', () => {
        appState.isListening = false;
        appState.recognition.stop();
        setControlsState(false);
        updateStatusMessage('Stopped');
    });

    document.getElementById('copy-caption-btn').addEventListener('click', () => {
        const textToCopy = appState.finalTranscript + ' ' + appState.interimTranscript;
        if (textToCopy.trim()) {
            appendToNotesArea(textToCopy);
        }
    });

    document.getElementById('clear-notes-btn').addEventListener('click', () => {
        document.getElementById('notes-input').value = '';
    });
});
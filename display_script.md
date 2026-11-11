// PRESENTATION LAYER: Updates elements on screen

function updateStatusMessage(message, isError = false) {
    const statusEl = document.getElementById('status');
    statusEl.textContent = `Status: ${message}`;
    if (isError) {
        statusEl.classList.add('error');
    } else {
        statusEl.classList.remove('error');
    }
}

function updateCaptionDisplay(htmlContent) {
    const box = document.getElementById('caption-box');
    box.innerHTML = htmlContent;
    box.scrollTop = box.scrollHeight; // Auto-scroll to bottom
}

function setControlsState(isListening) {
    document.getElementById('start-btn').disabled = isListening;
    document.getElementById('stop-btn').disabled = !isListening;
}

function appendToNotesArea(text) {
    const notesInput = document.getElementById('notes-input');
    notesInput.value = appendTextToNotes(notesInput.value, text);
}
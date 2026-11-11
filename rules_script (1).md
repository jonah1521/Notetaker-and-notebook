// PROCESSING LAYER: Business logic and rules

function formatTranscript(finalText, interimText) {
    if (!finalText && !interimText) {
        return '<p class="placeholder">Click "Start Captions" and speak into your microphone...</p>';
    }
    
    let html = '';
    if (finalText) {
        html += `<span class="final-text">${finalText}</span>`;
    }
    if (interimText) {
        html += ` <span class="interim-text">${interimText}</span>`;
    }
    return html;
}

function appendTextToNotes(currentNotes, textToAdd) {
    if (!textToAdd.trim()) return currentNotes;
    
    if (currentNotes.trim() === '') {
        return textToAdd.trim();
    }
    return currentNotes + '\n\n' + textToAdd.trim();
}
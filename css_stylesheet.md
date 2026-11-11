/* STYLES */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: #f4f6f9;
    color: #333;
    padding: 20px;
    line-height: 1.5;
}

header {
    margin-bottom: 20px;
    text-align: center;
}

header h1 {
    font-size: 1.8rem;
    color: #1e293b;
}

.subtitle {
    color: #64748b;
    font-size: 0.95rem;
}

.container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

@media (min-width: 768px) {
    .container {
        grid-template-columns: 1fr 1fr;
    }
}

.card {
    background: #ffffff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 10px;
}

.card-header h2 {
    font-size: 1.3rem;
    color: #0f172a;
}

.controls {
    display: flex;
    gap: 10px;
}

.status-indicator {
    font-size: 0.85rem;
    font-weight: 600;
    color: #475569;
    background-color: #f1f5f9;
    padding: 6px 12px;
    border-radius: 4px;
    width: fit-content;
}

.status-indicator.error {
    background-color: #fee2e2;
    color: #991b1b;
}

.caption-display {
    min-height: 250px;
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 15px;
    background-color: #f8fafc;
    font-size: 1.1rem;
}

.caption-display .placeholder {
    color: #94a3b8;
    font-style: italic;
}

.caption-display .interim-text {
    color: #64748b;
    font-style: italic;
}

textarea#notes-input {
    width: 100%;
    min-height: 250px;
    height: 100%;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 15px;
    font-family: inherit;
    font-size: 1rem;
    resize: vertical;
}

textarea#notes-input:focus {
    outline: 2px solid #2563eb;
    border-color: transparent;
}

/* Buttons */
.btn {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn.primary {
    background-color: #2563eb;
    color: #fff;
}

.btn.primary:hover:not(:disabled) {
    background-color: #1d4ed8;
}

.btn.secondary {
    background-color: #0ea5e9;
    color: #fff;
}

.btn.secondary:hover:not(:disabled) {
    background-color: #0284c7;
}

.btn.danger {
    background-color: #ef4444;
    color: #fff;
}

.btn.danger:hover:not(:disabled) {
    background-color: #dc2626;
}

.btn.danger-outline {
    background-color: transparent;
    color: #ef4444;
    border: 1px solid #ef4444;
}

.btn.danger-outline:hover:not(:disabled) {
    background-color: #fef2f2;
}
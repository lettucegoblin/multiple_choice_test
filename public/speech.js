// Speech synthesis functionality
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;
let isSpeaking = false;

// Function to stop any ongoing speech
function stopSpeech() {
    if (isSpeaking) {
        speechSynthesis.cancel();
        isSpeaking = false;

        // Reset all read-aloud buttons
        document.querySelectorAll('.read-aloud-btn').forEach(button => {
            button.innerHTML = '<i class="read-icon">🔊</i> Read Aloud';
            button.classList.remove('speaking');
        });
    }
}

// Function to read text aloud
function readAloud(text, buttonElement) {
    // If already speaking, stop current speech
    if (isSpeaking) {
        // If the same button was clicked, just stop and return
        if (buttonElement.classList.contains('speaking')) {
            stopSpeech();
            return;
        }
        stopSpeech();
    }

    // Create a new utterance
    const utterance = new SpeechSynthesisUtterance(text);

    // Set properties
    utterance.lang = 'en-US';
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    // Update button state
    buttonElement.innerHTML = '<i class="read-icon">⏹️</i> Stop Reading';
    buttonElement.classList.add('speaking');

    // Set up event handlers
    utterance.onend = function () {
        buttonElement.innerHTML = '<i class="read-icon">🔊</i> Read Aloud';
        buttonElement.classList.remove('speaking');
        isSpeaking = false;
    };

    utterance.onerror = function () {
        buttonElement.innerHTML = '<i class="read-icon">🔊</i> Read Aloud';
        buttonElement.classList.remove('speaking');
        isSpeaking = false;
    };

    // Store the current utterance
    currentUtterance = utterance;
    isSpeaking = true;

    // Start speaking
    speechSynthesis.speak(utterance);
}

// Function to add a read-aloud button to feedback/explanation boxes
function addReadAloudButton(containerSelector, contentSelector, buttonClass = 'read-aloud-btn') {
    // Find all matching containers
    document.querySelectorAll(containerSelector).forEach((container, index) => {
        // Check if button already exists
        if (container.querySelector(`.${buttonClass}`)) {
            return;
        }

        // Create the button
        const button = document.createElement('button');
        button.className = buttonClass;
        button.innerHTML = '<i class="read-icon">🔊</i> Read Aloud';
        button.setAttribute('type', 'button');

        // Add click event
        button.addEventListener('click', function () {
            const contentElement = container.querySelector(contentSelector);
            if (contentElement) {
                // Get the text content, removing any HTML tags
                const textToRead = contentElement.textContent.trim();
                readAloud(textToRead, this);
            }
        });

        // Append the button to the container
        container.querySelector('h4').insertAdjacentElement('afterend', button);
    });
}

// Function to add read-aloud buttons to dynamically created content
function addReadAloudToFeedback(feedbackContainer) {
    const feedbackBox = feedbackContainer.querySelector('.feedback-box');
    if (feedbackBox && !feedbackBox.querySelector('.read-aloud-btn')) {
        addReadAloudButton('.feedback-box', '.feedback-content', 'read-aloud-btn');
    }
}

// Function to add read-aloud buttons to model answers
function addReadAloudToModelAnswer(modelAnswerContainer) {
    const modelAnswerBox = modelAnswerContainer.querySelector('.model-answer-box');
    if (modelAnswerBox && !modelAnswerBox.querySelector('.read-aloud-btn')) {
        addReadAloudButton('.model-answer-box', '.model-answer-content', 'read-aloud-btn');
    }
}

// Function to add read-aloud buttons to explanations
function addReadAloudToExplanation(explanationContainer) {
    const explanationBox = explanationContainer.querySelector('.explanation-box');
    if (explanationBox && !explanationBox.querySelector('.read-aloud-btn')) {
        addReadAloudButton('.explanation-box', '.explanation-content', 'read-aloud-btn');
    }
}

// Stop any speech when navigating away
window.addEventListener('beforeunload', stopSpeech);
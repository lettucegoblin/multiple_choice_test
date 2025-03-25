// Basic answer checking for multiple choice questions
function checkAnswer(input, questionIndex) {
  const isCorrect = input.getAttribute('data-correct') === 'true';
  const questionContainer = document.querySelector(`.question-container[data-question-index="${questionIndex}"]`);

  // Reset all options to remove any previous highlights
  questionContainer.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.parentNode.style.color = '';  // Reset color
  });

  // Highlight selected answer based on correctness
  if (!isCorrect) {
      input.parentNode.style.color = 'red';
  } else {
    input.parentNode.style.color = 'green';
  }
}

// Set up the marked.js renderer with security options
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, lang) {
    return code;
  },
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartypants: false,
  xhtml: false
});

// Loading animation for the evaluation process
function startLoadingAnimation(element, text = "Evaluating your answer") {
  let dots = 0;
  const loadingText = text;
  
  const loadingInterval = setInterval(() => {
    dots = (dots + 1) % 4;
    let ellipsis = ".".repeat(dots);
    element.innerHTML = `<div class="feedback-loading">${loadingText}${ellipsis}</div>`;
  }, 500);
  
  return loadingInterval;
}

// Function to get all options for a multiple choice question
function getOptionsForQuestion(questionIndex) {
  const questionContainer = document.querySelector(`.question-container[data-question-index="${questionIndex}"]`);
  const options = [];
  
  // Get all labels from the radio buttons
  questionContainer.querySelectorAll('label').forEach(label => {
    const text = label.textContent.trim();
    const letter = text.charAt(0);
    const optionText = text.substring(3).trim(); // Skip the "X) " prefix
    
    options.push({
      letter: letter,
      text: optionText
    });
  });
  
  return options;
}

// Function to display the model answer
function showModelAnswer(questionNumber, questionIndex) {
  const modelAnswer = document.getElementById(`model-answer-${questionNumber}`).value;
  const modelAnswerDisplay = document.getElementById(`model-answer-display-${questionIndex}`);
  const showAnswerBtn = document.getElementById(`show-answer-btn-${questionNumber}`);
  
  // Toggle display of the model answer
  if (modelAnswerDisplay.innerHTML === '') {
    // Render model answer with markdown
    const htmlModelAnswer = marked.parse(modelAnswer);
    
    modelAnswerDisplay.innerHTML = `
      <div class="model-answer-box">
        <h4>Textbook Answer</h4>
        <div class="model-answer-content">${htmlModelAnswer}</div>
      </div>
    `;
    
    // Add read aloud button if speech.js is included
    if (typeof addReadAloudToModelAnswer === 'function') {
      addReadAloudToModelAnswer(modelAnswerDisplay);
    }
    
    showAnswerBtn.textContent = 'Hide Answer';
  } else {
    modelAnswerDisplay.innerHTML = '';
    showAnswerBtn.textContent = 'Show Answer';
  }
}

// Function to explain the concept with streaming
async function explainConcept(questionNumber, questionIndex, questionType) {
  const questionElement = document.querySelector(`.question-container[data-question-index="${questionIndex}"] h3`);
  const question = questionElement.textContent.replace(`Question ${questionNumber}: `, '');
  const explanationDisplay = document.getElementById(`explanation-display-${questionIndex}`);
  const explainButton = document.getElementById(`explain-btn-${questionNumber}`);
  const explainSuccinctButton = document.getElementById(`explain-succinct-btn-${questionNumber}`);
  
  // If explanation is already shown, toggle it off
  if (explanationDisplay.innerHTML.includes('explanation-box') && 
      !explanationDisplay.innerHTML.includes('succinct-explanation-box')) {
    explanationDisplay.innerHTML = '';
    explainButton.textContent = 'Explain';
    return;
  }
  
  // If the succinct explanation is showing, hide it
  if (explanationDisplay.innerHTML.includes('succinct-explanation-box')) {
    explanationDisplay.innerHTML = '';
    explainSuccinctButton.textContent = 'Explain Succinctly';
  }
  
  // Show loading state
  explainButton.disabled = true;
  explainButton.textContent = 'Generating...';
  explainSuccinctButton.disabled = true;
  
  // Create explanation container
  explanationDisplay.innerHTML = `
    <div class="explanation-box">
      <h4>Concept Explanation</h4>
      <div class="explanation-content"></div>
    </div>
  `;
  
  const explanationContent = explanationDisplay.querySelector('.explanation-content');
  
  try {
    // Create event source for streaming
    const eventSource = new EventSource('/explain-concept-stream?' + new URLSearchParams({
      question: question,
      options: JSON.stringify(questionType === 'multiple' ? getOptionsForQuestion(questionIndex) : [])
    }));
    
    let markdown = '';
    
    // Handle incoming data
    eventSource.onmessage = function(event) {
      if (event.data === '[DONE]') {
        eventSource.close();
        explainButton.disabled = false;
        explainSuccinctButton.disabled = false;
        explainButton.textContent = 'Hide Explanation';
        explainSuccinctButton.textContent = 'Explain Succinctly';
        
        // Add read aloud button after content is fully loaded if speech.js is included
        if (typeof addReadAloudToExplanation === 'function') {
          addReadAloudToExplanation(explanationDisplay);
        }
        return;
      }
      
      try {
        const data = JSON.parse(event.data);
        if (data.chunk) {
          markdown += data.chunk;
          explanationContent.innerHTML = marked.parse(markdown);
          
          // Scroll to the bottom of the content
          explanationContent.scrollTop = explanationContent.scrollHeight;
        } else if (data.error) {
          explanationDisplay.innerHTML = `<div class="feedback-error">${data.error}</div>`;
          explainButton.textContent = 'Explain';
          explainButton.disabled = false;
          explainSuccinctButton.disabled = true;
          eventSource.close();
        }
      } catch (e) {
        console.error('Error parsing streaming data:', e);
      }
    };
    
    // Handle errors
    eventSource.onerror = function(error) {
      console.error('EventSource error:', error);
      eventSource.close();
      explanationDisplay.innerHTML = '<div class="feedback-error">Error receiving explanation stream. Please try again later.</div>';
      explainButton.disabled = false;
      explainSuccinctButton.disabled = true;
      explainButton.textContent = 'Explain';
    };
    
  } catch (error) {
    console.error('Error setting up explanation stream:', error);
    explanationDisplay.innerHTML = '<div class="feedback-error">Failed to generate explanation. Please try again later.</div>';
    explainButton.disabled = false;
    explainSuccinctButton.disabled = true;
    explainButton.textContent = 'Explain';
  }
}

// Function to provide a succinct explanation of the concept
async function explainSuccinct(questionNumber, questionIndex, questionType) {
  const questionElement = document.querySelector(`.question-container[data-question-index="${questionIndex}"] h3`);
  const question = questionElement.textContent.replace(`Question ${questionNumber}: `, '');
  const explanationDisplay = document.getElementById(`explanation-display-${questionIndex}`);
  const explainSuccinctButton = document.getElementById(`explain-succinct-btn-${questionNumber}`);
  const explainButton = document.getElementById(`explain-btn-${questionNumber}`);
  
  // If succinct explanation is already shown, toggle it off
  if (explanationDisplay.innerHTML.includes('succinct-explanation-box')) {
    explanationDisplay.innerHTML = '';
    explainSuccinctButton.textContent = 'Explain Succinctly';
    return;
  }
  
  // If the regular explanation is showing, hide it
  if (explanationDisplay.innerHTML.includes('explanation-box')) {
    explanationDisplay.innerHTML = '';
    explainButton.textContent = 'Explain';
  }
  
  // Show loading state
  explainSuccinctButton.disabled = true;
  explainButton.disabled = true;
  explainSuccinctButton.textContent = 'Generating...';
  
  // Create succinct explanation container
  explanationDisplay.innerHTML = `
    <div class="succinct-explanation-box">
      <h4>Brief Explanation</h4>
      <div class="explanation-content"></div>
    </div>
  `;
  
  const explanationContent = explanationDisplay.querySelector('.explanation-content');
  
  try {
    // Create event source for streaming
    const eventSource = new EventSource('/explain-succinct-stream?' + new URLSearchParams({
      question: question,
      options: JSON.stringify(questionType === 'multiple' ? getOptionsForQuestion(questionIndex) : [])
    }));
    
    let markdown = '';
    
    // Handle incoming data
    eventSource.onmessage = function(event) {
      if (event.data === '[DONE]') {
        eventSource.close();
        explainSuccinctButton.disabled = false;
        explainButton.disabled = false;
        explainSuccinctButton.textContent = 'Hide Explanation';
        explainButton.textContent = 'Explain';
        
        // Add read aloud button after content is fully loaded if speech.js is included
        if (typeof addReadAloudToExplanation === 'function') {
          addReadAloudToExplanation(explanationDisplay);
        }
        return;
      }
      
      try {
        const data = JSON.parse(event.data);
        if (data.chunk) {
          markdown += data.chunk;
          explanationContent.innerHTML = marked.parse(markdown);
          
          // Scroll to the bottom of the content
          explanationContent.scrollTop = explanationContent.scrollHeight;
        } else if (data.error) {
          explanationDisplay.innerHTML = `<div class="feedback-error">${data.error}</div>`;
          explainSuccinctButton.textContent = 'Explain Succinctly';
          explainSuccinctButton.disabled = false;
          explainButton.disabled = false;
          eventSource.close();
        }
      } catch (e) {
        console.error('Error parsing streaming data:', e);
      }
    };
    
    // Handle errors
    eventSource.onerror = function(error) {
      console.error('EventSource error:', error);
      eventSource.close();
      explanationDisplay.innerHTML = '<div class="feedback-error">Error receiving explanation stream. Please try again later.</div>';
      explainSuccinctButton.disabled = false;
      explainButton.disabled = false;
      explainSuccinctButton.textContent = 'Explain Succinctly';
    };
    
  } catch (error) {
    console.error('Error setting up explanation stream:', error);
    explanationDisplay.innerHTML = '<div class="feedback-error">Failed to generate explanation. Please try again later.</div>';
    explainSuccinctButton.disabled = false;
    explainButton.disabled = false;
    explainSuccinctButton.textContent = 'Explain Succinctly';
  }
}

// Evaluate short answer with streaming
async function evaluateShortAnswer(questionNumber, questionIndex) {
  const userAnswer = document.getElementById(`short-answer-${questionNumber}`).value.trim();
  const questionElement = document.querySelector(`.question-container[data-question-index="${questionIndex}"] h3`);
  const question = questionElement.textContent.replace(`Question ${questionNumber}: `, '');
  const modelAnswer = document.getElementById(`model-answer-${questionNumber}`).value;
  const feedbackContainer = document.getElementById(`feedback-${questionIndex}`);
  const submitButton = document.getElementById(`submit-btn-${questionNumber}`);
  
  if (!userAnswer) {
    feedbackContainer.innerHTML = '<div class="feedback-error">Please provide an answer before submitting.</div>';
    return;
  }
  
  // Show loading state with animation
  submitButton.disabled = true;
  submitButton.textContent = 'Evaluating...';
  
  // Create feedback container
  feedbackContainer.innerHTML = `
    <div class="feedback-box">
      <h4>Feedback</h4>
      <div class="feedback-content"></div>
    </div>
  `;
  
  const feedbackContent = feedbackContainer.querySelector('.feedback-content');
  
  try {
    // Create event source for streaming
    const eventSource = new EventSource('/evaluate-answer-stream?' + new URLSearchParams({
      question: question,
      modelAnswer: modelAnswer,
      userAnswer: userAnswer
    }));
    
    let markdown = '';
    
    // Handle incoming data
    eventSource.onmessage = function(event) {
      if (event.data === '[DONE]') {
        eventSource.close();
        submitButton.disabled = false;
        submitButton.textContent = 'Submit Answer';
        
        // Add read aloud button after content is fully loaded if speech.js is included
        if (typeof addReadAloudToFeedback === 'function') {
          addReadAloudToFeedback(feedbackContainer);
        }
        return;
      }
      
      try {
        const data = JSON.parse(event.data);
        if (data.chunk) {
          markdown += data.chunk;
          feedbackContent.innerHTML = marked.parse(markdown);
          
          // Scroll to the bottom of the content
          feedbackContent.scrollTop = feedbackContent.scrollHeight;
        } else if (data.error) {
          feedbackContainer.innerHTML = `<div class="feedback-error">${data.error}</div>`;
          eventSource.close();
        }
      } catch (e) {
        console.error('Error parsing streaming data:', e);
      }
    };
    
    // Handle errors
    eventSource.onerror = function(error) {
      console.error('EventSource error:', error);
      eventSource.close();
      feedbackContainer.innerHTML = '<div class="feedback-error">Error receiving feedback stream. Please try again later.</div>';
      submitButton.disabled = false;
      submitButton.textContent = 'Submit Answer';
    };
    
  } catch (error) {
    console.error('Error evaluating answer:', error);
    feedbackContainer.innerHTML = '<div class="feedback-error">Failed to evaluate answer. Please try again later.</div>';
    submitButton.disabled = false;
    submitButton.textContent = 'Submit Answer';
  }
}
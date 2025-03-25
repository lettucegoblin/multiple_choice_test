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
    showAnswerBtn.textContent = 'Hide Answer';
  } else {
    modelAnswerDisplay.innerHTML = '';
    showAnswerBtn.textContent = 'Show Answer';
  }
}

// Function to explain the concept
async function explainConcept(questionNumber, questionIndex, questionType) {
  const questionElement = document.querySelector(`.question-container[data-question-index="${questionIndex}"] h3`);
  const question = questionElement.textContent.replace(`Question ${questionNumber}: `, '');
  const explanationDisplay = document.getElementById(`explanation-display-${questionIndex}`);
  const explainButton = document.getElementById(`explain-btn-${questionNumber}`);
  
  // If explanation is already shown, toggle it off
  if (explanationDisplay.innerHTML.includes('explanation-box')) {
    explanationDisplay.innerHTML = '';
    explainButton.textContent = 'Explain';
    return;
  }
  
  // Show loading state
  explainButton.disabled = true;
  explainButton.textContent = 'Generating...';
  
  // Start the loading animation
  const loadingInterval = startLoadingAnimation(explanationDisplay, "Generating explanation");
  
  try {
    // Prepare request data based on question type
    const requestData = { question };
    
    // If it's a multiple choice question, include the options
    if (questionType === 'multiple') {
      requestData.options = getOptionsForQuestion(questionIndex);
    }
    
    const response = await fetch('/explain-concept', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData)
    });
    
    const data = await response.json();
    
    // Clear the loading animation
    clearInterval(loadingInterval);
    
    if (data.success) {
      // Use marked.js to render markdown
      const htmlExplanation = marked.parse(data.explanation);
      
      explanationDisplay.innerHTML = `
        <div class="explanation-box">
          <h4>Concept Explanation</h4>
          <div class="explanation-content">${htmlExplanation}</div>
        </div>
      `;
      explainButton.textContent = 'Hide Explanation';
    } else {
      explanationDisplay.innerHTML = `<div class="feedback-error">${data.explanation}</div>`;
      explainButton.textContent = 'Explain';
    }
  } catch (error) {
    // Clear the loading animation
    clearInterval(loadingInterval);
    
    console.error('Error getting explanation:', error);
    explanationDisplay.innerHTML = '<div class="feedback-error">Failed to generate explanation. Please try again later.</div>';
    explainButton.textContent = 'Explain';
  } finally {
    // Restore button state
    explainButton.disabled = false;
  }
}

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
  
  // Start the loading animation
  const loadingInterval = startLoadingAnimation(feedbackContainer);
  
  try {
    const response = await fetch('/evaluate-answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question,
        modelAnswer,
        userAnswer
      })
    });
    
    const data = await response.json();
    
    // Clear the loading animation
    clearInterval(loadingInterval);
    
    if (data.success) {
      // Use marked.js to render markdown
      const htmlFeedback = marked.parse(data.feedback);
      
      feedbackContainer.innerHTML = `
        <div class="feedback-box">
          <h4>Feedback</h4>
          <div class="feedback-content">${htmlFeedback}</div>
        </div>
      `;
    } else {
      feedbackContainer.innerHTML = `<div class="feedback-error">${data.feedback}</div>`;
    }
  } catch (error) {
    // Clear the loading animation
    clearInterval(loadingInterval);
    
    console.error('Error evaluating answer:', error);
    feedbackContainer.innerHTML = '<div class="feedback-error">Failed to evaluate answer. Please try again later.</div>';
  } finally {
    // Restore button state
    submitButton.disabled = false;
    submitButton.textContent = 'Submit Answer';
  }
}
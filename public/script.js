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
  } else
  {
    input.parentNode.style.color = 'green'
  }
}

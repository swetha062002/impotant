let currentQuestion = 0;

// Define the questions and their respective answers
const questions = [
    {
        question: "Will you talk to me?",
        response: null,
    },
    {
        question: "Do you have a map?",
        response: "Cause I keep getting lost in you.",
    },
    {
        question: "Are you a loan?",
        response: "Because you have got my interest",
    },
    {
        question: "Can I borrow a kiss?",
        response: "I promise I'll give it back",
    },
    {
        question: "Do you miss me?",
        response: "I know you miss me every weekend while cooking, every night after office hours, and even many more times. So, accept it. Can we forget all those fights and can you reply back?"
    }
];

// Show the current question and wait for the answer
function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const answerContainer = document.getElementById('answer-container');
    const nextButtonContainer = document.getElementById('next-button-container');
    
    // Clear previous answer and hide next button if it's visible
    answerContainer.innerHTML = '';
    nextButtonContainer.style.display = 'none';

    // If it’s the last question, display a picture
    if (currentQuestion === questions.length) {
        questionContainer.innerHTML = `
            <div id="question">dhadiya</div>
            <img src="images.jpg" alt="onum ila avlo dhan" style="max-width: 100%; height: auto; margin-top: 20px;" />

        `;
    } else {
        // Display the current question
        const questionText = questions[currentQuestion].question;
        questionContainer.innerHTML = `
            <div id="question">${questionText}</div>
            <div class="buttons">
                <button onclick="answerQuestion('yes')">Yes</button>
                <button onclick="answerQuestion('Podi')">Podi</button>
            </div>
        `;
    }
}

// Handle user's answer and show the response
function answerQuestion(answer) {
    const answerContainer = document.getElementById('answer-container');
    const nextButtonContainer = document.getElementById('next-button-container');
    
    // Show the response for the current question
    if (questions[currentQuestion].response) {
        answerContainer.innerHTML = questions[currentQuestion].response;
    }
    
    // Hide the Yes/No buttons
    document.querySelector('.buttons').style.display = 'none';
    
    // Show the Next button after a short delay
    nextButtonContainer.style.display = 'block';
}

// Go to the next question when the Next button is clicked
function nextQuestion() {
    const nextButtonContainer = document.getElementById('next-button-container');
    
    // Hide the Next button to prevent multiple clicks
    nextButtonContainer.style.display = 'none';
    
    // Move to the next question
    currentQuestion++;
    
    // If there are more questions, display the next one
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        // If no more questions, you can display the final message with the picture
        displayQuestion();
    }
}

// Start with the first question
window.onload = function() {
    displayQuestion();
    startHeartAnimation();
};

// Start flying hearts animation
function startHeartAnimation() {
    const heartContainer = document.getElementById('hearts');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💖';
        heartContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 3000); // Remove heart after animation
    }, 500);
}

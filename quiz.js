let currentQuestion = 0;
let score = 0;

// Función para mezclar el orden de las opciones
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
}

// Función para mezclar el orden de las preguntas
function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Función principal asíncrona
async function startQuiz() {
    // Obtener parámetro de consulta de la URL para determinar la categoría seleccionada
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategory = urlParams.get('category');

    // Obtener las preguntas de la categoría seleccionada
    let questions = [];
    if (selectedCategory === 'Anatomia' || selectedCategory === 'Todos') {
        const anatomiaQuestions = await (await fetch('anatomia.json')).json();
        questions = questions.concat(anatomiaQuestions);
    }
    if (selectedCategory === 'Primeros Auxilios' || selectedCategory === 'Todos') {
        const primerosAuxiliosQuestions = await (await fetch('primeros_auxilios.json')).json();
        questions = questions.concat(primerosAuxiliosQuestions);
    }

    // Mezclar el orden de las preguntas
    shuffleQuestions(questions);

    // Mezclar el orden de las opciones para cada pregunta
    questions.forEach(question => {
        shuffleOptions(question.options);
    });

    function displayQuestion() {
        const questionElement = document.getElementById('question');
        const optionsElement = document.getElementById('options');
        const currentQuestionData = questions[currentQuestion];
        questionElement.textContent = currentQuestionData.question;
        optionsElement.innerHTML = "";
        currentQuestionData.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => checkAnswer(option);
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(selectedOption) {
        const currentQuestionData = questions[currentQuestion];
        const buttons = document.querySelectorAll('#options button');
        buttons.forEach(button => {
            button.disabled = true; // Disable buttons after an option is selected
            if (button.textContent === currentQuestionData.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('incorrect');
            }
        });
        if (selectedOption === currentQuestionData.answer) {
            score++;
        }
        document.getElementById('score-value').textContent = score;
        currentQuestion++;
        if (currentQuestion < questions.length) {
            setTimeout(displayQuestion, 1000); // Delay for 1 second before displaying next question
        } else {
            document.getElementById('quiz-end-message').style.display = 'block';
            document.getElementById('quiz-end-message').textContent = "¡Fin del quiz! Tu puntuación es: " + score;
        }
    }

    displayQuestion();
}

// Función para reiniciar el quiz
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    startQuiz();
}


// Llamar a la función principal para comenzar el quiz
startQuiz();

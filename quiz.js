let currentQuestion = 0;
let score = 0;
let questions = []; // Variable para almacenar las preguntas del quiz

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

    // Mostrar la primera pregunta
    displayQuestion();
}

// Función para mostrar una pregunta
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

// Función para verificar la respuesta seleccionada por el usuario
function checkAnswer(selectedOption) {
    const currentQuestionData = questions[currentQuestion];
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => {
        button.disabled = true; // Deshabilitar botones después de seleccionar una opción
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
        setTimeout(displayQuestion, 1000); // Retraso de 1 segundo antes de mostrar la siguiente pregunta
    } else {
        endQuiz();
    }
}

// Función para finalizar el quiz
function endQuiz() {
    document.getElementById('quiz-end-message').style.display = 'block';
    document.getElementById('quiz-end-message').textContent = "¡Fin del quiz! Tu puntuación es: " + score;
    document.getElementById('reset-button').style.display = 'block'; // Mostrar el botón de reset al final del quiz
    document.getElementById('reset-button').addEventListener('click', resetQuiz); // Agregar evento de clic para reiniciar el quiz
}

// Función para reiniciar el quiz
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    shuffleQuestions(questions); // Mezclar el orden de las preguntas nuevamente
    document.getElementById('reset-button').style.display = 'none'; // Ocultar el botón de reset
    displayQuestion(); // Mostrar la primera pregunta
}

// Llamar a la función principal para comenzar el quiz
startQuiz();

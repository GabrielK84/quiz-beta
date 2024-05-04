// Función para cargar las preguntas desde el archivo JSON
function loadQuestions() {
    return fetch('questions.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar las preguntas');
            }
            return response.json();
        });
}

// Mezclar el orden de las opciones para una pregunta dada
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
}

// Mezclar el orden de las preguntas
function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

let questions = []; // Variable para almacenar las preguntas
let currentQuestion = 0;
let score = 0;

// Función para inicializar la quiz una vez que las preguntas se hayan cargado
function initializeQuiz() {
    loadQuestions()
        .then(data => {
            questions = data; // Almacenar las preguntas cargadas
            shuffleQuestions(questions); // Mezclar las preguntas
            questions.forEach(question => shuffleOptions(question.options)); // Mezclar opciones para cada pregunta
            displayQuestion(); // Mostrar la primera pregunta
        })
        .catch(error => {
            console.error(error); // Manejar errores de carga de preguntas
        });
}

// Función para mostrar la pregunta actual
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

// Función para comprobar la respuesta seleccionada por el usuario
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
        document.getElementById('quiz-end-message').style.display = 'block';
        document.getElementById('quiz-end-message').textContent = "¡Fin del quiz! Tu puntuación es: " + score;
    }
}

// Inicializar la quiz al cargar la página
initializeQuiz();

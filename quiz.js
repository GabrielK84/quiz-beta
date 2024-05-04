// Variables globales
let currentQuestion = 0;
let score = 0;
let questions = [];

// Función para cargar preguntas desde un archivo JSON
async function loadQuestions(category) {
    try {
        const response = await fetch(`${category}.json`);
        if (!response.ok) {
            throw new Error('Error al cargar las preguntas');
        }
        const data = await response.json();
        questions = data.questions;
        shuffleQuestions(questions); // Mezclar las preguntas
        displayQuestion(); // Mostrar la primera pregunta
    } catch (error) {
        console.error(error);
        alert('Error al cargar las preguntas');
    }
}

// Función para mezclar el orden de las preguntas
function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Función para mezclar el orden de las opciones
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
}

// Función para mostrar una pregunta en la interfaz
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
        button.disabled = true; // Desactivar botones después de seleccionar una opción
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

// Obtener referencia al botón de "Comenzar"
const startButton = document.getElementById('start-button');

// Agregar un evento de clic al botón
startButton.addEventListener('click', () => {
    // Obtener el valor seleccionado del selector de categoría
    const selectedCategory = document.getElementById('category-select').value;

    // Redirigir a la página de la quiz correspondiente según la categoría seleccionada
    if (selectedCategory === 'Anatomía') {
        window.location.href = 'anatomia_quiz.html';
    } else if (selectedCategory === 'Primeros Auxilios') {
        window.location.href = 'primeros_auxilios_quiz.html';
    } else if (selectedCategory === 'Todos') {
        window.location.href = 'quiz.html';
    }
});




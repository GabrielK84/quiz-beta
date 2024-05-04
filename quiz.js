let currentQuestion = 0;
let score = 0;
let questions = [];

// Función para mezclar el orden de las opciones
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
}

// Función para cargar las preguntas de Anatomía
function loadAnatomiaQuestions() {
    fetch('anatomia.json')
        .then(response => response.json())
        .then(data => {
            questions = data;
            shuffleQuestions(questions);
            displayQuestion();
        })
        .catch(error => console.error('Error al cargar las preguntas de Anatomía', error));
}

// Función para cargar las preguntas de Primeros Auxilios
function loadPrimerosAuxiliosQuestions() {
    fetch('primeros_auxilios.json')
        .then(response => response.json())
        .then(data => {
            questions = data;
            shuffleQuestions(questions);
            displayQuestion();
        })
        .catch(error => console.error('Error al cargar las preguntas de Primeros Auxilios', error));
}

// Función para cargar las preguntas de ambas categorías
function loadAllQuestions() {
    fetch('anatomia.json')
        .then(response => response.json())
        .then(anatomiaData => {
            fetch('primeros_auxilios.json')
                .then(response => response.json())
                .then(primerosAuxiliosData => {
                    questions = [...anatomiaData, ...primerosAuxiliosData];
                    shuffleQuestions(questions);
                    displayQuestion();
                })
                .catch(error => console.error('Error al cargar las preguntas de Primeros Auxilios', error));
        })
        .catch(error => console.error('Error al cargar las preguntas de Anatomía', error));
}

// Mezclar el orden de las preguntas
function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// Mostrar la pregunta actual
function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuestionData = questions[currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    optionsElement.innerHTML = "";
    shuffleOptions(currentQuestionData.options);
    currentQuestionData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

// Verificar la respuesta seleccionada
function checkAnswer(selectedOption) {
    const currentQuestionData = questions[currentQuestion];
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => {
        button.disabled = true; // Deshabilitar los botones después de seleccionar una opción
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

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    const categorySelector = document.getElementById('category-selector');

    startButton.addEventListener('click', function() {
        const category = categorySelector.value;
        if (category === "anatomia") {
            window.location.href = "quiz.html?category=anatomia";
        } else if (category === "primeros_auxilios") {
            window.location.href = "quiz.html?category=primeros_auxilios";
        } else if (category === "todos") {
            window.location.href = "quiz.html?category=todos";
        }
    });
});

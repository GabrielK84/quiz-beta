let currentQuestion = 0;
let score = 0;
let currentCategory = "";

// Función para mezclar el orden de las opciones
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
}

// Función para cargar las preguntas de la categoría seleccionada
function loadQuestions(category) {
    fetch(`${category}.json`)
        .then(response => response.json())
        .then(data => {
            questions = data;
            shuffleQuestions(questions);
            displayQuestion();
        })
        .catch(error => console.error('Error al cargar las preguntas', error));
}

// Función para cargar las preguntas
function loadAllQuestions() {
    fetch('anatomia.json')
        .then(response => response.json())
        .then(data => {
            questions = data;
            fetch('primeros_auxilios.json')
                .then(response => response.json())
                .then(data => {
                    questions = questions.concat(data);
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

// Obtener la categoría seleccionada
document.getElementById('category-selector').addEventListener('change', function() {
    currentCategory = this.value;
});

// Botón para comenzar la quiz
document.getElementById('start-button').addEventListener('click', function() {
    if (currentCategory === "todos") {
        loadAllQuestions();
    } else {
        loadQuestions(currentCategory);
    }
});

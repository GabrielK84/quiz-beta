const questions = [
    {
        question: "¿Cuál es el objetivo de la evaluación inicial en una emergencia?",
        options: [
            "Determinar el clima",
            "Evaluar la relación entre las lesiones/síntomas, el daño potencial y el riesgo de tratamiento",
            "Buscar a la víctima en el lugar del accidente",
            "Contar el número de personas presentes en la escena"
        ],
        answer: "Evaluar la relación entre las lesiones/síntomas, el daño potencial y el riesgo de tratamiento"
    },
    {
        question: "¿Qué significa el acrónimo 'AVDI' en la evaluación de la consciencia?",
        options: [
            "Alerta, Verbal, Dolor, Inconsciencia",
            "Análisis, Valoración, Diagnóstico, Intervención",
            "Ayuda, Vida, Dinero, Instrucción",
            "Apoyo, Visión, Decisión, Interacción"
        ],
        answer: "Alerta, Verbal, Dolor, Inconsciencia"
    },
    {
        question: "¿Qué se debe hacer si una víctima no responde a estímulos verbales?",
        options: [
            "Dejarla y buscar ayuda",
            "Preguntarle si está bien",
            "Pellizcarla levemente en los hombros",
            "Hablarle más fuerte"
        ],
        answer: "Pellizcarla levemente en los hombros"
    },
    {
        question: "¿Cuál es uno de los lugares donde se puede buscar el pulso periférico?",
        options: [
            "Muñeca",
            "Cuello",
            "Tobillo",
            "Costillas"
        ],
        answer: "Muñeca"
    },
    {
        question: "¿Qué significa la letra 'V' en el acrónimo 'AVDI' para evaluar la consciencia?",
        options: [
            "Verde",
            "Verbal",
            "Violento",
            "Vital"
        ],
        answer: "Verbal"
    },
    {
        question: "¿Cuál es uno de los lugares donde se puede buscar el pulso central?",
        options: [
            "Muñeca",
            "Cuello",
            "Tobillo",
            "Costillas"
        ],
        answer: "Cuello"
    },
    {
        question: "¿Qué significa la letra 'D' en el acrónimo 'AVDI' para evaluar la consciencia?",
        options: [
            "Dulce",
            "Dentro",
            "Dolor",
            "Decisión"
        ],
        answer: "Dolor"
    },
    {
        question: "¿Qué se debe hacer si una víctima no responde a estímulos dolorosos?",
        options: [
            "Dejarla y buscar ayuda",
            "Hablarle más fuerte",
            "Administrarle un analgésico",
            "Buscar atención médica inmediata"
        ],
        answer: "Buscar atención médica inmediata"
    },
    {
        question: "¿Cuál es una de las acciones a tomar para evaluar la respiración de una víctima?",
        options: [
            "Preguntarle si puede mover las extremidades",
            "Mirar si el tórax se eleva y baja",
            "Sentir el pulso",
            "Hablarle para ver si responde"
        ],
        answer: "Mirar si el tórax se eleva y baja"
    },
    {
        question: "¿Qué significa la letra 'I' en el acrónimo 'AVDI' para evaluar la consciencia?",
        options: [
            "Inteligente",
            "Incompleto",
            "Incapacidad",
            "Inconsciencia"
        ],
        answer: "Inconsciencia"
    },
    {
        question: "¿Dónde se encuentran las arterias femorales, uno de los lugares para buscar el pulso central?",
        options: [
            "En el cuello",
            "En la muñeca",
            "En el tobillo",
            "En la ingle"
        ],
        answer: "En la ingle"
    },
    {
        question: "¿Qué se debe hacer antes de mover a un paciente en una emergencia?",
        options: [
            "Administrarle líquidos intravenosos",
            "Realizar un examen físico completo",
            "Inmovilizar las posibles fracturas y contener las hemorragias graves",
            "Tomarle la presión arterial"
        ],
        answer: "Inmovilizar las posibles fracturas y contener las hemorragias graves"
    },
    {
        question: "¿Qué se debe hacer si la víctima se desestabiliza rápidamente y es necesario reanimarla?",
        options: [
            "Administrarle medicamentos orales",
            "Moverla a un lugar seguro",
            "Realizar maniobras de reanimación",
            "Colocarla en posición de pie"
        ],
        answer: "Realizar maniobras de reanimación"
    },
    {
        question: "¿Cuál de las siguientes acciones NO se debe tomar en la evaluación inicial del paciente?",
        options: [
            "Verificar si respira o sangra",
            "Hablarle para ver si está consciente",
            "Tomarle el pulso",
            "Administrarle medicamentos"
        ],
        answer: "Administrarle medicamentos"
    },
    {
        question: "¿Qué significa la letra 'A' en el acrónimo 'AVDI' para evaluar la consciencia?",
        options: [
            "Alerta",
            "Actitud",
            "Agresión",
            "Atento"
        ],
        answer: "Alerta"
    },
    {
        question: "¿Cuál es uno de los lugares para buscar el pulso periférico?",
        options: [
            "Cuello",
            "Tobillo",
            "Muñeca",
            "Estómago"
        ],
        answer: "Muñeca"
    },
    {
        question: "¿Qué significa la letra 'V' en el acrónimo 'AVDI' para evaluar la consciencia?",
        options: [
            "Vestido",
            "Verbal",
            "Viento",
            "Volumen"
        ],
        answer: "Verbal"
    },
    {
        question: "¿Cuál de las siguientes acciones NO es parte de la evaluación inicial del paciente?",
        options: [
            "Buscar signos de consciencia",
            "Verificar si respira o sangra",
            "Realizar un electrocardiograma",
            "Tomar el pulso"
        ],
        answer: "Realizar un electrocardiograma"
    },
    {
        question: "¿Qué significa la letra 'D' en el acrónimo 'AVDI' para evaluar la consciencia?",
        options: [
            "Despierto",
            "Desmayado",
            "Dormido",
            "Dolor"
        ],
        answer: "Dolor"
    },
    {
        question: "¿Qué se debe hacer si una víctima no responde a estímulos verbales?",
        options: [
            "Dejarla y buscar ayuda",
            "Hablarle más fuerte",
            "Preguntarle si está bien",
            "Administrarle un analgésico"
        ],
        answer: "Hablarle más fuerte"
    },
    {
        question: "¿Cuál es uno de los lugares para buscar el pulso central?",
        options: [
            "Muñeca",
            "Cuello",
            "Tobillo",
            "Estómago"
        ],
        answer: "Cuello"
    },
    {
        question: "¿Qué significa la letra 'I' en el acrónimo 'AVDI' para evaluar la consciencia?",
        options: [
            "Imposible",
            "Impedido",
            "Inútil",
            "Inconsciente"
        ],
        answer: "Inconsciente"
    },
    {
        question: "¿Cuál es uno de los lugares donde se puede buscar el pulso periférico?",
        options: [
            "Cuello",
            "Tobillo",
            "Muñeca",
            "Estómago"
        ],
        answer: "Muñeca"
    },
    {
        question: "¿Qué significa la letra 'V' en el acrónimo 'AVDI' para evaluar la consciencia?",
        options: [
            "Vital",
            "Violento",
            "Vago",
            "Vacío"
        ],
        answer: "Vital"
    },
    {
        question: "¿Cuál es uno de los lugares para buscar el pulso central?",
        options: [
            "Muñeca",
            "Cuello",
            "Tobillo",
            "Estómago"
        ],
        answer: "Cuello"
    },
    {
        question: "¿Qué significa la letra 'D' en el acrónimo 'AVDI' para evaluar la consciencia?",
        options: [
            "Deprimido",
            "Decidido",
            "Dormido",
            "Dolor"
        ],
        answer: "Dolor"
    },
    {
        question: "¿Cuál es uno de los lugares para buscar el pulso periférico?",
        options: [
            "Cuello",
            "Tobillo",
            "Muñeca",
            "Estómago"
        ],
        answer: "Muñeca"
    },
    {
        question: "¿Qué significa la letra 'I' en el acrónimo 'AVDI' para evaluar la consciencia?",
        options: [
            "Incómodo",
            "Indiferente",
            "Incompleto",
            "Inconsciente"
        ],
        answer: "Inconsciente"
    }
    // Agregar más preguntas aquí...
];

// Función para obtener una pregunta aleatoria que no se haya mostrado previamente
function getRandomQuestion() {
    // Filtrar las preguntas que no se han mostrado
    const remainingQuestions = questions.filter(question => !question.displayed);
    
    // Verificar si quedan preguntas por mostrar
    if (remainingQuestions.length === 0) {
        // Si no quedan preguntas por mostrar, reiniciar el estado de mostrado de todas las preguntas
        questions.forEach(question => {
            question.displayed = false;
        });
        // Volver a obtener la lista de preguntas restantes
        return getRandomQuestion();
    }
    
    // Seleccionar una pregunta aleatoria de las preguntas restantes
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const randomQuestion = remainingQuestions[randomIndex];
    
    // Marcar la pregunta seleccionada como mostrada
    randomQuestion.displayed = true;
    
    return randomQuestion;
}

// Función para obtener las opciones de una pregunta en un orden aleatorio
function getShuffledOptions(question) {
    const options = [...question.options];
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}

// Obtener una pregunta aleatoria y sus opciones
const currentQuestion = getRandomQuestion();
const shuffledOptions = getShuffledOptions(currentQuestion);



let currentQuestion = 0;
let score = 0;

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

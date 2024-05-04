document.getElementById('category-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    if (selectedCategory === 'anatomy') {
        window.location.href = 'anatomy_quiz.html';
    } else if (selectedCategory === 'first-aid') {
        window.location.href = 'first_aid_quiz.html';
    } else {
        window.location.href = 'quiz.html';
    }
});

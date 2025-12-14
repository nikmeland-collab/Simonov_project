// Функция показа/скрытия анонса
function toggleAnnounce(index, button) {
    const announce = document.getElementById(`announce${index}`);
    
    if (announce.classList.contains('show')) {
        announce.classList.remove('show');
        button.textContent = 'Читать далее';
    } else {
        announce.classList.add('show');
        button.textContent = 'Свернуть';
    }
}

// Инициализация страницы
function init() {
    // Находим все кнопки "Читать далее" и добавляем обработчики событий
    const buttons = document.querySelectorAll('.read-more-btn');
    
    buttons.forEach(button => {
        const index = parseInt(button.getAttribute('data-index'));
        button.addEventListener('click', function() {
            toggleAnnounce(index, this);
        });
    });
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', init);


// Дождемся полной загрузки документа
document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопку "воспоминания" и модальное окно по их id
    const memoriesBtn = document.getElementById('memoriesBtn');
    const memoriesModal = document.getElementById('memoriesModal');

    // На кнопку "воспоминания" навешиваем обработчик события click
    memoriesBtn.addEventListener('click', function() {
        memoriesModal.style.display = 'block'; // Показываем модальное окно
    });

    // Находим крестик в модальном окне воспоминаний
    const memoriesCloseBtn = memoriesModal.querySelector('.close');

    // На крестик также навешиваем обработчик события click
    memoriesCloseBtn.addEventListener('click', function() {
        memoriesModal.style.display = 'none'; // Закрываем модальное окно
    });

    // Находим кнопку "открыть подарок" и модальное окно по их id
    const giftBtn = document.getElementById('giftBtn');
    const giftModal = document.getElementById('giftModal');

    // На кнопку "открыть подарок" навешиваем обработчик события click
    giftBtn.addEventListener('click', function() {
        giftModal.style.display = 'block'; // Показываем модальное окно
    });

    // Находим крестик в модальном окне подарка
    const giftCloseBtn = giftModal.querySelector('.close');

    // На крестик также навешиваем обработчик события click
    giftCloseBtn.addEventListener('click', function() {
        giftModal.style.display = 'none'; // Закрываем модальное окно
    });

    // Находим фотографию "loveyou.png" по ее атрибуту alt
    const photo1 = document.querySelector('img[alt="Фото 1"]');

    // Навешиваем обработчик события click на фотографию
    photo1.addEventListener('click', function() {
        // Создаем модальное окно с вопросом
        const photoModal = document.createElement('div');
        photoModal.classList.add('modal');
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.style.background = 'linear-gradient(to bottom, #ffe6f2, #ffcce6)'; // Градиент переливающийся пастельных тонов
        modalContent.style.border = '2px solid #ff66a3'; // Розовая обводка
        modalContent.style.borderRadius = '10px'; // Закругленные углы
        modalContent.style.padding = '20px';

        // Добавляем вопрос в модальное окно
        const question = document.createElement('p');
        question.textContent = 'Наше будущее будет выглядеть именно так, если ты станешь моей женой, ты скажешь мне "да"?';
        modalContent.appendChild(question);

        // Добавляем кнопки "Да" и "Нет"
        const yesButton = document.createElement('button');
        yesButton.textContent = 'Да';
        yesButton.classList.add('yes-button');
        modalContent.appendChild(yesButton);

        const noButton = document.createElement('button');
        noButton.textContent = 'Нет';
        noButton.classList.add('no-button');
        modalContent.appendChild(noButton);

        // На кнопку "Нет" навешиваем обработчик, который делает кнопку красной и выводит предупреждение
        noButton.addEventListener('click', function() {
            noButton.style.backgroundColor = '#ff6666'; // Красный цвет
            const warning = document.createElement('p');
            warning.textContent = 'Предупреждение! Данная кнопка неактивна, отказ не принимается!';
            modalContent.appendChild(warning);
        });

        // На кнопку "Да" навешиваем обработчик, который закрывает текущее модальное окно и открывает новое с благодарностью
        yesButton.addEventListener('click', function() {
            photoModal.style.display = 'none'; // Закрываем текущее модальное окно
            const thankYouModal = document.createElement('div');
            thankYouModal.classList.add('modal');
            const thankYouContent = document.createElement('div');
            thankYouContent.classList.add('modal-content');
            thankYouContent.style.background = 'linear-gradient(to bottom, #ffe6f2, #ffcce6)'; // Градиент переливающийся пастельных тонов
            thankYouContent.style.borderRadius = '10px'; // Закругленные углы
            thankYouContent.style.padding = '20px';
            const thankYouMessage = document.createElement('p');
            thankYouMessage.textContent = 'Спасибо за ваш выбор, ваш ответ уже был отправлен вашему мужу ❤️';
            thankYouContent.appendChild(thankYouMessage);
            thankYouModal.appendChild(thankYouContent);
            document.body.appendChild(thankYouModal);
        });

        photoModal.appendChild(modalContent);
        document.body.appendChild(photoModal);
    });
});

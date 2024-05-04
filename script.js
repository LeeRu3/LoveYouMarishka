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

// На кнопку "секрет" и модальное окно по их id
const secretBtn = document.getElementById('secretBtn');
const secretModal = document.getElementById('secretModal');

// На кнопку "секрет" навешиваем обработчик события click
secretBtn.addEventListener('click', function() {
    secretModal.style.display = 'block'; // Показываем модальное окно
});

// Находим крестик в модальном окне секрета
const secretCloseBtn = secretModal.querySelector('.close');

// На крестик также навешиваем обработчик события click
secretCloseBtn.addEventListener('click', function() {
    secretModal.style.display = 'none'; // Закрываем модальное окно
});

// Находим кнопку "Да" и "Нет" в модальном окне секрета
const yesButton = secretModal.querySelector('.yes-button');
const noButton = secretModal.querySelector('.no-button');

// На кнопку "Нет" навешиваем обработчик, который делает кнопку красной и выводит предупреждение
noButton.addEventListener('click', function() {
    noButton.style.backgroundColor = '#ff6666'; // Красный цвет
    const warning = document.createElement('p');
    warning.textContent = 'Предупреждение! Данная кнопка неактивна, отказ не принимается!';
    warning.style.color = 'red'; // Применяем красный цвет к тексту предупреждения
    warning.style.marginTop = '10px'; // Добавляем отступ сверху
    modalContent.appendChild(warning); // Добавляем предупреждение в модальное окно
});

// На кнопку "Да" навешиваем обработчик, который закрывает текущее модальное окно и открывает новое с благодарностью
yesButton.addEventListener('click', function() {
    secretModal.style.display = 'none'; // Закрываем текущее модальное окно
    const thankYouModal = document.createElement('div');
    thankYouModal.classList.add('modal');
    thankYouModal.style.display = 'block'; // Показываем новое модальное окно
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

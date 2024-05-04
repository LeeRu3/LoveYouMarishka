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

// На кнопку "Нет" навешиваем обработчик, который отображает предупреждение
noButton.addEventListener('click', function() {
    const warning = secretModal.querySelector('.warning');
    warning.style.display = 'block'; // Отображаем предупреждение
});

// На кнопку "Да" навешиваем обработчик, который закрывает текущее модальное окно и открывает новое с благодарностью
yesButton.addEventListener('click', function() {
    secretModal.style.display = 'none'; // Закрываем текущее модальное окно
    const thankYouModal = document.getElementById('thankYouModal');
    thankYouModal.style.display = 'block'; // Показываем новое модальное окно
    // Автоматическое закрытие окна благодарности через 8 секунд
    setTimeout(function() {
        thankYouModal.style.display = 'none';
    }, 8000);
});

// Находим крестик в модальном окне благодарности
const closeThankYouBtn = document.querySelector('.close-thank-you');

// На крестик также навешиваем обработчик события click
closeThankYouBtn.addEventListener('click', function() {
    thankYouModal.style.display = 'none'; // Закрываем модальное окно благодарности
});

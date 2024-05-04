document.addEventListener("DOMContentLoaded", function() {
    const memoriesBtn = document.getElementById('memoriesBtn');
    const memoriesModal = document.getElementById('memoriesModal');
    memoriesBtn.addEventListener('click', function() {
        memoriesModal.style.display = 'block';
    });

    const memoriesCloseBtn = memoriesModal.querySelector('.close');
    memoriesCloseBtn.addEventListener('click', function() {
        memoriesModal.style.display = 'none';
    });

    const giftBtn = document.getElementById('giftBtn');
    const giftModal = document.getElementById('giftModal');
    giftBtn.addEventListener('click', function() {
        giftModal.style.display = 'block';
    });

    const giftCloseBtn = giftModal.querySelector('.close');
    giftCloseBtn.addEventListener('click', function() {
        giftModal.style.display = 'none';
    });

    const secretBtn = document.getElementById('secretBtn');
    const secretModal = document.getElementById('secretModal');
    secretBtn.addEventListener('click', function() {
        secretModal.style.display = 'block';
    });

    const secretCloseBtn = secretModal.querySelector('.close');
    secretCloseBtn.addEventListener('click', function() {
        secretModal.style.display = 'none';
    });

    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');

    noButton.addEventListener('click', function() {
        const warning = document.createElement('p');
        warning.textContent = 'Предупреждение! Данная кнопка неактивна, отказ не принимается, дамочка ❤️';
        warning.classList.add('warning');
        warning.style.color = 'red';
        const secretModalContent = secretModal.querySelector('.modal-content');
        secretModalContent.appendChild(warning);
    });

    yesButton.addEventListener('click', function() {
        secretModal.style.display = 'none';
        const thankYouModal = document.getElementById('thankYouModal');
        thankYouModal.style.display = 'block';
        setTimeout(function() {
            thankYouModal.style.display = 'none';
        }, 8000);
    });
});

// После открытия модального окна воспоминаний
memoriesModal.addEventListener('click', function() {
    // Инициализируем каждый слайдер секции
    var sectionCarousels = memoriesModal.querySelectorAll('.photo-carousel');
    sectionCarousels.forEach(function(carousel) {
        $(carousel).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            infinite: false
        });
    });
});

// После закрытия модального окна воспоминаний
memoriesCloseBtn.addEventListener('click', function() {
    // Сбрасываем все слайдеры
    var sectionCarousels = memoriesModal.querySelectorAll('.photo-carousel');
    sectionCarousels.forEach(function(carousel) {
        $(carousel).slick('unslick');
    });
});

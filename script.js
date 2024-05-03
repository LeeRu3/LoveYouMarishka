// script.js
document.addEventListener("DOMContentLoaded", function() {
    var memoriesBtn = document.getElementById("memoriesBtn");
    var giftBtn = document.getElementById("giftBtn");
    var memoriesModal = document.getElementById("memoriesModal");
    var giftModal = document.getElementById("giftModal");
    var closeBtns = document.getElementsByClassName("close");

    memoriesBtn.addEventListener("click", function() {
        memoriesModal.style.display = "block";
    });

    giftBtn.addEventListener("click", function() {
        giftModal.style.display = "block";
    });

    for (var i = 0; i < closeBtns.length; i++) {
        closeBtns[i].addEventListener("click", function() {
            memoriesModal.style.display = "none";
            giftModal.style.display = "none";
        });
    }

    window.addEventListener("click", function(event) {
        if (event.target == memoriesModal) {
            memoriesModal.style.display = "none";
        }
        if (event.target == giftModal) {
            giftModal.style.display = "none";
        }
    });

    // Обработчик для кнопки "Да"
    var yesButton = document.querySelector(".yes-button");
    yesButton.addEventListener("click", function() {
        // Отображаем рамку с сообщением
        var confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.style.display = "block";
        // Через 10 секунд скрываем рамку
        setTimeout(function() {
            confirmationMessage.style.display = "none";
        }, 10000);
    });

    // Обработчик для кнопки закрытия рамки с сообщением
    var closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", function() {
        // Скрываем рамку с сообщением
        var confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.style.display = "none";
    });
});

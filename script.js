document.addEventListener("DOMContentLoaded", function() {
    var memoriesBtn = document.getElementById("memoriesBtn");
    var giftBtn = document.getElementById("giftBtn");
    var memoriesModal = document.getElementById("memoriesModal");
    var giftModal = document.getElementById("giftModal");
    var closeBtns = document.getElementsByClassName("close");
    var yesButton = document.querySelector('.yes-button');
    var noButton = document.querySelector('.no-button');
    var messageFrame = document.getElementById('messageFrame');

    memoriesBtn.addEventListener("click", function() {
        toggleModal(memoriesModal);
    });

    giftBtn.addEventListener("click", function() {
        toggleModal(giftModal);
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
    yesButton.addEventListener('click', function() {
        toggleMessageFrame(messageFrame);
        setTimeout(function() {
            toggleMessageFrame(messageFrame);
        }, 10000);
    });

    // Обработчик для кнопки "Нет"
    noButton.addEventListener('click', function() {
        alert("А так нельзя, дамочка, вы арестованы за попытку отказа, с вас 100 поцелуев и 1000 обьятий, сообщение об нарушении уже отправлено к Любимому мужу <3");
    });

    function toggleModal(modal) {
        modal.style.display = (modal.style.display === "block") ? "none" : "block";
    }

    function toggleMessageFrame(frame) {
        frame.style.display = (frame.style.display === "block") ? "none" : "block";
    }
});

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

    yesButton.addEventListener('click', function() {
        alert("Ваш ответ был отправлен к вашему любимому мужу, благодарим <3");
    });
});

    noButton.addEventListener('click', function() {
        alert("А так нельзя, дамочка, вы арестованы за попытку отказа, с вас 100 поцелуев и 1000 обьятий, сообщение об нарушении уже отправлено к Любимому мужу <3");
    });
});

function closeMessageFrame() {
    var messageFrame = document.getElementById('messageFrame');
    messageFrame.style.display = 'none';
}

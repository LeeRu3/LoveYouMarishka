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
        // Добавь здесь анимацию для открытия подарка
    });

    for (var i = 0; i < closeBtns.length; i++) {
        closeBtns[i].addEventListener("click", function() {
            memoriesModal.style.display = "none";
            giftModal.style.display = "none";
        });
    }
});

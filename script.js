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
        // Добавляем анимацию загрузки сердечка
        var heartIcon = document.createElement("span");
        heartIcon.innerHTML = "&#10084;";
        heartIcon.classList.add("heart-icon");
        document.body.appendChild(heartIcon);
        setTimeout(function() {
            heartIcon.style.animation = "pulseAnimation 1s ease infinite";
        }, 500);
        setTimeout(function() {
            heartIcon.style.display = "none";
            giftModal.style.display = "block";
        }, 2000);
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
});

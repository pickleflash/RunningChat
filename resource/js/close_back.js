document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("closeBtn");

    if (closeBtn) {
        closeBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.history.back();
        });
    }
});

//<a href="#" class="close-btn" id="closeBtn">
//<img src="../resource/image/arrow_left.png" alt="뒤로가기">
//</a>
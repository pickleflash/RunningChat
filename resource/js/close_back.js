document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("closeBtn");

    if (closeBtn) {
        closeBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.history.back();
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const userIcon = document.querySelector(".user_icon");
    const cameraIcon = document.querySelector(".camera_icon");
    const fileInput = document.getElementById("profileImageInput");

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalClose = document.querySelector(".modal-close");

    cameraIcon.addEventListener("click", () => {
        fileInput.click();
    });

    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            userIcon.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });

    userIcon.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = userIcon.src;
    });

    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
});

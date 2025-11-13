const toggle = document.getElementById("toggle");
const statusText = document.getElementById("status");

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        statusText.textContent = "공개 허용";
    } else {
        statusText.textContent = "비공개";
    }
});
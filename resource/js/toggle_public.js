const toggle = document.getElementById("toggle");
const statusText = document.getElementById("status");
const userBody = document.querySelector(".user_setting-body");

toggle.addEventListener("change", () => {
    const isPublic = toggle.checked;
    statusText.textContent = isPublic ? "공개 허용" : "비공개";

    const elements = userBody.querySelectorAll("*");

    elements.forEach(el => {

        // 토글 스위치는 제외
        if (el.closest(".toggle")) return;

        // detail_input은 detail_enable.js에서 관리 → 여기서 제외
        if (el.classList.contains("detail_input")) return;

        // 색상 변경
        el.style.color = isPublic ? "var(--text_color)" : "var(--sub_text_color)";

        if (["INPUT", "SELECT", "TEXTAREA"].includes(el.tagName)) {

            if (!isPublic) {
                // 비공개일 때 전체 비활성화
                el.disabled = true;
                el.style.borderColor = "var(--sub_text_color)";
                el.style.backgroundColor = "rgba(0,0,0,0.03)";
            } else {
                // 공개일 때는 활성화하지만,
                // detail_input은 제외 (위에서 return)
                el.disabled = false;
                el.style.borderColor = "var(--text_color)";
                el.style.backgroundColor = "var(--bg_color)";
            }
        }
    });

    // detail_input은 select 값에 따라 다시 세팅되도록 강제 트리거
    document.querySelectorAll(".selection select")
        .forEach(sel => sel.dispatchEvent(new Event("change")));
});

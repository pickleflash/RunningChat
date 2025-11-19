document.addEventListener("DOMContentLoaded", () => {
    const selects = document.querySelectorAll(".selection select");

    const initState = () => {
        selects.forEach(select => {
            const container = select.closest(".item_div");
            const detailInput = container.querySelector(".detail_input");

            if (!detailInput) return;

            if (select.value !== "선택") {
                detailInput.disabled = false;
                detailInput.style.color = "var(--text_color)";
                detailInput.style.borderColor = "var(--text_color)";
                detailInput.style.backgroundColor = "var(--bg_color)";
            } else {
                detailInput.disabled = true;
                detailInput.value = "";
                detailInput.style.color = "var(--sub_text_color)";
                detailInput.style.borderColor = "var(--sub_text_color)";
                detailInput.style.backgroundColor = "rgba(0,0,0,0.03)";
            }
        });
    };

    initState();

    selects.forEach(select => {
        select.addEventListener("change", initState);
    });
});

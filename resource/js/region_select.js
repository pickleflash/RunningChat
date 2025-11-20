document.addEventListener("DOMContentLoaded", () => {

    fetch("../resource/json/seoul_gu.json")
        .then(response => response.json())
        .then(data => {
            const regionSelect = document.querySelector("#region_select");

            regionSelect.innerHTML = `<option value="">구 선택</option>`;

            data.seoul.forEach(gu => {
                const option = document.createElement("option");
                option.value = gu;
                option.textContent = gu;
                regionSelect.appendChild(option);
            });
        })
        .catch(err => console.error("지역 불러오기 오류:", err));
});

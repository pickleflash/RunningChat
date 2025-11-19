document.addEventListener("DOMContentLoaded", function () {

    flatpickr("#timePicker", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i K",
        time_24hr: false,
        allowInput: false,
        minuteIncrement: 1,
        disableMobile: true
    });

});

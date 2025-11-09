let step = 1;

const closeBtn = document.getElementById("closeBtn");
const onboardImage = document.getElementById("onboardImage");
const onboardTitle = document.getElementById("onboardTitle");
const onboardSubtitle = document.getElementById("onboardSubtitle");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
    step++;

    if (step === 2) {
        closeBtn.querySelector("img").src = "../resource/image/arrow_left.png";
        onboardImage.src = "../resource/image/map_pin.png";
        onboardTitle.textContent = "위치 권한이 필요해요";
        onboardSubtitle.textContent = "근처 산책로와 둘레길을 알려드릴게요.";
    }

    else if (step === 3) {
        requestLocationPermission();
    }

    else if (step === 4) {
        onboardImage.src = "../resource/image/bell.png";
        onboardTitle.textContent = "알림 권한이 필요해요";
        onboardSubtitle.textContent = "새로운 메이트와 소식을 받아보세요.";
    }

    else if (step === 5) {
        requestNotificationPermission();
    }

    else if (step === 6) {
        window.location.href = "login1.html";
    }
});

function requestLocationPermission() {
    if (window.Android) {
        window.Android.requestLocationPermission();
    } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            () => alert("위치 권한이 허용되었습니다."),
            () => alert("위치 권한이 거부되었습니다.")
        );
    }
}

function requestNotificationPermission() {
    if (window.Android) {
        window.Android.requestNotificationPermission();
    } else if (window.Notification) {
        Notification.requestPermission().then(result => {
            if (result === "granted") {
                alert("알림 권한이 허용되었습니다.");
            } else {
                alert("알림 권한이 거부되었습니다.");
            }
        });
    }
}

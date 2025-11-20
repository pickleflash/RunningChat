$(document).ready(function () {
    $('.modal_action').on('click', function () {
        const target = $(this).attr('id');
        const modal = $('[name="' + target + '"]');
        modal.css('opacity', 0);
        modal.css('display', 'flex');
        modal.animate({
            opacity: 1
        }, 200);
    });

    // 아니요 버튼 클릭 시 모달 닫기
    $('.modal_btn_no').on('click', function (e) {
        e.stopPropagation();
        const modal = $(this).closest('.modal');
        modal.animate({
            opacity: 0
        }, 300, function () {
            setTimeout(function () {
                modal.css('display', 'none');
            }, 300);
        });
    });

    // 예 버튼 클릭 시 특정 HTML로 이동 (나중에 설정)
    $('.modal_btn_yes').on('click', function (e) {
        e.stopPropagation();
        // TODO: DB 연동 후 실제 페이지로 이동
        // const targetPage = 'html/matching.html'; // 예시
        // window.location.href = targetPage;

        // 임시로 알림만 표시
        alert('메이트 매칭 페이지로 이동합니다. (추후 구현 예정)');
    });

    // 모달 배경 클릭 시 닫기
    $('.modal').on('click', function (e) {
        if ($(e.target).hasClass('modal')) {
            $(this).animate({
                opacity: 0
            }, 300, function () {
                setTimeout(function () {
                    $(this).css('display', 'none');
                }.bind(this), 300);
            });
        }
    });
})
$(document).ready(function(){
    $('.modal_action').on('click', function () {
        const target = $(this).attr('id');
        const modal = $('[name="' + target + '"]');
        modal.css('opacity', 0);
        modal.css('display', 'block');
        modal.animate({
            opacity: 100
        },200);
    });

    $('.modal_bottom').on('click', function(e){
        const modal = $(this).closest('.modal');
        modal.animate({
            opacity: 0
        },300, function(){setTimeout(function() {
            modal.css('display', 'none'); 
        }, 300);});
    });
})
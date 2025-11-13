$(document).ready(function() {
            $(".sort a").click(function(e) {
                e.preventDefault(); 
                $(".sort a").removeClass("active");
                $(this).addClass("active");
            });
        });
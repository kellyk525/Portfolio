
$(document).ready(function() {
    $(".menu-nav").on("click", function () {
        $(this).toggleClass("open");
        $(".top-nav").toggleClass("open");
    })
});
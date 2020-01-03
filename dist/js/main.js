
$(document).ready(function () {
    $(".menu-nav").on("click", function () {
        $(this).toggleClass("open");
        $(".top-nav").toggleClass("open");
    })

    $(".menu-toggle").on("click", function () {
        $('body').toggleClass("opens");
    })

    $(".nav .nav-link").on("click", function () {
        $('body').removeClass("opens");
    })

    $(".top-nav .navigation-link").on("click", function () {
        $('.menu-nav').removeClass("open");
        $('.top-nav').removeClass("open");
    })

    $('nav a[href*="#"]').on("click", function () {
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100 }, 2000);
    }); 

    $('#up').on('click', function () {
        $('html, body').animate({ scrollTop: 0}, 2000);
    })

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });

});

window.addEventListener('load', AOS.refresh);




// $('body').scrollTo('#target'); // Scroll screen to target element

// $('body').scrollTo(500); // Scroll screen 500 pixels down

// $('#scrollable').scrollTo(100); // Scroll individual element 100 pixels down
// Options:

// scrollTarget: A element, string, or number which indicates desired scroll position.

//     offsetTop: A number that defines additional spacing above scroll target.

//         duration: A string or number determining how long the animation will run.

//             easing: A string indicating which easing function to use for the transition.

//                 complete: A function to call once the animation is complete.
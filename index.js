//--------------- Toggle Menu -----------------------
let hamberger = document.querySelector(".toggle");
let times = document.querySelector(".cross_x");
let mobileNav = document.querySelector(".nav_ul");

hamberger.addEventListener("click", function () {
    mobileNav.classList.add("open");
});

times.addEventListener("click", function () {
    mobileNav.classList.remove("open");
});

// ---- Tab 
$(document).ready(function () {
    // Show the first tab content by default
    $('#tab1').show();

    // Handle tab button click
    $('.tab-button').click(function () {
        // Remove the active class from all tab buttons
        $('.tab-button').removeClass('active');

        // Add the active class to the clicked tab button
        $(this).addClass('active');

        // Hide all tab content
        $('.tab-content').hide();

        // Get the data-tab attribute of the clicked button
        var tabId = $(this).data('tab');

        // Show the corresponding tab content
        $('#' + tabId).show();
    });
});

// --------------- Barnd Section  --------------------
$('.brand-secton').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 780,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 414,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2
            }
        }
    ]
});
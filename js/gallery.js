document.addEventListener("DOMContentLoaded", function() {

    let carousel = document.querySelector("#carouselExample");
    let backgroundImg = document.querySelector("#galeryBackground");
    let activeSlide = carousel.querySelector(".carousel-item.active img");

    backgroundImg.src = "images/gallery/workshop_1.jpg";

    // Posluchač na tlačítka šipek pro kliknutí (pozor na správné selektory)
    let prevButton = document.querySelector('[data-bs-slide="prev"]');
    let nextButton = document.querySelector('[data-bs-slide="next"]');


    if (prevButton) {prevButton.addEventListener("click", delayUpdateBackground)}
    if (nextButton) {nextButton.addEventListener("click", delayUpdateBackground)}

    function delayUpdateBackground() {
        setInterval(updateBackground, 20);
    }


    function updateBackground() {
        activeSlide = carousel.querySelector(".carousel-item.active img");
        backgroundImg.src = activeSlide.src;
    }

    function updateTest() {
        console.log("Update TEST");
    }


    carousel.addEventListener("slid.bs.carousel", updateBackground);



});

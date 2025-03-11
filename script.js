document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlide = 0;
    
    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Add active class to current slide
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Event listeners for buttons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    
    // Optional: Auto-play the carousel
    // setInterval(nextSlide, 5000);
});















/* i want in carousal 1 show this images like this style */


/* .img1 {
    transform: scale(0.4);
    position: absolute;
    top: 250px;
    left: 200px;
    z-index: 3;
}

.img2 {
    transform: scale(0.4) rotate(20deg);;
    position: absolute;
    top: 200px;
    left: 150px;
    z-index: 2;

}

.img3 {
    transform: scale(1);
    position: absolute;
    top: 100px;
    left: -100px;
}  */


/* i want in carousal 2 show this images like this style */


/* .img1 {
    transform: scale(0.5);
    position: absolute;
    top: 250px;
    left: 150px;
    z-index: 3;
}

.img2 {
    transform: scale(0.4) rotate(0deg);;
    position: absolute;
    top: 200px;
    left: 50px;
    z-index: 2;
    opacity: 0.7;
}

.img3 {
    transform: scale(1) rotate(40deg);;
    
    position: absolute;
    top: 100px;
    left: -100px;
    opacity: 0.3;
}  */



/* i want in carousal 3 show this images like this style */

/* .img1 {
    transform: scale(0.4);
    position: absolute;
    top: 250px;
    left: 200px;
    z-index: 2;
    opacity: 0.8;
}

.img2 {
    transform: scale(0.5) rotate(0deg);;
    position: absolute;
    top: 200px;
    left: 100px;
    z-index: 3;

}

.img3 {
    transform: scale(1);
    position: absolute;
    top: 100px;
    left: -200px;
    opacity: 0.3;
}     */




/* i want in carousal 4 show this images like this style */


/* .img3 {
    transform: scale(0.7) rotate(-95deg);
    position: absolute;
    top: -110px;
    left: -200px;
    opacity: 1;
} */


/* i want in carousal 5 show this images like this style */
/* .img3 {
    transform: scale(0.7) rotate(-80deg);
    position: absolute;
    top: -110px;
    left: -200px;
    opacity: 0.3;
}

.img4 {
    transform: scale(0.5) rotate(0deg);
    position: absolute;
    top: -50px;
    left: -200px;
    opacity: 1;
} */


/* i want in carousal 6 show this images like this style */
/* .img4 {
    transform: scale(0.7) rotate(-80deg);
    position: absolute;
    top: -110px;
    left: -200px;
    opacity: 0.3;
}

.img5 {
    transform: scale(0.5) rotate(0deg);
    position: absolute;
    top: -50px;
    left: -200px;
    opacity: 1;
} */

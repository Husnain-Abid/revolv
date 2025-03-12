document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlide = 0;

    // Function to apply GSAP animations based on the slide index
    function applyAnimations(index) {

        // Reset previous animations (if any)
        gsap.killTweensOf(".carousel-image img");
    
        // Apply GSAP animations based on the current slide index
        if (index === 0) {
            // First carousel condition, set final positions without animation
            gsap.set('.carousel-image-1 .img1', {
                scale: 0.4,
                x: -200,
                y: -60,
                zIndex: 3
            });
    
            gsap.set('.carousel-image-1 .img2', {
                scale: 0.4,
                rotate: 20,
                x: -250,
                y: -100,
                zIndex: 2
            });
    
            gsap.set('.carousel-image-1 .img3', {
                scale: 0.9,
                x: -600,
                y: -230
            });


            
    
        } else if (index === 1) {
            // Second carousel condition, animate from the first position to the new one using gsap.fromTo()
    
            gsap.fromTo('.carousel-image-2 .img1', {
                scale: 0.4,
                x: -200,
                y: -60,
                zIndex: 3
            }, {
                scale: 0.6,
                x: -250,
                y: -60,
                zIndex: 3,
                duration: 1
            });
    
            gsap.fromTo('.carousel-image-2 .img2', {
                scale: 0.4,
                rotate: 20,
                x: -250,
                y: -100,
                zIndex: 2
            }, {
                scale: 0.4,
                rotate: 0,
                x: -450,
                y: -10,
                zIndex: 2,
                opacity: 0.5,
                duration: 1
            });
    
            gsap.fromTo('.carousel-image-2 .img3', {
                scale: 0.9,
                x: -600,
                y: -230
            }, {
                scale: 1.2,
                rotate: 30,
                x: -500,
                y: -230,
                opacity: 0.3,
                duration: 1
            });
    
        } else if (index === 2) {
            // Third carousel condition, animate from the second position to the final one
            gsap.fromTo('.carousel-image-3 .img1', {
                scale: 0.6,         // Starting scale from second index
                x: -250,           // Starting position from second index
                y: -60,            // Starting position from second index
                zIndex: 3,         // Starting zIndex from second index
                opacity: 0.9       // Starting opacity from second index
            }, {
                scale: 0.4,        // Final scale for the third index
                x: -250,           // Final position for the third index
                y: -60,            // Final position for the third index
                zIndex: 2,         // Final zIndex for the third index
                opacity: 0.9,      // Final opacity for the third index
                duration: 1        // Animation duration
            });
    
            gsap.fromTo('.carousel-image-3 .img2', {
                scale: 0.4,         // Starting scale from second index
                rotate: 0,          // Starting rotation from second index
                x: -450,            // Starting position from second index
                y: -10,             // Starting position from second index
                zIndex: 2           // Starting zIndex from second index
            }, {
                scale: 0.5,         // Final scale for the third index
                rotate: 0,          // Final rotation for the third index
                x: -450,            // Final position for the third index
                y: -90,             // Final position for the third index
                zIndex: 3,          // Final zIndex for the third index
                opacity: 1,       // Final opacity for the third index
                duration: 1         // Animation duration
            });
    
            gsap.fromTo('.carousel-image-3 .img3', {
                scale: 1.2,         // Starting scale from second index
                rotate: 30,         // Starting rotation from second index
                x: -500,            // Starting position from second index
                y: -230,            // Starting position from second index
                opacity: 0.3        // Starting opacity from second index
            }, {
                scale: 1.2,         // Final scale for the third index
                rotate: -10,        // Final rotation for the third index
                x: -500,            // Final position for the third index
                y: -230,            // Final position for the third index
                opacity: 0.3,       // Final opacity for the third index
                duration: 1         // Animation duration
            });
    
        } else if (index === 3) {
            // Carousel 4 animations, animating from previous position (index 2)
            gsap.fromTo('.carousel-image-4 .img3', {
                scale: 1.2,
                rotate: -10,
                x: -500,
                y: -230,
                opacity: 0.3
            }, {
                scale: 0.8,
                rotate: -100,
                x: -550,
                y: -380,
                opacity: 1,
                duration: 1
            });
    
        } else if (index === 4) {
            // Carousel 5 animations, animating from previous position (index 3)
            gsap.fromTo('.carousel-image-5 .img3', {
                scale: 0.8,
                rotate: -90,
                x: -500,
                y: -380,
                opacity: 1,
            }, {
                scale: 0.7,
                rotate: -80,
                x: -600,
                y: -450,
                opacity: 0.4,
                duration: 1
            });
    
            gsap.fromTo('.carousel-image-5 .img4', {
                scale: 0.5,
                rotate: 10,
                x: -700,
                y: -80,
                opacity: 1
            }, {
                scale: 0.5,
                rotate: 10,
                x: -700,
                y: -380,
                opacity: 1,
                duration: 1
            });
    
        } else if (index === 5) {
            // Carousel 6 animations, animating from previous position (index 4)
            gsap.fromTo('.carousel-image-6 .img3', {
                scale: 0.7,
                rotate: -80,
                x: -600,
                y: -450,
                opacity: 0.4,
                duration: 1
            }, {
                scale: 0.7,
                rotate: -80,
                x: -600,
                y: -450,
                opacity: 0.4,
                duration: 1
            });
    
            gsap.fromTo('.carousel-image-6 .img4', {
                scale: 0.5,
                rotate: 10,
                x: -700,
                y: -380,
                opacity: 1,
                duration: 1
            }, {
                scale: 0.5,
                rotate: 40,
                x: -700,
                y: -380,
                opacity: 1,
                duration: 1
            });
    
        } else if (index === 6) {
            // Carousel 7 animations, animating from previous position (index 5)
            gsap.fromTo('.carousel-image-7 .img3', {
                scale: 0.7,
                rotate: -80,
                x: -600,
                y: -450,
                opacity: 0.4,
            }, {
                scale: 0.5,
                rotate: 15,
                x: -580,
                y: -550,
                opacity: 0.1,
                duration: 1
            });


            gsap.fromTo('.carousel-image-7 .img5', {
                scale: 0.7,
                x: -250,
                y: -80,
                opacity: 0.4
            }, {
                scale: 0.7,
                x: -250,
                y: -80,
                opacity: 1,
                duration: 1
            });
    
        } else if (index === 7) {
            // Carousel 8 animations, animating from previous position (index 6)
            gsap.fromTo('.carousel-image-8 .img3', {
                scale: 0.5,
                rotate: 15,
                x: -580,
                y: -550,
                opacity: 0.1,
            }, {
                scale: 0.7,
                rotate: -80,
                x: -520,
                y: -480,
                opacity: 1,
                duration: 1
            });
    
        }
    }
    

    // Function to show the current slide
    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Add active class to the current slide
        slides[index].classList.add('active');

        // Apply the appropriate animations for the current slide
        applyAnimations(index);
    }

    // Function for next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function for previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners for navigation buttons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Show the first slide initially
    showSlide(currentSlide);
});

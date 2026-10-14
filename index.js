
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("blogTrack");
    const prevBtn = document.getElementById("slidePrev");
    const nextBtn = document.getElementById("slideNext");
    
    if (track && prevBtn && nextBtn) {
        let currentIndex = 0;

        const getVisibleCardsCount = () => {
            if (window.innerWidth <= 600) return 1;
            if (window.innerWidth <= 992) return 2;
            return 3;
        };

        const updateSliderPosition = () => {
            const cards = track.querySelectorAll(".blog-card");
            const totalCards = cards.length;
            const visibleCards = getVisibleCardsCount();
            
            const maxIndex = totalCards - visibleCards;

            if (currentIndex < 0) currentIndex = 0;
            if (currentIndex > maxIndex) currentIndex = maxIndex;

            if (totalCards > 0) {
                const cardWidth = cards[0].getBoundingClientRect().width;
                const gap = parseFloat(window.getComputedStyle(track).gap) || 24;
                
                const offset = currentIndex * (cardWidth + gap);
                track.style.transform = `translateX(${offset}px)`;
            }
        };


        nextBtn.addEventListener("click", () => {
            const cards = track.querySelectorAll(".blog-card");
            const visibleCards = getVisibleCardsCount();
            const maxIndex = cards.length - visibleCards;

            if (currentIndex < maxIndex) {
                currentIndex++; 
            } else {
                currentIndex = 0; 
            }
            updateSliderPosition();
        });


        prevBtn.addEventListener("click", () => {
            const cards = track.querySelectorAll(".blog-card");
            const visibleCards = getVisibleCardsCount();
            const maxIndex = cards.length - visibleCards;

            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = maxIndex;
            }
            updateSliderPosition();
        });

        window.addEventListener("resize", () => {
            currentIndex = 0; 
            track.style.transform = `translateX(0px)`;
            updateSliderPosition();
        });
    }
});











document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("productsSlider");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    if (slider && nextBtn && prevBtn) {
        
        const scrollAmount = 300; 

        nextBtn.addEventListener("click", () => {
            slider.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });

        prevBtn.addEventListener("click", () => {
            slider.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    }
});











document.addEventListener("DOMContentLoaded", () => {
  const productSections = document.querySelectorAll(".products-section");

  productSections.forEach((section) => {
    const slider = section.querySelector(".products-slider");
    const nextBtn = section.querySelector(".next-btn");
    const prevBtn = section.querySelector(".prev-btn");

    if (!slider || !nextBtn || !prevBtn) return;

    const scrollAmount = 300;

    nextBtn.addEventListener("click", () => {
      slider.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });
    });

    prevBtn.addEventListener("click", () => {
      slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    });
  });
});

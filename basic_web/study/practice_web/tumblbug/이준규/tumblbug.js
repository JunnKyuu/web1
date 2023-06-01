const $rightBtn = document.getElementById('carousel-btn-right');
const $leftBtn = document.getElementById('carousel-btn-left');
const $carousel = document.getElementById('carousel');
let currentSlide = 1;

$rightBtn.addEventListener('click', () => {
   clickRight();
   currentSlide ++;
});

$leftBtn.addEventListener('click', () => {
    clickLeft();
    currentSlide --;
});

const clickRight = () => {
    if(currentSlide === 1) {
        $carousel.style.transform = 'translateX(-20%)';
    }
    if(currentSlide === 2) {
        $carousel.style.transform = 'translateX(-40%)';
    }
    if(currentSlide === 3) {
        $carousel.style.transform = 'translateX(-60%)';
    }
    if(currentSlide === 4) {
        $carousel.style.transform = 'translateX(-80%)';
    }
    if(currentSlide === 5) {
        $carousel.style.transform = 'translateX(0)';
        currentSlide = 0;
    }
}

const clickLeft = () => {
    if(currentSlide === 1) {
        $carousel.style.transform = 'translateX(-80%)';
        currentSlide = 6;
    }
    if(currentSlide === 2) {
        $carousel.style.transform = 'translateX(0)';
    }
    if(currentSlide === 3) {
        $carousel.style.transform = 'translateX(-20%)';
    }
    if(currentSlide === 4) {
        $carousel.style.transform = 'translateX(-40%)';
    }
    if(currentSlide === 5) {
        $carousel.style.transform = 'translateX(-60%)';
    }
}

// setInterval(() => {
//     clickRight();
//     currentSlide ++;
// }, 4000);
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
        $carousel.style.transform = 'translateX(-25%)';
    }
    if(currentSlide === 2) {
        $carousel.style.transform = 'translateX(-50%)';
    }
    if(currentSlide === 3) {
        $carousel.style.transform = 'translateX(-75%)';
    }
    if(currentSlide === 4) {
        $carousel.style.transform = 'translateX(-100%)';
    }
    if(currentSlide === 5) {
        $carousel.style.transform = 'translateX(0)';
        currentSlide = 0;
    }
}

const clickLeft = () => {
    if(currentSlide === 1) {
        $carousel.style.transform = 'translateX(-100%)';
        currentSlide = 6;
    }
    if(currentSlide === 2) {
        $carousel.style.transform = 'translateX(0)';
    }
    if(currentSlide === 3) {
        $carousel.style.transform = 'translateX(-25%)';
    }
    if(currentSlide === 4) {
        $carousel.style.transform = 'translateX(-50%)';
    }
    if(currentSlide === 5) {
        $carousel.style.transform = 'translateX(-75%)';
    }
}

// setInterval(() => {
//     clickRight();
//     currentSlide ++;
// }, 4000);
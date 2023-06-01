const $rightBtn = document.getElementById('carousel-btn-right');
const $leftBtn = document.getElementById('carousel-btn-left');
const $carousel = document.getElementById('carousel');
const $pagination = document.getElementById('pagination');
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
        $pagination.innerHTML = '<p>2/5</p>';
    }
    if(currentSlide === 2) {
        $carousel.style.transform = 'translateX(-40%)';
        $pagination.innerHTML = '<p>3/5</p>';
    }
    if(currentSlide === 3) {
        $carousel.style.transform = 'translateX(-60%)';
        $pagination.innerHTML = '<p>4/5</p>';
    }
    if(currentSlide === 4) {
        $carousel.style.transform = 'translateX(-80%)';
        $pagination.innerHTML = '<p>5/5</p>';
    }
    if(currentSlide === 5) {
        $carousel.style.transform = 'translateX(0)';
        $pagination.innerHTML = '<p>1/5</p>';
        currentSlide = 0;
    }
}

const clickLeft = () => {
    if(currentSlide === 1) {
        $carousel.style.transform = 'translateX(-80%)';
        $pagination.innerHTML = '<p>5/5</p>';
        currentSlide = 6;
    }
    if(currentSlide === 2) {
        $carousel.style.transform = 'translateX(0)';
        $pagination.innerHTML = '<p>1/5</p>';
    }
    if(currentSlide === 3) {
        $carousel.style.transform = 'translateX(-20%)';
        $pagination.innerHTML = '<p>2/5</p>';
    }
    if(currentSlide === 4) {
        $carousel.style.transform = 'translateX(-40%)';
        $pagination.innerHTML = '<p>3/5</p>';
    }
    if(currentSlide === 5) {
        $carousel.style.transform = 'translateX(-60%)';
        $pagination.innerHTML = '<p>4/5</p>';
    }
}

setInterval(() => {
    clickRight();
    currentSlide ++;
}, 4000);
const $container = document.getElementById('carousel-container');
const $button1 = document.getElementById('button1');
const $button2 = document.getElementById('button2');
const $button3 = document.getElementById('button3');

$button1.addEventListener('click', () => {
    $container.style.transform = 'translate(0)';
});

$button2.addEventListener('click', () => {
    $container.style.transform = 'translate(-100vw)';
});

$button3.addEventListener('click', () => {
    $container.style.transform = 'translate(-200vw)';
});
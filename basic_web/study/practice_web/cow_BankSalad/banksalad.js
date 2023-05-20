const $container = document.getElementById('carousel-container');
const $button1 = document.getElementById('button1');
const $button2 = document.getElementById('button2');
const $button3 = document.getElementById('button3');
let count = 1;
$button1.addEventListener('click', () => {
    // carousel 1번 버튼 클릭 이벤트
    clickButton1();
});
$button2.addEventListener('click', () => {
    // carousel 2번 버튼 클릭 이벤트
    clickButton2();
});

$button3.addEventListener('click', () => {
    // carousel 3번 버튼 클릭 이벤트
    clickButton3();
});

const clickButton1 = () => {
    // carousel 1번 버튼 함수
    $container.style.transform = 'translateX(0)';
    $button1.style.backgroundColor = '#dddddd';
    $button2.style.backgroundColor = '#ffffff';
    $button3.style.backgroundColor = '#ffffff';
}

const clickButton2 = () => {
    // carousel 2번 버튼 함수
    $container.style.transform = 'translateX(-100vw)';
    $button2.style.backgroundColor = '#dddddd';
    $button1.style.backgroundColor = '#ffffff';
    $button3.style.backgroundColor = '#ffffff';
}

const clickButton3 = () => {
    // carousel 3번 버튼 함수
    $container.style.transform = 'translateX(-200vw)';
    $button3.style.backgroundColor = '#dddddd';
    $button1.style.backgroundColor = '#ffffff';
    $button2.style.backgroundColor = '#ffffff';
}

setInterval(() => {
    // 자동슬라이드를 위한 setInterval 함수
    if(count === 1) {clickButton2();}
    if(count === 2) {clickButton3();}
    if(count === 3) {clickButton1(); count = 0;}
    count ++;
}, 4000);
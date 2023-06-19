const $SlideContainer = document.querySelector('#SlideContainer');
const $button1 = document.querySelector('#button1');
const $button2 = document.querySelector('#button2');
const $button3 = document.querySelector('#button3');

//배너 자동으로 넘기기
$SlideContainer.style.transition = `transform 0.5s`;
$button1.style.width = '32px';
const $slide2 = document.querySelector('#slide2');
let slide = 0;
setInterval(() => {
  if (slide < 2) {
    if (slide === 0) {
      $button2.style.width = '32px';
      $button1.style.width = '8px';
      $button3.style.width = '8px';
    } else if (slide === 1) {
      $button3.style.width = '32px';
      $button1.style.width = '8px';
      $button2.style.width = '8px';
    }
    slide++;
    $SlideContainer.style.transform = `translateX(${
      -$slide2.clientWidth * slide
    }px)`;
  } else {
    if (slide === 2) {
      $button1.style.width = '32px';
      $button2.style.width = '8px';
      $button3.style.width = '8px';
    }
    slide = 0;
    $SlideContainer.style.transform = `translateX(${
      -$slide2.clientWidth * slide
    }px)`;
  }
}, 4000);

//배너 버튼 선택
$button1.addEventListener('click', () => {
  slide = 0;
  $SlideContainer.style.transform = `translateX(${
    -$slide2.clientWidth * slide
  }px)`;

  $button1.style.width = '32px';
  $button2.style.width = '8px';
  $button3.style.width = '8px';
});
$button2.addEventListener('click', () => {
  slide = 1;
  $SlideContainer.style.transform = `translateX(${
    -$slide2.clientWidth * slide
  }px)`;
  $button2.style.width = '32px';
  $button1.style.width = '8px';
  $button3.style.width = '8px';
});
$button3.addEventListener('click', () => {
  slide = 2;
  $SlideContainer.style.transform = `translateX(${
    -$slide2.clientWidth * slide
  }px)`;
  $button3.style.width = '32px';
  $button1.style.width = '8px';
  $button2.style.width = '8px';
});
// 인기, 후기, 선택
const $popularButton = document.querySelector('#popularButton');
const $mostSelectButton = document.querySelector('#mostSelectButton');
const $goodReviewButton = document.querySelector('#goodReviewButton');
const $popular = document.querySelector('#popular');
const $mostSelect = document.querySelector('#mostSelect');
const $goodReview = document.querySelector('#goodReview');
const $popularText = document.querySelector('#popularText');
const $mostSelectText = document.querySelector('#mostSelectText');
const $goodReviewText = document.querySelector('#goodReviewText');

$popularButton.addEventListener('click', () => {
  $popular.style.display = 'flex';
  $mostSelect.style.display = 'none';
  $goodReview.style.display = 'none';
  $popularText.style.color = '#fbfbfb';
  $mostSelectText.style.color = 'rgb(150, 112, 112)';
  $goodReviewText.style.color = 'rgb(150, 112, 112)';
});
$mostSelectButton.addEventListener('click', () => {
  $popular.style.display = 'none';
  $mostSelect.style.display = 'flex';
  $goodReview.style.display = 'none';

  $popularText.style.color = 'rgb(150, 112, 112)';
  $mostSelectText.style.color = '#fbfbfb';
  $goodReviewText.style.color = 'rgb(150, 112, 112)';
});
$goodReviewButton.addEventListener('click', () => {
  $popular.style.display = 'none';
  $mostSelect.style.display = 'none';
  $goodReview.style.display = 'flex';
  $popularText.style.color = 'rgb(150, 112, 112)';
  $mostSelectText.style.color = 'rgb(150, 112, 112)';
  $goodReviewText.style.color = '#fbfbfb';
});
//현재 시간 구하기
const timecheck = function (time) {
  if (time < 10) {
    return '0' + time;
  } else {
    return time;
  }
};
setInterval(() => {
  const $time = document.querySelector('#curTime');
  const nowDate = new Date();
  const year = nowDate.getFullYear();
  const month = nowDate.getMonth() + 1;
  const day = nowDate.getDate();
  const hour = nowDate.getHours();
  const minutes = nowDate.getMinutes();
  const seconds = nowDate.getSeconds();
  $time.textContent = `${timecheck(year) - 2000}.${timecheck(
    month
  )}.${timecheck(day)} ${timecheck(hour)}:${timecheck(minutes)}:${timecheck(
    seconds
  )}`;
}, 1000);

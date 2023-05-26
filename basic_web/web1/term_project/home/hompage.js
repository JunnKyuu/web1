const $SlideContainer = document.querySelector('#SlideContainer');
const $button1 = document.querySelector('#button1');
const $button2 = document.querySelector('#button2');
const $button3 = document.querySelector('#button3');

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

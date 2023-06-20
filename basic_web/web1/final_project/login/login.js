const $loginWrap = document.getElementById('login-wrap');
const $loginClose = document.getElementById('login-close');
const $loginBtn = document.getElementById('login-btn');
const $logoutBtn = document.getElementById('logout-btn');
const $homeBtn = document.querySelector('#home-btn');
const $loginId = document.getElementById('id');
const $loginPw = document.getElementById('pw');
const $loginSubmit = document.getElementById('info-submit');
const $checkbox = document.getElementById('login-checkbox');
const $signUpBtn = document.querySelector('#signUp-btn');
let userId = null;
let userPassword = null;
let userNickName = null;

let data = new XMLHttpRequest();
data.open('GET', './account.json', true);
data.responseType = 'json';
data.onload = function() {
  if (data.status === 200) {
    let jsondata = data.response;

    userId = jsondata.email;
    userPassword = jsondata.password;
    userNickName = jsondata.nickName;
  }
};
data.send();

$loginBtn.addEventListener('click', () => {
  $loginWrap.style.display = 'block';
});

$loginClose.addEventListener('click', () => {
  $loginWrap.style.display = 'none';
});

$loginSubmit.addEventListener('click', () => {
  if(($loginId.value === userId) || ($loginPw.value === userPassword)) {
    $loginBtn.style.display = 'none';
    $logoutBtn.style.display = 'block';
    $loginWrap.style.display = 'none';
    $loginWrap.style.display = 'none';

    Swal.fire({
      icon: 'success',                         
      title: '로그인 성공',         
      text: userNickName + '님 안녕하세요!', 
      confirmButtonText: '확인',
      closeOnClickOutside : false 
      }).then(function move() {
        location.href = "../Homepage/HomPage.html";
      });
  } 
  if(($loginId.value !== userId) || ($loginPw.value !== userPassword)) {
    Swal.fire({
      icon: 'error',
      title: '정보 불일치',
      text: '이메일과 비밀번호를 확인해주세요!',
      buttons: true,
      confirmButtonText: '다시 입력하기',
      });
    $loginWrap.style.display = 'block';
  } 

  if(!($checkbox.checked)) {
    $loginId.value = null;
    $loginPw.value = null;
  }
});



$signUpBtn.addEventListener('click', () => {
  location.href = '../signUp/signUp.html';
});

$homeBtn.addEventListener('click', () => {
  Swal.fire({
    icon: 'success',                         
    title: 'HOME으로 이동',         
    text:'HOME으로 이동하겠습니다!', 
    confirmButtonText: '확인',
    closeOnClickOutside : false 
    }).then(function move() {
      location.href = "../Homepage/HomPage.html";
    });
});

const $loginWrap = document.getElementById('login-wrap');
const $loginClose = document.getElementById('login-close');
const $loginBtn = document.getElementById('login-btn');
const $logoutBtn = document.getElementById('logout-btn');
const $loginId = document.getElementById('id');
const $loginPw = document.getElementById('pw');
const $loginSubmit = document.getElementById('info-submit');
const $checkbox = document.getElementById('login-checkbox');
const $signUpBtn = document.querySelector('#signUp-btn');
let userId = null;
let userPassword = null;

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

    Swal.fire({
      icon: 'success',                         
      title: '로그인 성공',         
      text: userId + '님 안녕하세요!', 
      buttons: true,
      confirmButtonText: '확인',
    });
    $loginWrap.style.display = 'block';
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

$logoutBtn.addEventListener('click', () => {
  Swal.fire({
    title: '정말로 로그아웃 하시겠습니까?',
    text: "확인을 누르면 로그아웃이 진행됩니다.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '확인',
    cancelButtonText: '취소'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',                         
        title: '로그아웃 성공',         
        text: '로그아웃 되었습니다!', 
        buttons: true,
        confirmButtonText: '확인',
      });

      $loginWrap.style.display = 'block';
      $loginBtn.style.display = 'block';
      $logoutBtn.style.display = 'none';
    }
  });
});

$signUpBtn.addEventListener('click', () => {
  location.href = '../signUp/signUp.html';
});
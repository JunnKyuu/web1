const $loginWrap = document.getElementById('login-wrap');
const $loginClose = document.getElementById('login-close');
const $loginBtn = document.getElementById('login-btn');
const $logoutBtn = document.getElementById('logout-btn');
const $loginId = document.getElementById('id');
const $loginPw = document.getElementById('pw');
const $loginSubmit = document.getElementById('info-submit');
const $checkbox = document.getElementById('login-checkbox');
const userId = '';
const userPw = '';

$loginBtn.addEventListener('click', () => {
  $loginWrap.style.display = 'block';
});

$loginClose.addEventListener('click', () => {
  $loginWrap.style.display = 'none';
});

$loginSubmit.addEventListener('click', () => {
  const userId = $loginId.value;
  const userPw = $loginPw.value;

  if((userId === '') || (userPw === '')) {
    alert('아이디, 비밀번호를 정확하게 입력해주세요.');
    $loginWrap.style.display = 'block';
  } else {
    $loginBtn.style.display = 'none';
    $logoutBtn.style.display = 'block';
    $loginWrap.style.display = 'none';

    alert(userId + '님 안녕하세요!');
  }

  if(!($checkbox.checked)) {
    $loginId.value = null;
    $loginPw.value = null;
  }
});

$logoutBtn.addEventListener('click', () => {
  if(confirm('로그아웃 하시겠습니까?') == true) {
    $loginWrap.style.display = 'block';
    $loginBtn.style.display = 'block';
    $logoutBtn.style.display = 'none';
  } 
});
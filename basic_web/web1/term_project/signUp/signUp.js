const $submit = document.querySelector('#submit');

$submit.addEventListener('click', () => {
  const $email = document.querySelector('#email').value;
  const $password = document.querySelector('#password').value;
  const $nickName = document.querySelector('#nick-name').value;
  const $address = document.querySelector('#address').value;
  const $phoneNumber = document.querySelector('#phone-number').value;

  if(($email == '') || ($password == '') || ($nickName == '') || ($address == '') || ($phoneNumber == '')) { 
    Swal.fire({
    icon: 'error',
    title: '입력 오류',
    text: '정보를 빠짐없이 정확히 입력해주세요!',
    // buttons: true,
    confirmButtonText: '다시 입력하기',
    });
  } else {
    Swal.fire({
    icon: 'success',                         
    title: '회원가입 성공',         
    text: '가입한 이메일과 비밀번호를 사용하여 다시 로그인 해주세요!',
    // buttons: true,
    confirmButtonText: '확인',
    closeOnClickOutside : false 
    }).then(function moveToLogin() {
      location.href = '../login/login.html';
    });
  }
});
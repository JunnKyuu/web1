const $submit = document.querySelector('#submit');
const $form = document.querySelector('form');

$submit.addEventListener('click', () => {
  let $email = document.querySelector('#email').value;
  let $password = document.querySelector('#password').value;
  let $nickName = document.querySelector('#nick-name').value;
  let $address = document.querySelector('#address').value;
  let $phoneNumber = document.querySelector('#phone-number').value;

  if($email == '' || $password == '' || $nickName == '' || $address == '' || $phoneNumber == '') { 
    Swal.fire({
    icon: 'error',
    title: '입력 오류',
    text: '정보를 빠짐없이 정확히 입력해주세요!',
    buttons: true,
    confirmButtonText: '다시 입력하기',
    });
  } else {
    Swal.fire({
    icon: 'success',                         
    title: '회원가입 성공',         
    text: '환영합니다! :)',
    buttons: true,
    confirmButtonText: '확인',
    closeOnClickOutside : false 
    }).then(function moveToLogin() {
      location.href = '../login/login.html';
    });

    console.log('$email');
    console.log('$password');
    console.log('$nickName');
    console.log('$address');
    console.log('$phoneNumber');
  }
});
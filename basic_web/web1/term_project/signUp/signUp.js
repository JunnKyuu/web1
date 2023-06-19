const $submit = document.querySelector('#submit');

let userId = null;
let userPassword = null;
let userNickName = null;
let userAddress = null;
let userPhoneNumber = null;

let data = new XMLHttpRequest();
data.open('GET', './account.json', true);
data.responseType = 'json';
data.onload = function() {
  if (data.status === 200) {
    let jsondata = data.response;

    userId = jsondata.email;
    userPassword = jsondata.password;
    userNickName = jsondata.nickName;
    userAddress = jsondata.address;
    userPhoneNumber = jsondata.phoneNumber;
  }
};
data.send();

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
    confirmButtonText: '다시 입력하기',
    });
  } else if(($email == userId) || ($password == userPassword) || ($nickName == userNickName) || ($address == userAddress) || ($phoneNumber == userPhoneNumber)){
    Swal.fire({
      icon: 'error',
      title: '중복 오류',
      text: '다른 사용자와 중복된 정보가 있습니다!',
      confirmButtonText: '다시 입력하기',
      });
  } else if(!(($email == '') || ($password == '') || ($nickName == '') || ($address == '') || ($phoneNumber == ''))) {
    Swal.fire({
    icon: 'success',                         
    title: '회원가입 성공',         
    text: '가입한 이메일과 비밀번호를 사용하여 다시 로그인 해주세요!',
    confirmButtonText: '확인',
    closeOnClickOutside : false 
    }).then(function moveToLogin() {
      location.href = '../login/login.html';
    });
  }
  
  
});
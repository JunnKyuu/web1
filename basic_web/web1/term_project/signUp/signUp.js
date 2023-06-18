const $submit = document.querySelector('#submit');

$submit.addEventListener('click', () => {
  Swal.fire({
    icon: 'success',                         
    title: '회원가입 성공',         
    text: '환영합니다! :)', 
  });
  let $email = document.querySelector('#email').value;
  let $password = document.querySelector('#password').value;
  let $nickName = document.querySelector('#nick-name').value;
  let $address = document.querySelector('#address').value;
  let $phoneNumber = document.querySelector('#phone-number').value;
  console.log($email);
  console.log($password);
  console.log($nickName);
  console.log($address);
  console.log($phoneNumber);
});



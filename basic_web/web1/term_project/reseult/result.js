$copy = document.querySelector('#copy');
$ok = document.querySelector('#ok');
$wrap = document.querySelector('#wrap');
$restart =document.querySelector('#restart');
$pic = document.querySelector('#pic');
$description = document.querySelector('#description');

$ok.addEventListener('click',()=>{
    $wrap.style.display="none";
    console.log('확인');
});
$copy.addEventListener('click',copy);
function copy(){
    let dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    const url = window.document.location.href;
    dummy.value=url;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    alert('url 복사');
}
$restart.addEventListener('click',random);
function random(){
    $pic.style.backgroundImage="url()";
    $description.style.textarea="";
}
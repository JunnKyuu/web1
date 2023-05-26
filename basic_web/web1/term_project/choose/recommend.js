// result 변수
const $copy = document.querySelector('#copy');
const $ok = document.querySelector('#ok');
const $wrap = document.querySelector('#wrap');
const $restart =document.querySelector('#restart');
const $pic = document.querySelector('#pic');
const $description = document.querySelector('#description');
const $BtnContainer = document.querySelector('#BtnContainer');
const $recommendTitle = document.querySelector('#recommend-title');
const $recommendBtn = document.querySelector('#recommendBtn');

// choose
class item{
    constructor(name, price, link){
        this.name = name;
        this.price = price;
        this.link = link;
    }
}

let input_age;
let input_characteristic;
let input_price;
let input_relationship;

const xhr = new XMLHttpRequest();
const url = 'http://localhost:3000';
var items;

xhr.open('GET', url, true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
        const response = JSON.parse(xhr.responseText);
        items = response;
        // console.log(response); // 응답 데이터 처리
    } else {
        console.error('요청에 실패했습니다.');
    }
    };

xhr.onerror = function () {
    console.error('요청에 실패했습니다.');
};

xhr.send();

function setAge(){
    input_age = $('input[name=age]:checked').val();
    document.getElementById('GenderBtnContainer').style.visibility="visible"
    document.getElementById('genderText').style.visibility="visible"
}

function setGender(){
    input_characteristic = $('input[name=characteristic]:checked').val();
    document.getElementById('PriceBtnContainer').style.visibility="visible"
    document.getElementById('priceText').style.visibility="visible"
}

function setPrice(){
    input_price = $('input[name=price]:checked').val();
    document.getElementById('RelationshipBtnContainer').style.visibility="visible"
    document.getElementById('relationText').style.visibility="visible"
}

function setRelationship(){
    input_relationship = $('input[name=relationship]:checked').val();
    document.getElementById('recommendBtn').style.visibility="visible"
}

function recommend(){
    // $BtnContainer.style.display= 'none';
    // $recommendTitle.style.display="none";
    // $recommendBtn.style.display="none";
    $wrap.style.display="block";
    let retValue = [];
    for(let item of items){
        if(item.type == input_age || item.type == input_characteristic || item.type == input_price || item.type == input_relationship){
            retValue.push(item);
        }
    }
    let randomValue = retValue[Math.floor(Math.random() * retValue.length)];
    console.log(randomValue);
}



// result

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


let input_age;
let input_characteristic;
let input_price;
let input_relationship;

let young = [];
let old = [];
let meticulous = [];
let useful = [];
let expensive = [];
let cheap = [];
let pub = [];
let pri = [];

fetch('item.json')
    .then(response => response.json())
    .then(data => {
        for(let item of data) {
            if(item.attribute == 'young'){
                young.push(item);
            }
            if(item.attribute == 'old'){
                old.push(item);
            }
            if(item.attribute == 'meticulous'){
                meticulous.push(item);
            }
            if(item.attribute == 'useful'){
                useful.push(item);
            }
            if(item.attribute == 'expensive'){
                expensive.push(item);
            }
            if(item.attribute == 'cheap'){
                cheap.push(item);
            }
            if(item.attribute == 'pub'){
                pub.push(item);
            }
            if(item.attribute == 'pri'){
                pri.push(item);
            }
        }
    })
    .catch(error => {
        // 에러 처리
        console.error('파일을 불러오는 중 오류가 발생했습니다:', error);
    });

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
    document.getElementById('recomendBtn').style.visibility="visible"
}

let randomValue 
function recommend(){

    let arr = [];
    if(input_age == "young") {
        for(let i = 0; i < young.length; i++){
            arr.push(young[i]);
        }
    }
    if(input_age == "old") {
        for(let i = 0; i < old.length; i++){
            arr.push(old[i]);
        }
    }
    if(input_characteristic == "meticulous") {
        for(let i = 0; i < meticulous.length; i++){
            arr.push(meticulous[i]);
        }
    }
    if(input_characteristic == "useful") {
        for(let i = 0; i < useful.length; i++){
            arr.push(useful[i]);
        }
    }
    if(input_price == "expensive") {
        for(let i = 0; i < expensive.length; i++){
            arr.push(expensive[i]);
        }
    }
    if(input_price == "cheap") {
        for(let i = 0; i < cheap.length; i++){
            arr.push(cheap[i]);
        }
    }
    if(input_relationship == "public") {
        for(let i = 0; i < pub.length; i++){
            arr.push(pub[i]);
        }
    }
    if(input_relationship == "private") {
        for(let i = 0; i < pri.length; i++){
            arr.push(pri[i]);
        }
    }
    let text = document.getElementById('text');
    randomValue = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomValue);
    $restart.addEventListener('click',random);
    function random(){
        $pic.style.backgroundImage="url()";
        $description.style.textarea="";
    }
    document.querySelector('#restart').addEventListener("click",()=>{
        randomValue = arr[Math.floor(Math.random() * arr.length)];
        document.querySelector('#pic').style.backgroundImage=`url("${randomValue.picture}")`;
        document.querySelector('#description').textContent =randomValue.name; 
    })
    }

    $recomendBtn=document.querySelector("#recomendBtn");
    $recomendBtn.addEventListener("click",()=>{
        document.querySelector("#wrap").style.display="flex";
        document.querySelector('#pic').style.backgroundImage=`url(${randomValue.picture})`;
        document.querySelector('#description').textContent =randomValue.name; 
    })
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
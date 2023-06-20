const $info = document.querySelector('#info');
const $myarticle=document.querySelector('#myarticle');
const $profilearticle=document.querySelector('#profilearticle');
const $logininfoarticle=document.querySelector('#logininfoarticle');
const $orderarticle =document.querySelector('#orderarticle');
const $shippingarticle =document.querySelector('#shippingarticle');
const $basketarticle=document.querySelector('#basketarticle');
const $recommendarticle =document.querySelector('#recommendarticle');
let $fileInput=document.querySelector('.ex_file');


const $mybutton=document.querySelector('#mybutton');
const $profilebutton = document.querySelector('#profilebutton');
const $logininfobutton = document.querySelector('#logininfobutton');
const $orderbutton =document.querySelector('#orderbutton');
const $shippingbutton=document.querySelector('#shippingbutton');
const $basketbutton = document.querySelector('#basketbutton');
const $recommendbutton = document.querySelector('#recommendbutton');
const $face2 = document.querySelector("#face2");
const $face3 = document.querySelector("#face3");
const $face2i = document.querySelector("#face2 i");
const $face3i = document.querySelector("#face3 i");
const $previewImg= document.querySelector("#previewImg");
const $previewImg2= document.querySelector("#previewImg2");
const $infor3 = document.querySelector('#infor3');
const $infor2 = document.querySelector('#infor2');
const fileInput = document.querySelector("#fileUpload");
const $imageChangebutton = document.querySelector("#imageChangebutton");


let xhr = new XMLHttpRequest();
xhr.open('GET', './account.json', true);
xhr.responseType = 'json';
xhr.onload = function() {
  if (xhr.status === 200) {
    let jsondata = xhr.response;
    document.querySelector(".loginusername").textContent = jsondata.nickName;
    document.querySelector("#loginusername").textContent = jsondata.nickName;
    document.querySelector(".loginuseremail").textContent = jsondata.email;
    document.querySelector("#usernamebutton .username").textContent = jsondata.nickName;
    document.querySelector("#useremailbutton .username").textContent = jsondata.email;
    document.querySelector("#useridbutton .username").textContent = jsondata.email;
    document.querySelector("#passwordbutton .username").textContent = jsondata.password;
    document.querySelector("#phonenumbutton .username").textContent = jsondata.phoneNumber;
    document.querySelector("#addressbutton .username").textContent = jsondata.address;
  }
};
xhr.send();
const $changebutton1 = document.querySelector("#usernamebutton .change");
const $changeinput1 =document.querySelector('#usernamebutton2');
const $submitbutton1 = document.querySelector('#usernamebutton2 .submit');

$changebutton1.addEventListener('click',()=>{
    $changeinput1.style.visibility = "visible";

});
$submitbutton1.addEventListener('click', ()=>{
    const value= document.querySelector("#usernamebutton2 input").value;
    document.querySelector(".loginusername").textContent=value;
    document.querySelector('#loginusername').textContent=value;
    document.querySelector('#usernamebutton .username').textContent=value;
    $changeinput1.textContent="";
    $changeinput1.style.visibility="hidden";
});

const $changebutton2 = document.querySelector("#useremailbutton .change");
const $changeinput2 =document.querySelector('#useremailbutton2');
const $submitbutton2 = document.querySelector('#useremailbutton2 .submit');

$changebutton2.addEventListener('click', ()=>{
    $changeinput2.style.visibility = "visible";
})
$submitbutton2.addEventListener('click', ()=>{
    const value= document.querySelector("#useremailbutton2 input").value;
    document.querySelector(".loginuseremail").textContent=value;
    document.querySelector('#useremailbutton .username').textContent=value;
    document.querySelector('#useridbutton .username').textContent=value;
    $changeinput2.textContent="";
    $changeinput2.style.visibility="hidden";
});

const $changebutton3 = document.querySelector("#useridbutton .change");
const $changeinput3 =document.querySelector('#useridbutton2');
const $submitbutton3 = document.querySelector('#useridbutton2 .submit');

$changebutton3.addEventListener('click', ()=>{
    $changeinput3.style.visibility = "visible";
})
$submitbutton3.addEventListener('click', ()=>{
    const value= document.querySelector("#useridbutton2 #username").value;
    document.querySelector("#useridbutton .username").textContent=value;
    document.querySelector(".loginuseremail").textContent=value;
    document.querySelector('#useremailbutton .username').textContent=value;
    $changeinput3.textContent="";
    $changeinput3.style.visibility="hidden";
});

const $changebutton4 = document.querySelector("#passwordbutton .change");
const $changeinput4 =document.querySelector('#passwordbutton2');
const $submitbutton4 = document.querySelector('#passwordbutton2 .submit');

$changebutton4.addEventListener('click', ()=>{
    $changeinput4.style.visibility = "visible";
})
$submitbutton4.addEventListener('click', ()=>{
    const value= document.querySelector("#passwordbutton2 #username").value;
    document.querySelector("#passwordbutton .username").textContent=value;
    $changeinput4.textContent="";
    $changeinput4.style.visibility="hidden";
});

const $changebutton5 = document.querySelector("#phonenumbutton .change");
const $changeinput5 =document.querySelector('#phonenumbutton2');
const $submitbutton5 = document.querySelector('#phonenumbutton2 .submit');

$changebutton5.addEventListener('click', ()=>{
    $changeinput5.style.visibility = "visible";
})
$submitbutton5.addEventListener('click', ()=>{
    const value= document.querySelector("#phonenumbutton2 #username").value;
    document.querySelector("#phonenumbutton .username").textContent=value;
    $changeinput5.textContent="";
    $changeinput5.style.visibility="hidden";
});

const $changebutton6 = document.querySelector("#addressbutton .change");
const $changeinput6 =document.querySelector('#addressbutton2');
const $submitbutton6 = document.querySelector('#addressbutton2 .submit');

$changebutton6.addEventListener('click', ()=>{
    $changeinput6.style.visibility = "visible";
})
$submitbutton6.addEventListener('click', ()=>{
    const value= document.querySelector("#addressbutton2 #username").value;
    document.querySelector("#addressbutton .username").textContent=value;
    $changeinput6.textContent="";
    $changeinput6.style.visibility="hidden";
});
const handleFiles = (e) => {
  const selectedFile = fileInput.files[0];
  const fileReader = new FileReader();

  fileReader.readAsDataURL(selectedFile);
  fileReader.onload = function () {
    const img=fileReader.result;
    $previewImg.src = img;
    $previewImg2.src = img;
    $face2.style.display="none";
    $face2i.style.display="none";
    $infor2.style.display="none";
    $face3.style.display="none";
    $face3i.style.display="none";
    $infor3.style.display="none";
    $previewImg.style.display="block";
    $previewImg2.style.display="block";
};
};
$imageChangebutton.addEventListener("click",()=>{
    fileInput.style.display="block";
})
fileInput.addEventListener("change",handleFiles);
$mybutton.addEventListener('click',()=>{
    $myarticle.style.display="block";
    $profilearticle.style.display="none";
    $logininfoarticle.style.display="none";
    $orderarticle.style.display="none";
    $shippingarticle.style.display="none";
    $basketarticle.style.display="none";
    $recommendarticle.style.display="none";
})
$profilebutton.addEventListener('click',()=>{
    $myarticle.style.display="none";
    $profilearticle.style.display="block";
    $logininfoarticle.style.display="none";
    $orderarticle.style.display="none";
    $shippingarticle.style.display="none";
    $basketarticle.style.display="none";
    $recommendarticle.style.display="none";
})
$logininfobutton.addEventListener('click',()=>{
    $myarticle.style.display="none";
    $profilearticle.style.display="none";
    $logininfoarticle.style.display="block";
    $orderarticle.style.display="none";
    $shippingarticle.style.display="none";
    $basketarticle.style.display="none";
    $recommendarticle.style.display="none";
})
$orderbutton.addEventListener('click',()=>{
    $myarticle.style.display="none";
    $profilearticle.style.display="none";
    $logininfoarticle.style.display="none";
    $orderarticle.style.display="block";
    $shippingarticle.style.display="none";
    $basketarticle.style.display="none";
    $recommendarticle.style.display="none";
})
$shippingbutton.addEventListener('click',()=>{
    $myarticle.style.display="none";
    $profilearticle.style.display="none";
    $logininfoarticle.style.display="none";
    $orderarticle.style.display="none";
    $shippingarticle.style.display="block";
    $basketarticle.style.display="none";
    $recommendarticle.style.display="none";
})
$basketbutton.addEventListener('click',()=>{
    $myarticle.style.display="none";
    $profilearticle.style.display="none";
    $logininfoarticle.style.display="none";
    $orderarticle.style.display="none";
    $shippingarticle.style.display="none";
    $basketarticle.style.display="block";
    $recommendarticle.style.display="none";
})
$recommendbutton.addEventListener('click',()=>{
    $myarticle.style.display="none";
    $profilearticle.style.display="none";
    $logininfoarticle.style.display="none";
    $orderarticle.style.display="none";
    $shippingarticle.style.display="none";
    $basketarticle.style.display="none";
    $recommendarticle.style.display="block";
})

let xhr2 = new XMLHttpRequest();
xhr2.overrideMimeType("application/json");


let jsonFilePath = "./item.json";

xhr2.open("GET", jsonFilePath, true);
xhr2.onreadystatechange = function () {
  if (xhr2.readyState === 4 && xhr2.status === 200) {
    
    var jsonData = JSON.parse(xhr2.responseText);
    
    console.log(jsonData.items); 
    console.log(jsonData.items.length);
    console.log(jsonData.items[0].name);
    document.querySelector("#item1 .orderitemname").textContent=jsonData.items[0].name;
    document.querySelector("#item2 .orderitemname").textContent=jsonData.items[1].name;
    document.querySelector("#item3 .orderitemname").textContent=jsonData.items[2].name;
    document.querySelector("#item1 .orderitemimg").style.backgroundImage=`url("${jsonData.items[0].picture}")`;
    document.querySelector("#item2 .orderitemimg").style.backgroundImage=`url("${jsonData.items[1].picture}")`;
    document.querySelector("#item3 .orderitemimg").style.backgroundImage=`url("${jsonData.items[2].picture}")`;
    document.querySelector("#item1 .orderitemprice").textContent=jsonData.items[0].price;  
    document.querySelector("#item2 .orderitemprice").textContent=jsonData.items[1].price;  
    document.querySelector("#item3 .orderitemprice").textContent=jsonData.items[2].price;  

    document.querySelector("#item4 .orderitemname").textContent=jsonData.items[3].name;
    document.querySelector("#item5 .orderitemname").textContent=jsonData.items[4].name;
    document.querySelector("#item6 .orderitemname").textContent=jsonData.items[5].name;
    document.querySelector("#item4 .orderitemimg").style.backgroundImage=`url("${jsonData.items[3].picture}")`;
    document.querySelector("#item5 .orderitemimg").style.backgroundImage=`url("${jsonData.items[4].picture}")`;
    document.querySelector("#item6 .orderitemimg").style.backgroundImage=`url("${jsonData.items[5].picture}")`;
    document.querySelector("#item4 .orderitemprice").textContent=jsonData.items[3].price;  
    document.querySelector("#item5 .orderitemprice").textContent=jsonData.items[4].price;  
    document.querySelector("#item6 .orderitemprice").textContent=jsonData.items[5].price;  
    document.querySelector('.totalprice b').textContent
    ="147,200"

    document.querySelector("#iitem1 .itemtext").textContent=jsonData.items[0].name;
    document.querySelector("#iitem2 .itemtext").textContent=jsonData.items[1].name;
    document.querySelector("#iitem3 .itemtext").textContent=jsonData.items[2].name;
    document.querySelector("#iitem4 .itemtext").textContent=jsonData.items[3].name;
    document.querySelector("#iitem5 .itemtext").textContent=jsonData.items[4].name;
    document.querySelector("#iitem6 .itemtext").textContent=jsonData.items[5].name;
    document.querySelector("#iitem1 .itemimg").style.backgroundImage=`url("${jsonData.items[0].picture}")`;
    document.querySelector("#iitem2 .itemimg").style.backgroundImage=`url("${jsonData.items[1].picture}")`;
    document.querySelector("#iitem3 .itemimg").style.backgroundImage=`url("${jsonData.items[2].picture}")`;
    document.querySelector("#iitem4 .itemimg").style.backgroundImage=`url("${jsonData.items[3].picture}")`;
    document.querySelector("#iitem5 .itemimg").style.backgroundImage=`url("${jsonData.items[4].picture}")`;
    document.querySelector("#iitem6 .itemimg").style.backgroundImage=`url("${jsonData.items[5].picture}")`;
    document.querySelector("#iiitem1 .itemtext").textContent=jsonData.items[0].name;
    document.querySelector("#iiitem2 .itemtext").textContent=jsonData.items[1].name;
    document.querySelector("#iiitem3 .itemtext").textContent=jsonData.items[2].name;
    document.querySelector("#iiitem1 .itemimg").style.backgroundImage=`url("${jsonData.items[0].picture}")`;
    document.querySelector("#iiitem2 .itemimg").style.backgroundImage=`url("${jsonData.items[1].picture}")`;
    document.querySelector("#iiitem3 .itemimg").style.backgroundImage=`url("${jsonData.items[2].picture}")`;
}
};
xhr2.send();
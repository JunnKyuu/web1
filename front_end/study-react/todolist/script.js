const $addBtn = document.querySelector('#add-button');
const $todoUl = document.querySelector('#todo-list');
const $todoInput = document.querySelector('#todo-input');

const completeBtn = document.createElement('button');
let todoArr = [];

$addBtn.addEventListener('click', () => {
  if($todoInput.value === '') {
    alert('할 일을 입력해주세요!');
  } else {
    const todoLi = document.createElement('li');
    todoLi.setAttribute('id', $todoInput.value);

    const liContainer = document.createElement('div');
    liContainer.style.width = '68vw';
    liContainer.style.height = '55px';
    liContainer.style.display = 'flex';
    liContainer.style.flexDirection = 'row';
    liContainer.style.alignItems = 'center';
    liContainer.style.justifyContent = 'space-between';
    liContainer.style.color = '#00c3ff';
    liContainer.style.fontWeight = '700';
    liContainer.style.fontSize = '15px';
    liContainer.style.backgroundColor = '#ebfaff';
    liContainer.style.borderRadius = '5px';
    liContainer.style.marginTop = '15px';


    const liText = document.createElement('h1');
    liText.innerText = $todoInput.value;
    liText.style.marginLeft = '30px';
    liContainer.appendChild(liText);

    const btnContainer = document.createElement('div');
    btnContainer.style.width = '120px';
    btnContainer.style.height = '55px';
    btnContainer.style.display = 'flex';
    btnContainer.style.flexDirection = 'row';
    btnContainer.style.alignItems = 'center';
    btnContainer.style.justifyContent = 'space-between';
    btnContainer.style.marginRight = '30px';
    liContainer.appendChild(btnContainer);

    const completeBtn = document.createElement('button');
    completeBtn.style.width = '50px';
    completeBtn.style.height = '30px';
    completeBtn.style.color = 'white';
    completeBtn.style.backgroundColor = '#35c5f0';
    completeBtn.style.borderRadius = '5px';
    completeBtn.style.border = 'none';
    completeBtn.style.cursor = 'pointer';
    completeBtn.innerText = '완료';

    btnContainer.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.style.width = '50px';
    deleteBtn.style.height = '30px';
    deleteBtn.style.color = 'white';
    deleteBtn.style.backgroundColor = '#35c5f0';
    deleteBtn.style.borderRadius = '5px';
    deleteBtn.style.border = 'none';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.innerText = '삭제';

    btnContainer.appendChild(deleteBtn);


    todoLi.appendChild(liContainer);

    $todoUl.appendChild(todoLi);

    todoArr.push($todoInput.value);
    console.log($todoInput.value);
  }
});
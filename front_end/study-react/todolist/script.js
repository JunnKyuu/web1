const $addBtn = document.querySelector('#add-button');
const $todoInput = document.querySelector('#todo-input');
const $todoUl = document.querySelector('#todo-list');

let todos = [];
let id = 0;

// enter 입력하면 todo추가
const init = () => {
  $todoInput.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
      appendTodos(event.target.value);
      $todoInput.value = '';
    }
  });
}

init();

// 추가 클릭하면 todo추가
// $addBtn.addEventListener('click', () => {
//   const todoLi = document.createElement('li');
//   todoLi.innerText = $todoInput.value;

//   $todoUl.appendChild(todoLi);
// });

const setTodos = (newTodos) => {
  todos = newTodos;
}

const getTodos = () => {
  return todos;
}

const appendTodos = (text) => {
  const newId = id++;
  const newTodos = getTodos().concat({
    id: newId,
    isDone: false,
    content: text
  });

  setTodos(newTodos);
  showTodos();
}

const showTodos = () => {
  $todoUl.innerHTML = '';
  const allTodos = getTodos();

  allTodos.forEach((todo) => {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todoContainer');

    const innerContainer = document.createElement('div');
    innerContainer.classList.add('innerContainer');

    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-li');

    const checkBox = document.createElement('div');
    checkBox.classList.add('checkbox');

    const todoItem = document.createElement('div');
    todoItem.classList.add('todoItem');
    todoItem.innerText = todo.content;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerHTML = '삭제';

    if(todo.isDone === true) {
      todoItem.classList.add('done');
      checkBox.innerText = '✔';
    }

    innerContainer.appendChild(checkBox);
    innerContainer.appendChild(todoItem);
    todoLi.appendChild(innerContainer);
    todoLi.appendChild(deleteBtn);

    todoContainer.appendChild(todoLi);

    $todoUl.appendChild(todoContainer);
  });
}
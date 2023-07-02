const $addBtn = document.querySelector('#add-button');
const $todoInput = document.querySelector('#todo-input');
const $todoUl = document.querySelector('#todo-list');

let todos = [];
let id = 0;

// enter 입력하면 todo추가
const enterToAdd = () => {
  $todoInput.addEventListener('keypress', (event) => {
    if((event.key === 'Enter')) {
      if($todoInput.value === '') {
        alert('할 일을 입력하세요!');
      } else {
        appendTodos(event.target.value);
      $todoInput.value = '';
      }
    }
  });
}

enterToAdd();

// click하면 todo 추가
const clickToAdd = () => {
  if($todoInput.value === '') {
    alert('할 일을 입력하세요!');
  } else {
    appendTodos($todoInput.value);
    $todoInput.value = '';
  }
}

$addBtn.addEventListener('click', () => clickToAdd($todoInput.value));

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

const deleteTodo = (todoId) => {
  const newTodos = getTodos().filter(todo => todo.id !== todoId);
  setTodos(newTodos);
  showTodos();
}

const doneTodo = (todoId) => {
  const newTodos = getTodos().map(todo => todo.id === todoId ? {...todo, isDone: !todo.isDone} : todo);
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
    checkBox.addEventListener('click', () => doneTodo(todo.id));

    const todoItem = document.createElement('div');
    todoItem.classList.add('todoItem');
    todoItem.innerText = todo.content;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerHTML = '삭제';

    deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

    if(todo.isDone === true) {
      todoItem.classList.add('done');
      checkBox.innerText = '✔';
      todoItem.style.color = '#dddddd';
      todoItem.style.textDecorationLine = 'line-through';
    }

    innerContainer.appendChild(checkBox);
    innerContainer.appendChild(todoItem);
    todoLi.appendChild(innerContainer);
    todoLi.appendChild(deleteBtn);

    todoContainer.appendChild(todoLi);

    $todoUl.appendChild(todoContainer);
  });
}

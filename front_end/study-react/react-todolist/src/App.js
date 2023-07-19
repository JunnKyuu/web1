import React, { useState } from "react";
import TodoBoard from "./Components/TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        onClick={(inputValue) => {
          setTodoList(inputValue);
        }}
      >
        추가
      </button>
      <TodoBoard todoList={todoList} />
    </div>
  );
}

export default App;

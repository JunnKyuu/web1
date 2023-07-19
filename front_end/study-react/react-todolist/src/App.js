import React, { useState } from "react";
import TodoBoard from "./Components/TodoBoard";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  };

  return (
    <div className="App">
      <input
        value={inputValue}
        type="text"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} />
    </div>
  );
};

export default App;

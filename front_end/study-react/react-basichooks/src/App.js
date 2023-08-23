import React from "react";
import useInput from "./components/UseInput";

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Lee", maxLen);

  return (
    <div className="app">
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;

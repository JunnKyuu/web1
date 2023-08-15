import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  return (
    <div>
      <div>
        <input
          name="name"
          value={name}
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          name="nickName"
          value={nickName}
          type="text"
          onChange={(event) => {
            setNickName(event.target.value);
          }}
        />
      </div>
      <div>
        <span>
          <b>이름: </b>
          {name}
        </span>
      </div>
      <div>
        <span>
          <b>닉네임: </b>
          {nickName}
        </span>
      </div>
    </div>
  );
};

export default Info;

import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <ol>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <em>{user.name}</em>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default UserList;

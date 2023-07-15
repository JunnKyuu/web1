import React from "react";

const students = [
  {
    id: 1,
    name: "KiHun",
  },
  {
    id: 2,
    name: "Kazuki",
  },
  {
    id: 3,
    name: "HeeJu",
  },
  {
    id: 4,
    name: "Seo",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;

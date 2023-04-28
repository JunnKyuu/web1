let DateA = new Date();
console.log(DateA);

let DataB = new Date(1234566789101);
// 객체 생성을 할 때 매개변수를 입력받을 수 있다.
// 단위는 밀리세컨드
console.log(DataB);

let DateC = new Date("April 7,2023 16:30:00");
// 특정 시간도 매개변수로 입력할 수 있다.
console.log(DateC);

let DateD = new Date(2023, 4 -1, 7, 16, 30);
// 월은 원하는 월 -1을 해야한다.
console.log(DateD);

let DateE = new Date();

DateE.setFullYear(DateE.getFullYear() + 1);
DateE.setMonth(DateE.getMonth + 12);
console.log(DateE);
let DateA = new Date("Jun 15, 2002");
let DateB = new Date("April 7, 1997");

let intervalA = DateA.getTime() - DateB.getTime();
intervalA = Math.floor(intervalA / (1000 * 60 * 60 * 24));

console.log(`${intervalA}일 차이가 납니다.`);
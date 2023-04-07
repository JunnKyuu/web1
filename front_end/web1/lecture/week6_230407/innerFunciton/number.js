let numberFromLiteral = 123.456789;
let numberFromConstructor = new Number(123);

console.log(numberFromLiteral.toFixed(1));
// 소숫점 1째 자리에서 자르기

let numberA = Number.MAX_VALUE;
let numberB = Number.MAX_VALUE + 1;

console.log(numberA);
console.log(numberB);

let array = [
  {name: '고구마', price: 1000},
  {name: '감자' , price: 500},
  {name: '옥수수', price: 1500}
];

let popped = array.pop();
console.log(popped);
// pop함수를 이용해서 마지막 값을 꺼냄

console.log(array);
// 옥수수를 꺼내서 고구마, 감자만 남음

array.push(popped);
array.push({
  name: '토마토',
  price: 800
});
console.log(array);
// push함수를 이용해서 값을 넣어줌

// price를 기준으로 sort함수 이용해서 정렬
console.log(array.sort(function(a, b) {
  return a.price - b.price;
}))
function print(arr) {
  console.log(`${arr.name}의 가격은 ${arr.price}원 입니다.`);
}
// 함수의 중복을 제거하기위한 프린트 함수

let products = [
  {
    name: "바나나",
    price: 1200
  },
  {
    name: "사과",
    price: 2000
  },
  {
    name: "배",
    price: 3000
  },
  {
    name: "수박",
    price: 5000
  }
];
// 배열 객체 선언

for(let product of products) {
  print(product);
}



class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
};
// class 선언

let product = new Product("banana", 1200);
// object 생성

console.log(product.name);
console.log(product.price);
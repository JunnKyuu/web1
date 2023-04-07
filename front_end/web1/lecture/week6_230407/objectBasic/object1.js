let product = {
  제품명: '7D 건조 망고',
  유형: '당절임',
  성분: '설탕, 망고',
  원산지: '필리핀'
};

for(let key in product) {
  console.log(`${key}: ${product[key]}`);
}
// '속성: 속성값' 형태로 출력
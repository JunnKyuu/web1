function run() {
  console.log('start after 3 seconds');
}

console.log('start');
setTimeout(run, 3000);
console.log('end');

// 이벤트 루프 이해
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dancetown1@',
  database: 'TESTDB',
});

// MySQL 연결
connection.connect((error) => {
    if (error) {
      console.error('MySQL 연결 오류:', error);
    } else {
      console.log('MySQL 연결 성공');
    }
  });
  

// 루트 엔드포인트 처리
app.get('/', (req, res) => {
  // MySQL 쿼리 실행
  connection.query('SELECT * FROM item', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: '서버 오류' });
    } else {
      res.json(results);
    }
  });
});

// 서버 시작
const port = 3000;
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

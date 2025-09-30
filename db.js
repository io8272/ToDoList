// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qaz13501',   // 본인 비밀번호
  database: 'todos'       // 본인 DB 이름
});

connection.connect(err => {
  if (err) {
    console.error('DB 연결 실패:', err);
    process.exit(1);
  }
  console.log('DB 연결 성공');
});

module.exports = connection;

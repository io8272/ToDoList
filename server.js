// server.js
const express = require('express');
const path = require('path');
const db = require('./db');              // ← db.js를 가져옴
const todoRoutes = require('./routes/todos');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/todos', todoRoutes);

// 홈
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

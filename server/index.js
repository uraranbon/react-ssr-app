const express = require('express'); //Expressフレームワークを使用できるようにする
const app = express(); //Expressアプリケーションを作成
const port = 9000; //使用するポート番号

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => { //サーバを起動
  console.log(`Server is running on port ${port}`);
});
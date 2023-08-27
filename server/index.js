import express from 'express';
import React from 'react'; //Expressフレームワークを使用できるようにする

import { renderToString } from 'react-dom/server'; //追加
import IntroductionPage from '../src/page/IntroductionPage.tsx'; //追加

const app = express(); //Expressアプリケーションを作成
const port = 9000; //使用するポート番号
const path = require('path');

app.get('/', (req, res) => {
  const appContent = renderToString(<IntroductionPage />);
  res.send(
    `
      <!DOCTYPE html>
      <html>
        <head>
          <title>React App</title>
          <script type="text/babel" src="/bundle.js"></script>
        </head>
        <body>
          <div id="root">${appContent}</div>
        </body>
      </html>
    `
  );
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'bundle.js'));
});

app.listen(port, () => { //サーバを起動
  console.log(`Server is running on port ${port}`);
});
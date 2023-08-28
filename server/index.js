import express from 'express';
import React from 'react'; //Expressフレームワークを使用できるようにする

import { renderToString } from 'react-dom/server'; //追加
import IntroductionPage from '../src/page/IntroductionPage.tsx'; //追加
import path from 'path';

const app = express(); //Expressアプリケーションを作成
const port = 9000; //使用するポート番号

app.use(express.static(path.resolve(__dirname, '../dist'))); // 静的ファイルの配信を設定

app.get('/', (req, res) => {
  const appContent = renderToString(<IntroductionPage />);
  res.send(
    `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Introduction Page</title>
          <link href="/style.css" rel="stylesheet" type="text/css">
        </head>
        <body>
          <div id="root">${appContent}</div>
        </body>
      </html>
    `
  );
});

app.listen(port, () => { //サーバを起動
  console.log(`Server is running on port ${port}`);
});
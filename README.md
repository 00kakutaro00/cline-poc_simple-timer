# cline-poc_simple-timer

## How to use
- `./src`に移動する。
  - 当該コードは[50projects50days リンク](https://github.com/bradtraversy/50projects50days/tree/master/simple-timer)からコードを取得.
- `python -m http.server 8000`でサーバーを動かす。
- `http://0.0.0.0:8000/`にアクセスしてタイマーが表示されることを確認
- CLINEを開き、`./doc/llm-input.md`の`仕様書とテスト項目の作成`を実行する。
- CLINEを開き、`./doc/llm-input.md`の`１番目のテストの作成`を実行する。

## フォルダ構成
```
./
├── README.md
├── doc
│   ├── llm-input.md : CLINEへの指示だしの文章。
│   ├── spec.md : CLINE作成
│   └── test-list.md : CLINE作成
├── src : 50projects50daysのsimple-timer
│   ├── index.html
│   ├── script.js
│   └── style.css
└── test
    ├── test1-2025-05-02T04-39-42-443Z.png : CLINE作成
    └── test1.ts : CLINE作成
```

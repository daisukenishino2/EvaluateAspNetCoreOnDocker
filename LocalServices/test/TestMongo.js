console.log("To exit, hold down [Ctrl] and press [C] twice.");

//////////
console.log("Test MongoDB");

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/* 接続先URL */
// @ = %40
const cnnStr = "mongodb://seigi:seigi%40123@localhost:27017"

/**
 * 追加オプション
 * MongoClient用オプション設定
 */
const cnnOpt = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

/* データベース名 */
const dbName = 'testdb';

/* データベース接続 */
MongoClient.connect(cnnStr, cnnOpt, (err, client) => {

  /* Errorがあれば処理を中断 */
  assert.equal(null, err);

  /* 接続に成功すればコンソールに表示 */
  console.log('Connected successfully to server.');

  /** DBを取得 */
  const db = client.db(dbName);

  /* DBとの接続切断 */
  client.close();
});
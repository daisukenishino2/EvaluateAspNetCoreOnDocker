console.log("To exit, hold down [Ctrl] and press [C] twice.");

//////////
console.log("Test MongoDB");

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/* �ڑ���URL */
// @ = %40
const cnnStr = "mongodb://seigi:seigi%40123@localhost:27017"

/**
 * �ǉ��I�v�V����
 * MongoClient�p�I�v�V�����ݒ�
 */
const cnnOpt = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

/* �f�[�^�x�[�X�� */
const dbName = 'testdb';

/* �f�[�^�x�[�X�ڑ� */
MongoClient.connect(cnnStr, cnnOpt, (err, client) => {

  /* Error������Ώ����𒆒f */
  assert.equal(null, err);

  /* �ڑ��ɐ�������΃R���\�[���ɕ\�� */
  console.log('Connected successfully to server.');

  /** DB���擾 */
  const db = client.db(dbName);

  /* DB�Ƃ̐ڑ��ؒf */
  client.close();
});
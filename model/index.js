/*
 * @description model 设置汇总
 * @author Liudj 2021-06-20 21:47:14
*/

const mongoose = require('mongoose');
const { dbUri } = require('../config/config.default')

// 链接到mongodb数据库
mongoose.connect(dbUri);

const db = mongoose.connection;
// 链接失败
db.on('error', err => {
  console.log('MongoDB 链接失败', err);
});

// 连接成功
db.once('open', function () {
  // we're connected!
  console.log('MongoDB 链接成功');
});

// 组织导出模型类
module.exports = {
  User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article')),
  Profile: mongoose.model('Profile', require('./profile'))
}
/*
 * @description token文件
 * @author Liudj 2021-06-27 16:33:50
*/

const jwt = require('jsonwebtoken')
const { promisify } = require('util') // 将 callback 形式的异步函数转为promise的形式

exports.sign = promisify(jwt.sign)

exports.verify = promisify(jwt.verify)

exports.decode = promisify(jwt.decode)


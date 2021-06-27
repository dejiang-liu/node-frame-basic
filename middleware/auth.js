/*
 * @description token的验证
 * @author Liudj 2021-06-27 17:03:48
*/
const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req, res, next) => {
  // 从请求头获取token
  let token = req.headers['authorization']
  token = token ? token.split('Bearer ')[1] : null
  if (!token) {
    return res.status(401).end()
  } 
  try {
    const decodeToken = await verify(token, jwtSecret)
    console.log(decodeToken)
    req.user = await User.findById(decodeToken.userId)
    next()
  } catch (err) {
    return res.status(401).end()
  }
}
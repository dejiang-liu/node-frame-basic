const express = require('express')
const userControl = require('../../controller/user')
const router = express.Router()
// 引入验证规则
const userValidator = require('../../validator/user')
// 验证token
const auth = require('../../middleware/auth')

// 用户登录
router.post('/users/login',
  userValidator.login, userControl.login)
// 用户注册
router.post('/users',
  // 引入验证规则
  userValidator.register, userControl.register)
// 获取当前用户
router.get('/user', auth, userControl.getCurUser)
// 更新当前用户
router.put('/user', auth, userControl.updateCurUser)

module.exports = router

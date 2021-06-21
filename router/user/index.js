const express = require('express')
const userControl = require('../../controller/user')
const router = express.Router()
// 引入验证规则
const userValidator = require('../../validator/user')


// 用户登录
router.post('/users/login', userControl.login)
// 用户注册
router.post('/users',
  // 引入验证规则
  userValidator.register, userControl.register)
// 获取当前用户
router.get('/user', userControl.getCurUser)
// 更新当前用户
router.put('/user', userControl.updateCurUser)

module.exports = router

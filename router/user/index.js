const express = require('express')
const userControl = require('../../controller/user')
const router = express.Router()

// 用户登录
router.post('/users/login', userControl.login)
// 用户注册
router.post('/users', userControl.register)
// 获取当前用户
router.get('/user', userControl.getCurUser)
// 更新当前用户
router.put('/user', userControl.updateCurUser)

module.exports = router

const express = require('express')
const userControl = require('../../controller/user')
const router = express.Router()

// 用户登录
router.post('/users/login', userControl.login)
// 用户注册
router.post('/users', async (req, res, next) => {
	try {
			// do something
			res.send('post /users')
	} catch (err) {
			next(err)
	}
})
// 获取当前用户
router.get('/user', async (req, res, next) => {
	try {
			// do something
			res.send('get /user')
	} catch (err) {
			next(err)
	}
})
// 更新当前用户
router.put('/user', async (req, res, next) => {
	try {
			// do something
			res.send('put /user')
	} catch (err) {
			next(err)
	}
})

module.exports = router

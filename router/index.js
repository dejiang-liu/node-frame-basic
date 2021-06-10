const express = require('express')

const router = express.Router()
// 用户相关
router.use(require('./user/index'))
// 用户资料相关
router.use('/profiles', require('./profiles/index'))
// 文章相关
router.use('/articles', require('./article/index'))

module.exports = router
const express = require('express')

const router = express.Router()

const profilesControl = require('../../controller/profiles') 

// 获取用户资料
router.get('/:username', profilesControl.getProfiles)
// 关注用户
router.post('/:username/follow', profilesControl.followProfiles)
// 取消关注用户
router.delete('/:username/follow', profilesControl.deFollowProfiles)

module.exports = router
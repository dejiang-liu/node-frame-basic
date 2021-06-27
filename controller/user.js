const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
// 用户登录
exports.login = async (req, res, next) => {
    try {
        // 2. 生成token
        const user = req.user.toJSON()
        const token = await jwt.sign({
          userId: user._id
        }, jwtSecret, {
          expiresIn: 60 * 60 * 24
        })
        // 3. 发送响应成功（包含token的用户信息）
        delete user.password
        res.status(200).json({
          ...user,
          token
        })
    } catch (err) {
        next(err)
    }
}

exports.register = async (req, res, next) => {
    try {
        // 1. 获取请求数据
        console.log(req.body);
        // 2. 数据验证
        // 3. 验证通过，将数据保存到数据库
        const user = new User(req.body.user)
        // 保存到数据库
        await user.save()

        let resUser = user.toJSON()
        delete resUser.password
        // 4. 发送成功响应
        res.status(201).json({
          resUser
        })
    } catch (err) {
        next(err)
    }
}
// 获取当前登录用户
exports.getCurUser = async (req, res, next) => {
    try {
        // do something
        console.log(req.headers)
        res.status(200).json({
          user: req.user
        })
    } catch (err) {
        next(err)
    }
}

exports.updateCurUser = async (req, res, next) => {
    try {
        // do something
        res.send('post updateCurUser /user 更新当前用户')
    } catch (err) {
        next(err)
    }
}
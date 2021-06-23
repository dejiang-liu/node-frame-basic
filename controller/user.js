const { User } = require('../model')


exports.login = async (req, res, next) => {
    try {
        // do something
        res.send('login')
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

exports.getCurUser = async (req, res, next) => {
    try {
        // do something
        res.send('post getCurUser /user 获取当前用户')
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
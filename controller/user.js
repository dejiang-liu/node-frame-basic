exports.login = async (req, res, next) => {
    try {
        // do something
        res.send('post /users/login 用户登录')
    } catch (err) {
        next(err)
    }
}

exports.register = async (req, res, next) => {
    try {
        // do something
        res.send('post register /user 用户注册')
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
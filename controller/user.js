exports.login = async (req, res, next) => {
    try {
        JSON.parse('dkdkdkddk')
        // do something
        res.send('post /users/login')
    } catch (err) {
        next(err)
    }
}
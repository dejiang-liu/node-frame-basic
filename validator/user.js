/*
 * @description 配置user的验证规则
 * @author Liudj 2021-06-21 23:01:07
*/

const validate = require('../middleware/validate')
// 引入验证规则
const { body } = require('express-validator')
const { User } = require('../model')
const md5 = require('../util/md5')

/*
 * @description 用户注册
 * @author Liudj 2021-06-23 22:54:54
 * @param {Object}
 * @return {Object}
*/
exports.register = validate([
  body('user.username')
    .notEmpty().withMessage('用户名不能为空')
    .bail()
    .custom(async username => {
      const usernames = await User.findOne({ username })
      if (usernames) {
        return Promise.reject('用户名已经存在')
      }
    }),
  body('user.password')
    .notEmpty().withMessage('密码不能为空'),
  body('user.email')
    .notEmpty().withMessage('邮箱不能为空')
    .isEmail().withMessage('邮箱格式不正确')
    .bail()
    .custom(async email => {
      const emails = await User.findOne({ email })
      if (emails) {
        return Promise.reject('邮箱已存在')
      }
    })
])
/*
 * @description 用户登录
 * @author Liudj 2021-06-23 22:55:22
 * @param {Object}
 * @return {Object}
*/
exports.login = [
  validate([
    body('user.email').notEmpty().withMessage('邮箱不能为空'),
    body('user.password').notEmpty().withMessage('密码不能为空')
  ]),
  validate([
    body('user.email').custom(async (email, { req }) => {
      const user = await User.findOne({ email }).select(['password', 'username', 'email', 'bio', 'image'])
      if (!user) {
        return Promise.reject('用户不存在')
      }
      req.user = user
    })
  ]),
  validate([
    body('user.password').custom(async (password, { req }) => {
      const pwd = md5(password)
      console.log(req.user)
      if (pwd !== req.user.password) {
        return Promise.reject('密码错误')
      }
    })
  ])
]
/*
 * @description 验证中间件
 * @author Liudj 2021-06-21 22:57:14
*/

const { validationResult } = require('express-validator');

module.exports = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};
/*
 * @description userModel
 * @author Liudj 2021-06-20 22:03:13
 */

const mongoose = require('mongoose')

const baseModel = require('./base-model')
const md5 = require('../util/md5')

const userSchema = new mongoose.Schema({
  ...baseModel,
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: value => md5(value),
    select: false
  },
  bio: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  }
})

module.exports = userSchema
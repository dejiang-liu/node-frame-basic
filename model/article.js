/*
 * @description articleModel
 * @author Liudj 2021-06-20 22:03:13
 */

const mongoose = require('mongoose')
const baseModel = require('./base-model')

const articleSchema = new mongoose.Schema({
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
    required: true
  },
  bio: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  },
  ...baseModel
})

module.exports = articleSchema
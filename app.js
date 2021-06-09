const express = require('express')
const morgan = require('morgan') // 日志输出
const cors = require('cors') // 提供跨域资源请求
const router = require('./router') 

const app = express()

app.use(morgan('dev'))

app.use(express.json()) // 解析请求体
app.use(express.urlencoded()) // 解析请求体

app.use(cors())

const port = 3000

// 挂在路由
app.use('/api', router) // 挂载路由

app.listen(port, () => console.log(`Example app listening on port port!`))
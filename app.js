const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use(cors())

const port = 3000

// 挂在路由
app.use('/api', router)

app.listen(port, () => console.log(`Example app listening on port port!`))
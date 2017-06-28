'use strict'
import {} from 'dotenv/config'
import Koa from 'koa'
import logger from 'koa-logger'
import { router } from './routes'
import { db } from './config/db'
/* eslint-disable */
require('manakin').global // output colors in Development
/* eslint-enable */
require('babel-register')({
  sourceMaps: true
})
const app = new Koa()
const PORT = process.env.PORT

// #### MIDDLEWARES ####

app.use(logger())
app.use(router.routes()).use(router.allowedMethods())

// #### START APP ####
db.on('connected', () => {
  console.success('Mongo db connected successfully')
  app.listen(PORT, () => {
    console.info(`App listening on localhost:${PORT}`)
  })
})

'use strict'
import 'dotenv/config'
import Koa from 'koa'
import middlewares from './middlewares'
import routes from './routes'
import db from './config/db'
/* eslint-disable */
require('manakin').global // output colors in Development
/* eslint-enable */
const app = new Koa()
const PORT = process.env.PORT

app.use(middlewares())
app.use(routes())

// #### START APP ####
db.on('connected', () => {
  console.success('Mongo db connected successfully')
  app.listen(PORT, () => {
    console.info(`App listening on localhost:${PORT}`)
  })
})

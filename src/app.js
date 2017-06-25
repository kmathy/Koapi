'use strict'
require('babel-register')({
    sourceMaps: true
})
require('manakin').global // output colors in Development
import Koa from 'koa'
import logger from 'koa-logger'
import { router } from './routes'
import { db } from './db'

const app = new Koa()
const PORT = 3000

// #### MIDDLEWARES ####

app.use(logger())
app.use(router.routes()).use(router.allowedMethods())

// #### START APP ####
db.on('connected', () => {
    console.success('Mongo db connected successfully');
    app.listen(PORT, () => {
        console.info(`App listening on localhost:${PORT}`)
    })
})
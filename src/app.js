'use strict'
import Koa from 'koa'
import middlewares from './middlewares'
import routes from './routes'
import connectDatabase from './utils/db'
import conf from './config'

/* eslint-disable */
require('manakin').global // output colors in Development
/* eslint-enable */
const app = new Koa()
const PORT = conf.get('port')

connectDatabase(conf.get('mongodb'))

app.use((ctx, next) => {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.body = 'Protected resource, you need to authenticate the request'
    } else {
      throw err
    }
  })
})

app.use(middlewares())
app.use(routes())

// #### START APP ####
app.listen(PORT, () => {
  console.info(`App listening on localhost:${PORT}`)
})

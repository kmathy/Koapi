'use strict'
import userRoutes from './user.routes'
import Router from 'koa-router'
import { compose } from 'koa-convert'

const router = new Router({ prefix: '/api' })
  .use(userRoutes())

export default () => compose([
  router.routes(),
  router.allowedMethods()
])
